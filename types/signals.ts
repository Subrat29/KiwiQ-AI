export type SignalPriority = 'high' | 'medium' | 'low';

export interface SignalItem {
  source: string;
  type: string;
  content: string;
  timestamp: string;
}

export interface Signal {
  title: string;
  intentScore: number;
  signals: SignalItem[];
  recommendedAction: string;
  priority: SignalPriority;
}

export interface SignalState {
  enterprise: Signal[];
  competitor: Signal[];
  market: Signal[];
}