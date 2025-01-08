"use client";

import { Badge } from "@/components/ui/badge";
import { Report } from "@/types/reports";

interface ReportHeaderProps {
  report: Report;
}

export function ReportHeader({ report }: ReportHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Badge 
          variant="outline" 
          className={`
            ${report.type === 'market' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
              report.type === 'competitive' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
              'bg-purple-500/10 text-purple-400 border-purple-500/30'}
          `}
        >
          {report.type}
        </Badge>
        <span className="text-sm text-gray-600">{report.date}</span>
      </div>
      <h1 className="text-2xl font-semibold">{report.title}</h1>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
          {report.confidence}% Confidence
        </Badge>
      </div>
    </div>
  );
}