"use client";

import React, { useContext, useEffect, useState, useCallback } from 'react';
import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';

import { UnitListsContext } from '@/context/UnitListsContext';
import UnitListNode from '@/components/UnitListNode';
import ActionEdge, { type ActionEdgeData } from '@/components/ActionEdge';

const nodeTypes = { unitList: UnitListNode };
const edgeTypes = { action: ActionEdge };

const ConnectionsPage = () => {
  const { yourUnitLists, enemyUnitLists } = useContext(UnitListsContext)!;
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const yourNodes = yourUnitLists.map((units, index) => ({
      id: `your-${index}`,
      type: 'unitList',
      position: { x: 100, y: 100 + index * 200 },
      data: { label: `Your Unit List ${index + 1}`, units },
    }));

    const enemyNodes = enemyUnitLists.map((units, index) => ({
      id: `enemy-${index}`,
      type: 'unitList',
      position: { x: 500, y: 100 + index * 200 },
      data: { label: `Enemy Unit List ${index + 1}`, units },
    }));

    setNodes([...yourNodes, ...enemyNodes]);
  }, [yourUnitLists, enemyUnitLists]);

  const onNodesChange = React.useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback((params) => {
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
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default ConnectionsPage;