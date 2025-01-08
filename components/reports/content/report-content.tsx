"use client";

import { ReportHeader } from "./report-header";
import { ReportMetrics } from "./report-metrics";
import { ReportAnalysis } from "./report-analysis";
import { ReportEvidence } from "./report-evidence";
import { Report } from "@/types/reports";

interface ReportContentProps {
  report: Report;
}

export function ReportContent({ report }: ReportContentProps) {
  return (
    <div className="space-y-6 p-6">
      <ReportHeader report={report} />
      <ReportMetrics metrics={report.metrics} />
      <ReportAnalysis findings={report.findings} />
      <ReportEvidence report={report} />
    </div>
  );
}