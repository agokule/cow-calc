import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { getUnitType } from '@/utils/getUnitType';
import { UnitName, UnitType } from '@/types';
import { toTitleCase } from '@/utils/toTitleCase';
import HealthBar from './HealthPoints';
import { IUnitStack, StackId } from "@/types/combat";

const UnitListNode = ({ data, id }: { data: { label: string, stack: IUnitStack, openArmyInfo: (id: StackId) => void }, id: StackId }) => {
  const firstUnit = data.stack.units[0];
  const firstType = firstUnit ? getUnitType(firstUnit.genericName, firstUnit.mode) : undefined;
  const listTypeLabel =
    !firstUnit ? 'Empty' : firstType !== undefined ? toTitleCase(UnitType[firstType]) : 'Unknown';
  let unitsShown: Set<UnitName> = new Set()

  return (
    <div className="react-flow__node-default" style={{ padding: 10, minWidth: 150, backgroundColor: "#3f3f3f"}}>
      <Handle type="target" position={Position.Top} />
      <div style={{ fontSize: 12, color: '#bbb', marginBottom: 4 }}>{listTypeLabel}</div>
      <div>
        <strong style={{ color: "#d7d7d7" }}>{data.label}</strong>
      </div>
      <div className="unit-list-compact">
        {data.stack.units.map((unit, index) => {
          if (unitsShown.has(unit.genericName as UnitName))
            return null
          unitsShown.add(unit.genericName as UnitName)
          return (
            <div key={index} className="unit-item-compact">
              <span>{unit.genericName} {unit.mode && `(${unit.mode})`}</span>
              <div className="unit-details-compact">
                <span>{unit.doctrine} · Lvl {unit.level} · Qty {unit.quantity}</span>
              </div>
              <HealthBar currentHP={unit.hp as number} maxHP={unit.maxHp as number}></HealthBar>
            </div>
          )
          })}
      </div>
      <Handle type="source" position={Position.Bottom} />
      <button onClick={() => data.openArmyInfo(id)}
        style={{ cursor: 'pointer', color: '#f9f9f9', background: '#2e2e2e', border: "2px solid #4b5563", marginTop: '4px'}}>
        View Army Info
      </button>
    </div>
  );
};

export default memo(UnitListNode);
