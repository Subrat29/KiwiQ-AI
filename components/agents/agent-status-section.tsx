"use client";

import { AgentStatusCard } from "./agent-status-card";

const agents = [
  {
    name: "Journey Mapping Agent",
    status: "Analyzing",
    progress: 65,
    task: "Analyzing enterprise healthcare patterns",
    startTime: "10:30 AM",
    tools: ["Salesforce", "Marketo"]
  },
  {
    name: "Channel Mix Agent",
    status: "Active",
    progress: 45,
    task: "Optimizing Q4 budget allocation",
    startTime: "11:15 AM",
    tools: ["Google Ads", "LinkedIn"]
  }
];

export function AgentStatusSection() {
  return (
    <div className="space-y-4">
      {agents.map((agent, i) => (
        <AgentStatusCard key={i} {...agent} />
      ))}
    </div>
  );
}