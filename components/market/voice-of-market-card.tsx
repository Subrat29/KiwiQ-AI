"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FeedbackButtons } from "@/components/ui/feedback-buttons";

interface VoiceOfMarketCardProps {
  role: string;
  source: string;
  platform: string;
  content: string;
  impact: string;
  timestamp: string;
}

export function VoiceOfMarketCard({
  role,
  source,
  platform,
  content,
  impact,
  timestamp
}: VoiceOfMarketCardProps) {
  const handleFeedback = (type: "up" | "down") => {
    console.log(`Market feedback: ${type}`, content);
  };

  return (
    <Card className="bg-gradient-to-br from-white/50 to-gray-100/50 backdrop-blur-xl hover:border-gray-200 transition-all duration-300">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Badge 
              variant="outline" 
              className="bg-green-400/10 text-green-500 border-green-500/30 text-xs py-1"
            >
              {role}
            </Badge>
            <div className="text-xs text-gray-700">{source}</div>
          </div>
          <div className="flex items-center gap-2">
            <FeedbackButtons onFeedback={handleFeedback} />
            <Badge 
              variant="outline" 
              className="bg-gray-100 text-gray-700 border-gray-200 py-1"
            >
              {platform}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-green-500/50" />
          <blockquote className="text-base text-gray-700 leading-relaxed pl-4">
            "{content}"
          </blockquote>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <Badge 
            variant="outline" 
            className="bg-green-400/10 text-green-500 border-green-500/30 py-1"
          >
            {impact}
          </Badge>
          <span className="text-sm text-slate-500">{timestamp}</span>
        </div>
      </div>
    </Card>
  );
}