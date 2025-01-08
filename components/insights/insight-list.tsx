"use client";

import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { InsightCard } from "./insight-card";
import { useKeyInsights } from "@/hooks/use-key-insights";

export function InsightList() {
  const { insights, loading } = useKeyInsights();

  if (loading) {
    return (
      <Card className="p-4">
        <div className="animate-pulse space-y-4">
          <Skeleton className="h-4 bg-gray-200 rounded" />
          <Skeleton className="h-4 bg-gray-200 rounded" />
          <Skeleton className="h-4 bg-gray-200 rounded" />
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {insights.map((insight) => (
        <InsightCard key={insight.id} insight={insight} />
      ))}
    </div>
  );
}
