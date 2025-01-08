"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { WorkflowCanvas } from "./workflow-canvas";
import { WorkflowToolbar } from "./workflow-toolbar";
import { WorkflowNode } from "@/types/workflows";

export function WorkflowBuilder() {
  const router = useRouter();
  const [nodes, setNodes] = useState<WorkflowNode[]>([]);

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-[1400px] mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => router.push("/workflows")}
              className="text-gray-600 hover:text-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Workflows
            </Button>
            <h1 className="text-2xl font-bold">Workflow Builder</h1>
          </div>
        </div>

        <div className="flex gap-6 h-[calc(100vh-12rem)]">
          <WorkflowToolbar />
          <WorkflowCanvas nodes={nodes} onNodesChange={setNodes} />
        </div>
      </div>
    </div>
  );
}