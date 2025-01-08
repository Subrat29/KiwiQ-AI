"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SecurityAnalysisSteps } from "./steps/security-analysis-steps";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface SecurityAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  signalData: {
    title: string;
    intentScore: number;
    description: string;
  };
}

export function SecurityAnalysisModal({ isOpen, onClose, signalData }: SecurityAnalysisModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[900px] h-[80vh] p-0 bg-slate-900/95 border-slate-800/50">
        <VisuallyHidden>
          <DialogTitle>Security Analysis: {signalData.title}</DialogTitle>
        </VisuallyHidden>
        <SecurityAnalysisSteps 
          currentStep={currentStep} 
          onStepChange={setCurrentStep}
          signalData={signalData}
        />
      </DialogContent>
    </Dialog>
  );
}