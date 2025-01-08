"use client";

import { useRouter } from "next/navigation";
import { SearchCommand } from "@/components/search-command";
import { JourneyHeader } from "@/components/journey/journey-header";
import { MetricsGrid } from "@/components/journey/metrics-grid";
import { JourneyFlow } from "@/components/journey/journey-flow";
import { InsightsPanel } from "@/components/journey/insights-panel";
import { StageAnalysis } from "@/components/journey/stage-analysis";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function HealthcareJourneyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-gray-700">
      <div className="max-w-[1400px] mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => router.push("/")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Mission Control
            </Button>
            <JourneyHeader />
          </div>
        </div>
        <div className="mb-8">
          <SearchCommand />
        </div>
        <MetricsGrid />
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <JourneyFlow />
            <StageAnalysis />
          </div>
          <div className="col-span-4">
            <InsightsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}