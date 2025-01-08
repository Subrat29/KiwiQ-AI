export interface Skill {
  id: string;
  name: string;
  description: string;
  usageCount: number;
  dataSources: string[];
  team: string;
  category: string;
  configuration: Record<string, any>;
}

export interface SkillState {
  skills: Skill[];
  loading: boolean;
  error: string | null;
}

export interface TestResult {
  id: string;
  input: string;
  output: string;
  confidence: number;
  timestamp: string;
  feedback: "positive" | "negative" | null;
}

export interface WorkflowNode {
  id: string;
  type: "input" | "process" | "output";
  position: { x: number; y: number };
  data: {
    name: string;
    description: string;
    model?: string;
    prompt?: string;
    configuration?: Record<string, any>;
  };
}