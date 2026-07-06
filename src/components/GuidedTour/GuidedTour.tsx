"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, ReactNode } from "react";
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
  /** Shown in place of the Next button when requiresAction is true and not yet satisfied. */
  actionHint?: ReactNode;
  /**
   * CSS selector that's re-checked live (every frame, same as the main
   * target) to decide whether a requiresAction step is *already* done —
   * typically the same selector as the next step's target. This is what
   * lets "Back" return to a completed step without re-blocking Next, while
   * still re-blocking it if the person undoes the action and comes back.
   */
  satisfiedWhen?: string;
  /** Extra element to exclude from the dimming overlay (no ring drawn for it, just left undimmed). */
  secondaryTarget?: string;
  /**
  * For steps where the action is "make this step's own target go away"
  * (e.g. close a dialog) rather than reveal a new one. Satisfied once the
  * primary `target` has been found at least once and then stops resolving.
  */
  satisfiedWhenTargetGone?: boolean;
  /**
  * When true, hide the primary spotlight ring for as long as secondaryTarget
  * is visible — for cases where a secondary element (e.g. an opened mobile
  * sidebar) physically covers the primary target, so ringing it would just
  * float on top of something opaque and point at nothing visible.
  */
  hidePrimaryRingWhileSecondaryVisible?: boolean;
  /**
  * Not read by GuidedTour itself — page.tsx checks this directly on the
  * current step and folds a highlight class into the sidebar's own
  * className, to avoid the imperative classList.add wipe described above.
  */
  highlightSidebar?: boolean;
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

function isUsable(el: Element | null, r: Rect | null): r is Rect {
  return !!(el && r && (r.width > 0 || r.height > 0));
}

