"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ApiAnalysisSteps } from "./steps/api-analysis-steps";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ApiAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  signalData: {
    title: string;
    intentScore: number;
    description: string;
  };
}

export function ApiAnalysisModal({ isOpen, onClose, signalData }: ApiAnalysisModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[900px] h-[80vh] p-0 bg-slate-900/95 border-slate-800/50">
        <VisuallyHidden>
          <DialogTitle>API Analysis: {signalData.title}</DialogTitle>
        </VisuallyHidden>
        <ApiAnalysisSteps 
          currentStep={currentStep} 
          onStepChange={setCurrentStep}
          signalData={signalData}
        />
      </DialogContent>
    </Dialog>
  );
}