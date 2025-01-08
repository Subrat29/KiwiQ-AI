"use client";

import { motion } from "framer-motion";
import { Database, LineChart, Sparkles } from "lucide-react";
import { AgentThinking, AssumptionValidation, StrategyConfirmation } from "../agent";
import { ProgressBar } from "./progress-bar";

interface AnalysisProgressProps {
  progress: number;
  waitingForInput: boolean;
  onUserInput: () => void;
  actionType: string;
}

const stages = [
  {
    threshold: 20,
    icon: Database,
    message: "Connecting to data sources...",
    detail: "Accessing LinkedIn Analytics, Google Ads, and Salesforce"
  },
  {
    threshold: 60,
    icon: LineChart,
    message: "Analyzing performance data...",
    detail: "Processing campaign metrics and engagement patterns"
  },
  {
    threshold: 100,
    icon: Sparkles,
    message: "Generating insights...",
    detail: "Identifying optimization opportunities"
  }
];

export function AnalysisProgress({ progress, waitingForInput, onUserInput, actionType }: AnalysisProgressProps) {
  const currentStage = stages.find(stage => progress <= stage.threshold) || stages[0];
  const Icon = currentStage.icon;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-blue-900/20"
      >
        <div className="flex items-start gap-3">
          <Icon className="w-5 h-5 mt-0.5 text-blue-400 animate-pulse" />
          <div className="space-y-2">
            <p className="text-sm font-medium">{currentStage.message}</p>
            <p className="text-xs text-gray-600">{currentStage.detail}</p>
          </div>
        </div>
      </motion.div>

      {/* Agent Interactions */}
      {waitingForInput && progress === 20 && (
        <AgentThinking 
          onFeedback={(isCorrect) => {
            if (isCorrect) onUserInput();
          }} 
        />
      )}

      {waitingForInput && progress === 60 && (
        <AssumptionValidation 
          onValidate={(isCorrect) => {
            if (isCorrect) onUserInput();
          }} 
        />
      )}

      {waitingForInput && progress === 80 && (
        <StrategyConfirmation 
          onConfirm={() => onUserInput()} 
        />
      )}

      <ProgressBar progress={progress} />
    </div>
  );
}