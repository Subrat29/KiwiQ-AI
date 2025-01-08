"use client";

import { Badge } from "@/components/ui/badge";
import { signalSources } from "@/lib/data/signal-sources";

export function SignalSourceBar() {
  return (
    <div className="flex items-center gap-4 rounded-lg">
      {signalSources.map((source) => (
        <div key={source.name} className="flex items-center gap-2 border rounded-full px-2 py-1 bg-gradient-to-br from-white to-gray-100/80 border-gray-200 shadow-sm">
          <div className={`w-2 h-2 rounded-full ${
            source.signalStrength === 'high' ? 'bg-green-400' :
            source.signalStrength === 'medium' ? 'bg-yellow-400' :
            'bg-gray-400'
          }`} />
          <span className="text-sm">{source.name}</span>
          <Badge variant="outline" className="bg-gray-200/50">
            {source.count}
          </Badge>
        </div>
      ))}
    </div>
  );
}