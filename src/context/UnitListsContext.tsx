"use client";

import { createContext, useState, ReactNode } from 'react';
import { Unit } from '@/utils/Unit';

interface UnitListsContextType {
  yourUnitLists: Unit[][];
  setYourUnitLists: React.Dispatch<React.SetStateAction<Unit[][]>>;
  enemyUnitLists: Unit[][];
  setEnemyUnitLists: React.Dispatch<React.SetStateAction<Unit[][]>>;
}

export const UnitListsContext = createContext<UnitListsContextType | undefined>(undefined);

export const UnitListsProvider = ({ children }: { children: ReactNode }) => {
  const [yourUnitLists, setYourUnitLists] = useState<Unit[][]>([[]]);
  const [enemyUnitLists, setEnemyUnitLists] = useState<Unit[][]>([[]]);

  return (
    <UnitListsContext.Provider value={{ yourUnitLists, setYourUnitLists, enemyUnitLists, setEnemyUnitLists }}>
      {children}
    </UnitListsContext.Provider>
  );
};
