"use client";

import { createContext, useState, ReactNode, useEffect } from 'react';
import { Unit } from '@/utils/Unit';
import { useSessionStorage } from '@/hooks/useSessionStorage';

interface UnitListsContextType {
  yourUnitLists: Unit[][];
  setYourUnitLists: (val: Unit[][]) => void;
  enemyUnitLists: Unit[][];
  setEnemyUnitLists: (val: Unit[][]) => void;
  setAllUnitLists: (val: UnitListsType) => void;
}

interface UnitListsType {
  yourUnitLists: Unit[][];
  enemyUnitLists: Unit[][];
}

export const UnitListsContext = createContext<UnitListsContextType | undefined>(undefined);

export const UnitListsProvider = ({ children }: { children: ReactNode }) => {
  const [unitLists, setUnitLists] = useSessionStorage<UnitListsType>('unit-lists', { yourUnitLists: [[]], enemyUnitLists: [[]] })

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  })
  
  if (!isMounted)
    return null;

  const yourUnitLists = unitLists.yourUnitLists;
  const enemyUnitLists = unitLists.enemyUnitLists;

  const setUnitList = (list: keyof UnitListsType, val: Unit[][]) => {
    const other: keyof UnitListsType = list === 'yourUnitLists' ? 'enemyUnitLists' : 'yourUnitLists'
    const otherVal: Unit[][] = other === 'yourUnitLists' ? yourUnitLists : enemyUnitLists

    let newULT: Partial<UnitListsType> = {}
    newULT[list] = val;
    newULT[other] = otherVal;
    console.log("newULT:", newULT, newULT.yourUnitLists, newULT.enemyUnitLists)
    setUnitLists(newULT as UnitListsType)
  }

  const setYourUnitLists = (val: Unit[][]) => setUnitList('yourUnitLists', val)
  const setEnemyUnitLists = (val: Unit[][]) => setUnitList('enemyUnitLists', val)
  const setAllUnitLists = (val: UnitListsType) => setUnitLists(val)

  return (
    <UnitListsContext.Provider value={{ yourUnitLists, setYourUnitLists, enemyUnitLists, setEnemyUnitLists, setAllUnitLists }}>
      {children}
    </UnitListsContext.Provider>
  );
};
