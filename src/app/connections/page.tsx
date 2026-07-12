"use client";

import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge, BackgroundVariant, NodeChange, Edge, EdgeChange, Connection } from 'reactflow';
import 'reactflow/dist/style.css';

import { UnitListsContext } from '@/context/UnitListsContext';
import UnitListNode from '@/components/UnitListNode';
import ActionEdge, { stackCombatsToActionEdges, type ActionEdgeData } from '@/components/ActionEdge';
import { stringToNumber } from '@/utils/stringToNumber';
import { getUnitData } from '@/utils/getUnitData';
import { IUnitType, Terrain, UnitListType } from '@/types';
import { getUnitStack } from '@/utils/getUnitStack';
import { StackId } from '@/types/combat';
import { ArmyInfoDialog } from '@/components/ArmyInfoDialog';
import StepNavigator from '@/components/StepNavigator';
import { createInitialBattleCycle, NodeDataConnections } from '@/utils/createInitialBattleCycle';
import { getNextBattleCycle } from '@/utils/getNextBattleCycle';
import { IBattleCycle } from '@/types/battleCalculations';
import { secondsToDuration } from '@/utils/secondsToDuration';
import { Unit } from '@/utils/Unit';
import { toTitleCase } from '@/utils/toTitleCase';
import GuidedTour, { TourLaunchButton } from '@/components/GuidedTour/GuidedTour';
import { useTourState } from '@/components/GuidedTour/useTourState';
import { connectionsTourSteps } from '@/components/GuidedTour/connectionsTourSteps';
import Link from 'next/link';

const nodeTypes = { unitList: UnitListNode } as const;
const edgeTypes = { action: ActionEdge } as const;

