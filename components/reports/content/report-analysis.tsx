"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ReportAnalysisProps {
  findings?: string[];
}

export function ReportAnalysis({ findings }: ReportAnalysisProps) {
  if (!findings?.length) return null;

  return (
    <Card className="bg-slate-900/95 border-slate-800/50 p-6">
      <h2 className="text-lg font-semibold mb-4">Key Findings</h2>
      <div className="space-y-3">
        {findings.map((finding, i) => (
          <div key={i} className="flex items-start gap-3">
            <ArrowRight className="w-4 h-4 mt-1 text-blue-400" />
            <p className="text-sm">{finding}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}