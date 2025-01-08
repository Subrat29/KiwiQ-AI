"use client";

import { Card } from "@/components/ui/card";
import { InsightList } from "./insight-list";
import { Sparkles } from "lucide-react";

export function KeyInsightsPanel() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-green-500" />
        <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">Key Insights</h2>
      </div>

      <Card className="bg-white border-gray-200 p-6">
        <InsightList />
      </Card>
    </div>
  );
}