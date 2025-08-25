import { UNIT_CLASSES, UnitName } from "@/types";
import { IUnitStack } from "@/types/combat";
import { getUnitData } from "./getUnitData";
import { Unit } from "./Unit";

export function applyDamage(attacker: IUnitStack, defender: IUnitStack, toApply: 'attack' | 'defend', dmgFactor: number = 1) {
  let newUnits: Unit[] = []
  const damageDealer = toApply === 'attack' ? attacker : defender
  const damageReciever = toApply === 'attack' ? defender : attacker

  for (const unitClass of UNIT_CLASSES) {
    const dmgPotential = toApply === 'attack'
      ? damageDealer.dmgPotential[unitClass].attack 
      : damageDealer.dmgPotential[unitClass].defense;

    let dmgToApply = dmgPotential * (damageReciever.dmgDistribution[unitClass] / 100) * dmgFactor

    let dmgReduction = damageReciever.protectionValue
    if (damageReciever.homeDefenceBonus)
      dmgReduction += 15
    dmgToApply -= dmgToApply * dmgReduction / 100
    
    // homeDefenceBonus for attack damage is
    // already accounted in the getUnitDamage()

    let unitsFound = new Set<UnitName>()
    let numUnits = 0
    const units = structuredClone(damageReciever.units.filter((u) => {
      if (unitsFound.has(u.genericName as UnitName))
        return false
      unitsFound.add(u.genericName as UnitName)
      numUnits += u.quantity
      return getUnitData(u.genericName, u.mode)?.doctrineVariants.Allies[0].type === unitClass
    }))

    for (let unit of units) {
      const dmgAppliedStack = dmgToApply * (unit.quantity / numUnits)
      const dmgApplied = dmgAppliedStack / unit.quantity;

      const unitsKillable = (unit.hp as number) <= ((unit.maxHp as number) / 2)
      const unitsKilled = Math.floor(dmgAppliedStack / (unit.hp as number))

      if (unitsKilled >= 1 && unitsKillable)
        unit.quantity -= unitsKilled;

      (unit.hp as number) -= dmgApplied;

      newUnits.push(unit)
    }
  }

  return newUnits
}
