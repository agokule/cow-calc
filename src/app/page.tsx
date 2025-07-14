"use client";

import { useState, useEffect, useRef } from "react";
import UnitDisplay from "@/components/UnitDisplay";
import { IUnitType } from "@/types";
import { unitDataCategorized } from "@/data/units";

export default function Home() {
  // State to hold the currently selected unit type. Default to the first unit (Militia).
  const [selectedUnitData, setSelectedUnitData] = useState<IUnitType | IUnitType[]>(
    unitDataCategorized.Infantry[0]
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const sidebarToggleRef = useRef<HTMLButtonElement>(null);

  // Close sidebar when clicking outside
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

  return (
    <main>
      <div className="main-layout">
        <button
          className={`sidebar-toggle ${isSidebarOpen ? 'open' : ''}`}
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
                  // Handle both single and dual-mode units for key and name
                  const unitName = Array.isArray(unitData) ? unitData[0].genericName : unitData.genericName;
                  const currentUnitName = Array.isArray(selectedUnitData) ? selectedUnitData[0].genericName : selectedUnitData.genericName;

                  return (
                    <li key={unitName}>
                      <button
                        className={unitName === currentUnitName ? 'active' : ''}
                        onClick={() => setSelectedUnitData(unitData)}
                      >
                        {unitName}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="content">
          <UnitDisplay unitTypeData={selectedUnitData} />
        </div>
      </div>
    </main>
  );
}
