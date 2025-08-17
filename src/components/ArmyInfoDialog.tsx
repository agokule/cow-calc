import React, { useState } from 'react';
import './ArmyInfoDialog.css';

import { IUnitStack } from '@/types/combat';
import { UnitClass, UNIT_CLASSES } from '@/types';
import LightArmor from '@/icons/lightArmor';
import HeavyArmor from '@/icons/heavyArmor';
import Unarmored from '@/icons/unarmoured';
import FighterJet from '@/icons/airplane';
import Ship from '@/icons/ship';
import Submarine from '@/icons/submarine';
import Buildings from '@/icons/buildings';
import ProvinceMorale from '@/icons/provinceMorale';
import Rocket from '@/icons/rocket';


interface ArmyInfoDialogProps {
  unitStack: IUnitStack;
  isOpen: boolean;
  onClose: () => void;
  listId: string;
  onProtectionChange?: (value: number) => void;
  onHomeBonusChange?: (value: boolean) => void;
}

// Icon component for unit classes
const UnitIcon: React.FC<{ unitClass: UnitClass }> = ({ unitClass }) => {
  const size = '20px'

  switch (unitClass) {
    case 'Unarmored':
      return <Unarmored size={size}/>
    case 'LightArmor':
      return <LightArmor size={size}/>
    case 'HeavyArmor':
      return <HeavyArmor size={size}/>
    case 'Airplane':
      return <FighterJet size={size}/>
    case 'Ship':
      return <Ship size={size}/>
    case 'Submarine':
      return <Submarine size={size}/>
    case 'Buildings':
      return <Buildings size={size}/>
    case 'ProvinceMorale':
      return <ProvinceMorale size={size}/>
    case 'Rocket':
      return <Rocket size={size}/>
  }
};

export const ArmyInfoDialog: React.FC<ArmyInfoDialogProps> = ({ 
  unitStack, 
  isOpen, 
  onClose,
  listId,
  onProtectionChange,
  onHomeBonusChange
}) => {
  const [localProtection, setLocalProtection] = useState(unitStack.protectionValue);
  const [localHomeBonus, setLocalHomeBonus] = useState(Boolean(unitStack.homeDefenceBonus));

  if (!isOpen) return null;

  const formatPercentage = (value: number): string => {
    return `${Math.round(value)}%`;
  };

  const handleProtectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLocalProtection(value);
    if (onProtectionChange) {
      onProtectionChange(value);
    }
  };

  const handleHomeBonusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setLocalHomeBonus(value);
    if (onHomeBonusChange) {
      onHomeBonusChange(value);
    }
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        {/* Header */}
        <div className="dialog-header">
          <h2 className="dialog-title">Army Info ({listId})</h2>
          <button onClick={onClose} className="close-button">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="dialog-content">
          {/* Column Headers */}
          <div className="headers-row">
            <div className="header-spacer"></div>
            <div className="header-damage">Potential</div>
            <div className="header-status">Efficiency</div>
            <div className="header-protection">Distribution</div>
          </div>
          
          {/* Icons row */}
          <div className="icons-row">
            <div className="header-spacer"></div>
            <div className="icon-group-potential">
              <div className="icon-cell">⚡</div>
              <div className="icon-cell">🛡️</div>
            </div>
            <div className="icon-group-efficiency">
              <div className="icon-cell">⚡</div>
              <div className="icon-cell">🛡️</div>
            </div>
            <div className="icon-spacer"></div>
          </div>

          {/* Unit Class Rows */}
          <div className="unit-rows">
            {UNIT_CLASSES.map((unitClass) => (
              <div key={unitClass} className="unit-row">
                {/* Unit Icon */}
                <div className="unit-icon-container">
                  <UnitIcon unitClass={unitClass} />
                </div>

                {/* Damage Potential Group */}
                <div className="damage-potential-group">
                  <div className="value-cell attack-value">
                    {unitStack.dmgPotential[unitClass].attack}
                  </div>
                  <div className="value-cell defense-value">
                    {unitStack.dmgPotential[unitClass].defense}
                  </div>
                </div>

                {/* Damage Efficiency Group */}
                <div className="damage-efficiency-group">
                  <div className="value-cell-wide attack-value">
                    {formatPercentage(unitStack.dmgEfficiency[unitClass].attack)}
                  </div>
                  <div className="value-cell-wide defense-value">
                    {formatPercentage(unitStack.dmgEfficiency[unitClass].defense)}
                  </div>
                </div>

                {/* Damage Distribution */}
                <div className="damage-distribution">
                  {formatPercentage(unitStack.dmgDistribution[unitClass])}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="footer">
            <div className="footer-text">
              Damage when ⚡ attacking / 🛡️ defending:
            </div>
            <div className="footer-controls">
              <div className="protection-control">
                <label htmlFor="protection-value">Protection Value:</label>
                <input
                  id="protection-value"
                  type="number"
                  min="0"
                  max="100"
                  value={localProtection}
                  onChange={handleProtectionChange}
                  className="protection-input"
                />
                <span>%</span>
              </div>
              <div className="home-bonus-control">
                <label htmlFor="home-bonus">
                  <input
                    id="home-bonus"
                    type="checkbox"
                    checked={localHomeBonus}
                    onChange={handleHomeBonusChange}
                    className="home-bonus-checkbox"
                  />
                  Home Defense Bonus (+15%)
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo component with sample data
export const ArmyInfoDemo: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [protectionValue, setProtectionValue] = useState(85);
  const [homeDefenseBonus, setHomeDefenseBonus] = useState(false);

  // Sample data matching the screenshot
  const sampleUnitStack: IUnitStack = {
    units: [],
    dmgPotential: {
      Unarmored: { attack: 48, defense: 70 },
      LightArmor: { attack: 32, defense: 43 },
      HeavyArmor: { attack: 24, defense: 31 },
      Airplane: { attack: 16, defense: 23 },
      Ship: { attack: 12, defense: 16 },
      Submarine: { attack: 10, defense: 14 },
      Buildings: { attack: 10, defense: 14 },
      ProvinceMorale: { attack: 0, defense: 0 },
      Rocket: { attack: 0, defense: 0 }
    },
    dmgEfficiency: {
      Unarmored: { attack: 87, defense: 87 },
      LightArmor: { attack: 92, defense: 90 },
      HeavyArmor: { attack: 94, defense: 92 },
      Airplane: { attack: 87, defense: 87 },
      Ship: { attack: 93, defense: 90 },
      Submarine: { attack: 90, defense: 88 },
      Buildings: { attack: 90, defense: 88 },
      ProvinceMorale: { attack: 0, defense: 0 },
      Rocket: { attack: 0, defense: 0 }
    },
    dmgDistribution: {
      Unarmored: 79,
      LightArmor: 14,
      HeavyArmor: 7,
      Airplane: 0,
      Ship: 0,
      Submarine: 0,
      Buildings: 0,
      ProvinceMorale: 0,
      Rocket: 0
    },
    protectionValue: protectionValue,
    homeDefenceBonus: homeDefenseBonus
  };

  return (
    <div className="demo-container">
      <div className="demo-content">
        <button 
          onClick={() => setIsDialogOpen(true)}
          className="open-button"
        >
          Open Army Info Dialog
        </button>
        
        <ArmyInfoDialog 
          unitStack={sampleUnitStack}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          listId='Example'
          onProtectionChange={setProtectionValue}
          onHomeBonusChange={setHomeDefenseBonus}
        />
      </div>
    </div>
  );
};

