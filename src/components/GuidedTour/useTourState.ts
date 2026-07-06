import { useCallback, useEffect, useRef, useState } from "react";
import type { TourStep } from "./GuidedTour";

/**
 * Manages a single tour's open/closed + step-index state, remembers (via
 * localStorage) whether the person has already been through it, and exposes
 * `advanceIfStepIs` so page code can push the tour forward the moment the
 * person actually performs the action a step is asking for (drops a unit,
 * opens a dialog, connects two stacks, etc.) instead of only reacting to the
 * tour's own "Next" button.
 */
export function useTourState(storageKey: string) {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const isOpenRef = useRef(isOpen);
  const stepIndexRef = useRef(stepIndex);
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);
  useEffect(() => {
    stepIndexRef.current = stepIndex;
  }, [stepIndex]);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(storageKey)) {
        setIsOpen(true);
      }
    } catch {
      // localStorage can throw in some private-browsing modes; just show the tour.
      setIsOpen(true);
    }
  }, [storageKey]);

  const close = useCallback(() => {
    setIsOpen(false);
    try {
      window.localStorage.setItem(storageKey, "true");
    } catch {
      // ignore write failures, not worth blocking the UI over
    }
  }, [storageKey]);

  const restart = useCallback(() => {
    setStepIndex(0);
    setIsOpen(true);
  }, []);

  /** Call this from an event handler once the real action has happened. */
  const advanceIfStepIs = useCallback((steps: TourStep[], id: string) => {
    if (isOpenRef.current && steps[stepIndexRef.current]?.id === id) {
      setStepIndex((i) => i + 1);
    }
  }, []);

  return { isOpen, stepIndex, setStepIndex, close, restart, advanceIfStepIs };
}