export default function GuidedTour({ steps, isOpen, stepIndex, onStepChange, onClose }: GuidedTourProps) {
  const step = steps[stepIndex];
  const [rect, setRect] = useState<Rect | null>(null);
  const [secondaryRect, setSecondaryRect] = useState<Rect | null>(null);
  const [targetMissing, setTargetMissing] = useState(false);
  const [satisfied, setSatisfied] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [manualPos, setManualPos] = useState<{ top: number; left: number } | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startY: number; origTop: number; origLeft: number } | null>(null);
  const maskId = useId();

  // Continuously track everything this step cares about via rAF, rather than
  // scroll/resize listeners: the primary spotlight target, an optional
  // secondary "also don't dim this" target, and (for gated steps) whether
  // the required action is *currently* true — not just "did it fire once."
  // rAF (rather than events) is what lets the spotlight follow a ReactFlow
  // node while it's being dragged or the canvas while it's being panned,
  // neither of which fires a window scroll/resize event.
  // Deliberately depends on [isOpen, stepIndex], not the `step` object
  // itself, since the caller may rebuild the steps array on every render.
  useEffect(() => {
    if (!isOpen || !step) return;
    setTargetMissing(false);

    let cancelled = false;
    let rafId = 0;
    let hasScrolledTo = false;
    let hasSeenPrimary = false;
    const startedAt = performance.now();

    const loop = () => {
      if (cancelled) return;

      let primaryUsable = false;

      if (step.target) {
        const el = document.querySelector(step.target);
        const r = el ? measure(el) : null;
        primaryUsable = isUsable(el, r);
        if (primaryUsable && r) {
          hasSeenPrimary = true;
          setTargetMissing(false);
          setRect((prev) => (prev && rectsEqual(prev, r) ? prev : r));
          if (!hasScrolledTo) {
            hasScrolledTo = true;
            el!.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
          }
        } else {
          setRect(null);
          if (!step.satisfiedWhenTargetGone && performance.now() - startedAt > MISSING_TIMEOUT_MS) {
            setTargetMissing(true);
          }
        }
      } else {
        setRect((prev) => (prev === null ? prev : null));
      }

      if (step.secondaryTarget) {
        const el2 = document.querySelector(step.secondaryTarget);
        const r2 = el2 ? measure(el2) : null;
        setSecondaryRect((prev) => {
          if (!isUsable(el2, r2)) return prev === null ? prev : null;
          return prev && rectsEqual(prev, r2) ? prev : r2;
        });
      } else {
        setSecondaryRect((prev) => (prev === null ? prev : null));
      }

      if (step.requiresAction) {
        if (step.satisfiedWhenTargetGone) {
          const isSat = hasSeenPrimary && !primaryUsable;
          setSatisfied((prev) => (prev === isSat ? prev : isSat));
        } else if (step.satisfiedWhen) {
          const satEl = document.querySelector(step.satisfiedWhen);
          const satRect = satEl ? measure(satEl) : null;
          const isSat = isUsable(satEl, satRect);
          setSatisfied((prev) => (prev === isSat ? prev : isSat));
        } else {
          setSatisfied((prev) => (prev === false ? prev : false));
        }
      } else {
        setSatisfied((prev) => (prev === false ? prev : false));
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

  // A manual drag (see handleDragPointerDown below) overrides the
  // auto-computed position until the step changes. This is a layout effect,
  // ordered before the position-calc one below, so the reset lands in the
  // same paint as the new step's content instead of flashing at the old
  // dragged spot for a frame first.
  useLayoutEffect(() => {
    setManualPos(null);
  }, [stepIndex]);

  // Position the tooltip. This is a pure function of (rect, the tooltip's own
  // measured size, viewport size) — it never reads its own previous output,
  // so it can't oscillate the way a "subtract the overflow" correction can
  // when a step's content is simply too tall to satisfy both a top and a
  // bottom constraint at once. It settles in at most two passes: once with
  // whatever size the tooltip currently has (possibly last step's), and once
  // more when `rect`/`stepIndex` change and the new content has been measured.
  useLayoutEffect(() => {
    if (!isOpen || !step) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const tooltipEl = tooltipRef.current;
    const tw = tooltipEl ? tooltipEl.offsetWidth : Math.min(TOOLTIP_WIDTH, vw - MARGIN * 2);
    const th = tooltipEl ? tooltipEl.offsetHeight : ESTIMATED_HEIGHT;

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
    const maxTop = Math.max(MARGIN, vh - th - MARGIN);
    const maxLeft = Math.max(MARGIN, vw - tw - MARGIN);
    top = Math.min(Math.max(top, MARGIN), maxTop);
    left = Math.min(Math.max(left, MARGIN), maxLeft);

    setPos((prev) => (prev.top === top && prev.left === left ? prev : { top, left }));
  }, [rect, isOpen, stepIndex]);

  const isGated = !!step?.requiresAction && !satisfied;

  const advance = useCallback(() => {
    if (isGated) return;
    if (stepIndex >= steps.length - 1) onClose();
    else onStepChange(stepIndex + 1);
  }, [isGated, stepIndex, steps.length, onStepChange, onClose]);

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

  if (!isOpen || !step) return null;

  const showDim = step.dimBackground !== false;
  const tw = typeof window !== "undefined" ? Math.min(TOOLTIP_WIDTH, window.innerWidth - MARGIN * 2) : TOOLTIP_WIDTH;
  const displayPos = manualPos ?? pos;

  const handleDragPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".tour-close")) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { startX: e.clientX, startY: e.clientY, origTop: displayPos.top, origLeft: displayPos.left };
  };

  const handleDragPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const info = dragRef.current;
    if (!info) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const dx = e.clientX - info.startX;
    const dy = e.clientY - info.startY;
    const nextLeft = Math.min(Math.max(info.origLeft + dx, -(tw - 80)), vw - 80);
    const nextTop = Math.min(Math.max(info.origTop + dy, 0), vh - 60);
    setManualPos({ top: nextTop, left: nextLeft });
  };

  const handleDragPointerUp = () => {
    dragRef.current = null;
  };

  return (
    <div className="tour-root" aria-live="polite">
      {showDim && (
        <svg className="tour-mask-svg">
          <defs>
            <mask id={maskId}>
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              {rect && (
                <rect
                  x={rect.left - PAD}
                  y={rect.top - PAD}
                  width={rect.width + PAD * 2}
                  height={rect.height + PAD * 2}
                  rx={10}
                  fill="black"
                />
              )}
              {secondaryRect && (
                <rect
                  x={secondaryRect.left - PAD}
                  y={secondaryRect.top - PAD}
                  width={secondaryRect.width + PAD * 2}
                  height={secondaryRect.height + PAD * 2}
                  rx={10}
                  fill="black"
                />
              )}
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0.45)" mask={`url(#${maskId})`} />
        </svg>
      )}

      {rect && !(step.hidePrimaryRingWhileSecondaryVisible && secondaryRect) && (
        <div
          className="tour-ring"
          style={{
            top: rect.top - PAD,
            left: rect.left - PAD,
            width: rect.width + PAD * 2,
            height: rect.height + PAD * 2,
          }}
        />
      )}

      <div
        className="tour-tooltip"
        ref={tooltipRef}
        style={{ top: displayPos.top, left: displayPos.left, width: tw }}
      >
        <div
          className="tour-drag-handle"
          onPointerDown={handleDragPointerDown}
          onPointerMove={handleDragPointerMove}
          onPointerUp={handleDragPointerUp}
          onPointerCancel={handleDragPointerUp}
        >
          <div className="tour-drag-grip" />
          <div className="tour-tooltip-top">
            <span className="tour-progress">
              Step {stepIndex + 1} of {steps.length}
            </span>
            <button className="tour-close" onClick={onClose} aria-label="Close tutorial">
              ×
            </button>
          </div>
        </div>
        <h3 className="tour-title">{step.title}</h3>
        <div className="tour-body">{step.body}</div>
        {isGated ? (
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
              disabled={isGated}
              title={isGated ? "Complete the step above to continue" : undefined}
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
