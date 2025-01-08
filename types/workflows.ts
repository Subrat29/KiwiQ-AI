export interface WorkflowNode {
  id: string;
  type: 'input' | 'connector' | 'agent' | 'output';
  position: {
    x: number;
    y: number;
  };
  data: Record<string, any>;
}