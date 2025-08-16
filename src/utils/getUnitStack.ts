import { IUnitStack, IDamagePotential, createZeroDamageDistribution, createZeroDamagePotentialAndEfficiancy, IDamageEfficiency, IDamageClassStats } from "@/types/combat";
import { Unit } from "./Unit";
import { ICombatStatistics, IUnitType, UNIT_CLASSES, UnitClass } from "@/types";
import { getUnitData } from "./getUnitData";
import { combineStats } from "./combineStats";
import { calculateDamageEfficiencyPotentialDistribution } from "./calculateDamageEfficiencyPotentialDistribution";

export function getUnitStack(units: Unit[], protection: number, homeDefence: Boolean) {
  let totalDmgPotUnprocessed: IDamagePotential =
    createZeroDamagePotentialAndEfficiancy(UNIT_CLASSES);

  let newUnitList: Unit[] = []
  
  for (const unit of units) {
    for (let i = 0; i < unit.quantity; i++)
      newUnitList.push(unit)
  }

  for (const unit of newUnitList) {
    const data = getUnitData(unit.genericName, unit.mode) as IUnitType
    const unitStats = data.doctrineVariants[unit.doctrine][unit.level - 1]

    for (const key of UNIT_CLASSES) {
      const combatStatisticsKey = `vs${key}` as const
      
      totalDmgPotUnprocessed[key].attack += unitStats.combatStatistics[combatStatisticsKey].attack
      totalDmgPotUnprocessed[key].defense += unitStats.combatStatistics[combatStatisticsKey].defense || 0
    }
  }

  console.log("potential damage", totalDmgPotUnprocessed)

  const [dmgEfficiency, dmgPotential] = calculateDamageEfficiencyPotentialDistribution(newUnitList)

  console.log(dmgEfficiency, dmgPotential)
}


