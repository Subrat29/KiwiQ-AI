"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, ArrowLeft, Bot, Brain } from "lucide-react";
import { motion } from "framer-motion";

interface TrainingStepProps {
  formData: any;
  updateFormData: (key: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export function TrainingStep({ formData, updateFormData, onNext, onBack }: TrainingStepProps) {
  const [config, setConfig] = useState({
    confidenceThreshold: formData.trainingConfig?.confidenceThreshold || 85,
    autoTuning: formData.trainingConfig?.autoTuning || true,
    signalThreshold: formData.trainingConfig?.signalThreshold || 50,
    customRules: formData.trainingConfig?.customRules || ""
  });

  const handleContinue = () => {
    updateFormData("trainingConfig", config);
    onNext();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Configure Training</h2>
        <p className="text-gray-700">Set up how your agent learns and adapts</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-5 h-5 text-green-600" />
              <h3 className="font-medium">Learning Parameters</h3>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Confidence Threshold</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[config.confidenceThreshold]}
                    onValueChange={([value]) => setConfig(prev => ({ ...prev, confidenceThreshold: value }))}
                    min={0}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium w-12">{config.confidenceThreshold}%</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Signal Threshold</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[config.signalThreshold]}
                    onValueChange={([value]) => setConfig(prev => ({ ...prev, signalThreshold: value }))}
                    min={0}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium w-12">{config.signalThreshold}%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Auto-tuning</label>
                <Switch
                  checked={config.autoTuning}
                  onCheckedChange={(checked) => setConfig(prev => ({ ...prev, autoTuning: checked }))}
                />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bot className="w-5 h-5 text-green-600" />
              <h3 className="font-medium">Custom Rules</h3>
            </div>

            <div className="space-y-4">
              <Input
                value={config.customRules}
                onChange={(e) => setConfig(prev => ({ ...prev, customRules: e.target.value }))}
                placeholder="e.g., if signal_strength > 0.8 then priority = high"
                className="bg-transparent border-gray-200"
              />
              <p className="text-xs text-gray-700">
                Define custom rules using our simple rule syntax. Each rule should be on a new line.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>

      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleContinue}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}