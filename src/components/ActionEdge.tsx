"use client";

import React, { useMemo, useState, useId, useEffect } from "react";
import {
  BaseEdge,
  Edge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
  type EdgeProps,
} from "reactflow";
import TrashIcon from "./TrashIcon";
import TimeInput from "./TimeInput";
import { EdgeAction, IStackCombat } from "@/types/battleCalculations";
import MinimalProgressBar from "./MinimalProgressBar";

export type ActionEdgeData = {
  sourceAction?: EdgeAction;
  targetAction?: EdgeAction;
  hours?: number; // duration hours
  minutes?: number; // duration minutes
  repeatHours?: number;
  repeatMinutes?: number;
};

function stackCombatToActionEdge(combat: IStackCombat): Required<ActionEdgeData> {
  return {
    sourceAction: combat.fromAction,
    targetAction: combat.toAction,
    hours: Math.floor(combat.timeToStart / 3600),
    minutes: Math.floor(combat.timeToStart / 60) % 60,
    repeatHours: Math.floor(combat.repeatTime / 3600),
    repeatMinutes: Math.floor(combat.repeatTime / 60) % 60,
  }
}

export function stackCombatsToActionEdges(combats: IStackCombat[], edges: Edge<ActionEdgeData>[]) {
  let newEdges: Edge<ActionEdgeData>[] = []

  for (const combat of combats) {
    // Generate edge ID in the same format as React Flow
    const edgeId = `reactflow__edge-${combat.from}-${combat.to}`;
    
    // Find existing edge with the same source and target
    const existingEdge = edges.find(e => e.source === combat.from && e.target === combat.to);
    newEdges.push({
      ...existingEdge,
      id: edgeId,
      source: combat.from,
      target: combat.to,
      data: stackCombatToActionEdge(combat),
      // thx so much claude 3.7 sonnet (github copilot edition)
      type: 'action',
    });
  }
  return newEdges
}

// dropdown-based selection instead of cycling

