"use client";

import { Layout } from "@/app/workflows/builder/page-layout";
import { useCallback, useMemo } from "react";
import ReactFlow, {
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Edge,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
  EdgeProps,
} from "reactflow";
import "reactflow/dist/style.css";
import { AgentNode } from "./nodes/agent-node";
import { DataSourceNode } from "./nodes/data-source-node";
import { InputNode } from "./nodes/input-node";
import { OutputNode } from "./nodes/output-node";
import { CustomEdge } from './edges/custom-edge';
import { useRouter } from 'next/navigation';

const nodeTypes = {
  inputNode: InputNode,
  dataSourceNode: DataSourceNode,
  agentNode: AgentNode,
  outputNode: OutputNode,
};

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

export default function WorkflowCanvas(): React.ReactElement {
  const router = useRouter();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleDeleteNode = useCallback((nodeId: string) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => 
      edge.source !== nodeId && edge.target !== nodeId
    ));
  }, [setNodes, setEdges]);

  const handleDeleteEdge = useCallback((edgeId: string) => {
    setEdges((eds) => eds.filter((edge) => edge.id !== edgeId));
  }, [setEdges]);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'default',
            data: { onDelete: handleDeleteEdge }
          },
          eds
        )
      );
    },
    [setEdges, handleDeleteEdge]
  );

  const addNode = (
    type: string,
    sourceData?: { sourceType: string; icon: any }
  ) => {
    const newNode = {
      id: `${type}-${nodes.length + 1}`,
      type: `${type}Node`,
      position: { x: Math.random() * 500, y: Math.random() * 300 },
      data: {
        ...sourceData,
        onDelete: handleDeleteNode,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const edgeTypes = useMemo(() => ({
    default: (props: EdgeProps) => (
      <CustomEdge {...props} data={{ onDelete: handleDeleteEdge }} />
    ),
  }), [handleDeleteEdge]);

  const handleSavePipeline = useCallback((name: string) => {
    console.log('Saving nodes:', nodes);
    const pipelineData = {
      id: Date.now().toString(),
      name,
      nodes: nodes.map(node => ({
        id: node.id,
        type: node.type,
        data: {
          sourceType: node.data.sourceType,
          inputType: node.data.inputType,
          selectedFileTypes: node.data.selectedFileTypes,
          selectedAgent: node.data.selectedAgent,
          outputType: node.data.outputType,
          agentType: node.data.selectedAgent?.name
        }
      })),
      edges: edges,
      createdAt: new Date().toISOString()
    };
    console.log('Saving pipeline data:', pipelineData);

    // Save to localStorage for now (replace with API call later)
    const existingPipelines = JSON.parse(localStorage.getItem('pipelines') || '[]');
    localStorage.setItem('pipelines', JSON.stringify([...existingPipelines, pipelineData]));
    
    router.push('/workflows');
  }, [nodes, edges, router]);

  const getPipelineConfig = useCallback(() => {
    const inputNode = nodes.find(node => node.type === 'inputNode');
    const agentNode = nodes.find(node => node.type === 'agentNode');
    const outputNode = nodes.find(node => node.type === 'outputNode');
    const dataSourceNodes = nodes.filter(node => node.type === 'dataSourceNode');

    return {
      inputs: inputNode ? [{
        type: inputNode.data.inputType || 'text',
        allowedFileTypes: inputNode.data.selectedFileTypes
      }] : [],
      dataSources: dataSourceNodes.map(node => node.data.sourceType),
      agentName: agentNode?.data.selectedAgent?.name || 'Agent',
      outputType: outputNode?.data.outputType || 'text'
    };
  }, [nodes]);

  return (
    <Layout 
      onAddNode={addNode} 
      onSavePipeline={handleSavePipeline}
      pipelineConfig={getPipelineConfig()}
    >
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        className="bg-slate-50"
        defaultEdgeOptions={{
          style: { strokeWidth: 2, stroke: "#22c55e" },
          type: "default",
          animated: true,
        }}
        edgeTypes={edgeTypes}
      >
        <Background color="#94a3b8" size={1} />
        <Controls />
      </ReactFlow>
    </Layout>
  );
}
