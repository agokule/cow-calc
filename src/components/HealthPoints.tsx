import { round } from "@/utils/rounding";
import { CSSProperties } from "react";

interface HealthBarParams {
  currentHP: number
  maxHP: number 
}

export default function HealthBar(params: HealthBarParams) {
  const currentHP = params.currentHP
  const maxHP = params.maxHP
  const healthPercent = Math.max(0, Math.min(100, (currentHP / maxHP) * 100));
  
  const getHealthColor = (percent: number) => {
    if (percent > 60) return '#4ade80';
    if (percent > 30) return '#eab308';
    return '#ef4444';
  };

  const containerStyle: CSSProperties = {
    position: 'relative',
    display: 'inline-block'
  } as const;

  const barStyle: CSSProperties = {
    width: '120px',
    height: '12px',
    backgroundColor: '#d1d5db',
    borderRadius: '6px',
    border: '1px solid #9ca3af',
    overflow: 'hidden'
  } as const;

  const fillStyle: CSSProperties = {
    height: '100%',
    width: `${healthPercent}%`,
    backgroundColor: getHealthColor(healthPercent),
    transition: 'width 0.3s ease-out'
  } as const;

  const tooltipStyle: CSSProperties = {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '4px',
    padding: '4px 8px',
    backgroundColor: '#1f2937',
    color: 'white',
    fontSize: '11px',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    opacity: '0',
    pointerEvents: 'none',
    transition: 'opacity 0.2s'
  } as const;

  return (
    <div 
      style={containerStyle}
      onMouseEnter={(e) => {
        const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLDivElement;
        if (tooltip) tooltip.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLDivElement;
        if (tooltip) tooltip.style.opacity = '0';
      }}
    >
      <div style={barStyle}>
        <div style={fillStyle} />
      </div>
      <div className="tooltip" style={tooltipStyle}>
        {round(currentHP, 1)}/{maxHP} HP ({Math.round(healthPercent)}%)
      </div>
    </div>
  );
}
