"use client";

import { motion } from "framer-motion";
import { Loader2, Database, LineChart, Sparkles } from "lucide-react";

interface LoadingStateProps {
  progress: number;
}

const loadingStages = [
  { 
    threshold: 25, 
    message: "Connecting to data sources...",
    icon: Database,
    detail: "Accessing LinkedIn Analytics, Google Ads, and Salesforce"
  },
  { 
    threshold: 50, 
    message: "Analyzing channel performance data...",
    icon: LineChart,
    detail: "Processing last 90 days of campaign metrics"
  },
  { 
    threshold: 75, 
    message: "Generating recommendations...",
    icon: Sparkles,
    detail: "Comparing performance across channels"
  },
  { 
    threshold: 100, 
    message: "Finalizing analysis...",
    icon: Loader2,
    detail: "Preparing implementation plan"
  }
];

export function LoadingState({ progress }: LoadingStateProps) {
  const currentStage = loadingStages.find(stage => progress <= stage.threshold) || loadingStages[0];
  const Icon = currentStage.icon;

  return (
    <motion.div
      key="loading"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      <div className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg">
        <Icon className="w-5 h-5 mt-0.5 text-blue-400 animate-pulse" />
        <div className="space-y-1">
          <p className="text-sm font-medium">{currentStage.message}</p>
          <p className="text-xs text-gray-600">{currentStage.detail}</p>
        </div>
      </div>
    </motion.div>
  );
}