import { IDamageEfficiency, createZeroDamagePotentialAndEfficiancy, IDamageClassStats, IDamagePotential } from "@/types/combat"
import { UNIT_CLASSES, Terrain } from "@/types"
import { Unit } from "./Unit"
import { getUnitDamage } from "./getUnitDamage"

export function calculateDamageEfficiencyPotential(unitList: Unit[], homeDefense: Boolean, terrain: Terrain) {
  let dmgEfficiency: IDamageEfficiency =
    createZeroDamagePotentialAndEfficiancy(UNIT_CLASSES)
  let dmgPotential: IDamagePotential =
    createZeroDamagePotentialAndEfficiancy(UNIT_CLASSES)
  
  for (const key of UNIT_CLASSES) {
    let sortedByClass: Unit[] = unitList
    const combatStatisticsKey = `vs${key}` as const

    sortedByClass.sort((a: Unit, b: Unit) => {
      const dmgA = getUnitDamage(a, combatStatisticsKey, homeDefense, terrain)
      const avgA = (dmgA.attack + dmgA.defense) / 2

      const dmgB = getUnitDamage(b, combatStatisticsKey, homeDefense, terrain)
      const avgB = (dmgB.attack + dmgB.defense) / 2

      // we want descending order here
      return avgB - avgA
    })


    let top10stats: IDamageClassStats = { attack: 0, defense: 0 }
    let allStats: IDamageClassStats = { attack: 0, defense: 0 }

    let i = 0
    for (const unit of sortedByClass) {
      const unitDmg = getUnitDamage(unit, combatStatisticsKey, homeDefense, terrain)

      allStats.attack += unitDmg.attack
      allStats.defense += unitDmg.defense

      if (i > 9) continue

      top10stats.attack += unitDmg.attack
      top10stats.defense += unitDmg.defense

      i++
    }

    dmgEfficiency[key].attack = (top10stats.attack / allStats.attack) * 100
    dmgEfficiency[key].defense = (top10stats.defense / allStats.defense) * 100

    dmgPotential[key] = top10stats
  }

  return [dmgEfficiency, dmgPotential]
}
