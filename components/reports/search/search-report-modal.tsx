"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ComplianceReport } from "./reports/compliance-report";
import { ContentPatternsReport } from "./reports/content-patterns-report";
import { CompetitorPricingReport } from "./reports/competitor-pricing-report";
import { SocialSentimentReport } from "./reports/social-sentiment-report";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface SearchReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportType: string;
}

const getReportTitle = (type: string) => {
  switch (type) {
    case "Which enterprise accounts are researching AI compliance requirements right now":
      return "Enterprise AI Compliance Research";
    case "Track AI content search patterns by buyer segments the last month":
      return "AI Content Search Patterns";
    case "Have there been any competitor pricing shifts the last quarter?":
      return "Competitor Pricing Analysis";
    case "Latest comments about Jasper AI, Copy AI and Writer on Reddit and LinkedIn":
      return "Social Sentiment Analysis";
    default:
      return "Analysis Report";
  }
};

export function SearchReportModal({ isOpen, onClose, reportType }: SearchReportModalProps) {
  const getReport = () => {
    switch (reportType) {
      case "Which enterprise accounts are researching AI compliance requirements right now":
        return <ComplianceReport onClose={onClose} />;
      case "Track AI content search patterns by buyer segments the last month":
        return <ContentPatternsReport onClose={onClose} />;
      case "Have there been any competitor pricing shifts the last quarter?":
        return <CompetitorPricingReport onClose={onClose} />;
      case "Latest comments about Jasper AI, Copy AI and Writer on Reddit and LinkedIn":
        return <SocialSentimentReport onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] h-[90vh] p-0 bg-slate-900/95 border-slate-800/50">
        <VisuallyHidden>
          <DialogTitle>{getReportTitle(reportType)}</DialogTitle>
        </VisuallyHidden>
        {getReport()}
      </DialogContent>
    </Dialog>
  );
}