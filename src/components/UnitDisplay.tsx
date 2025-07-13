"use client";

import { useState, useEffect } from "react";
import { Doctrine, IUnitType } from "@/types";
import UnitStatsCard from "./UnitStatsCard";

// Helper to get doctrines that actually have unit variants defined
const getAvailableDoctrines = (unitType: IUnitType): Doctrine[] => {
  return (Object.keys(unitType.doctrineVariants) as Doctrine[]).filter(
    (d) => unitType.doctrineVariants[d].length > 0
  );
};

const UnitDisplay = ({ unitTypeData }: { unitTypeData: IUnitType | IUnitType[] }) => {
  // Determine if the passed data is for a dual-mode unit (like Paratroopers)
  const isDualMode = Array.isArray(unitTypeData);

  // State for the currently selected mode (e.g., "On Ground" or "In Air")
  const [selectedModeIndex, setSelectedModeIndex] = useState(0);

  // Determine the current IUnitType object to work with based on the selected mode
  const activeUnitType = isDualMode ? unitTypeData[selectedModeIndex] : unitTypeData;

  const availableDoctrines = getAvailableDoctrines(activeUnitType);
  
  const [selectedDoctrine, setSelectedDoctrine] = useState<Doctrine>(availableDoctrines[0]);
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(0);

  // This is a crucial effect. It runs whenever the top-level unit changes (e.g., user selects
  // a new unit from the sidebar). It resets the internal state to avoid errors.
  useEffect(() => {
    const newIsDualMode = Array.isArray(unitTypeData);
    const newActiveUnitType = newIsDualMode ? unitTypeData[0] : unitTypeData;
    const newAvailableDoctrines = getAvailableDoctrines(newActiveUnitType);

    setSelectedModeIndex(0); // Reset to the first mode
    setSelectedDoctrine(newAvailableDoctrines[0] || 'Allies'); // Reset to the first available doctrine
    setSelectedLevelIndex(0); // Reset to level 1
  }, [unitTypeData]);

  // Handler to reset level when the doctrine changes
  const handleDoctrineChange = (doctrine: Doctrine) => {
    setSelectedDoctrine(doctrine);
    setSelectedLevelIndex(0);
  };

  const currentLevels = activeUnitType.doctrineVariants[selectedDoctrine];
  const selectedUnit = currentLevels?.[selectedLevelIndex];

  return (
    <div>
      <h1 className="unit-title">{activeUnitType.genericName}</h1>

      {/* Mode Selector - Only shows for units with multiple modes */}
      {isDualMode && (
        <div className="selector-group">
          <h4>Select Mode</h4>
          <div className="button-row">
            {unitTypeData.map((unitMode, index) => (
              <button
                key={unitMode.mode}
                className={index === selectedModeIndex ? 'active' : ''}
                onClick={() => setSelectedModeIndex(index)}
              >
                {unitMode.mode}
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
