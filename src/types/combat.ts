// special thanks to the wiki
// https://wiki.callofwar.com/wiki/COMBAT

import { Unit } from "@/utils/Unit";
import { UnitClass } from ".";

export interface IDamageClassStats {
  attack: number;
  defense: number;
}

// note: the values are percentages of the damage potential
export type IDamageEfficiency = {
  [K in UnitClass as `${K}`]: IDamageClassStats;
}

// values are the raw attack numbers
export type IDamagePotential = {
  [K in UnitClass as `${K}`]: IDamageClassStats;
}

// values are the percentages of the enemy attack/defense
export type IDamageDistribution = {
  [K in UnitClass as `${K}`]: number;
}

export function createZeroDamagePotentialAndEfficiancy<T extends string>(
  keys: readonly T[]
): { [K in T]: IDamageClassStats } {
  return keys.reduce((acc, key) => {
    acc[key] = { attack: 0, defense: 0 };
    return acc;
  }, {} as any);
}

export function createZeroDamageDistribution<T extends string>(
  keys: readonly T[]
): { [K in T]: number } {
  return keys.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {} as any);
}

export type StackId = string;

export interface IUnitStack {
  id: StackId;
  units: Unit[];
  dmgEfficiency: IDamageEfficiency;
  dmgPotential: IDamagePotential;
  dmgDistribution: IDamageDistribution;
  protectionValue: number;
  // if this is true the stack should get a
  // 15% bonus to its protection and attack values
  homeDefenceBonus: Boolean;
}

