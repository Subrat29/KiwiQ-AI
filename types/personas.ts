export type PersonaType = 'content' | 'technical' | 'marketing';

export interface PersonaSignal {
  id: string;
  type: PersonaType;
  title: string;
  description: string;
  source: string;
  timestamp: string;
  confidence: number;
  relatedSignals?: string[];
}

export interface PersonaInsight {
  id: string;
  personaType: PersonaType;
  title: string;
  description: string;
  signals: PersonaSignal[];
  recommendations: string[];
  priority: 'high' | 'medium' | 'low';
  confidence: number;
}

export interface PersonaState {
  content: PersonaInsight[];
  technical: PersonaInsight[];
  marketing: PersonaInsight[];
}