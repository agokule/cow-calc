import { IDamageEfficiency, createZeroDamagePotentialAndEfficiancy, IDamageClassStats, IDamagePotential, IDamageDistribution, createZeroDamageDistribution } from "@/types/combat"
import { UNIT_CLASSES, IUnitType, UnitClass } from "@/types"
import { Unit } from "./Unit"
import { getUnitData } from "./getUnitData"
import { round } from "./rounding"

export function calculateDamageEfficiencyPotential(unitList: Unit[]) {
  let dmgEfficiency: IDamageEfficiency =
    createZeroDamagePotentialAndEfficiancy(UNIT_CLASSES)
  let dmgPotential: IDamagePotential =
    createZeroDamagePotentialAndEfficiancy(UNIT_CLASSES)
  
  for (const key of UNIT_CLASSES) {
    let sortedByClass: Unit[] = unitList
    const combatStatisticsKey = `vs${key}` as const

    sortedByClass.sort((a: Unit, b: Unit) => {
      const dataA = getUnitData(a.genericName, a.mode) as IUnitType
      const unitStatsA = dataA.doctrineVariants[a.doctrine][a.level - 1]

      const attackA = unitStatsA.combatStatistics[combatStatisticsKey].attack
      const defenseA = unitStatsA.combatStatistics[combatStatisticsKey].defense || 0
      const avgA = (attackA + defenseA) / 2

      const dataB = getUnitData(b.genericName, b.mode) as IUnitType
      const unitStatsB = dataB.doctrineVariants[b.doctrine][b.level - 1]

      const attackB = unitStatsB.combatStatistics[combatStatisticsKey].attack
      const defenseB = unitStatsB.combatStatistics[combatStatisticsKey].defense || 0
      const avgB = (attackB + defenseB) / 2

      // we want descending order here
      return avgB - avgA
    })


    let top10stats: IDamageClassStats = { attack: 0, defense: 0 }
    let allStats: IDamageClassStats = { attack: 0, defense: 0 }

    let i = 0
    for (const unit of sortedByClass) {
      const data = getUnitData(unit.genericName, unit.mode) as IUnitType
      const unitStats = data.doctrineVariants[unit.doctrine][unit.level - 1]

      allStats.attack += unitStats.combatStatistics[combatStatisticsKey].attack
      allStats.defense += unitStats.combatStatistics[combatStatisticsKey].defense || 0

      if (i > 9) continue

      top10stats.attack += unitStats.combatStatistics[combatStatisticsKey].attack
      top10stats.defense += unitStats.combatStatistics[combatStatisticsKey].defense || 0

      i++
    }

    dmgEfficiency[key].attack = (top10stats.attack / allStats.attack) * 100
    dmgEfficiency[key].defense = (top10stats.defense / allStats.defense) * 100

    dmgPotential[key] = top10stats
  }

  return [dmgEfficiency, dmgPotential]
}
