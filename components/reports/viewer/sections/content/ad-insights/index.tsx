"use client";

import { CampaignFocus } from "./campaign-focus";
import { ChannelPerformance } from "./channel-performance";
import { CreativeAnalysis } from "./creative-analysis";
import { AdExamples } from "./ad-examples";

export function AdInsightsReport() {
  return (
    <div className="space-y-12">
      <CampaignFocus />
      <ChannelPerformance />
      <CreativeAnalysis />
      <AdExamples />
    </div>
  );
}