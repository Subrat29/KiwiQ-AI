"use client";

import { Report } from "@/types/reports";
import { Card } from "@/components/ui/card";
import { LineChart, BarChart } from "lucide-react";

interface DetailedAnalysisProps {
  report: Report;
}

export function DetailedAnalysis({ report }: DetailedAnalysisProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Detailed Analysis</h2>
      <Card className="bg-slate-900/95 border-slate-800/50 p-6">
        <div className="grid grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 p-4">
            <div className="flex items-center gap-2 mb-4">
              <LineChart className="w-4 h-4 text-blue-400" />
              <h3 className="font-medium">Trend Analysis</h3>
            </div>
            <div className="h-48 flex items-center justify-center text-gray-600">
              [Trend Chart]
            </div>
          </Card>

          <Card className="bg-slate-800/50 p-4">
            <div className="flex items-center gap-2 mb-4">
              <BarChart className="w-4 h-4 text-blue-400" />
              <h3 className="font-medium">Comparison Analysis</h3>
            </div>
            <div className="h-48 flex items-center justify-center text-gray-600">
              [Comparison Chart]
            </div>
          </Card>
        </div>
      </Card>
    </section>
  );
}