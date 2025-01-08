"use client";

import { useState, useEffect } from "react";
import { Agent } from "@/types/agents";

const mockAgents: Agent[] = [
  {
    id: "1",
    name: "Market Trend Analyzer",
    description: "Analyzes market trends and competitor movements",
    status: "active",
    accuracy: 94,
    signalsProcessed: "12,450",
    lastActive: "2m ago",
    dataSources: ["G2", "LinkedIn", "Public Forums"],
    type: "market"
  },
  {
    id: "2",
    name: "Competitive Intel Agent",
    description: "Monitors competitor pricing and feature changes",
    status: "active",
    accuracy: 92,
    signalsProcessed: "8,320",
    lastActive: "5m ago",
    dataSources: ["G2", "Competitor Sites"],
    type: "competitive"
  },
  {
    id: "3",
    name: "Enterprise Signal Detector",
    description: "Identifies high-intent enterprise buying signals",
    status: "paused",
    accuracy: 88,
    signalsProcessed: "15,720",
    lastActive: "1h ago",
    dataSources: ["LinkedIn", "G2", "Google Ads"],
    type: "enterprise"
  }
];

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>(mockAgents);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate periodic updates
    const interval = setInterval(() => {
      setLoading(true);
      setTimeout(() => {
        setAgents(prev => prev.map(agent => ({
          ...agent,
          lastActive: updateTimestamp(agent.lastActive)
        })));
        setLoading(false);
      }, 1000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return {
    agents,
    loading,
    toggleAgent: (id: string) => {
      setAgents(prev => prev.map(agent => 
        agent.id === id 
          ? { ...agent, status: agent.status === 'active' ? 'paused' : 'active' }
          : agent
      ));
    }
  };
}

function updateTimestamp(timestamp: string): string {
  if (timestamp.includes('m ago')) {
    const minutes = parseInt(timestamp);
    return minutes > 1 ? `${minutes + 1}m ago` : '2m ago';
  }
  return timestamp;
}