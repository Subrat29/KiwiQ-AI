"use client";

import { ReportLayout } from "./report-layout";
import { SocialSentimentContent } from "./content/social-sentiment-content";

export function SocialSentimentReport() {
  return (
    <ReportLayout reportType="sentiment">
      <SocialSentimentContent />
    </ReportLayout>
  );
}