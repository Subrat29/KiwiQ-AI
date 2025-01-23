"use client";

import { Button } from "@/components/ui/button";
import { Plus, FileInput, Database, Bot, FileOutput } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

interface NodeData {
  sourceType?: string;
  inputType?: string;
  outputType?: string;
  agentType?: string;
  selectedFileTypes?: string[];
  selectedAgent?: any;
}

interface PipelineNode {
  id: string;
  type: string;
  data: NodeData;
}

interface Pipeline {
  id: string;
  name: string;
  nodes: PipelineNode[];
  edges: any[];
  createdAt: string;
}

export default function WorkflowsPage() {
  const router = useRouter();
  const [pipelines, setPipelines] = useState<Pipeline[]>([]);

  useEffect(() => {
    const savedPipelines = JSON.parse(
      localStorage.getItem("pipelines") || "[]"
    );
    console.log("Loaded pipelines:", savedPipelines);
    setPipelines(savedPipelines);
  }, []);

  const getNodeDetails = (nodes: PipelineNode[]) => {
    return nodes.reduce((acc, node) => {
      const baseType = node.type.replace("Node", "");

      switch (baseType) {
        case "input":
          if (!acc.inputs) acc.inputs = [];
          acc.inputs.push(node.data.inputType || "Unknown");
          break;
        case "dataSource":
          if (!acc.dataSources) acc.dataSources = [];
          acc.dataSources.push(node.data.sourceType || "Unknown");
          break;
        case "agent":
          if (!acc.agents) acc.agents = [];
          acc.agents.push(node.data.agentType || "Unknown");
          break;
        case "output":
          if (!acc.outputs) acc.outputs = [];
          acc.outputs.push(node.data.outputType || "Unknown");
          break;
      }
      return acc;
    }, {} as Record<string, string[]>);
  };

  return (
    // <div className="p-6">
    //   <div className="max-w-[1400px] mx-auto space-y-6">
    //     <div className="flex justify-between">
    //       <div>
    //         <h1 className="text-3xl font-bold">Workflows</h1>
    //         <p className="text-gray-600 mt-2">
    //           Build and manage your AI agent pipelines
    //         </p>
    //       </div>
    //       <Button
    //         onClick={() => router.push("/workflows/builder")}
    //         className="bg-green-500 hover:bg-green-600 transition-colors text-white"
    //       >
    //         <Plus className="w-4 h-4 mr-2" />
    //         Workflow Builder
    //       </Button>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //       {pipelines.map((pipeline) => {
    //         const nodeDetails = getNodeDetails(pipeline.nodes);

    //         return (
    //           <div key={pipeline.id} className="border rounded-lg p-4 space-y-4 hover:shadow-md transition-shadow">
    //             <h3 className="font-medium text-lg">{pipeline.name}</h3>

    //             <div className="space-y-3">
    //               {nodeDetails.inputs && nodeDetails.inputs.length > 0 && (
    //                 <div className="space-y-1">
    //                   <div className="flex items-center gap-2 text-sm text-gray-600">
    //                     <FileInput className="w-4 h-4" />
    //                     <span className="font-medium">Inputs ({nodeDetails.inputs.length})</span>
    //                   </div>
    //                   <div className="ml-6 text-xs text-gray-500">
    //                     {nodeDetails.inputs.map((input, i) => (
    //                       <span key={i} className="inline-block bg-gray-100 rounded px-2 py-1 mr-1 mb-1 capitalize">
    //                         {input}
    //                       </span>
    //                     ))}
    //                   </div>
    //                 </div>
    //               )}

    //               {nodeDetails.dataSources && nodeDetails.dataSources.length > 0 && (
    //                 <div className="space-y-1">
    //                   <div className="flex items-center gap-2 text-sm text-gray-600">
    //                     <Database className="w-4 h-4" />
    //                     <span className="font-medium">Data Sources ({nodeDetails.dataSources.length})</span>
    //                   </div>
    //                   <div className="ml-6 text-xs text-gray-500">
    //                     {nodeDetails.dataSources.map((source, i) => (
    //                       <span key={i} className="inline-block bg-gray-100 rounded px-2 py-1 mr-1 mb-1 capitalize">
    //                         {source}
    //                       </span>
    //                     ))}
    //                   </div>
    //                 </div>
    //               )}

    //               {nodeDetails.agents && nodeDetails.agents.length > 0 && (
    //                 <div className="space-y-1">
    //                   <div className="flex items-center gap-2 text-sm text-gray-600">
    //                     <Bot className="w-4 h-4" />
    //                     <span className="font-medium">Agents ({nodeDetails.agents.length})</span>
    //                   </div>
    //                   <div className="ml-6 text-xs text-gray-500">
    //                     {nodeDetails.agents.map((agent, i) => (
    //                       <span key={i} className="inline-block bg-gray-100 rounded px-2 py-1 mr-1 mb-1 capitalize">
    //                         {agent}
    //                       </span>
    //                     ))}
    //                   </div>
    //                 </div>
    //               )}

    //               {nodeDetails.outputs && nodeDetails.outputs.length > 0 && (
    //                 <div className="space-y-1">
    //                   <div className="flex items-center gap-2 text-sm text-gray-600">
    //                     <FileOutput className="w-4 h-4" />
    //                     <span className="font-medium">Outputs ({nodeDetails.outputs.length})</span>
    //                   </div>
    //                   <div className="ml-6 text-xs text-gray-500">
    //                     {nodeDetails.outputs.map((output, i) => (
    //                       <span key={i} className="inline-block bg-gray-100 rounded px-2 py-1 mr-1 mb-1 capitalize">
    //                         {output}
    //                       </span>
    //                     ))}
    //                   </div>
    //                 </div>
    //               )}
    //             </div>

    //             <div className="text-sm text-gray-500">
    //               Created {formatDistanceToNow(new Date(pipeline.createdAt))} ago
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
        <p className="text-gray-600 mb-6">
          We're working hard to bring you something amazing.
        </p>
        <div className="animate-pulse">
          <div className="h-2 bg-gray-300 rounded mb-2"></div>
          <div className="h-2 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="h-2 bg-gray-300 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}
