"use client";

import { useState, useEffect, useRef, DragEvent } from "react";
import { IUnitType } from "@/types";
import { unitDataCategorized } from "@/data/units";
import Link from 'next/link';
import UnitList from '@/components/UnitList';

interface Unit {
  category: string;
  genericName: string;
}

export default function Home() {
  const [selectedUnitData, setSelectedUnitData] = useState<IUnitType | IUnitType[]>(
    unitDataCategorized.Infantry[0]
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const sidebarToggleRef = useRef<HTMLButtonElement>(null);

  const [yourUnits, setYourUnits] = useState<Unit[]>([]);
  const [enemyUnits, setEnemyUnits] = useState<Unit[]>([]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        sidebarToggleRef.current &&
        !sidebarToggleRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleDragStart = (e: DragEvent<HTMLAnchorElement>, unit: Unit) => {
    e.dataTransfer.setData("application/json", JSON.stringify(unit));
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, listType: "you" | "enemy") => {
    e.preventDefault();
    const unit = JSON.parse(e.dataTransfer.getData("application/json"));

    if (listType === "you") {
      setYourUnits([...yourUnits, unit]);
    } else {
      setEnemyUnits([...enemyUnits, unit]);
    }
  };

  const handleDelete = (index: number, listType: "you" | "enemy") => {
    if (listType === "you") {
      const newUnits = [...yourUnits];
      newUnits.splice(index, 1);
      setYourUnits(newUnits);
    } else {
      const newUnits = [...enemyUnits];
      newUnits.splice(index, 1);
      setEnemyUnits(newUnits);
    }
  };

  return (
    <main>
      <div className="main-layout">
        <button
          className="sidebar-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          ref={sidebarToggleRef}
        >
          &#9776;
        </button>
        <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
          <h2>Unit Browser</h2>
          {Object.entries(unitDataCategorized).map(([category, units]) => (
            <div key={category} className="sidebar-category">
              <h3>{category}</h3>
              <ul>
                {units.map((unitData) => {
                  const unitName = Array.isArray(unitData) ? unitData[0].genericName : unitData.genericName;
                  const slug = unitName.toLowerCase().replace(/ /g, '-');
                  const currentUnitName = Array.isArray(selectedUnitData) ? selectedUnitData[0].genericName : selectedUnitData.genericName;

                  return (
                    <li key={unitName}>
                      <Link href={`/unit/${slug}`} passHref target="_blank" className={unitName === currentUnitName ? 'active' : ''}
                        onClick={() => setSelectedUnitData(unitData)}
                        draggable
                        onDragStart={(e) => handleDragStart(e, { category, genericName: unitName })}>
                          {unitName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="content">
          <UnitList title="You" units={yourUnits} onDrop={(e) => handleDrop(e, "you")} onDragOver={handleDragOver} onDelete={(index) => handleDelete(index, "you")} />
          <UnitList title="Enemy" units={enemyUnits} onDrop={(e) => handleDrop(e, "enemy")} onDragOver={handleDragOver} onDelete={(index) => handleDelete(index, "enemy")} />
        </div>
      </div>
    </main>
  );
}

