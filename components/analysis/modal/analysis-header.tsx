"use client";

import { X, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnalysisHeaderProps {
  type: "healthcare" | "nurture" | "content";
  onClose: () => void;
}

const titles = {
  healthcare: "LinkedIn vs. SEM Performance",
  nurture: "Enterprise Nurture Sequence Analysis",
  content: "Technical Content Performance"
};

const subtitles = {
  healthcare: "Enterprise Healthcare Campaigns",
  nurture: "Optimal Timing Analysis",
  content: "Content Type Comparison"
};

export function AnalysisHeader({ type, onClose }: AnalysisHeaderProps) {
  return (
    <div className="p-6 border-b border-slate-800">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{titles[type]}</h2>
          <p className="text-gray-600">{subtitles[type]}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Download className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}