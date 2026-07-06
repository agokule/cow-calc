"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type PointerEvent as ReactPointerEvent,
} from "react";
import "./GuidedTour.css";

export interface TourStep {
  /** Stable identifier used by page code to detect "the user did the thing" and auto-advance. */
  id: string;
  /** CSS selector for the element to spotlight, or null to show a centered card with no target. */
  target: string | null;
  title: string;
  body: ReactNode;
  /** Preferred side for the tooltip. Falls back automatically if there isn't room. */
  placement?: "top" | "bottom" | "left" | "right";
  /** Set to false when the target already sits inside its own modal/backdrop (e.g. a dialog). Default true. */
  dimBackground?: boolean;
  /**
   * When true, this step can only be advanced by actually performing the
   * action (page code calls advanceIfStepIs) — the Next button is disabled
   * and `actionHint` is shown instead. Use this whenever the *next* step's
   * target only exists once this step's action has happened, so people
   * can't "Next" their way past it into a step pointing at nothing.
   */
  requiresAction?: boolean;
  /** Shown in place of the Next button when requiresAction is true. */
  actionHint?: ReactNode;
  /**
   * CSS selector for an element that only exists (or only becomes visible)
   * once this step's action has actually been done. When it's on screen the
   * step counts as already complete: the Next button un-disables and the hint
   * hides, even for a `requiresAction` step. This is what makes going *back*
   * to an already-completed action step not force the person to redo it —
   * while still re-locking the step if they undo the action (the element
   * disappears again). Checked live every frame.
   */
  actionComplete?: string;
  /**
   * CSS selector matched with querySelectorAll — every visible match gets its
   * own spotlight ring/hole (in addition to `target`, if set). Used to hand-
   * hold multi-choice steps, e.g. ringing every unit in the sidebar that can
   * be dragged/tapped in. Occluded or off-screen matches are skipped, so a
   * long scrolling list only lights up whatever is actually on screen.
   */
  spotlightSelector?: string;
}

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface GuidedTourProps {
  steps: TourStep[];
  isOpen: boolean;
  stepIndex: number;
  onStepChange: (index: number) => void;
  onClose: () => void;
}

const PAD = 8;
const MARGIN = 14;
const TOOLTIP_WIDTH = 340;
const ESTIMATED_HEIGHT = 190;
const MISSING_TIMEOUT_MS = 2000;

function measure(el: Element): Rect {
  const r = el.getBoundingClientRect();
  return { top: r.top, left: r.left, width: r.width, height: r.height };
}

function rectsEqual(a: Rect, b: Rect) {
  return a.top === b.top && a.left === b.left && a.width === b.width && a.height === b.height;
}

function rectListsEqual(a: Rect[], b: Rect[]) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (!rectsEqual(a[i], b[i])) return false;
  return true;
}

function unionRect(rects: Rect[]): Rect {
  let top = Infinity;
  let left = Infinity;
  let right = -Infinity;
  let bottom = -Infinity;
  for (const r of rects) {
    top = Math.min(top, r.top);
    left = Math.min(left, r.left);
    right = Math.max(right, r.left + r.width);
    bottom = Math.max(bottom, r.top + r.height);
  }
  return { top, left, width: right - left, height: bottom - top };
}

/**
 * Is `el` actually the thing you'd hit at its own centre point? Used to drop
 * spotlight candidates that are covered by something else (e.g. a unit-list
 * button sitting behind the open mobile sidebar) or scrolled out of a
 * clipping container. The tour overlay itself is pointer-events:none, so
 * elementFromPoint looks straight through it.
 */
function isOnTop(el: Element, r: Rect): boolean {
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  if (cx < 0 || cy < 0 || cx > window.innerWidth || cy > window.innerHeight) {
    // Centre is off-screen — can't hit-test it; treat as not visible.
    return false;
  }
  const hit = document.elementFromPoint(cx, cy);
  if (!hit) return false;
  return el === hit || el.contains(hit);
}

