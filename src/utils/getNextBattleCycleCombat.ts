import { IBattleCycle, IStackCombat } from "@/types/battleCalculations";

export function getNextBattleCycleCombat(battleCycle: IBattleCycle) {
  let lowestTimeToStart = { timeToStart: Infinity };
  for (let combat of battleCycle.stackCombat) {
    if (combat.timeToStart > lowestTimeToStart.timeToStart)
      continue
    lowestTimeToStart = combat
  }
  if (Object.hasOwn(lowestTimeToStart, 'from'))
    return lowestTimeToStart as IStackCombat
}
