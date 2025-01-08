"use client";

import { Badge } from "@/components/ui/badge";

interface SignalBadgeProps {
  priority: 'high' | 'medium' | 'low';
  intentScore: number;
}

export function SignalBadge({ priority, intentScore }: SignalBadgeProps) {
  return (
    <Badge 
      variant="outline" 
      className={`
        ${priority === 'high' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
          priority === 'medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' :
          'bg-slate-500/10 text-gray-600 border-slate-500/30'}
      `}
    >
      {intentScore}% Intent
    </Badge>
  );
}