"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { SuggestionChips } from "./suggestion-chips";
import { ExampleSection } from "./example-section";
import { StrictnessSlider } from "./strictness-slider";
import { Skill } from "@/types/skills";

interface SkillConfigConversationProps {
  skill: Skill;
  onConfigChange: (config: Record<string, any>) => void;
}

export function SkillConfigConversation({ skill, onConfigChange }: SkillConfigConversationProps) {
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState(skill.configuration);

  const handleInputSubmit = () => {
    if (!input.trim()) return;
    const newConfig = { ...config, trackingQuery: input };
    setConfig(newConfig);
    onConfigChange(newConfig);
    setStep(1);
  };

  const handleExampleSelect = (example: string) => {
    const newConfig = { ...config, examples: [...(config.examples || []), example] };
    setConfig(newConfig);
    onConfigChange(newConfig);
  };

  const handleStrictnessChange = (value: number) => {
    const newConfig = { ...config, strictness: value };
    setConfig(newConfig);
    onConfigChange(newConfig);
  };

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-lg font-medium mb-4">What do you want to track?</h3>
              <div className="space-y-4">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g., Enterprise security requirements in healthcare"
                  className="bg-slate-900/50 border-slate-700"
                />
                <SuggestionChips onSelect={(suggestion) => setInput(suggestion)} />
                <Button
                  onClick={handleInputSubmit}
                  disabled={!input.trim()}
                  className="w-full bg-blue-500 hover:bg-blue-600"
                >
                  Continue
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="examples"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ExampleSection
              onSelect={handleExampleSelect}
              onNext={() => setStep(2)}
            />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="strictness"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <StrictnessSlider
              value={config.strictness || 0.5}
              onChange={handleStrictnessChange}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}