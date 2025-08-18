import { IUnitStack, StackId } from "./combat";

export type EdgeAction = "attack" | "defend" | "patrol" | "nothing" | "both";

export interface IStackCombat {
  from: StackId;
  to: StackId;

  fromAction: EdgeAction;
  toAction: EdgeAction;

  timeToStart: number; // in seconds
  repeatTime: number; // in seconds
}

export interface IBattleCycle {
  stacks: IUnitStack[];
  stackCombat: IStackCombat[];
  // an index of stackCombat
  nextCombatEvent: number;

  startTime: number; // in seconds
  endTime: number; // in seconds
}

