"use client";

import { Report } from "@/types/reports";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReportHeader } from "./content/report-header";
import { ExecutiveSummary } from "./content/executive-summary";
import { SentimentTrends } from "./content/sentiment-trends";
import { FeatureAnalysis } from "./content/feature-analysis";
import { BuyerPersonas } from "./content/buyer-personas";
import { CompetitivePosition } from "./content/competitive-position";
import { KeyVerbatims } from "./content/key-verbatims";
import { Recommendations } from "./content/recommendations";

interface ReportContentProps {
  report: Report;
}

export function ReportContent({ report }: ReportContentProps) {
  return (
    <div className="h-full flex flex-col bg-slate-900">
      <ReportHeader report={report} />
      <ScrollArea className="flex-1">
        <div className="max-w-5xl mx-auto p-8 space-y-12 text-gray-700">
          <ExecutiveSummary report={report} />
          <SentimentTrends />
          <FeatureAnalysis />
          <BuyerPersonas />
          <CompetitivePosition />
          <KeyVerbatims />
          <Recommendations />
        </div>
      </ScrollArea>
    </div>
  );
}