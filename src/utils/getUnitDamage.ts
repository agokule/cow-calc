import { ICombatStatistics, IUnitType } from "@/types";
import { getUnitData } from "./getUnitData";
import { Unit } from "./Unit";

export function getUnitDamage(unit: Unit, key: keyof ICombatStatistics) {
  const dataA = getUnitData(unit.genericName, unit.mode) as IUnitType
  const unitStats = dataA.doctrineVariants[unit.doctrine][unit.level - 1]

  const attack = unitStats.combatStatistics[key].attack
  const defense = unitStats.combatStatistics[key].defense || 0

  const hpPercent = Math.round((unit.hp as number) * 100 / (unit.maxHp as number))
  let dmgEfficiency;

  if (hpPercent <= 20)
    dmgEfficiency = 20
  else
    dmgEfficiency = hpPercent

  return {
    attack: attack * dmgEfficiency / 100,
    defense: defense * dmgEfficiency / 100
  }
}
