"use client";

import { useState, useCallback } from 'react';
import ReactFlow, { 
  Node, 
  Edge,
  Background,
  Controls,
  MarkerType,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import { Bot, RefreshCw } from 'lucide-react';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: (
        <div className="flex items-center gap-2 p-2">
          <Bot className="w-4 h-4" />
          <span>Research Agent</span>
        </div>
      )
    },
    position: { x: 0, y: 0 },
    className: 'bg-background border-2 border-primary rounded-lg'
  },
  {
    id: '2',
    data: { 
      label: (
        <div className="flex items-center gap-2 p-2">
          <Bot className="w-4 h-4" />
          <span>Content Agent</span>
        </div>
      )
    },
    position: { x: 200, y: 100 },
    className: 'bg-background border-2 border-primary rounded-lg'
  },
  {
    id: '3',
    data: { 
      label: (
        <div className="flex items-center gap-2 p-2">
          <Bot className="w-4 h-4" />
          <span>SEO Agent</span>
        </div>
      )
    },
    position: { x: 400, y: 0 },
    className: 'bg-background border-2 border-primary rounded-lg'
  },
  {
    id: '4',
    type: 'output',
    data: { 
      label: (
        <div className="flex items-center gap-2 p-2">
          <Bot className="w-4 h-4" />
          <span>Social Media Agent</span>
        </div>
      )
    },
    position: { x: 600, y: 100 },
    className: 'bg-background border-2 border-primary rounded-lg'
  },
];

const initialEdges: Edge[] = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2', 
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    className: 'stroke-primary',
    label: 'Trends Data'
  },
  { 
    id: 'e2-3', 
    source: '2', 
    target: '3', 
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    className: 'stroke-primary',
    label: 'Draft Content'
  },
  { 
    id: 'e3-4', 
    source: '3', 
    target: '4', 
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    className: 'stroke-primary',
    label: 'Optimized Content'
  },
];

export function AgentWorkflow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isSimulating, setIsSimulating] = useState(false);

  const startSimulation = useCallback(() => {
    setIsSimulating(true);
    const simulation = async () => {
      // Simulate agent activities
      for (let i = 0; i < nodes.length; i++) {
        const newNodes = [...nodes];
        const node = newNodes[i];
        if (node) {
          newNodes[i] = {
            ...node,
            className: 'bg-background border-2 border-primary rounded-lg shadow-lg shadow-primary/20',
            id: node.id // Ensure id is preserved
          };
        }
        setNodes(newNodes);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      setIsSimulating(false);
    };
    simulation();
  }, [nodes, setNodes]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-secondary/30 p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold">Multi-Agent Collaboration</h3>
        <button
          onClick={() => !isSimulating && startSimulation()}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
          {isSimulating ? 'Simulating...' : 'Start Simulation'}
        </button>
      </div>
      <div className="w-full h-[400px] bg-background/95 rounded-lg border border-border">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </motion.div>
  );
}
