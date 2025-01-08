export interface Report {
  id: string;
  title: string;
  type: 'market' | 'competitive' | 'reviews';
  date: string;
  metrics?: {
    [key: string]: string;
  };
  findings?: string[];
  confidence: number;
}