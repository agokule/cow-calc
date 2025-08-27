import { IUnitStack, StackId } from "@/types/combat";
import { Unit } from "./Unit";
import { calculateDamageEfficiencyPotential } from "./calculateDamageEfficiencyPotential";
import { calculateDamageDistribution } from "./calculateDamageDistribution";
import { Terrain } from "@/types";

export function getUnitStack(units: Unit[], protection: number, homeDefence: Boolean, id: StackId, terrain: Terrain): IUnitStack {
  let newUnitList: Unit[] = []
  
  // this makes it easier to calculate
  // damage potential and damage efficiency
  for (const unit of units) {
    for (let i = 0; i < unit.quantity; i++)
      newUnitList.push(unit)
  }

  const [dmgEfficiency, dmgPotential] = calculateDamageEfficiencyPotential(newUnitList, homeDefence, terrain)
  const dmgDistribution = calculateDamageDistribution(newUnitList)

  return {
    id: id,
    units: newUnitList,
    dmgPotential: dmgPotential,
    dmgEfficiency: dmgEfficiency,
    dmgDistribution: dmgDistribution,
    protectionValue: protection,
    homeDefenceBonus: homeDefence,
    terrain: terrain
  }
}


