"use client";

import { useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { WorkflowNode } from "./workflow-node";
import { WorkflowNode as WorkflowNodeType } from "@/types/skills";
import { Position, snapToGrid } from "@/lib/utils/workflow";
import { motion } from "framer-motion";

interface WorkflowCanvasProps {
  skillId: string;
  selectedNode: string | null;
  onNodeSelect: (nodeId: string | null) => void;
  nodes: WorkflowNodeType[];
  onNodesChange: (nodes: WorkflowNodeType[]) => void;
}

export function WorkflowCanvas({ 
  skillId, 
  selectedNode, 
  onNodeSelect,
  nodes,
  onNodesChange
}: WorkflowCanvasProps) {
  const handlePositionChange = useCallback((id: string, newPosition: Position) => {
    onNodesChange(prev => prev.map(node => 
      node.id === id 
        ? { ...node, position: snapToGrid(newPosition) }
        : node
    ));
  }, [onNodesChange]);

  const addNewNode = useCallback(() => {
    const newNode: WorkflowNodeType = {
      id: `node-${Date.now()}`,
      type: "process",
      position: { x: 400, y: 300 },
      data: {
        name: "New Node",
        description: "Configure this node",
        model: "gpt-4"
      }
    };
    onNodesChange(prev => [...prev, newNode]);
    onNodeSelect(newNode.id);
  }, [onNodesChange, onNodeSelect]);

  const getConnectionPath = (startNode: WorkflowNodeType, endNode: WorkflowNodeType) => {
    const start = {
      x: startNode.position.x + 250,
      y: startNode.position.y + 50
    };
    const end = {
      x: endNode.position.x,
      y: endNode.position.y + 50
    };
    
    const midX = (start.x + end.x) / 2;
    return `M ${start.x},${start.y} C ${midX},${start.y} ${midX},${end.y} ${end.x},${end.y}`;
  };

  return (
    <Card className="flex-1 p-6 overflow-hidden">
      <div className="relative h-full" onClick={() => onNodeSelect(null)}>
        <motion.svg className="absolute inset-0 pointer-events-none">
          {nodes.map((node, index) => {
            const nextNode = nodes[index + 1];
            if (!nextNode) return null;
            return (
              <motion.path
                key={`${node.id}-${nextNode.id}`}
                d={getConnectionPath(node, nextNode)}
                stroke="rgb(59, 130, 246)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
                markerEnd="url(#arrowhead)"
              />
            );
          })}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="rgb(59, 130, 246)"
              />
            </marker>
          </defs>
        </motion.svg>

        {nodes.map((node) => (
          <WorkflowNode
            key={node.id}
            node={node}
            isSelected={selectedNode === node.id}
            onSelect={() => onNodeSelect(node.id)}
            onPositionChange={handlePositionChange}
          />
        ))}

        <motion.button 
          className="absolute bottom-4 right-4 p-2 rounded-full bg-black text-white hover:bg-black hover:shadow-md transition font-bold"
          onClick={addNewNode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-5 h-5" />
        </motion.button>
      </div>
    </Card>
  );
}