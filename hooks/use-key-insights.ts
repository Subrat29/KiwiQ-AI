"use client";

import { useState, useEffect, useCallback } from "react";
import { KeyInsight } from "@/types/insights";

const mockInsights: KeyInsight[] = [
  {
    id: "1",
    title: "Security evaluation patterns suggest 90-day buying window",
    summary: "Multiple Fintech companies following identical security evaluation sequence, indicating a clear pattern in enterprise procurement.",
    priority: "high",
    confidence: 92,
    timestamp: "2h ago",
    evidence: [
      "3 Fintech companies following identical evaluation sequence",
      "CTOs engaging with SSO documentation",
      "Security teams reviewing compliance docs",
      "Pattern matches 8 previous enterprise conversions"
    ],
    source: "Multiple Sources",
    type: "security"
  },
  {
    id: "2",
    title: "Competitor shifting enterprise messaging",
    summary: "Copy.ai modifying positioning with 3 target accounts at risk. New emphasis on AI governance and compliance features.",
    priority: "high",
    confidence: 88,
    timestamp: "4h ago",
    evidence: [
      "New emphasis on AI governance",
      "Updated case studies targeting regulated industries",
      "Modified enterprise pricing structure",
      "Increased presence in enterprise events"
    ],
    source: "Competitive Intelligence",
    type: "competitor"
  },
  {
    id: "3",
    title: "New compliance requirement gaining traction",
    summary: "Healthcare AI compliance requirement showing rapid adoption across enterprise RFPs and technical evaluations.",
    priority: "medium",
    confidence: 85,
    timestamp: "6h ago",
    evidence: [
      "40% of new RFPs mention this requirement",
      "3 competitor responses in last 48 hours",
      "2 lighthouse customers requesting details",
      "Regulatory bodies signaling support"
    ],
    source: "Market Intelligence",
    type: "market"
  }
];

export function useKeyInsights() {
  const [insights, setInsights] = useState<KeyInsight[]>(mockInsights);
  const [loading, setLoading] = useState(false);

  const submitFeedback = useCallback((insightId: string, type: 'up' | 'down') => {
    // In a real app, this would make an API call
    console.log(`Feedback submitted for insight ${insightId}:`, type);
  }, []);

  useEffect(() => {
    // Simulate periodic updates
    const interval = setInterval(() => {
      setLoading(true);
      setTimeout(() => {
        setInsights(prev => prev.map(insight => ({
          ...insight,
          timestamp: updateTimestamp(insight.timestamp)
        })));
        setLoading(false);
      }, 1000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return {
    insights,
    loading,
    submitFeedback
  };
}

function updateTimestamp(timestamp: string): string {
  if (timestamp.includes('h ago')) {
    const hours = parseInt(timestamp);
    return hours > 1 ? `${hours + 1}h ago` : '2h ago';
  }
  return timestamp;
}