export default function GuidedTour({ steps, isOpen, stepIndex, onStepChange, onClose }: GuidedTourProps) {
  const step = steps[stepIndex];
  const [rects, setRects] = useState<Rect[]>([]);
  const [anchorRect, setAnchorRect] = useState<Rect | null>(null);
  const [targetMissing, setTargetMissing] = useState(false);
  const [actionDone, setActionDone] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  // A person-chosen position (from dragging the tooltip). Overrides the
  // automatic placement until the step changes. See issue: the auto position
  // can cover the very thing a step is describing on a small screen.
  const [manualPos, setManualPos] = useState<{ top: number; left: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startY: number; top: number; left: number } | null>(null);
  const maskId = useId();

  // Continuously track the target element(s) for the current step via rAF
  // rather than scroll/resize listeners. This is what lets the spotlight
  // follow a ReactFlow node while it's being dragged, or the canvas while
  // it's being panned/zoomed — none of those fire a window scroll/resize
  // event, so polling the real position every frame is the reliable option.
  // Deliberately depends on [isOpen, stepIndex] and not on the `step` object
  // itself, since the caller may rebuild the steps array on every render.
  useEffect(() => {
    if (!isOpen || !step) return;
    setTargetMissing(false);
    setActionDone(false);

    const hasHighlight = !!(step.target || step.spotlightSelector);
    if (!hasHighlight && !step.actionComplete) {
      setRects([]);
      setAnchorRect(null);
      return;
    }

    let cancelled = false;
    let rafId = 0;
    let hasScrolledTo = false;
    const startedAt = performance.now();

    const collect = (): { holes: Rect[]; anchor: Rect | null; anchorEl: Element | null } => {
      const candidates: { el: Element; occlude: boolean }[] = [];
      let targetEl: Element | null = null;
      if (step.target) {
        targetEl = document.querySelector(step.target);
        if (targetEl) candidates.push({ el: targetEl, occlude: false });
      }
      if (step.spotlightSelector) {
        document.querySelectorAll(step.spotlightSelector).forEach((el) => candidates.push({ el, occlude: true }));
      }

      const usable = candidates
        .map(({ el, occlude }) => ({ el, occlude, r: measure(el) }))
        .filter(({ r }) => r.width > 0 || r.height > 0)
        .filter(({ el, occlude, r }) => !occlude || isOnTop(el, r));

      const holes = usable.map(({ r }) => r);

      let anchor: Rect | null = null;
      let anchorEl: Element | null = null;
      const targetHit = targetEl ? usable.find(({ el }) => el === targetEl) : undefined;
      if (targetHit) {
        anchor = targetHit.r;
        anchorEl = targetHit.el;
      } else if (usable.length) {
        anchor = unionRect(holes);
        anchorEl = usable[0].el;
      }
      return { holes, anchor, anchorEl };
    };

    const loop = () => {
      if (cancelled) return;

      // Issue #1: a requiresAction step is "already done" the moment the
      // element it unlocks is on screen. Live check so undoing it re-locks.
      if (step.actionComplete) {
        const ce = document.querySelector(step.actionComplete);
        const cr = ce ? measure(ce) : null;
        const done = !!(ce && cr && (cr.width > 0 || cr.height > 0));
        setActionDone((prev) => (prev === done ? prev : done));
      }

      if (step.target || step.spotlightSelector) {
        const { holes, anchor, anchorEl } = collect();
        if (holes.length) {
          setTargetMissing(false);
          setRects((prev) => (rectListsEqual(prev, holes) ? prev : holes));
          setAnchorRect((prev) => (prev && anchor && rectsEqual(prev, anchor) ? prev : anchor));
          if (!hasScrolledTo && anchorEl) {
            hasScrolledTo = true;
            anchorEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
          }
        } else {
          setRects((prev) => (prev.length ? [] : prev));
          setAnchorRect(null);
          if (performance.now() - startedAt > MISSING_TIMEOUT_MS) {
            setTargetMissing(true);
          }
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, stepIndex]);

  // A fresh step always starts from the automatic position, discarding any
  // drag the person did on the previous step.
  useEffect(() => {
    setManualPos(null);
  }, [isOpen, stepIndex]);

  // Position the tooltip. This is a pure function of (anchorRect, the tooltip's
  // own measured size, viewport size) — it never reads its own previous output,
  // so it can't oscillate the way a "subtract the overflow" correction can
  // when a step's content is simply too tall to satisfy both a top and a
  // bottom constraint at once. It settles in at most two passes: once with
  // whatever size the tooltip currently has (possibly last step's), and once
  // more when `anchorRect`/`stepIndex` change and the new content has been
  // measured.
  useLayoutEffect(() => {
    if (!isOpen || !step) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const tooltipEl = tooltipRef.current;
    const tw = tooltipEl ? tooltipEl.offsetWidth : Math.min(TOOLTIP_WIDTH, vw - MARGIN * 2);
    const th = tooltipEl ? tooltipEl.offsetHeight : ESTIMATED_HEIGHT;

    const rect = anchorRect;
    let top: number;
    let left: number;

    if (!rect) {
      top = vh / 2 - th / 2;
      left = vw / 2 - tw / 2;
    } else {
      const spaceBelow = vh - (rect.top + rect.height);
      const spaceAbove = rect.top;
      const spaceRight = vw - (rect.left + rect.width);
      const spaceLeft = rect.left;
      const fits = {
        bottom: spaceBelow > th + MARGIN,
        top: spaceAbove > th + MARGIN,
        right: spaceRight > tw + MARGIN,
        left: spaceLeft > tw + MARGIN,
      };
      let placement = step.placement ?? "bottom";
      if (!fits[placement]) {
        placement = (["bottom", "top", "right", "left"] as const).find((p) => fits[p]) ?? "bottom";
      }

      if (placement === "bottom") {
        top = rect.top + rect.height + MARGIN;
        left = rect.left + rect.width / 2 - tw / 2;
      } else if (placement === "top") {
        top = rect.top - th - MARGIN;
        left = rect.left + rect.width / 2 - tw / 2;
      } else if (placement === "right") {
        top = rect.top + rect.height / 2 - th / 2;
        left = rect.left + rect.width + MARGIN;
      } else {
        top = rect.top + rect.height / 2 - th / 2;
        left = rect.left - tw - MARGIN;
      }
    }

    // Clamp straight against the viewport using the tooltip's real height —
    // if content is taller than the viewport allows, this pins it to the top
    // (MARGIN) rather than bouncing between two unsatisfiable constraints.
    // The CSS max-height + overflow on .tour-tooltip is the last-resort net
    // for that specific case.
    const maxTop = Math.max(MARGIN, vh - th - MARGIN);
    const maxLeft = Math.max(MARGIN, vw - tw - MARGIN);
    top = Math.min(Math.max(top, MARGIN), maxTop);
    left = Math.min(Math.max(left, MARGIN), maxLeft);

    setPos((prev) => (prev.top === top && prev.left === left ? prev : { top, left }));
  }, [anchorRect, isOpen, stepIndex]);

  // A requiresAction step stops blocking the moment its action is detected as
  // already done (issue #1) — that's the whole point of actionComplete.
  const requiresActionNow = !!step?.requiresAction && !actionDone;

  const advance = useCallback(() => {
    if (requiresActionNow) return;
    if (stepIndex >= steps.length - 1) onClose();
    else onStepChange(stepIndex + 1);
  }, [requiresActionNow, stepIndex, steps.length, onStepChange, onClose]);

  const goBack = useCallback(() => {
    if (stepIndex > 0) onStepChange(stepIndex - 1);
  }, [stepIndex, onStepChange]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" || e.key === "Enter") advance();
      else if (e.key === "ArrowLeft") goBack();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, advance, goBack]);

  // --- Draggable tooltip (issue #4) -----------------------------------------
  const onDragPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    // Don't hijack a tap on the close button.
    if ((e.target as HTMLElement).closest(".tour-close")) return;
    const el = tooltipRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    dragRef.current = { startX: e.clientX, startY: e.clientY, top: r.top, left: r.left };
    setDragging(true);
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // setPointerCapture can throw for stale pointer ids; harmless.
    }
    e.preventDefault();
  };

  const onDragPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d) return;
    const el = tooltipRef.current;
    const tw = el ? el.offsetWidth : TOOLTIP_WIDTH;
    const th = el ? el.offsetHeight : ESTIMATED_HEIGHT;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let top = d.top + (e.clientY - d.startY);
    let left = d.left + (e.clientX - d.startX);
    top = Math.min(Math.max(top, MARGIN), Math.max(MARGIN, vh - th - MARGIN));
    left = Math.min(Math.max(left, MARGIN), Math.max(MARGIN, vw - tw - MARGIN));
    setManualPos({ top, left });
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    dragRef.current = null;
    setDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  if (!isOpen || !step) return null;

  const showDim = step.dimBackground !== false;
  const tw = typeof window !== "undefined" ? Math.min(TOOLTIP_WIDTH, window.innerWidth - MARGIN * 2) : TOOLTIP_WIDTH;
  const place = manualPos ?? pos;

  return (
    <div className="tour-root" aria-live="polite">
      {showDim && (
        <svg className="tour-mask-svg">
          <defs>
            <mask id={maskId}>
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              {rects.map((r, i) => (
                <rect
                  key={i}
                  x={r.left - PAD}
                  y={r.top - PAD}
                  width={r.width + PAD * 2}
                  height={r.height + PAD * 2}
                  rx={10}
                  fill="black"
                />
              ))}
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0.45)" mask={`url(#${maskId})`} />
        </svg>
      )}

      {rects.map((r, i) => (
        <div
          key={i}
          className="tour-ring"
          style={{
            top: r.top - PAD,
            left: r.left - PAD,
            width: r.width + PAD * 2,
            height: r.height + PAD * 2,
          }}
        />
      ))}

      <div
        className={`tour-tooltip${dragging ? " tour-tooltip-dragging" : ""}`}
        ref={tooltipRef}
        style={{ top: place.top, left: place.left, width: tw }}
      >
        <div
          className="tour-tooltip-top"
          onPointerDown={onDragPointerDown}
          onPointerMove={onDragPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          title="Drag to move"
        >
          <span className="tour-progress">
            <span className="tour-drag-grip" aria-hidden="true">⠿</span>
            Step {stepIndex + 1} of {steps.length}
          </span>
          <button className="tour-close" onClick={onClose} aria-label="Close tutorial">
            ×
          </button>
        </div>
        <h3 className="tour-title">{step.title}</h3>
        <div className="tour-body">{step.body}</div>
        {requiresActionNow ? (
          <p className="tour-hint">{step.actionHint ?? "Do that to continue."}</p>
        ) : (
          targetMissing && (
            <p className="tour-missing-note">
              (Can&apos;t find that on screen right now — it&apos;ll be here once you get to this point.)
            </p>
          )
        )}
        <div className="tour-actions">
          <button className="tour-skip" onClick={onClose}>
            Skip tutorial
          </button>
          <div className="tour-nav">
            {stepIndex > 0 && (
              <button className="tour-btn tour-btn-secondary" onClick={goBack}>
                Back
              </button>
            )}
            <button
              className="tour-btn tour-btn-primary"
              onClick={advance}
              disabled={requiresActionNow}
              title={requiresActionNow ? "Complete the step above to continue" : undefined}
            >
              {stepIndex === steps.length - 1 ? "Done" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TourLaunchButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="tour-launch-btn" onClick={onClick} type="button">
      🎓 Tutorial
    </button>
  );
}
