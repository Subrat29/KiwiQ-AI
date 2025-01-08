"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AnalysisProgress } from "./analysis-progress";
import { ExecutionPanel } from "./execution-panel";
import { insights } from "@/lib/data/analysis";

interface OptimizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  actionType: "healthcare" | "nurture" | "content";
}

export function OptimizationModal({ isOpen, onClose, actionType }: OptimizationModalProps) {
  const [progress, setProgress] = useState(0);
  const [waitingForInput, setWaitingForInput] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setProgress(0);
      setWaitingForInput(false);
      setAnalysisComplete(false);
    }
  }, [isOpen]);

  // Handle progress updates
  useEffect(() => {
    if (!isOpen || waitingForInput || analysisComplete) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        const nextProgress = prev + 5; // Faster progress

        // Check for interaction points
        if ([20, 60, 80].includes(nextProgress)) {
          clearInterval(interval);
          setWaitingForInput(true);
          return nextProgress;
        }

        // Complete analysis
        if (nextProgress >= 100) {
          clearInterval(interval);
          setAnalysisComplete(true);
          return 100;
        }

        return nextProgress;
      });
    }, 100); // Faster updates

    return () => clearInterval(interval);
  }, [isOpen, waitingForInput, analysisComplete]);

  const handleUserInput = () => {
    setWaitingForInput(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] max-h-[80vh] modal-gradient border-slate-700/30 backdrop-blur-xl overflow-hidden">
        <DialogHeader>
          <DialogTitle>
            {actionType === "healthcare" ? "Optimize Enterprise Healthcare Campaigns" :
             actionType === "nurture" ? "Update Enterprise Nurture Sequence" :
             "Scale Technical Content Production"}
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {!analysisComplete ? (
            <AnalysisProgress
              progress={progress}
              waitingForInput={waitingForInput}
              onUserInput={handleUserInput}
              actionType={actionType}
            />
          ) : (
            <ExecutionPanel actionType={actionType} onClose={onClose} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}