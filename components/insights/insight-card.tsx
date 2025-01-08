"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import { FeedbackButtons } from "@/components/ui/feedback-buttons";
import { AgentModal } from "../agents/agent-modal";
import { KeyInsight } from "@/types/insights";

interface InsightCardProps {
  insight: KeyInsight;
}

export function InsightCard({ insight }: InsightCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleFeedback = (type: "up" | "down") => {
    console.log(`Insight feedback: ${type}`, insight.title);
  };

  return (
    <>
      <Card className="bg-gradient-to-br from-white to-gray-100/80 border-gray-200 overflow-hidden">
        <div
          className="p-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="outline"
                  className={`
                    ${
                      insight.priority === "high"
                        ? "bg-red-500/10 text-red-400 border-red-500/30"
                        : insight.priority === "medium"
                        ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/30"
                        : "bg-gray-100 text-gray-600 border-gray-200"
                    }
                  `}
                >
                  {insight.confidence}% Confidence
                </Badge>
                <span className="text-xs text-gray-500">
                  {insight.timestamp}
                </span>
              </div>
              <h3 className="font-medium text-sm">{insight.title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <FeedbackButtons onFeedback={handleFeedback} />
              <TrendingUp className="w-4 h-4 text-green-500 ml-2" />
            </div>
          </div>
          <p className="text-sm text-gray-700 line-clamp-2">
            {insight.summary}
          </p>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
              <div className="p-4 pt-0 space-y-4">
                <div className="space-y-2">
                  {insight.evidence.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="w-full bg-black text-white hover:shadow-md transition-all hover:bg-black/90"
                    onClick={() => setShowAnalysis(true)}
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Analyze Impact
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      <AgentModal
        isOpen={showAnalysis}
        onClose={() => setShowAnalysis(false)}
        agentType="strategic"
        title={`Analysis: ${insight.title}`}
      />
    </>
  );
}
