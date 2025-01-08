"use client";

import { ReportLayout } from "./report-layout";
import { CompetitorPricingContent } from "./content/competitor-pricing-content";

export function CompetitorPricingReport() {
  return (
    <ReportLayout reportType="pricing">
      <CompetitorPricingContent />
    </ReportLayout>
  );
}