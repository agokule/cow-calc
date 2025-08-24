import { UNIT_CLASSES, UnitName } from "@/types";
import { IUnitStack } from "@/types/combat";
import { getUnitData } from "./getUnitData";
import { Unit } from "./Unit";

export function applyDamage(attacker: IUnitStack, defender: IUnitStack, toApply: 'attack' | 'defend', dmgFactor: number = 1) {
  let newUnits: Unit[] = []
  const damageDealer = toApply === 'attack' ? attacker : defender
  const damageReciever = toApply === 'attack' ? defender : attacker

  for (const unitClass of UNIT_CLASSES) {
    let dmgToApply = damageDealer.dmgPotential[unitClass].attack * (damageReciever.dmgDistribution[unitClass] / 100) * dmgFactor

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
      (unit.hp as number) *= unit.quantity;
      (unit.hp as number) -= dmgToApply * (unit.quantity / numUnits);
      (unit.hp as number) /= unit.quantity;
      newUnits.push(unit)
    }
  }

  return newUnits
}
