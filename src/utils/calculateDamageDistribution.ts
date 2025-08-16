import { createZeroDamageDistribution, IDamageDistribution } from "@/types/combat";
import { Unit } from "./Unit";
import { UNIT_CLASSES, IUnitType, UnitClass } from "@/types";
import { getUnitData } from "./getUnitData";
import { round } from "./rounding";

export function calculateDamageDistribution(unitList: Unit[]) {
  let distribution: IDamageDistribution = createZeroDamageDistribution(UNIT_CLASSES)
  for (const unit of unitList) {
    console.log(unit.category, unit.genericName)
    
    const data = getUnitData(unit.genericName, unit.mode) as IUnitType
    const unitStats = data.doctrineVariants[unit.doctrine][unit.level - 1]
    distribution[unitStats.type] += 1
  }

  for (const key of Object.keys(distribution) as UnitClass[])
    distribution[key] = round((distribution[key] / unitList.length) * 100)

  return distribution
}
