import React, { useState } from 'react';
import './StepNavigator.css';

type StepNavigatorProps = {
  initial?: number;
  max?: number;
  className?: string;
  hasStarted?: boolean;
  onStart?: () => void;
  onPrev?: (current: number) => void;
  onNext?: (current: number) => void;
  onFirst?: (current: number) => void;
  onLast?: (current: number) => void;
  onFinish?: (current: number) => void;
};

export default function StepNavigator({
  initial = 0,
  max,
  className,
  hasStarted = false,
  onStart,
  onPrev,
  onNext,
  onFirst,
  onLast,
  onFinish,
}: StepNavigatorProps) {
  const clamp = (val: number) =>
    Math.max(0, max !== undefined ? Math.min(val, max) : val);

  const [current, setCurrent] = useState<number>(clamp(initial));

  const atMin = current === 0;
  const atMax = max !== undefined && current >= max;

  const handleStart = () => {
    const nextVal = clamp(1);
    setCurrent(nextVal);
    onStart?.();
  };

  const handlePrev = () => {
    const nextVal = clamp(current - 1);
    setCurrent(nextVal);
    onPrev?.(nextVal);
  };

  const handleNext = () => {
    const nextVal = clamp(current + 1);
    setCurrent(nextVal);
    onNext?.(nextVal);
  };

  const handleFirst = () => {
    const nextVal = 0;
    setCurrent(nextVal);
    onFirst?.(nextVal);
  };

  const handleLast = () => {
    if (max === undefined) return;
    const nextVal = clamp(max);
    setCurrent(nextVal);
    onLast?.(nextVal);
  };

  const handleFinish = () => {
    onFinish?.(current);
  };

  let label
  if (!hasStarted)
    label = current === 0 ? 'Start Battle Calculation' : `Step ${current}`;
  else
    label = max !== undefined ? `Step ${current} of ${max}` : `Step ${current}`;

  return (
    <div className={`step-nav ${className ?? ''}`} role="group" aria-label="Step navigation">
      {hasStarted || current != 0 ?
        <button
          type="button"
          className="step-nav__button"
          onClick={handleFirst}
          aria-label="Go to first step"
          disabled={atMin}
        >
        « First
      </button> : null}

      {current === 0 && !hasStarted ? (
        <button
          type="button"
          className="step-nav__button step-nav__start"
          onClick={handleStart}
          aria-label="Start"
          disabled={max !== undefined && max === 0}
        >
          {label}
        </button>
      ) : (
        <>
          <button
            type="button"
            className="step-nav__button"
            onClick={handlePrev}
            aria-label="Previous step"
            disabled={atMin}
          >
            ‹ Prev
          </button>

          <div className="step-nav__label" aria-live="polite">
            {label}
          </div>

          <button
            type="button"
            className="step-nav__button"
            onClick={handleNext}
            aria-label="Next step"
            disabled={atMax}
          >
            Next ›
          </button>
        </>
      )}

      {max !== undefined ? (
        <button
          type="button"
          className="step-nav__button"
          onClick={handleLast}
          aria-label="Go to last step"
          disabled={atMax}
        >
          Last »
        </button>
      ) : (
        (hasStarted || current != 0 ?
        <button
          type="button"
          className="step-nav__button"
          onClick={handleFinish}
          aria-label="Finish"
        >
          Finish »
        </button> : null)
      )}
    </div>
  );
}

