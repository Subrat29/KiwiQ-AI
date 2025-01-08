"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const patterns = [
  {
    title: "Decision Maker Access",
    comparison: {
      linkedin: "68% VP+ titles",
      sem: "23% VP+ titles"
    },
    highlight: "CISO engagement 3x higher on LinkedIn"
  },
  {
    title: "Content Engagement",
    comparison: {
      linkedin: "12min avg. time",
      sem: "3min avg. time"
    },
    highlight: "Technical content performs 4x better"
  },
  {
    title: "Lead Quality",
    comparison: {
      linkedin: "85% match ICP",
      sem: "35% match ICP"
    },
    highlight: "Better targeting capabilities"
  }
];

export function PatternAnalysis() {
  return (
    <div className="space-y-4">
      {patterns.map((pattern, i) => (
        <motion.div
          key={pattern.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <Card className="bg-slate-900/95 border-slate-800/50 p-4">
            <h3 className="text-lg font-medium mb-3">{pattern.title}</h3>
            <div className="grid grid-cols-2 gap-4 mb-3">
              {Object.entries(pattern.comparison).map(([platform, value]) => (
                <div key={platform} className="space-y-1">
                  <span className="text-sm text-gray-600 capitalize">{platform}</span>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-blue-400">{pattern.highlight}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}