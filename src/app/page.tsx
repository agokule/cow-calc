"use client";

import { useState, useEffect, useRef } from "react";
import UnitDisplay from "@/components/UnitDisplay";
import { IUnitType } from "@/types";
import { unitDataCategorized } from "@/data/units";
import Link from 'next/link';

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
                        onClick={() => setSelectedUnitData(unitData)}>
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
          <UnitDisplay unitTypeData={selectedUnitData} />
        </div>
      </div>
    </main>
  );
}
