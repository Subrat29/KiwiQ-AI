"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Analysis Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
        />
      </div>
    </div>
  );
}