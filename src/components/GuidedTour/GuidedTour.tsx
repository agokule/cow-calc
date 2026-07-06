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
  /** Shown in place of the Next button when requiresAction is true. */
  actionHint?: ReactNode;
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

export default function GuidedTour({ steps, isOpen, stepIndex, onStepChange, onClose }: GuidedTourProps) {
  const step = steps[stepIndex];
  const [rect, setRect] = useState<Rect | null>(null);
  const [targetMissing, setTargetMissing] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const maskId = useId();

  // Continuously track the target element for the current step via rAF
  // rather than scroll/resize listeners. This is what lets the spotlight
  // follow a ReactFlow node while it's being dragged, or the canvas while
  // it's being panned/zoomed — none of those fire a window scroll/resize
  // event, so polling the real position every frame is the reliable option.
  // Deliberately depends on [isOpen, stepIndex] and not on the `step` object
  // itself, since the caller may rebuild the steps array on every render.
  useEffect(() => {
    if (!isOpen || !step) return;
    setTargetMissing(false);

    if (!step.target) {
      setRect(null);
      return;
    }

    let cancelled = false;
    let rafId = 0;
    let hasScrolledTo = false;
    const startedAt = performance.now();

    const loop = () => {
      if (cancelled) return;
      const el = step.target ? document.querySelector(step.target) : null;
      const r = el ? measure(el) : null;
      const usable = !!(el && r && (r.width > 0 || r.height > 0));

      if (usable && r) {
        setTargetMissing(false);
        setRect((prev) => (prev && rectsEqual(prev, r) ? prev : r));
        if (!hasScrolledTo) {
          hasScrolledTo = true;
          el!.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
      } else {
        setRect(null);
        if (performance.now() - startedAt > MISSING_TIMEOUT_MS) {
          setTargetMissing(true);
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
    // The CSS max-height + overflow on .tour-tooltip is the last-resort net
    // for that specific case.
    const maxTop = Math.max(MARGIN, vh - th - MARGIN);
    const maxLeft = Math.max(MARGIN, vw - tw - MARGIN);
    top = Math.min(Math.max(top, MARGIN), maxTop);
    left = Math.min(Math.max(left, MARGIN), maxLeft);

    setPos((prev) => (prev.top === top && prev.left === left ? prev : { top, left }));
  }, [rect, isOpen, stepIndex]);

  const advance = useCallback(() => {
    if (step?.requiresAction) return;
    if (stepIndex >= steps.length - 1) onClose();
    else onStepChange(stepIndex + 1);
  }, [step, stepIndex, steps.length, onStepChange, onClose]);

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
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0.45)" mask={`url(#${maskId})`} />
        </svg>
      )}

      {rect && (
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

      <div className="tour-tooltip" ref={tooltipRef} style={{ top: pos.top, left: pos.left, width: tw }}>
        <div className="tour-tooltip-top">
          <span className="tour-progress">
            Step {stepIndex + 1} of {steps.length}
          </span>
          <button className="tour-close" onClick={onClose} aria-label="Close tutorial">
            ×
          </button>
        </div>
        <h3 className="tour-title">{step.title}</h3>
        <div className="tour-body">{step.body}</div>
        {step.requiresAction ? (
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
              disabled={step.requiresAction}
              title={step.requiresAction ? "Complete the step above to continue" : undefined}
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
