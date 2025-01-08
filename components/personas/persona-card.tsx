"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PersonaInsight } from "@/types/personas";
import { Users, ArrowRight } from "lucide-react";

interface PersonaCardProps {
  insight: PersonaInsight;
  onSelect: (id: string) => void;
}

export function PersonaCard({ insight, onSelect }: PersonaCardProps) {
  return (
    <Card className="bg-slate-900/95 border-slate-800/50 p-4 hover:border-slate-700/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-medium mb-2">{insight.title}</h3>
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className={`
                ${insight.priority === 'high' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
                  insight.priority === 'medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' :
                  'bg-slate-500/10 text-gray-600 border-slate-500/30'}
              `}
            >
              {insight.confidence}% Confidence
            </Badge>
            <span className="text-sm text-gray-600">{insight.signals.length} signals</span>
          </div>
        </div>
        <Users className="w-4 h-4 text-blue-400" />
      </div>

      <p className="text-sm text-gray-600 mb-4">{insight.description}</p>

      <div className="space-y-3 mb-4">
        {insight.signals.slice(0, 2).map((signal) => (
          <div key={signal.id} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg">
            <ArrowRight className="w-4 h-4 mt-1 text-blue-400" />
            <div>
              <div className="text-sm mb-1">{signal.title}</div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>{signal.source}</span>
                <span>•</span>
                <span>{signal.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="sm"
        className="w-full text-blue-400 hover:text-blue-300"
        onClick={() => onSelect(insight.id)}
      >
        <ArrowRight className="w-4 h-4 mr-2" />
        View Analysis
      </Button>
    </Card>
  );
}