const ConnectionsPage = () => {
  const { yourUnitLists, setYourUnitLists, enemyUnitLists, setEnemyUnitLists } = useContext(UnitListsContext)!;
  const [nodes, setNodes] = useState<NodeDataConnections[]>([]);
  const [edges, setEdges] = useState<Edge<ActionEdgeData>[]>([]);
  const [isArmyInfoOpen, setIsArmyInfoOpen] = useState(false)
  const [selectedUnitStackId, setSelectedUnitStackId] = useState('')
  const [battleCycles, setBattleCycles] = useState<IBattleCycle[]>([])
  const [maxCycles, setMaxCycles] = useState<number | undefined>(undefined)
  const [autoNext, setAutoNext] = useState(false) // this is used for the finish button
  const [currentCycleIndex, setCurrentCycleIndex] = useState(0)
  const tour = useTourState("cow-calc-tour-connections-v1");
  const wasArmyInfoOpen = useRef(false);

  console.log("battle cycles", battleCycles)

  function selectArmyGroup(id: string) {
    setIsArmyInfoOpen(true)
    setSelectedUnitStackId(id)
    tour.advanceIfStepIs(connectionsTourSteps, "view-army-info");
  }

  // The tour's "protection / home defense" step targets fields inside this
  // dialog, so move on once the person actually closes it.
  useEffect(() => {
    if (wasArmyInfoOpen.current && !isArmyInfoOpen) {
      tour.advanceIfStepIs(connectionsTourSteps, "army-info-dialog");
    }
    wasArmyInfoOpen.current = isArmyInfoOpen;
  }, [isArmyInfoOpen, tour.advanceIfStepIs]);

  function getNodeFromId(id: string) {
    for (const node of nodes)
      if (node.id == id)
        return node
  }

  function selectTerrain(terrain: Terrain, id: StackId) {
    setNodes((nodes) => {
      for (const node of nodes) {
        if (node.id === id) {
          node.data.stack = getUnitStack(
            node.data.stack.units,
            node.data.stack.protectionValue,
            node.data.stack.homeDefenceBonus,
            node.data.stack.id,
            terrain
          )
          break
        }
      }
      return nodes
    })
  }

  useEffect(() => {
    // Helper function to process unit lists and generate node data
    const createNodes = (
      unitLists: Unit[][],
      prefix: 'your' | 'enemy',
      xPosition: number
    ): NodeDataConnections[] => {
      return unitLists.map((units, index) => {
        for (let unit of units) {
          const data = getUnitData(unit.genericName, unit.mode) as IUnitType;
          const maxHP = data.doctrineVariants[unit.doctrine][unit.level - 1].hitpoints;
          unit.maxHp = maxHP;

          if (typeof unit.hp === "string") {
            unit.hp = stringToNumber(unit.hp, maxHP);
          }
        }

        const id: StackId = `${prefix}-${index}` as StackId;

        return {
          id,
          type: 'unitList',
          position: { x: xPosition, y: 100 + index * 200 },
          data: {
            label: `${toTitleCase(prefix)} Unit List ${index + 1}`,
            stack: getUnitStack(units, 0, false, id, 'Plains'),
            openArmyInfo: selectArmyGroup,
            onTerrainChange: selectTerrain
          },
        };
      });
    };

    const yourNodes = createNodes(yourUnitLists, 'your', 100);
    const enemyNodes = createNodes(enemyUnitLists, 'enemy', 500);

    setNodes([...yourNodes, ...enemyNodes]);
  }, []);

  const onNodesChange = React.useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds) as NodeDataConnections[]),
    []
  );
  const onEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds: Edge<ActionEdgeData>[]) => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback((params: Connection) => {
    const defaultData: ActionEdgeData = { sourceAction: 'nothing', targetAction: 'nothing', hours: 0, minutes: 0 };
    setEdges((eds) => addEdge({ ...params, type: 'action', data: defaultData, animated: false }, eds));
    tour.advanceIfStepIs(connectionsTourSteps, "connect-stacks");
  }, [tour.advanceIfStepIs]);

  const nextBattleCycle = (cycle: IBattleCycle) => {
    const next = getNextBattleCycle(cycle)
    let numBattleCycles = battleCycles.length

    if (next.cycle) {
      const cycle: IBattleCycle = next.cycle;
      setBattleCycles((prev) => {
        numBattleCycles = prev.length
        return [...prev, cycle]
      })
      setCurrentCycle(cycle)
    }

    if (!next.shouldContinue) {
      console.warn("No more battle cycles")
      setMaxCycles(numBattleCycles)
    }
    return next.shouldContinue
  }

  const setCurrentCycle = (current: IBattleCycle) => {
    let newYourList = []
    let newEnemyList = []
    for (const stack of current.stacks) {
      if (stack.id.startsWith('your'))
        newYourList.push(stack.units)
      else
        newEnemyList.push(stack.units)
    }

    setYourUnitLists(newYourList)
    setEnemyUnitLists(newEnemyList)

    let newNodes: NodeDataConnections[] = []
    for (const node of nodes) {
      const updatedStack = current.stacks.find(s => s.id === node.id)
      if (updatedStack) {
        newNodes.push({
          ...node,
          data: {
            ...node.data,
            stack: updatedStack
          }
        })
      } else {
        newNodes.push(node)
      }
    }

    setNodes(newNodes)
    setEdges(stackCombatsToActionEdges(current.stackCombat, edges))
  }

  if (autoNext)
    setAutoNext(nextBattleCycle(battleCycles[battleCycles.length - 1]))

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div className="floating-button-container" style={{right: "unset", left: "1rem"}}>
        <Link href="/" onClick={() => tour.close()}>
          <button className="floating-button" data-tour="connections-button">
            Main Page
          </button>
        </Link>
      </div>
      <GuidedTour
        steps={connectionsTourSteps}
        isOpen={tour.isOpen}
        stepIndex={tour.stepIndex}
        onStepChange={tour.setStepIndex}
        onClose={tour.close}
      />
      {!tour.isOpen && <TourLaunchButton onClick={tour.restart} />}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        deleteKeyCode={['Delete', 'Backspace']}
      >
        <Controls />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
      {
        isArmyInfoOpen && selectedUnitStackId ? 
        <ArmyInfoDialog
          isOpen={isArmyInfoOpen}
          onClose={() => {setIsArmyInfoOpen(false)}}
          unitStack={(getNodeFromId(selectedUnitStackId) as NodeDataConnections).data.stack}
          listId={selectedUnitStackId}
          onProtectionChange={(newProtection) => {
              (getNodeFromId(selectedUnitStackId) as NodeDataConnections).data.stack.protectionValue = newProtection
              setNodes(nodes)
            }}
          onHomeBonusChange={(newBonus) => {
              (getNodeFromId(selectedUnitStackId) as NodeDataConnections).data.stack.homeDefenceBonus = newBonus
              setNodes(nodes)
            }}
        /> : null
      }
      <StepNavigator
        onStart={() => {
          const initial = createInitialBattleCycle(nodes, edges)
          setBattleCycles([initial])
          nextBattleCycle(initial)
          tour.advanceIfStepIs(connectionsTourSteps, "start-battle");
        }}
        onNext={(curr) => {
          if (!battleCycles[curr])
            nextBattleCycle(battleCycles[curr - 1] as IBattleCycle)
          else
            setCurrentCycle(battleCycles[curr] as IBattleCycle)
          setCurrentCycleIndex(curr)
        }}
        onPrev={(curr) => {
          setCurrentCycle(battleCycles[curr] as IBattleCycle)
          setCurrentCycleIndex(curr)
        }}
        onFirst={() => {
          setCurrentCycle(battleCycles[0] as IBattleCycle)
          setCurrentCycleIndex(0)
        }}
        onLast={(curr) => {
          setCurrentCycle(battleCycles[curr] as IBattleCycle)
          setCurrentCycleIndex(curr)
        }}
        onFinish={(curr) => {
          setBattleCycles(battleCycles.slice(0, curr + 1))
          setAutoNext(true)
          setCurrentCycleIndex(curr)
        }}
        // says something like "1h30m"
        smallText={
          battleCycles.length === 0 ? '' : `${secondsToDuration(battleCycles[currentCycleIndex].startTime)}-${secondsToDuration(battleCycles[currentCycleIndex].endTime)}`
        }
        max={maxCycles}
        hasStarted={Boolean(battleCycles.length)}
      />
    </div>
  );
};

export default ConnectionsPage;
