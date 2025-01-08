"use client";

import { OpportunityStage } from "../types";

export const opportunities: OpportunityStage[] = [
  {
    stage: "Active Evaluations",
    count: 3,
    companies: [
      { name: "Major Bank Corp", status: "Technical Review" },
      { name: "Financial Services Inc", status: "Technical Review" },
      { name: "Investment Group", status: "Technical Review" }
    ]
  },
  {
    stage: "Early Research",
    count: 2,
    companies: [
      { name: "Banking Tech Ltd", status: "Accessing Documentation" },
      { name: "Finance Solutions", status: "Accessing Documentation" }
    ]
  },
  {
    stage: "Initial Signals",
    count: 2,
    companies: [
      { name: "Global Finance", status: "G2 Comparison" },
      { name: "Enterprise Banking", status: "G2 Comparison" }
    ]
  }
];