import { IBattleCycle } from "@/types/battleCalculations";
import { getNextBattleCycleCombat } from "./getNextBattleCycleCombat";
import { IUnitStack } from "@/types/combat";
import { applyDamage } from "./applyDamage";
import { Unit } from "./Unit";
import { getUnitStack } from "./getUnitStack";

export function getNextBattleCycle(battleCycle: IBattleCycle): { cycle?: IBattleCycle, shouldContinue: boolean } {
  const nextCombat = getNextBattleCycleCombat(battleCycle)

  if (!nextCombat) {
    console.warn('no battle cycle combat, exiting function')
    return { shouldContinue: false}
  }

  const fromArmy = battleCycle.stacks.find((stack) => stack.id === nextCombat.from) as IUnitStack
  const toArmy = battleCycle.stacks.find((stack) => stack.id === nextCombat.to) as IUnitStack

  let newFromArmyUnits: Unit[] = []
  let newToArmyUnits: Unit[] = []

  if (nextCombat.fromAction === 'attack')
    newToArmyUnits = applyDamage(fromArmy, toArmy, 'attack')

  if (nextCombat.fromAction === 'patrol')
    newToArmyUnits = applyDamage(fromArmy, toArmy, 'attack', 0.5)

  if (nextCombat.toAction === 'defend')
    newFromArmyUnits = applyDamage(fromArmy, toArmy, 'defend', nextCombat.fromAction === 'attack' ? 1 : 0.5)

  let newStackCombat = structuredClone(battleCycle.stackCombat.filter((c) => c.from !== nextCombat.from || c.to !== nextCombat.to))
  for (let combat of newStackCombat)
    combat.timeToStart -= battleCycle.endTime - battleCycle.startTime

  const fromStack = getUnitStack(newFromArmyUnits, fromArmy.protectionValue, fromArmy.homeDefenceBonus, fromArmy.id, fromArmy.terrain)
  const toStack = getUnitStack(newToArmyUnits, toArmy.protectionValue, toArmy.homeDefenceBonus, toArmy.id, toArmy.terrain)

  let newStacks = [...battleCycle.stacks.filter((s) => s.id !== fromArmy.id && s.id !== toArmy.id)]

  newStacks.push(fromStack)
  newStacks.push(toStack)

  if (fromStack.units.length && toStack.units.length)
    newStackCombat.push({
      ...nextCombat,
      timeToStart: nextCombat.repeatTime
    })
  else if (!fromStack.units.length)
    newStackCombat = newStackCombat.filter((c) => c.from !== nextCombat.from)
  else if (!toStack.units.length)
    newStackCombat = newStackCombat.filter((c) => c.to !== nextCombat.to)

  return {
    cycle: {
      stacks: newStacks,
      stackCombat: newStackCombat,
      startTime: battleCycle.endTime,
      endTime: Math.min(...newStackCombat.map((c) => c.timeToStart)) + battleCycle.endTime 
    },
    shouldContinue: Boolean(newStackCombat.length)
  }
}
