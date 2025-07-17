import { DragEvent } from "react";

interface Unit {
  category: string;
  genericName: string;
}

interface UnitListProps {
  title: string;
  units: Unit[];
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
}

const UnitList = ({ title, units, onDrop, onDragOver }: UnitListProps) => {
  return (
    <div className="unit-list-container" onDrop={onDrop} onDragOver={onDragOver}>
      <h2>{title}</h2>
      <div className="unit-list">
        <ul>
          {units.map((unit, index) => (
            <li key={index}>
              {unit.genericName} ({unit.category})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UnitList;
