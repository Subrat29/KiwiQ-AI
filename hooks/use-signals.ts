"use client";

import { useState, useEffect } from "react";
import { SignalState } from "@/types/signals";
import { buyerSignals } from "@/lib/data/buyer-signals";

export function useSignals() {
  const [signals, setSignals] = useState<SignalState>(buyerSignals);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate periodic updates
    const interval = setInterval(() => {
      setLoading(true);
      // In a real app, this would be an API call
      setTimeout(() => {
        setSignals(prev => ({
          ...prev,
          // Simulate updating signal timestamps
          enterprise: prev.enterprise.map(signal => ({
            ...signal,
            signals: signal.signals.map(s => ({
              ...s,
              timestamp: updateTimestamp(s.timestamp)
            }))
          }))
        }));
        setLoading(false);
      }, 1000);
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return {
    signals,
    loading,
    error,
    refresh: () => {
      setLoading(true);
      // Implement refresh logic
      setLoading(false);
    }
  };
}

function updateTimestamp(timestamp: string): string {
  // Simple timestamp update logic
  if (timestamp.includes('m ago')) {
    const minutes = parseInt(timestamp) + 1;
    return `${minutes}m ago`;
  }
  return timestamp;
}