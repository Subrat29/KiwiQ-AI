"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AssumptionValidation, StrategyConfirmation } from "../agent";
import { ArrowRight } from "lucide-react";

interface AnalysisInsightsProps {
  insights: Array<{ text: string; type: string }>;
  currentStep: number;
  waitingForInput: boolean;
  onUserInput: () => void;
  onComplete: () => void;
}

export function AnalysisInsights({ 
  insights, 
  currentStep, 
  waitingForInput,
  onUserInput,
  onComplete 
}: AnalysisInsightsProps) {
  return (
    <motion.div
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

      <AnimatePresence>
        {/* Assumption Validation (60% stage) */}
        {currentStep === 2 && waitingForInput && (
          <AssumptionValidation onValidate={() => onUserInput()} />
        )}

        {/* Strategy Confirmation (80% stage) */}
        {currentStep === 3 && waitingForInput && (
          <StrategyConfirmation onConfirm={() => {
            onUserInput();
            onComplete();
          }} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}