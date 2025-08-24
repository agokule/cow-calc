import { IBattleCycle } from "@/types/battleCalculations";
import { getNextBattleCycleCombat } from "./getNextBattleCycleCombat";
import { IUnitStack } from "@/types/combat";
import { applyDamage } from "./applyDamage";
import { Unit } from "./Unit";
import { getUnitStack } from "./getUnitStack";

export function getNextBattleCycle(battleCycle: IBattleCycle): IBattleCycle | void {
  const nextCombat = getNextBattleCycleCombat(battleCycle)

  if (!nextCombat) {
    console.warn('no battle cycle combat, exiting function')
    return
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

  const newStackCombat = structuredClone(battleCycle.stackCombat)
  const timesToStart: number[] = []
  for (const combat of newStackCombat) {
    if (combat.from === nextCombat.from && combat.to === nextCombat.to)
      combat.timeToStart = combat.repeatTime
    else
      combat.timeToStart -= battleCycle.endTime - battleCycle.startTime

    timesToStart.push(combat.timeToStart)
  }

  const fromStack = getUnitStack(newFromArmyUnits, fromArmy.protectionValue, fromArmy.homeDefenceBonus, fromArmy.id)
  const toStack = getUnitStack(newToArmyUnits, toArmy.protectionValue, toArmy.homeDefenceBonus, toArmy.id)

  return {
    stacks: [
      ...battleCycle.stacks.filter((s) => s.id !== fromArmy.id && s.id !== toArmy.id),
      fromStack,
      toStack
    ],
    stackCombat: newStackCombat,
    startTime: battleCycle.endTime,
    endTime: Math.min(...timesToStart) + battleCycle.endTime
  }
}
