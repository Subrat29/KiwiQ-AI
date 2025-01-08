"use client";

import { useKeyInsights } from "@/hooks/use-key-insights";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InsightCard } from "./insight-card";
import { Sparkles } from "lucide-react";

export function InsightsTicker() {
  const { insights } = useKeyInsights();

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <h2 className="text-lg font-semibold">Key Insights</h2>
        </div>
        <p className="text-sm text-gray-600 mt-1">Real-time intelligence updates</p>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}