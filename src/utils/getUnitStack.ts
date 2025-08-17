import { IUnitStack, IDamagePotential, createZeroDamagePotentialAndEfficiancy, StackId } from "@/types/combat";
import { Unit } from "./Unit";
import { IUnitType, UNIT_CLASSES  } from "@/types";
import { getUnitData } from "./getUnitData";
import { calculateDamageEfficiencyPotential } from "./calculateDamageEfficiencyPotential";
import { calculateDamageDistribution } from "./calculateDamageDistribution";

export function getUnitStack(units: Unit[], protection: number, homeDefence: Boolean, id: StackId): IUnitStack {
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

  const [dmgEfficiency, dmgPotential] = calculateDamageEfficiencyPotential(newUnitList)
  const dmgDistribution = calculateDamageDistribution(newUnitList)

  return {
    id: id,
    units: newUnitList,
    dmgPotential: dmgPotential,
    dmgEfficiency: dmgEfficiency,
    dmgDistribution: dmgDistribution,
    protectionValue: protection,
    homeDefenceBonus: homeDefence
  }
}


