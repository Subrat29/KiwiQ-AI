"use client";

import { Report } from "@/types/reports";
import { ReportContent } from "./sections/report-content";
import { ReportAssistant } from "./sections/report-assistant";

interface ReportViewerProps {
  report: Report;
}

export function ReportViewer({ report }: ReportViewerProps) {
  return (
    <div className="min-h-screen">
      <div className="flex h-screen">
        {/* Assistant Panel - Left Side */}
        <div className="w-[400px] border-r border-gray-200">
          <ReportAssistant report={report} />
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden bg-gradient-to-r from-white via-white/90 to-gray-100">
          <ReportContent report={report} />
        </div>
      </div>
    </div>
  );
}