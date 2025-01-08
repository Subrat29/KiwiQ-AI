"use client";

import { AlertTriangle } from "lucide-react";
import { SignalBadge } from "./signal-badge";

interface SignalHeaderProps {
  title: string;
  priority: 'high' | 'medium' | 'low';
  intentScore: number;
  signalCount: number;
}

export function SignalHeader({ title, priority, intentScore, signalCount }: SignalHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="font-medium mb-2">{title}</h3>
        <div className="flex items-center gap-2 mb-3">
          <SignalBadge priority={priority} intentScore={intentScore} />
          <span className="text-sm text-gray-600">{signalCount} signals</span>
        </div>
      </div>
      {priority === 'high' && (
        <AlertTriangle className="w-4 h-4 text-yellow-400" />
      )}
    </div>
  );
}