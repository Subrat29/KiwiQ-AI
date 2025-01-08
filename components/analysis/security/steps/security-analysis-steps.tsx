"use client";

import { useState } from "react";
import { InitialAnalysis } from "./initial-analysis";
import { PatternAnalysis } from "./pattern-analysis";
import { OpportunityPipeline } from "./opportunity-pipeline";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { AgentChat } from "./agent-chat";

interface SecurityAnalysisStepsProps {
  currentStep: number;
  onStepChange: (step: number) => void;
  signalData: {
    title: string;
    intentScore: number;
    description: string;
  };
}

export function SecurityAnalysisSteps({ 
  currentStep, 
  onStepChange,
  signalData 
}: SecurityAnalysisStepsProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onStepChange(1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      onStepChange(currentStep - 1);
    }
  };

  const steps = [
    <InitialAnalysis key="initial" onOptionSelect={handleOptionSelect} signalData={signalData} />,
    <PatternAnalysis key="pattern" onNext={() => onStepChange(2)} />,
    <OpportunityPipeline key="pipeline" />
  ];

  return (
    <div className="h-full flex">
      <div className="flex-1 flex flex-col">
        {/* Navigation Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          {currentStep > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="text-gray-600 hover:text-gray-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowChat(!showChat)}
            className="text-gray-600 hover:text-gray-700 ml-auto"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            {showChat ? "Hide Chat" : "Ask AI"}
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {steps[currentStep]}
        </div>
      </div>

      {/* AI Chat Panel */}
      {showChat && (
        <div className="w-[350px] border-l border-slate-800 flex flex-col">
          <AgentChat signalData={signalData} />
        </div>
      )}
    </div>
  );
}