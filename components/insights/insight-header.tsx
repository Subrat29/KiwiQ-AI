"use client";

import { Sparkles } from "lucide-react";

export function InsightHeader() {
  return (
    <div className="p-4 border-b border-slate-800">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-blue-400" />
        <h2 className="text-lg font-semibold">Key Insights</h2>
      </div>
      <p className="text-sm text-gray-600 mt-1">Real-time intelligence updates</p>
    </div>
  );
}