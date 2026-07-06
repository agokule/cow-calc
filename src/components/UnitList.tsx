import { DragEvent, useState } from "react";
import { getUnitData } from "@/utils/getUnitData";
import { getAvailableDoctrines } from "@/utils/getUnitDoctrines";
import { Doctrine, IUnitType, POSSIBLE_DOCTRINES, UnitClass, UnitType } from "@/types";
import { Unit } from "@/utils/Unit";
import { getUnitType } from "@/utils/getUnitType";
import { useIsMobile } from "@/utils/isOnMobile";
import { stringToNumber } from "@/utils/stringToNumber";
import { UnitIcon } from "./UnitIcon";

interface UnitListProps {
  units: Unit[];
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDelete: (unitIndex: number) => void;
  onDoctrineChange: (unitIndex: number, doctrine: Doctrine) => void;
  onLevelChange: (unitIndex: number, level: number) => void;
  onQuantityChange: (unitIndex: number, quantity: number) => void;
  onHpChange: (unitIndex: number, hp: string) => void;
  toggleAddMode: () => void;
  addModeState: boolean;
  /** When set, tags this stack's container (and its first unit's controls) for the guided tour to find. */
  tourTag?: string;
}

const UnitList = ({ units, onDrop, onDragOver, onDelete, onDoctrineChange, onLevelChange, onQuantityChange, onHpChange, toggleAddMode, addModeState, tourTag }: UnitListProps) => {
  const isOnMobile = useIsMobile();
  const [allUnitsDropdown, setAllUnitsDropdown] = useState<Doctrine>("Allies")

  return (
    <div className="unit-list-container" onDrop={onDrop} onDragOver={onDragOver} data-tour={tourTag}>
      {units.length > 0 && (
        <div className="unit-list-category">
          {UnitType[getUnitType(units[0].genericName, units[0].mode) as UnitType]} Units
        </div>
      )}
      <div className="unit-list">
        <ul>
          {units.map((unit, index) => {
            const unitData = getUnitData(unit.genericName, unit.mode);
            const availableDoctrines = getAvailableDoctrines(unitData as IUnitType);
            const availableLevels = unitData ? unitData.doctrineVariants[unit.doctrine].map(l => l.level) : [];

            const deleteBtn = () => {
              return <button onClick={() => onDelete(index)} className="delete-btn" aria-label="Delete unit">&times;</button>;
            }

            const maxHpPerUnit = unitData?.doctrineVariants[unit.doctrine][unit.level - 1].hitpoints as number

            if (typeof unit.hp === "number") {
              unit.hp = `${unit.hp / maxHpPerUnit * 100}%`
            }
            const hpValuePerUnit: number = stringToNumber(unit.hp as string, maxHpPerUnit) 

            return (
              <li key={index}>
                <div className="unit-card-header">
                  <div>
                    <span className="unit-meta"><UnitIcon unitClass={unitData?.doctrineVariants.Allies[0].type as UnitClass} size="1.7ch"/></span>
                    <span className="unit-name"> {unit.genericName}{unit.mode && ` (${unit.mode})`}</span>
                  </div>
                  { isOnMobile && deleteBtn() }
                </div>
                <div className="unit-controls" data-tour={index === 0 && tourTag ? `${tourTag}-controls` : undefined}>
                  <select value={unit.doctrine} onChange={(e) => onDoctrineChange(index, e.target.value as Doctrine)}>
                    {availableDoctrines.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <p>Level: </p>
                  <select className={!isOnMobile ? "short-input" : ""} value={unit.level} onChange={(e) => onLevelChange(index, parseInt(e.target.value))}>
                    {availableLevels?.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                  <p>Quantity: </p>
                  <input className={!isOnMobile ? "short-input" : ""} type="number" value={unit.quantity} onChange={(e) => onQuantityChange(index, parseInt(e.target.value))} min="1" />
                  <p>
                    HP({Math.round(100 * hpValuePerUnit / maxHpPerUnit)}%,
                    <input type="number" className="short-input"
                           value={Math.round(hpValuePerUnit * unit.quantity * 10) / 10}
                           min="0.1" max={maxHpPerUnit * unit.quantity}
                           step="0.1"
                           onChange={(e) => {
                             const value = parseFloat(e.target.value)
                             const maxPossibleValue = maxHpPerUnit * unit.quantity
                             return onHpChange(index, `${100 * value / maxPossibleValue}%`)
                           }}/>
                    /{maxHpPerUnit * unit.quantity}):
                  </p>
                  <input type="range" min="0" max="100" value={hpValuePerUnit/maxHpPerUnit * 100} onChange={(e) => onHpChange(index, `${e.target.value}%`)} />
                  { !isOnMobile && deleteBtn() }
                </div>
              </li>
            );
          })}
        </ul>
        <p className="full-doctrine-selection">
          Set all unit doctrines to:
          <select value={allUnitsDropdown} onChange={(e) => {
            setAllUnitsDropdown(e.target.value as Doctrine)
            for (let index = 0; index < units.length; index++)
              onDoctrineChange(index, e.target.value as Doctrine)
          }}>
            {POSSIBLE_DOCTRINES.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </p>
        <button
          className="add-stack-btn"
          onClick={toggleAddMode}
          data-tour={tourTag ? `${tourTag}-add-btn` : undefined}
        >
          {addModeState ? "Stop Adding" : "Add to this Stack"}
        </button>
      </div>
    </div>
  );
};

export default UnitList;
