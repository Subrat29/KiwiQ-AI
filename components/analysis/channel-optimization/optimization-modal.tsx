"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Bot, ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OptimizationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const insights = [
  "Analyzing channel performance data...",
  "LinkedIn campaigns consistently outperforming SEM for enterprise healthcare decision-makers.",
  "Technical decision-makers showing 2.8x higher engagement rate on LinkedIn.",
  "Reallocating 30% of SEM budget to LinkedIn could yield $45,000 monthly savings.",
  "Gradual transition over 4 weeks to maintain lead flow and validate performance."
];

export function OptimizationModal({ isOpen, onClose }: OptimizationModalProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setProgress(0);
      setCurrentStep(0);
      setIsLoading(true);
      
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
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isLoading && currentStep < insights.length) {
      const timer = setInterval(() => {
        setCurrentStep(prev => prev + 1);
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [isLoading, currentStep]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] bg-slate-900/95 border-slate-800/50">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Optimize Enterprise Healthcare Campaigns
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-gray-600">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                  <p className="text-sm">Analyzing channel performance data...</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="insights"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {insights.slice(0, currentStep).map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-slate-800/50 p-4 rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 mt-1 text-blue-400" />
                      <div>
                        <p className="text-sm">{insight}</p>
                      </div>
                    </div>
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
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}