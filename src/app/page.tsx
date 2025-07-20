"use client";

import { useState, useEffect, useRef, DragEvent } from "react";
import TrashIcon from '@/components/TrashIcon';
import { IUnitType } from "@/types";
import { unitDataCategorized } from "@/data/units";
import Link from 'next/link';
import UnitList from '@/components/UnitList';

interface Unit {
  category: string;
  genericName: string;
  mode?: string;
  doctrine: string;
  level: number;
}

export default function Home() {
  const [selectedUnitData, setSelectedUnitData] = useState<IUnitType | IUnitType[]>(
    unitDataCategorized.Infantry[0]
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const sidebarToggleRef = useRef<HTMLButtonElement>(null);

  const [yourUnitLists, setYourUnitLists] = useState<Unit[][]>([[]]);
  const [enemyUnitLists, setEnemyUnitLists] = useState<Unit[][]>([[]]);

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

  const handleDragStart = (e: DragEvent<HTMLAnchorElement>, unit: Omit<Unit, 'doctrine' | 'level'>) => {
    e.dataTransfer.setData("application/json", JSON.stringify(unit));
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, listType: "you" | "enemy", listIndex: number) => {
    e.preventDefault();
    const unit = JSON.parse(e.dataTransfer.getData("application/json"));
    const newUnit: Unit = { ...unit, doctrine: "Allies", level: 1 };

    if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists[listIndex] = [...newLists[listIndex], newUnit];
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists[listIndex] = [...newLists[listIndex], newUnit];
      setEnemyUnitLists(newLists);
    }
  };

  const handleDelete = (listIndex: number, unitIndex: number, listType: "you" | "enemy") => {
    if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists[listIndex].splice(unitIndex, 1);
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists[listIndex].splice(unitIndex, 1);
      setEnemyUnitLists(newLists);
    }
  };

  const addUnitList = (listType: "you" | "enemy") => {
    if (listType === "you") {
      setYourUnitLists([...yourUnitLists, []]);
    } else {
      setEnemyUnitLists([...enemyUnitLists, []]);
    }
  };

  const deleteUnitList = (listIndex: number, listType: "you" | "enemy") => {
    if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists.splice(listIndex, 1);
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists.splice(listIndex, 1);
      setEnemyUnitLists(newLists);
    }
  };

  const handleDoctrineChange = (listIndex: number, unitIndex: number, doctrine: string, listType: "you" | "enemy") => {
    if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists[listIndex][unitIndex].doctrine = doctrine;
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists[listIndex][unitIndex].doctrine = doctrine;
      setEnemyUnitLists(newLists);
    }
  };

  const handleLevelChange = (listIndex: number, unitIndex: number, level: number, listType: "you" | "enemy") => {
    if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists[listIndex][unitIndex].level = level;
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists[listIndex][unitIndex].level = level;
      setEnemyUnitLists(newLists);
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
                  const unitName = unitData.genericName;
                  const mode = unitData.mode;
                  const slug = unitName.toLowerCase().replace(/ /g, '-');
                  const modeSlug = mode ? `?mode=${mode.toLowerCase().replace(/ /g, '-')}` : '';
                  const currentUnitName = Array.isArray(selectedUnitData) ? selectedUnitData[0].genericName : selectedUnitData.genericName;

                  return (
                    <li key={unitName + (mode || '')}>
                      <Link href={`/unit/${slug}${modeSlug}`} passHref target="_blank" className={unitName === currentUnitName ? 'active' : ''}
                        onClick={() => setSelectedUnitData(unitData)}
                        draggable
                        onDragStart={(e) => handleDragStart(e, { category, genericName: unitName, mode })}>
                          {unitName} {mode && `(${mode})`}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="content">
          <div className="unit-list-wrapper">
            <h2>You</h2>
            {yourUnitLists.map((units, index) => (
              <div key={index} className="unit-list-item">
                <UnitList
                  units={units}
                  onDrop={(e) => handleDrop(e, "you", index)}
                  onDragOver={handleDragOver}
                  onDelete={(unitIndex) => handleDelete(index, unitIndex, "you")}
                  onDoctrineChange={(unitIndex, doctrine) => handleDoctrineChange(index, unitIndex, doctrine, "you")}
                  onLevelChange={(unitIndex, level) => handleLevelChange(index, unitIndex, level, "you")}
                />
                <button onClick={() => deleteUnitList(index, "you")} className="delete-list-btn">
                  <TrashIcon />
                </button>
              </div>
            ))}
            <button onClick={() => addUnitList("you")} className="add-list-btn">+ Add Unit List</button>
          </div>
          <div className="unit-list-wrapper">
            <h2>Enemy</h2>
            {enemyUnitLists.map((units, index) => (
              <div key={index} className="unit-list-item">
                <UnitList
                  units={units}
                  onDrop={(e) => handleDrop(e, "enemy", index)}
                  onDragOver={handleDragOver}
                  onDelete={(unitIndex) => handleDelete(index, unitIndex, "enemy")}
                  onDoctrineChange={(unitIndex, doctrine) => handleDoctrineChange(index, unitIndex, doctrine, "enemy")}
                  onLevelChange={(unitIndex, level) => handleLevelChange(index, unitIndex, level, "enemy")}
                />
                <button onClick={() => deleteUnitList(index, "enemy")} className="delete-list-btn">
                  <TrashIcon />
                </button>
              </div>
            ))}
            <button onClick={() => addUnitList("enemy")} className="add-list-btn">+ Add Unit List</button>
          </div>
        </div>
      </div>
    </main>
  );
}

