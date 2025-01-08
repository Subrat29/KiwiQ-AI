"use client";

import { useRouter } from "next/navigation";
import { DataSourcePanel } from "./data-source-panel";
import { VisualizationPanel } from "./visualization-panel";
import { AgentAnalysisPanel } from "./agent-analysis-panel";
import { SearchCommand } from "@/components/search-command";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";

interface AnalysisViewProps {
  onClose: () => void;
}

export function AnalysisView({ onClose }: AnalysisViewProps) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50">
      <div className="h-screen flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => router.push("/")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Mission Control
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-lg hover:bg-secondary/40"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 py-4">
          <SearchCommand />
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/5 border-r border-border overflow-y-auto">
            <DataSourcePanel />
          </div>
          <div className="w-1/2 border-r border-border overflow-y-auto">
            <VisualizationPanel />
          </div>
          <div className="w-3/10 overflow-y-auto">
            <AgentAnalysisPanel />
          </div>
        </div>
      </div>
    </div>
  );
}