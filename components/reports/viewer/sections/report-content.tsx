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
import { PricingReport } from "./content/pricing-report";
import { AdInsightsReport } from "./content/ad-insights";

interface ReportContentProps {
  report: Report;
}

export function ReportContent({ report }: ReportContentProps) {
  // Render different report content based on report type and title
  const renderReportContent = () => {
    if (report.title === "Enterprise Pricing Shifts - Q2 2024") {
      return <PricingReport />;
    }
    if (report.title === "Competitor Ad Insights - Q2 2024") {
      return <AdInsightsReport />;
    }
    
    // Default G2 Reviews report content
    return (
      <>
        <ExecutiveSummary report={report} />
        <SentimentTrends />
        <FeatureAnalysis />
        <BuyerPersonas />
        <CompetitivePosition />
        <KeyVerbatims />
        <Recommendations />
      </>
    );
  };

  return (
    <div className="h-full flex flex-col">
      <ReportHeader report={report} />
      <ScrollArea className="flex-1">
        <div className="max-w-5xl mx-auto p-8 space-y-12 text-gray-100">
          {renderReportContent()}
        </div>
      </ScrollArea>
    </div>
  );
}