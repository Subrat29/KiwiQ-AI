"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bot, ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { channelData } from "@/lib/data/channel-optimization";

export function AgentAnalysisPanel() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setIsLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    if (!isLoading && currentStep < channelData.insights.length) {
      const timer = setInterval(() => {
        setCurrentStep(prev => prev + 1);
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [isLoading, currentStep]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-3">
        <Bot className="w-5 h-5 text-blue-400" />
        <h2 className="text-lg font-semibold">Agent Analysis</h2>
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <Card className="bg-slate-900/95 border-slate-800/50 p-4">
              <div className="flex items-center space-x-3">
                <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                <p className="text-sm text-gray-600">Analyzing channel performance data...</p>
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="insights"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {channelData.insights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: index <= currentStep ? 1 : 0.5,
                  x: 0 
                }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-slate-900/95 border-slate-800/50 p-4">
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-400" />
                    <div>
                      <h3 className="font-medium mb-1">{insight.title}</h3>
                      <p className="text-sm text-gray-600">{insight.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Analysis Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-1" />
      </div>
    </div>
  );
}