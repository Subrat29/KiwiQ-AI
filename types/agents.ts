export type AgentType = 'strategic' | 'deal' | 'market' | 'competitive' | 'enterprise';
export type AgentStatus = 'active' | 'paused' | 'training';

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: AgentStatus;
  accuracy: number;
  signalsProcessed: string;
  lastActive: string;
  dataSources: string[];
  type: AgentType;
}

export interface AgentMessage {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: string;
  confidence?: number;
  options?: AgentOption[];
}

export interface AgentOption {
  id: string;
  label: string;
  action: string;
  impact: string;
}

export interface AgentState {
  messages: AgentMessage[];
  isThinking: boolean;
  context: {
    activeSignal?: string;
    selectedOption?: string;
    analysisStage: 'initial' | 'analyzing' | 'recommending' | 'planning';
  };
}