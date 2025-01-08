"use client";

import { Card } from "@/components/ui/card";
import { Report } from "@/types/reports";
import { LineChart } from "lucide-react";

interface ReportEvidenceProps {
  report: Report;
}

export function ReportEvidence({ report }: ReportEvidenceProps) {
  return (
    <Card className="bg-slate-900/95 border-slate-800/50 p-6">
      <div className="flex items-center gap-2 mb-4">
        <LineChart className="w-5 h-5 text-blue-400" />
        <h2 className="text-lg font-semibold">Supporting Evidence</h2>
      </div>
      
      <div className="space-y-4">
        {report.type === 'reviews' && (
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-slate-800/50 p-4">
              <div className="text-sm font-medium mb-2">Review Sentiment</div>
              <div className="h-32 flex items-center justify-center text-gray-600">
                [Sentiment Chart]
              </div>
            </Card>
            <Card className="bg-slate-800/50 p-4">
              <div className="text-sm font-medium mb-2">Feature Mentions</div>
              <div className="h-32 flex items-center justify-center text-gray-600">
                [Feature Chart]
              </div>
            </Card>
          </div>
        )}

        {report.type === 'competitive' && (
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-slate-800/50 p-4">
              <div className="text-sm font-medium mb-2">Market Position</div>
              <div className="h-32 flex items-center justify-center text-gray-600">
                [Position Chart]
              </div>
            </Card>
            <Card className="bg-slate-800/50 p-4">
              <div className="text-sm font-medium mb-2">Feature Comparison</div>
              <div className="h-32 flex items-center justify-center text-gray-600">
                [Comparison Chart]
              </div>
            </Card>
          </div>
        )}

        {report.type === 'market' && (
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-slate-800/50 p-4">
              <div className="text-sm font-medium mb-2">Requirement Adoption</div>
              <div className="h-32 flex items-center justify-center text-gray-600">
                [Adoption Chart]
              </div>
            </Card>
            <Card className="bg-slate-800/50 p-4">
              <div className="text-sm font-medium mb-2">Impact Analysis</div>
              <div className="h-32 flex items-center justify-center text-gray-600">
                [Impact Chart]
              </div>
            </Card>
          </div>
        )}
      </div>
    </Card>
  );
}