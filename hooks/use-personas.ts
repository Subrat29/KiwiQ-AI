"use client";

import { useState, useEffect } from "react";
import { PersonaState, PersonaInsight } from "@/types/personas";
import { personaInsights } from "@/lib/data/persona-insights";

export function usePersonas() {
  const [insights, setInsights] = useState<PersonaState>(personaInsights);
  const [loading, setLoading] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  useEffect(() => {
    // Simulate periodic updates
    const interval = setInterval(() => {
      setLoading(true);
      setTimeout(() => {
        setInsights(prev => ({
          ...prev,
          // Update timestamps and potentially add new insights
          content: updateInsightTimestamps(prev.content),
          technical: updateInsightTimestamps(prev.technical),
          marketing: updateInsightTimestamps(prev.marketing)
        }));
        setLoading(false);
      }, 1000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const selectPersona = (id: string) => {
    setSelectedPersona(id);
  };

  const getInsightById = (id: string): PersonaInsight | null => {
    const allInsights = [
      ...insights.content,
      ...insights.technical,
      ...insights.marketing
    ];
    return allInsights.find(insight => insight.id === id) || null;
  };

  return {
    insights,
    loading,
    selectedPersona,
    selectPersona,
    getInsightById
  };
}

function updateInsightTimestamps(insights: PersonaInsight[]): PersonaInsight[] {
  return insights.map(insight => ({
    ...insight,
    signals: insight.signals.map(signal => ({
      ...signal,
      timestamp: updateTimestamp(signal.timestamp)
    }))
  }));
}

function updateTimestamp(timestamp: string): string {
  if (timestamp.includes('h ago')) {
    const hours = parseInt(timestamp);
    return hours > 1 ? `${hours + 1}h ago` : '2h ago';
  }
  return timestamp;
}