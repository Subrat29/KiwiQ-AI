"use client";

import { ReactNode } from "react";
import { AnalysisHeader } from "./analysis-header";
import { AnalysisChat } from "./analysis-chat";

interface AnalysisLayoutProps {
  title: string;
  onBack: () => void;
  children: ReactNode;
}

export function AnalysisLayout({ title, onBack, children }: AnalysisLayoutProps) {
  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50">
      <div className="h-screen flex flex-col">
        <AnalysisHeader title={title} onBack={onBack} />
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto">{children}</div>
          <div className="w-[30%] border-l border-slate-800">
            <AnalysisChat />
          </div>
        </div>
      </div>
    </div>
  );
}