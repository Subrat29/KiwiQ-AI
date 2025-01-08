"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { OptionButton } from "./option-button";
import { analysisOptions } from "./data";

interface InitialAnalysisProps {
  onOptionSelect: (option: string) => void;
  signalData: {
    title: string;
    intentScore: number;
    description: string;
  };
}

export function InitialAnalysis({ onOptionSelect, signalData }: InitialAnalysisProps) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Bot className="w-5 h-5 text-blue-400" />
        <div>
          <h2 className="text-lg font-semibold">{signalData.title}</h2>
          <p className="text-sm text-gray-600">{signalData.description}</p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <p className="text-sm text-gray-600">
          I'm detecting coordinated evaluation patterns across 5 major healthcare providers. 
          This synchronization suggests an industry-wide trigger. Let me show you what's unique about this pattern.
        </p>

        <div className="grid gap-3 mt-4">
          {analysisOptions.map((option, index) => (
            <OptionButton
              key={option.id}
              {...option}
              onSelect={onOptionSelect}
              delay={index * 0.2}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}