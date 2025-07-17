import { DragEvent } from "react";

interface Unit {
  category: string;
  genericName: string;
}

interface UnitListProps {
  units: Unit[];
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDelete: (index: number) => void;
}

const UnitList = ({ units, onDrop, onDragOver, onDelete }: UnitListProps) => {
  return (
    <div className="unit-list-container" onDrop={onDrop} onDragOver={onDragOver}>
      <div className="unit-list">
        <ul>
          {units.map((unit, index) => (
            <li key={index}>
              <span>{unit.genericName} ({unit.category})</span>
              <button onClick={() => onDelete(index)} className="delete-btn">&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UnitList;
