"use client";

import { useState, useEffect, useRef, DragEvent, useContext } from "react";
import { UnitListsContext } from "@/context/UnitListsContext";
import TrashIcon from '@/components/TrashIcon';
import { Doctrine, IUnitStats, IUnitType, UnitType, possibleUnitNames } from "@/types";
import { unitDataCategorized } from "@/data/units";
import Link from 'next/link';
import UnitList from '@/components/UnitList';
import { Unit } from "@/utils/Unit";
import { getUnitType } from "@/utils/getUnitType";
import { convert, diff, normalize } from "@/data/units/synthesiser";

export default function Home() {
  diff("Pan-Asian", "Infantry")

  for (const unit of possibleUnitNames) {
    const n = normalize("Allies", "Light Tank") as IUnitStats[]
    console.log(convert(n, "Pan-Asian", "Light Tank"))
  }

  const [selectedUnitData, setSelectedUnitData] = useState<IUnitType | IUnitType[]>(
    unitDataCategorized.Infantry[0]
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const sidebarToggleRef = useRef<HTMLButtonElement>(null);

  const { yourUnitLists, setYourUnitLists, enemyUnitLists, setEnemyUnitLists } = useContext(UnitListsContext)!;

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
    const newUnit: Unit = { ...unit, doctrine: "Allies", level: 1, quantity: 1 };

    const lists = listType === "you" ? yourUnitLists : enemyUnitLists;
    const setLists = listType === "you" ? setYourUnitLists : setEnemyUnitLists;

    const currentList = lists[listIndex];

    if (currentList.length > 0) {
      const listCategory = getUnitType(currentList[0].genericName, currentList[0].mode);
      const newItemCategory = getUnitType(newUnit.genericName, newUnit.mode)
      if (newItemCategory !== listCategory) {
        console.log(listCategory, newItemCategory)
        alert(`You can only add ${UnitType[listCategory as UnitType]} units to this list.`);
        return;
      }
    }

    const newLists = [...lists];
    newLists[listIndex] = [...currentList, newUnit];
    setLists(newLists);
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

  const handleDoctrineChange = (listIndex: number, unitIndex: number, doctrine: Doctrine, listType: "you" | "enemy") => {
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

  const handleQuantityChange = (listIndex: number, unitIndex: number, quantity: number, listType: "you" | "enemy") => {
    if (listType === "you") {
      const newLists = [...yourUnitLists];
      newLists[listIndex][unitIndex].quantity = quantity;
      setYourUnitLists(newLists);
    } else {
      const newLists = [...enemyUnitLists];
      newLists[listIndex][unitIndex].quantity = quantity;
      setEnemyUnitLists(newLists);
    }
  };

  return (
    <main>
      <div className="connections-button-container">
        <Link href="/connections">
          <button className="connections-button">
            Connections
          </button>
        </Link>
      </div>
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
                        onDragStart={(e) => handleDragStart(e, { category, genericName: unitName, quantity: 1, mode })}>
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
                  onQuantityChange={(unitIndex, quantity) => handleQuantityChange(index, unitIndex, quantity, "you")}
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
                  onQuantityChange={(unitIndex, quantity) => handleQuantityChange(index, unitIndex, quantity, "enemy")}
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

