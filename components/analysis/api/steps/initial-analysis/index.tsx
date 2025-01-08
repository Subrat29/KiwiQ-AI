"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { OptionButton } from "./option-button";
import { analysisOptions } from "../data/initial-options";

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
          I'm tracking significant API evaluation activity from the e-commerce platform's development team. 
          In the last 72 hours, I've detected:
        </p>

        <div className="space-y-2 text-sm text-gray-600 ml-4">
          <div>• 3x spike in enterprise endpoint documentation views</div>
          <div>• 48 new integration architecture discussions</div>
          <div>• Technical team expansion signals in 3 departments</div>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Would you like to explore any of these areas?
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