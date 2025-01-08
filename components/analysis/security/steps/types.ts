export interface OpportunityStage {
  stage: string;
  count: number;
  companies: Array<{
    name: string;
    status: string;
  }>;
}