"use client";

import { SignalSourceBar } from "@/components/signals/signal-source-bar";
import { EnterpriseSignalsSection } from "@/components/signals/enterprise-signals-section";
import { ReportsPanel } from "@/components/reports/reports-panel";
import { VoiceOfMarketSection } from "@/components/market/voice-of-market-section";
import { KeyInsightsPanel } from "@/components/insights/key-insights-panel";

export function MainLayout() {
  return (
    <div className="flex h-screen">
      {/* Main Content Area */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        <SignalSourceBar />
        
        {/* Enterprise Signals Section */}
        <section className="pb-6">
          <EnterpriseSignalsSection />
        </section>
        
        {/* Key Insights and Voice of Market Grid */}
        <div className="grid grid-cols-2 gap-6">
          <section className="col-span-1">
            <KeyInsightsPanel />
          </section>
          <section className="col-span-1">
            <VoiceOfMarketSection />
          </section>
        </div>
      </div>

      {/* Reports Panel */}
      <div className="border-l border-zinc-800">
        <ReportsPanel />
      </div>
    </div>
  );
}