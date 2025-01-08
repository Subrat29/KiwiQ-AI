"use client";

import { useState, useCallback } from "react";
import { Header } from "./header";
import { Toolbar } from "./toolbar";
import { WorkflowCanvas } from "./workflow-canvas";
import { NodeSettings } from "./node-settings";
import { WorkflowNode } from "@/types/skills";
import { useRouter } from "next/navigation";

interface SkillConfigWorkflowProps {
  skillId: string;
}

export function SkillConfigWorkflow({ skillId }: SkillConfigWorkflowProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    {
      id: "input",
      type: "input",
      position: { x: 100, y: 100 },
      data: {
        name: "Input Processing",
        description: "Process and validate incoming data"
      }
    },
    {
      id: "process",
      type: "process",
      position: { x: 400, y: 100 },
      data: {
        name: "Intent Classification",
        description: "Classify user intent and extract key information"
      }
    },
    {
      id: "output",
      type: "output",
      position: { x: 700, y: 100 },
      data: {
        name: "Response Generation",
        description: "Generate appropriate response based on classification"
      }
    }
  ]);

  const router = useRouter();

  const handleNodeUpdate = useCallback((id: string, updates: Partial<WorkflowNode>) => {
    setNodes(prev => prev.map(node => 
      node.id === id 
        ? { ...node, ...updates }
        : node
    ));
  }, []);

  const handleSave = useCallback(() => {
    // Save workflow logic here
    console.log("Saving workflow", nodes);
  }, [nodes]);

  const handleTest = useCallback(() => {
    router.push(`/agents/skills/${skillId}/test`);
  }, [router, skillId]);

  return (
    <div className="h-[calc(100vh-6rem)]">
      <Header
        skillName="Intent Classification"
        status="draft"
        onSave={handleSave}
        onTest={handleTest}
      />
      
      <div className="flex gap-6 h-full">
        <div className="flex-1 flex flex-col">
          <Toolbar onAddNode={() => setSelectedNode(null)} />
          <WorkflowCanvas
            skillId={skillId}
            selectedNode={selectedNode}
            onNodeSelect={setSelectedNode}
            nodes={nodes}
            onNodesChange={setNodes}
          />
        </div>
        
        <div className="w-80">
          <NodeSettings
            node={nodes.find(n => n.id === selectedNode) || null}
            onUpdate={handleNodeUpdate}
          />
        </div>
      </div>
    </div>
  );
}