import { DragEvent } from "react";
import { getUnitData } from "@/utils/getUnitData";
import { getAvailableDoctrines } from "@/utils/getUnitDoctrines";
import { IUnitType } from "@/types";

interface Unit {
  category: string;
  genericName: string;
  doctrine: string;
  level: number;
  mode?: string;
}

interface UnitListProps {
  units: Unit[];
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDelete: (unitIndex: number) => void;
  onDoctrineChange: (unitIndex: number, doctrine: string) => void;
  onLevelChange: (unitIndex: number, level: number) => void;
}

const UnitList = ({ units, onDrop, onDragOver, onDelete, onDoctrineChange, onLevelChange }: UnitListProps) => {
  return (
    <div className="unit-list-container" onDrop={onDrop} onDragOver={onDragOver}>
      <div className="unit-list">
        <ul>
          {units.map((unit, index) => {
            const unitData = getUnitData(unit.genericName, unit.mode);
            const availableDoctrines = getAvailableDoctrines(unitData as IUnitType);
            const availableLevels = unitData ? unitData.doctrineVariants[unit.doctrine as keyof typeof unitData.doctrineVariants]?.map(l => l.level) : [];

            return (
              <li key={index}>
                <span>{unit.genericName} {unit.mode && `(${unit.mode})`} ({unit.category})</span>
                <div className="unit-controls">
                  <select value={unit.doctrine} onChange={(e) => onDoctrineChange(index, e.target.value)}>
                    {availableDoctrines.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <select value={unit.level} onChange={(e) => onLevelChange(index, parseInt(e.target.value))}>
                    {availableLevels?.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                  <button onClick={() => onDelete(index)} className="delete-btn">&times;</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UnitList;
