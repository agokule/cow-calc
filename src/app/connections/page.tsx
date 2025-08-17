"use client";

import React, { useContext, useEffect, useState, useCallback } from 'react';
import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge, BackgroundVariant, NodeChange, Edge, EdgeChange, Connection } from 'reactflow';
import 'reactflow/dist/style.css';

import { UnitListsContext } from '@/context/UnitListsContext';
import UnitListNode from '@/components/UnitListNode';
import ActionEdge, { type ActionEdgeData } from '@/components/ActionEdge';
import { stringToNumber } from '@/utils/stringToNumber';
import { getUnitData } from '@/utils/getUnitData';
import { IUnitType } from '@/types';
import { getUnitStack } from '@/utils/getUnitStack';
import { IUnitStack, StackId } from '@/types/combat';
import { ArmyInfoDialog } from '@/components/ArmyInfoDialog';
import StepNavigator from '@/components/StepNavigator';

const nodeTypes = { unitList: UnitListNode } as const;
const edgeTypes = { action: ActionEdge } as const;

interface NodeDataConnections {
  id: string;
  type: string;
  position: { x: number; y: number; };
  data: { label: string; stack: IUnitStack, openArmyInfo: (id: string) => void };
}

const ConnectionsPage = () => {
  const { yourUnitLists, enemyUnitLists } = useContext(UnitListsContext)!;
  const [nodes, setNodes] = useState<NodeDataConnections[]>([]);
  const [edges, setEdges] = useState<Edge<ActionEdgeData>[]>([]);
  const [isArmyInfoOpen, setIsArmyInfoOpen] = useState(false)
  const [selectedUnitStackId, setSelectedUnitStackId] = useState('')

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
  }, [yourUnitLists, enemyUnitLists]);

  const onNodesChange = React.useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds) as NodeDataConnections[]),
    []
  );
  const onEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds: Edge<ActionEdgeData>[]) => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback((params: Connection) => {
    const defaultData: ActionEdgeData = { sourceAction: 'nothing', targetAction: 'nothing', hours: 0, minutes: 0 };
    setEdges((eds) => addEdge({ ...params, type: 'action', data: defaultData, animated: false }, eds));
  }, []);

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
      <StepNavigator></StepNavigator>
    </div>
  );
};

export default ConnectionsPage;
