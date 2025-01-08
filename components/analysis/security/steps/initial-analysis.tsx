"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, ArrowRight } from "lucide-react";

interface InitialAnalysisProps {
  onOptionSelect: (option: string) => void;
  signalData: {
    title: string;
    intentScore: number;
    description: string;
  };
}

export function InitialAnalysis({ onOptionSelect, signalData }: InitialAnalysisProps) {
  const options = [
    {
      id: "patterns",
      label: "Analyze the evaluation patterns",
      description: "Deep dive into common behaviors and timelines"
    },
    {
      id: "timeline",
      label: "View the shared timeline",
      description: "See how events align across companies"
    },
    {
      id: "signals",
      label: "Explore early signals from other companies",
      description: "Identify potential opportunities"
    }
  ];

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
          I'm detecting an unusual velocity in enterprise security evaluations. Three Fortune 500 financial 
          services companies are following similar patterns. This could indicate an emerging market shift. 
          Would you like to:
        </p>

        <div className="grid gap-3 mt-4">
          {options.map((option) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                variant="ghost"
                className="w-full justify-start p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50"
                onClick={() => onOptionSelect(option.id)}
              >
                <ArrowRight className="w-4 h-4 mr-3 text-blue-400" />
                <div className="text-left">
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.description}</div>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}