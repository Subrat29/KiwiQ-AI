"use client";

import { motion } from "framer-motion";
import { Header } from "./header";
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
      <Header title={signalData.title} description={signalData.description} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <p className="text-sm text-gray-600">
          I'm detecting an unusual velocity in enterprise security evaluations. Three Fortune 500 financial 
          services companies are following similar patterns. This could indicate an emerging market shift. 
          Would you like to:
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