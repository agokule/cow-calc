"use client";

import { useState } from "react";
import { Doctrine, IUnitType } from "@/types";
import UnitStatsCard from "./UnitStatsCard";
import { getUnitData } from "@/utils/getUnitData";
import { getAvailableDoctrines } from "@/utils/getUnitDoctrines";

const UnitDisplay = ({ unitTypeData, modes }: { unitTypeData: IUnitType, modes?: string[] }) => {
  // State for the currently selected mode (e.g., "On Ground" or "In Air")
  const [selectedMode, setSelectedModeRaw] = useState(unitTypeData.mode);

  const [activeUnitData, setActiveUnitData] = useState(unitTypeData);

  function setSelectedMode(newMode: string) {
    setSelectedModeRaw(newMode)
    setActiveUnitData(getUnitData(unitTypeData.genericName, newMode) as IUnitType)
  }

  const availableDoctrines = getAvailableDoctrines(activeUnitData);
  
  const [selectedDoctrine, setSelectedDoctrine] = useState<Doctrine>(availableDoctrines[0]);
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(0);

  // Handler to reset level when the doctrine changes
  const handleDoctrineChange = (doctrine: Doctrine) => {
    setSelectedDoctrine(doctrine);
    setSelectedLevelIndex(0);
  };

  const currentLevels = activeUnitData.doctrineVariants[selectedDoctrine];
  const selectedUnit = currentLevels?.[selectedLevelIndex];

  return (
    <div>
      <h1 className="unit-title">{activeUnitData.genericName}</h1>

      {/* Mode Selector - Only shows for units with multiple modes */}
      {modes && modes.length > 0 && (
        <div className="selector-group">
          <h4>Select Mode</h4>
          <div className="button-row">
            {modes.flatMap((unitMode) => (
              <button
                key={unitMode}
                className={unitMode === selectedMode ? 'active' : ''}
                onClick={() => setSelectedMode(unitMode)}
              >
                {unitMode}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Doctrine Selector */}
      <div className="selector-group">
        <h4>Select Doctrine</h4>
        <div className="button-row">
          {availableDoctrines.map((doctrine) => (
            <button
              key={doctrine}
              className={doctrine === selectedDoctrine ? "active" : ""}
              onClick={() => handleDoctrineChange(doctrine)}
            >
              {doctrine}
            </button>
          ))}
        </div>
      </div>

      {/* Level Selector */}
      {currentLevels && currentLevels.length > 0 ? (
        <div className="selector-group">
          <h4>Select Level</h4>
          <div className="button-row">
            {currentLevels.map((level, index) => (
              <button
                key={level.level}
                className={index === selectedLevelIndex ? "active" : ""}
                onClick={() => setSelectedLevelIndex(index)}
              >
                Level {level.level}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="no-units-message">No specific units available for this doctrine.</p>
      )}

      {/* Display the final selected unit's stats */}
      {selectedUnit ? (
        <UnitStatsCard unit={selectedUnit} />
      ) : (
        <div className="card">
          <p className="no-units-message">No unit data for this selection.</p>
        </div>
      )}
    </div>
  );
};

export default UnitDisplay;
