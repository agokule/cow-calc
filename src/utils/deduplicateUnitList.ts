import { Unit } from "./Unit";

export function dedeplicateUnitList(units: Unit[]): Unit[] {
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

export function dedeplicateUnitLists(lists: Unit[][]): Unit[][] {
  const newUnitLists: Unit[][] = []
  lists.forEach((list) => {
    newUnitLists.push(dedeplicateUnitList(list))
  })
  return newUnitLists
}
