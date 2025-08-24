"use client";

import React, { useContext, useEffect, useState, useCallback } from 'react';
import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge, BackgroundVariant, NodeChange, Edge, EdgeChange, Connection } from 'reactflow';
import 'reactflow/dist/style.css';

import { UnitListsContext } from '@/context/UnitListsContext';
import UnitListNode from '@/components/UnitListNode';
import ActionEdge, { stackCombatsToActionEdges, type ActionEdgeData } from '@/components/ActionEdge';
import { stringToNumber } from '@/utils/stringToNumber';
import { getUnitData } from '@/utils/getUnitData';
import { IUnitType } from '@/types';
import { getUnitStack } from '@/utils/getUnitStack';
import { StackId } from '@/types/combat';
import { ArmyInfoDialog } from '@/components/ArmyInfoDialog';
import StepNavigator from '@/components/StepNavigator';
import { createInitialBattleCycle, NodeDataConnections } from '@/utils/createInitialBattleCycle';
import { getNextBattleCycle } from '@/utils/getNextBattleCycle';
import { IBattleCycle } from '@/types/battleCalculations';

const nodeTypes = { unitList: UnitListNode } as const;
const edgeTypes = { action: ActionEdge } as const;

const ConnectionsPage = () => {
  const { yourUnitLists, setYourUnitLists, enemyUnitLists, setEnemyUnitLists } = useContext(UnitListsContext)!;
  const [nodes, setNodes] = useState<NodeDataConnections[]>([]);
  const [edges, setEdges] = useState<Edge<ActionEdgeData>[]>([]);
  const [isArmyInfoOpen, setIsArmyInfoOpen] = useState(false)
  const [selectedUnitStackId, setSelectedUnitStackId] = useState('')
  const [battleCycles, setBattleCycles] = useState<IBattleCycle[]>([])

  function selectArmyGroup(id: string) {
    setIsArmyInfoOpen(true)
    setSelectedUnitStackId(id)
  }

  function getNodeFromId(id: string) {
    for (const node of nodes)
      if (node.id == id)
        return node
  }

  useEffect(() => {
    const yourNodes: NodeDataConnections[] = yourUnitLists.map((units, index) => {
      for (let unit of units) {
        const data = getUnitData(unit.genericName, unit.mode) as IUnitType

        const maxHP = data.doctrineVariants[unit.doctrine][unit.level - 1].hitpoints
        unit.maxHp = maxHP

        if (typeof unit.hp === "string")
          unit.hp = stringToNumber(unit.hp as string, maxHP)
      }
      const id: StackId = `your-${index}` as StackId;
      return {
        id: id,
        type: 'unitList',
        position: { x: 100, y: 100 + index * 200 },
        data: { label: `Your Unit List ${index + 1}`, stack: getUnitStack(units, 0, false, id), openArmyInfo: selectArmyGroup },
      }
    });

    const enemyNodes: NodeDataConnections[] = enemyUnitLists.map((units, index) => {
      for (let unit of units) {
        const data = getUnitData(unit.genericName, unit.mode) as IUnitType
        const maxHP = data.doctrineVariants[unit.doctrine][unit.level - 1].hitpoints
        unit.maxHp = maxHP

        if (typeof unit.hp === "string")
          unit.hp = stringToNumber(unit.hp as string, maxHP)
      }
      const id: StackId = `enemy-${index}` as StackId;
      return {
        id: id,
        type: 'unitList',
        position: { x: 500, y: 100 + index * 200 },
        data: { label: `Enemy Unit List ${index + 1}`, stack: getUnitStack(units, 0, false, id), openArmyInfo: selectArmyGroup },
      }
    });

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
  }, []);

  const nextBattleCycle = (cycle: IBattleCycle) => {
    const next = getNextBattleCycle(cycle)
    if (!next) {
      // TODO: set the maximum of the StepNavigator so the user can't go farther
      console.warn("No more battle cycles")
      return
    }
    setBattleCycles([...battleCycles, next])

    let newYourList = []
    let newEnemyList = []
    for (const stack of next.stacks) {
      if (stack.id.startsWith('your'))
        newYourList.push(stack.units)
      else
        newEnemyList.push(stack.units)
    }

    setYourUnitLists(newYourList)
    setEnemyUnitLists(newEnemyList)

    let newNodes: NodeDataConnections[] = []
    for (const node of nodes) {
      const updatedStack = next.stacks.find(s => s.id === node.id)
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
    setEdges(stackCombatsToActionEdges(next.stackCombat, edges))
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
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
        }}
      />
    </div>
  );
};

export default ConnectionsPage;
