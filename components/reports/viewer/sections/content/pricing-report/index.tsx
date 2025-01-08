"use client";

import { ExecutiveSummary } from "./executive-summary";
import { MarketDynamics } from "./market-dynamics";
import { CompetitorAnalysis } from "./competitor-analysis";
import { PackageStructure } from "./package-structure";
import { DealStructure } from "./deal-structure";
import { Recommendations } from "./recommendations";

export function PricingReport() {
  return (
    <div className="space-y-12">
      <ExecutiveSummary />
      <MarketDynamics />
      <CompetitorAnalysis />
      <PackageStructure />
      <DealStructure />
      <Recommendations />
    </div>
  );
}