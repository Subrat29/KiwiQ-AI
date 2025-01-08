"use client";

import { Badge } from "@/components/ui/badge";
import { SourceIndicator } from "./source-indicator";

interface SourceItemProps {
  name: string;
  lastUpdated: string;
  signalStrength: 'high' | 'medium' | 'low';
  count: number;
  isConnected: boolean;
}

export function SourceItem({ name, lastUpdated, signalStrength, count, isConnected }: SourceItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <SourceIndicator strength={signalStrength} />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-600">{lastUpdated}</div>
        </div>
      </div>
      {isConnected && (
        <Badge variant="outline" className="bg-slate-800/50">
          {count}
        </Badge>
      )}
    </div>
  );
}