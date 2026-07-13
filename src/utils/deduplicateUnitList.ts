import { Unit } from "./Unit";

export function dedeplucateUnitList(units: Unit[]): Unit[] {
  const unitsFound = new Set<string>()
  const newUnits: Unit[] = []

  units.forEach((unit) => {
    if (unitsFound.has(unit.genericName))
      return
    unitsFound.add(unit.genericName)
    newUnits.push(unit)
  })
  return newUnits
}

export function dedeplucateUnitLists(lists: Unit[][]): Unit[][] {
  const newUnitLists: Unit[][] = []
  lists.forEach((list) => {
    newUnitLists.push(dedeplucateUnitList(list))
  })
  return newUnitLists
}
