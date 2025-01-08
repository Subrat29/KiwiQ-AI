export interface TestResult {
  id: string;
  input: string;
  output: string;
  confidence: number;
  executionTime: string;
  timestamp: string;
  skills: string[];
}