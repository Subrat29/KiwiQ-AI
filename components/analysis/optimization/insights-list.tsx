"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ExecutionState } from "./execution-state";

interface InsightsListProps {
  insights: Array<{ text: string; type: string }>;
  currentStep: number;
  onExecute: () => void;
}

export function InsightsList({ insights, currentStep, onExecute }: InsightsListProps) {
  const showExecution = currentStep === insights.length - 1;

  return (
    <motion.div
      key="insights"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      {insights.slice(0, currentStep + 1).map((insight, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-4 rounded-lg ${
            insight.type === "recommendation" 
              ? "bg-blue-500/10 border border-blue-500/20"
              : insight.type === "plan"
              ? "bg-green-500/10 border border-green-500/20"
              : "bg-slate-800/50"
          }`}
        >
          <div className="flex items-start gap-3">
            <ArrowRight className={`w-4 h-4 mt-1 ${
              insight.type === "recommendation" 
                ? "text-blue-400"
                : insight.type === "plan"
                ? "text-green-400"
                : "text-gray-600"
            }`} />
            <div className="flex-1">
              <p className="text-sm leading-relaxed">{insight.text}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {showExecution && <ExecutionState onExecute={onExecute} />}
    </motion.div>
  );
}