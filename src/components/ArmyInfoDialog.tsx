import React, { useState } from 'react';
import './ArmyInfoDialog.css';

import { IUnitStack } from '@/types/combat';
import { UNIT_CLASSES } from '@/types';
import { round } from '@/utils/rounding';
import { UnitIcon } from './UnitIcon';

interface ArmyInfoDialogProps {
  unitStack: IUnitStack;
  isOpen: boolean;
  onClose: () => void;
  listId: string;
  onProtectionChange?: (value: number) => void;
  onHomeBonusChange?: (value: boolean) => void;
}

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
                    {round(unitStack.dmgPotential[unitClass].attack, 1)}
                  </div>
                  <div className="value-cell defense-value">
                    {round(unitStack.dmgPotential[unitClass].defense, 1)}
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
          <div className="footer" data-tour="army-info-footer">
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

