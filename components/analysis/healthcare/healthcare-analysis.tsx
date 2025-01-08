"use client";

import { useRouter } from "next/navigation";
import { AnalysisLayout } from "../common/analysis-layout";
import { MetricsGrid } from "./metrics-grid";
import { PatternAnalysis } from "./pattern-analysis";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface HealthcareAnalysisProps {
  onClose: () => void;
}

export function HealthcareAnalysis({ onClose }: HealthcareAnalysisProps) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50">
      <div className="h-screen flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => {
                onClose();
                router.push("/");
              }}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Mission Control
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1400px] mx-auto p-6 space-y-6">
            <MetricsGrid />
            <PatternAnalysis />
          </div>
        </div>
      </div>
    </div>
  );
}