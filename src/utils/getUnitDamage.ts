import { ICombatStatistics, IUnitType, Terrain } from "@/types";
import { getUnitData } from "./getUnitData";
import { Unit } from "./Unit";

export function getUnitDamage(unit: Unit, key: keyof ICombatStatistics, homeDefense: Boolean, terrain: Terrain) {
  const dataA = getUnitData(unit.genericName, unit.mode) as IUnitType
  const unitStats = dataA.doctrineVariants[unit.doctrine][unit.level - 1]

  let attack = unitStats.combatStatistics[key].attack
  let defense = unitStats.combatStatistics[key].defense || 0

  const hpPercent = Math.round((unit.hp as number) * 100 / (unit.maxHp as number))
  let dmgEfficiency;

  if (hpPercent <= 20)
    dmgEfficiency = 20
  else
    dmgEfficiency = hpPercent

  if (homeDefense) {
    // get a 15% bonus
    attack *= 1.15
    defense *= 1.15
  }

  const terrainKey = terrain.at(0)?.toLowerCase() + terrain.slice(1) as keyof typeof unitStats.terrainEffects
  const terrainBonus = (unitStats.terrainEffects[terrainKey].strengthModifier || 0)
  attack *= 1 + terrainBonus
  defense *= 1 + terrainBonus

  return {
    attack: attack * dmgEfficiency / 100,
    defense: defense * dmgEfficiency / 100
  }
}
