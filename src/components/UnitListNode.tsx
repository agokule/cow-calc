import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Unit } from '@/utils/Unit';
import { getUnitType } from '@/utils/getUnitType';
import { UnitType } from '@/types';
import { toTitleCase } from '@/utils/toTitleCase';
import HealthBar from './HealthPoints';

const UnitListNode = ({ data }: { data: { label: string, units: Unit[] } }) => {
  const firstUnit = data.units[0];
  const firstType = firstUnit ? getUnitType(firstUnit.genericName, firstUnit.mode) : undefined;
  const listTypeLabel =
    !firstUnit ? 'Empty' : firstType !== undefined ? toTitleCase(UnitType[firstType]) : 'Unknown';

  return (
    <div className="react-flow__node-default" style={{ padding: 10, minWidth: 150 }}>
      <Handle type="target" position={Position.Top} />
      <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>{listTypeLabel}</div>
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
            <HealthBar currentHP={unit.hp as number} maxHP={unit.maxHp as number}></HealthBar>
          </div>
        ))}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(UnitListNode);
