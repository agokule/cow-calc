import { IUnitStack, StackId } from "@/types/combat";
import { IStackCombat, IBattleCycle } from "@/types/battleCalculations";
import { ActionEdgeData } from "@/components/ActionEdge";
import { Edge } from "reactflow";

export interface NodeDataConnections {
  id: string;
  type: string;
  position: { x: number; y: number; };
  data: { label: string; stack: IUnitStack, openArmyInfo: (id: string) => void };
}

export function createInitialBattleCycle(nodes: NodeDataConnections[], connections: Edge<ActionEdgeData>[]): IBattleCycle {
  const stacks: IUnitStack[] = []
  for (const node of nodes)
    stacks.push(node.data.stack)

  const combats: IStackCombat[] = []
  const timesToStart: number[] = []
  for (const edge of connections) {
    const data = edge.data as ActionEdgeData

    const timeToStart = (data?.hours ?? 0) * 3600 + (data?.minutes ?? 0) * 60
    const repeatTime = (data?.repeatHours ?? 0) * 3600 + (data?.repeatMinutes ?? 0) * 60

    timesToStart.push(timeToStart)

    combats.push({
      from: edge.source as StackId,
      to: edge.target as StackId,
      fromAction: data?.sourceAction ?? "nothing",
      toAction: data?.targetAction ?? "nothing",
      timeToStart: timeToStart,
      repeatTime: repeatTime
    })
  }

  return {
    stacks: stacks,
    stackCombat: combats,
    startTime: 0,
    endTime: Math.min(...timesToStart)
  }
}


