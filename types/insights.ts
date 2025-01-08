export interface KeyInsight {
  id: string;
  title: string;
  summary: string;
  priority: 'high' | 'medium' | 'low';
  confidence: number;
  timestamp: string;
  evidence: string[];
  source: string;
  type: 'security' | 'competitor' | 'market';
}