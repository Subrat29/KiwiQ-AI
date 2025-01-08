"use client";

import { ArrowRight } from "lucide-react";

interface SignalItemProps {
  content: string;
  source: string;
  timestamp: string;
}

export function SignalItem({ content, source, timestamp }: SignalItemProps) {
  return (
    <div className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
      <ArrowRight className="w-4 h-4 mt-1 text-blue-400" />
      <div>
        <div className="text-sm mb-1">{content}</div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span>{source}</span>
          <span>•</span>
          <span>{timestamp}</span>
        </div>
      </div>
    </div>
  );
}