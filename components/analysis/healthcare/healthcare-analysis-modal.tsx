"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { HealthcareAnalysisSteps } from "./steps/healthcare-analysis-steps";
import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface HealthcareAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  signalData: {
    title: string;
    intentScore: number;
    description: string;
  };
}

export function HealthcareAnalysisModal({ isOpen, onClose, signalData }: HealthcareAnalysisModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[900px] h-[80vh] p-0 bg-slate-900/95 border-slate-800/50">
        <VisuallyHidden>
          <DialogTitle>Healthcare Analysis: {signalData.title}</DialogTitle>
        </VisuallyHidden>
        <HealthcareAnalysisSteps 
          currentStep={currentStep} 
          onStepChange={setCurrentStep}
          signalData={signalData}
        />
      </DialogContent>
    </Dialog>
  );
}