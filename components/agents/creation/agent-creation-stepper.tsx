"use client";

import { useState } from "react";
import { ObjectiveStep } from "./steps/objective-step";
import { DataSourcesStep } from "./steps/data-sources-step";
import { SkillsStep } from "./steps/skills-step";
import { TrainingStep } from "./steps/training-step";
import { DeploymentStep } from "./steps/deployment-step";
import { StepIndicator } from "./step-indicator";

const steps = [
  { title: "Define Objective", description: "Set your agent's purpose" },
  { title: "Data Sources", description: "Connect data sources" },
  { title: "Configure Skills", description: "Add agent skills" },
  { title: "Training", description: "Configure training" },
  { title: "Deployment", description: "Set schedule & alerts" }
];

export function AgentCreationStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    objective: "",
    template: "",
    dataSources: [],
    skills: [],
    trainingConfig: {},
    deploymentConfig: {}
  });

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const updateFormData = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <StepIndicator steps={steps} currentStep={currentStep} />

      <div className="mt-8">
        {currentStep === 0 && (
          <ObjectiveStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        )}
        {currentStep === 1 && (
          <DataSourcesStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 2 && (
          <SkillsStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 3 && (
          <TrainingStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 4 && (
          <DeploymentStep
            formData={formData}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}