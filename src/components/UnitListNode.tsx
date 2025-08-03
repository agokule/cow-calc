import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Unit } from '@/utils/Unit';

const UnitListNode = ({ data }: { data: { label: string, units: Unit[] } }) => {
  return (
    <div className="react-flow__node-default" style={{ padding: 10, minWidth: 150 }}>
      <Handle type="target" position={Position.Top} />
      <div>
        <strong>{data.label}</strong>
      </div>
      <div className="unit-list-compact">
        {data.units.map((unit, index) => (
          <div key={index} className="unit-item-compact">
            <span>{unit.genericName} {unit.mode && `(${unit.mode})`}</span>
            <div className="unit-details-compact">
              <span>{unit.doctrine} · Lvl {unit.level} · Qty {unit.quantity}</span>
            </div>
          </div>
        ))}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(UnitListNode);
