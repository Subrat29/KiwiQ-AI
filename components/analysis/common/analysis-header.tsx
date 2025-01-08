"use client";

import { ArrowLeft, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnalysisHeaderProps {
  title: string;
  onBack: () => void;
}

export function AnalysisHeader({ title, onBack }: AnalysisHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-slate-800">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
        <Button variant="ghost" size="sm">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
}