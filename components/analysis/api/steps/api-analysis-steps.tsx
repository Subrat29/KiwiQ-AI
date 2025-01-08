"use client";

import { useState } from "react";
import { InitialAnalysis } from "./initial-analysis";
import { DocumentationAnalysis } from "./documentation-analysis";
import { TechnicalRequirements } from "./technical-requirements";
import { MarketPatterns } from "./market-patterns";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { AgentChat } from "./agent-chat";

interface ApiAnalysisStepsProps {
  currentStep: number;
  onStepChange: (step: number) => void;
  signalData: {
    title: string;
    intentScore: number;
    description: string;
  };
}

export function ApiAnalysisSteps({ 
  currentStep, 
  onStepChange,
  signalData 
}: ApiAnalysisStepsProps) {
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
    <DocumentationAnalysis key="documentation" onNext={() => onStepChange(2)} />,
    <TechnicalRequirements key="requirements" onNext={() => onStepChange(3)} />,
    <MarketPatterns key="patterns" />
  ];

  return (
    <div className="h-full flex">
      <div className="flex-1 flex flex-col">
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

        <div className="flex-1 overflow-y-auto">
          {steps[currentStep]}
        </div>
      </div>

      {showChat && (
        <div className="w-[350px] border-l border-slate-800 flex flex-col">
          <AgentChat signalData={signalData} />
        </div>
      )}
    </div>
  );
}