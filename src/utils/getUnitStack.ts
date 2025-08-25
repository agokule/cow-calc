import { IUnitStack, StackId } from "@/types/combat";
import { Unit } from "./Unit";
import { calculateDamageEfficiencyPotential } from "./calculateDamageEfficiencyPotential";
import { calculateDamageDistribution } from "./calculateDamageDistribution";

export function getUnitStack(units: Unit[], protection: number, homeDefence: Boolean, id: StackId): IUnitStack {
  let newUnitList: Unit[] = []
  
  for (const unit of units) {
    for (let i = 0; i < unit.quantity; i++)
      newUnitList.push(unit)
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