function ActionIcon({ action }: { action: EdgeAction }) {
  const size = 16;
  const common = { width: size, height: size } as const;
  const uid = useId();
  switch (action) {
    case "attack":
      // crossed swords icon
      return (
        <svg {...common} viewBox="0 0 24 24" aria-label="Attack">
          {/* Sword 1 blade */}
          <path d="M3 6 L15 18" stroke="#bdc3c7" strokeWidth="2.5" strokeLinecap="round" />
          {/* Sword 1 guard */}
          <path d="M12.5 15.5 L15.5 12.5" stroke="#7f8c8d" strokeWidth="2" strokeLinecap="round" />
          {/* Sword 1 handle */}
          <path d="M15 18 L17 20" stroke="#6b4f1d" strokeWidth="3" strokeLinecap="round" />

          {/* Sword 2 blade */}
          <path d="M21 6 L9 18" stroke="#bdc3c7" strokeWidth="2.5" strokeLinecap="round" />
          {/* Sword 2 guard */}
          <path d="M11.5 15.5 L8.5 12.5" stroke="#7f8c8d" strokeWidth="2" strokeLinecap="round" />
          {/* Sword 2 handle */}
          <path d="M9 18 L7 20" stroke="#6b4f1d" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "defend":
      // shield
      return (
        <svg {...common} viewBox="0 0 24 24" aria-label="Defend">
          <path
            d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"
            fill="#2c3e50"
          />
        </svg>
      );
    case "patrol":
      // spinning arrows taken from
      // https://www.svgrepo.com/svg/364192/arrows-clockwise-fill
      return (
        <svg {...common} viewBox="0 0 256 256" aria-label="Patrol">
          <g transform="translate(25.6 25.6) scale(0.8)">
            <path
              d="M232.167,51.71582v48a8.00039,8.00039,0,0,1-8,8h-48a8.00065,8.00065,0,0,1-5.65722-13.65723l18.34277-18.34277-4.28418-4.28418a80.08769,80.08769,0,0,0-113.13672,0A8.00052,8.00052,0,0,1,60.11719,60.11719a96.11137,96.11137,0,0,1,135.76562,0l4.28418,4.28418,18.34278-18.34278A8.00065,8.00065,0,0,1,232.167,51.71582ZM184.56836,184.56836a80.08769,80.08769,0,0,1-113.13672,0l-4.28418-4.28418,18.34277-18.34277A8.00065,8.00065,0,0,0,79.833,148.28418h-48a8.00039,8.00039,0,0,0-8,8v48a8.00052,8.00052,0,0,0,13.65722,5.65723L55.833,191.59863l4.28418,4.28418a96.11136,96.11136,0,0,0,135.76562,0,8.00052,8.00052,0,0,0-11.31445-11.31445Z"
              fill="#16a085"
            />
          </g>
        </svg>
      );
    case "both":
      // half attack (left) + half defend (right) using clip paths
      const leftClipId = `leftClip-${uid}`;
      const rightClipId = `rightClip-${uid}`;
      return (
        <svg {...common} viewBox="0 0 24 24" aria-label="Attack & Defend">
          <defs>
            <clipPath id={leftClipId}>
              <rect x="0" y="0" width="12" height="24" />
            </clipPath>
            <clipPath id={rightClipId}>
              <rect x="12" y="0" width="12" height="24" />
            </clipPath>
          </defs>
          {/* Left half: swords */}
          <g clipPath={`url(#${leftClipId})`}>
            <path d="M3 6 L15 18" stroke="#bdc3c7" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M12.5 15.5 L15.5 12.5" stroke="#7f8c8d" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 18 L17 20" stroke="#6b4f1d" strokeWidth="3" strokeLinecap="round" />

            <path d="M21 6 L9 18" stroke="#bdc3c7" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M11.5 15.5 L8.5 12.5" stroke="#7f8c8d" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 18 L7 20" stroke="#6b4f1d" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Right half: shield */}
          <g clipPath={`url(#${rightClipId})`}>
            <path
              d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"
              fill="#2c3e50"
            />
          </g>

          {/* Divider */}
          <path d="M12 2v20" stroke="#dfe6e9" strokeWidth="1" />
        </svg>
      );
    case "nothing":
    default:
      // circle with slash
      return (
        <svg {...common} viewBox="0 0 24 24" aria-label="Nothing">
          <circle cx="12" cy="12" r="8" stroke="#7f8c8d" strokeWidth="2" fill="none" />
          <path d="M6 18L18 6" stroke="#7f8c8d" strokeWidth="2" />
        </svg>
      );
  }
}

export default function ActionEdge(props: EdgeProps<ActionEdgeData>) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    markerEnd,
    style,
    data,
  } = props;

  const [edgePath, labelX, labelY] = useMemo(
    () => getBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }),
    [sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition]
  );

  const { setEdges } = useReactFlow();

  const sourceAction: EdgeAction = data?.sourceAction ?? "nothing";
  const targetAction: EdgeAction = data?.targetAction ?? "nothing";
  const hours = data?.hours ?? 0;
  const minutes = data?.minutes ?? 0;
  const repeatHours = data?.repeatHours ?? 0;

  let defaultRepeatMinutes = 30;
  if (sourceAction === "patrol" || targetAction === "patrol")
    defaultRepeatMinutes = 15; // shorter for patrols

  const repeatMinutes = data?.repeatMinutes ?? defaultRepeatMinutes;

  const seconds = hours * 3600 + minutes * 60
  const repeatSeconds = repeatHours * 3600 + repeatMinutes * 60

  const updateEdgeData = (updater: (d: Required<ActionEdgeData>) => Partial<ActionEdgeData>) => {
    setEdges((eds) =>
      eds.map((e) =>
        e.id === id
          ? {
              ...e,
              data: {
                sourceAction,
                targetAction,
                hours,
                minutes,
                ...(updater({ sourceAction, targetAction, hours, minutes, repeatHours, repeatMinutes } as Required<ActionEdgeData>)),
              },
            }
          : e
      )
    );
  };

  useEffect(() => {
    updateEdgeData(() => {
      return {
        sourceAction: sourceAction,
        targetAction: targetAction,
        hours: hours,
        minutes: minutes,
        repeatHours: repeatHours,
        repeatMinutes: repeatMinutes
      }
    })
  }, [sourceAction, targetAction, hours, minutes, repeatHours, repeatMinutes])

  const computeOther = (picked: EdgeAction, currentOther: EdgeAction): EdgeAction => {
    if (picked === "both") return "both";
    if (picked === "attack") return "defend";
    if (picked === "defend") return "attack";
    if (picked === "patrol") return "defend";
    return currentOther;
  };

  const handleSourcePick = (value: EdgeAction) => {
    // Update source, and sync target for specific cases
    const newTarget = computeOther(value, targetAction);
    updateEdgeData(() => ({ sourceAction: value, targetAction: newTarget }));
  };

  const handleTargetPick = (value: EdgeAction) => {
    // Update target, and sync source for specific cases
    let newSource = value;
    if (value == "nothing")
      newSource = sourceAction
    updateEdgeData(() => ({ targetAction: value, sourceAction: newSource }));
  };

  const handleHoursChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.stopPropagation();
    const value = Math.max(0, parseInt(ev.target.value || "0", 10));
    updateEdgeData(() => ({ hours: value }));
  };

  const handleMinutesChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.stopPropagation();
    let value = Math.max(0, parseInt(ev.target.value || "0", 10));
    value = Math.min(59, value);
    updateEdgeData(() => ({ minutes: value }));
  };

  const handleDeleteEdge = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();
    setEdges((eds) => eds.filter((e) => e.id !== id));
  };

  const handleRepeatHoursChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.stopPropagation();
    const value = Math.max(0, parseInt(ev.target.value || "0", 10));
    updateEdgeData(() => ({ repeatHours: value }));
  };

  const handleRepeatMinutesChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.stopPropagation();
    let value = Math.max(0, parseInt(ev.target.value || "0", 10));
    value = Math.min(59, value);
    updateEdgeData(() => ({ repeatMinutes: value }));
  };

  // positions for the action controls near ends
  const leftX = sourceX + (targetX - sourceX) * 0.15;
  const leftY = sourceY + (targetY - sourceY) * 0.15;
  const rightX = sourceX + (targetX - sourceX) * 0.85;
  const rightY = sourceY + (targetY - sourceY) * 0.85;

  const [showSourceMenu, setShowSourceMenu] = useState(false);
  const [showTargetMenu, setShowTargetMenu] = useState(false);

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all",
            background: "rgba(255,255,255,0.85)",
            padding: 6,
            borderRadius: 6,
            boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
            display: "grid",
            gridTemplateColumns: "auto auto auto auto auto",
            alignItems: "center",
            gap: 3,
            zIndex: 5,
            fontSize: 12,
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <TimeInput
            label="Does this in:"
            hours={hours}
            minutes={minutes}
            onHoursChange={handleHoursChange}
            onMinutesChange={handleMinutesChange}
            hoursAriaLabel="hours"
            minutesAriaLabel="minutes"
            className="edge-time-options"
          />
          <TimeInput
            label="Does this every:"
            hours={repeatHours}
            minutes={repeatMinutes}
            onHoursChange={handleRepeatHoursChange}
            onMinutesChange={handleRepeatMinutesChange}
            hoursAriaLabel="repeat hours"
            minutesAriaLabel="repeat minutes"
            className="edge-repeat-options"
          />
          <button
            type="button"
            onClick={handleDeleteEdge}
            title="Delete connection"
            style={{
              gridRow: "1 / span 2",
              gridColumn: "5 / span 1",
              display: "grid",
              placeItems: "center",
              width: 24,
              height: 24,
              borderRadius: 4,
              border: "1px solid #ddd",
              background: "#fff",
              color: "#c0392b",
              cursor: "pointer",
              padding: 0,
            }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <span style={{ width: 16, height: 16, display: "inline-block" }}>
              <TrashIcon />
            </span>
          </button>
          <MinimalProgressBar progress={seconds / repeatSeconds}/>
          <br />
        </div>

        {/* Left control near source - icon with dropdown on click */}
        <button
          type="button"
          title="Source action"
          onClick={(e) => {
            e.stopPropagation();
            setShowSourceMenu((s) => !s);
            setShowTargetMenu(false);
          }}
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${leftX}px, ${leftY}px)`,
            pointerEvents: "all",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 16,
            width: 28,
            height: 28,
            display: "grid",
            placeItems: "center",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            zIndex: 6,
          }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <ActionIcon action={sourceAction} />
        </button>
        {showSourceMenu && (
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${leftX}px, ${leftY + 30}px)`,
              pointerEvents: "all",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: 6,
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              zIndex: 7,
              overflow: "hidden",
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            {(["attack", "patrol", "nothing", "both"] as EdgeAction[]).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSourcePick(opt);
                  setShowSourceMenu(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 10px",
                  width: 160,
                  background: opt === sourceAction ? "#f0f6ff" : "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  textAlign: "left",
                }}
              >
                <ActionIcon action={opt} />
                <span style={{ textTransform: "capitalize" }}>{opt === "both" ? "Both" : opt}</span>
              </button>
            ))}
          </div>
        )}

        {/* Right control near target - icon with dropdown on click */}
        <button
          type="button"
          title="Target action"
          onClick={(e) => {
            e.stopPropagation();
            setShowTargetMenu((s) => !s);
            setShowSourceMenu(false);
          }}
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${rightX}px, ${rightY}px)`,
            pointerEvents: "all",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 16,
            width: 28,
            height: 28,
            display: "grid",
            placeItems: "center",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            zIndex: 6,
          }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <ActionIcon action={targetAction} />
        </button>
        {showTargetMenu && (
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${rightX}px, ${rightY + 30}px)`,
              pointerEvents: "all",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: 6,
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              zIndex: 7,
              overflow: "hidden",
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            {(["attack", "defend", "nothing", "both"] as EdgeAction[]).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTargetPick(opt);
                  setShowTargetMenu(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 10px",
                  width: 160,
                  background: opt === targetAction ? "#f0f6ff" : "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  textAlign: "left",
                }}
              >
                <ActionIcon action={opt} />
                <span style={{ textTransform: "capitalize" }}>{opt === "both" ? "Both" : opt}</span>
              </button>
            ))}
          </div>
        )}
      </EdgeLabelRenderer>
    </>
  );
}


