"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AudienceInsightsProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const insights = [
  {
    title: "Decision Maker Access",
    linkedin: "68% VP+ titles",
    sem: "23% VP+ titles",
    highlight: "CISO engagement 3x higher on LinkedIn"
  },
  {
    title: "Content Engagement",
    linkedin: "12min avg. time",
    sem: "3min avg. time",
    highlight: "Technical content performs 4x better"
  },
  {
    title: "Lead Quality",
    linkedin: "85% match ICP",
    sem: "35% match ICP",
    highlight: "Better targeting capabilities"
  }
];

export function AudienceInsights({ isExpanded, onToggle }: AudienceInsightsProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden">
      <motion.div
        className="p-4 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Audience Insights</h3>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 space-y-6">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-2"
            >
              <h4 className="font-medium">{insight.title}</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-sm text-blue-400">LinkedIn</div>
                  <div className="text-sm">{insight.linkedin}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">SEM</div>
                  <div className="text-sm">{insight.sem}</div>
                </div>
              </div>
              <div className="text-sm text-blue-400 mt-2">
                {insight.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Card>
  );
}