"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Brain, Target } from "lucide-react";
import { Skill } from "@/types/skills";

interface ConversationFlowProps {
  skill: Skill;
  onConfigChange: (config: Record<string, any>) => void;
}

export function ConversationFlow({ skill, onConfigChange }: ConversationFlowProps) {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState({
    objective: "",
    examples: [] as string[],
    strictness: 0.5,
  });

  const handleConfigUpdate = (updates: Partial<typeof config>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    onConfigChange(newConfig);
  };

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="objective"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-blue-400" />
                <h3 className="font-medium">What should this skill detect?</h3>
              </div>
              
              <div className="space-y-4">
                <Input
                  value={config.objective}
                  onChange={(e) => handleConfigUpdate({ objective: e.target.value })}
                  placeholder="e.g., High-intent enterprise security evaluation signals"
                  className="bg-slate-900/50 border-slate-700"
                />

                <div className="flex flex-wrap gap-2">
                  {["Enterprise signals", "Security focus", "Technical evaluation"].map((suggestion) => (
                    <Badge
                      key={suggestion}
                      variant="outline"
                      className="bg-slate-800/50 cursor-pointer hover:bg-slate-800"
                      onClick={() => handleConfigUpdate({ objective: suggestion })}
                    >
                      {suggestion}
                    </Badge>
                  ))}
                </div>

                <Button
                  onClick={() => setStep(1)}
                  disabled={!config.objective}
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
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-5 h-5 text-blue-400" />
                <h3 className="font-medium">Give me some examples</h3>
              </div>

              <div className="space-y-4">
                {[
                  "CISO reviewing SSO documentation",
                  "Security team accessing compliance docs",
                  "Multiple stakeholders in technical review"
                ].map((example) => (
                  <Card
                    key={example}
                    className={`
                      p-4 cursor-pointer transition-all
                      ${config.examples.includes(example)
                        ? 'bg-blue-500/10 border-blue-500/50'
                        : 'bg-slate-900/50 border-slate-700 hover:border-slate-600'}
                    `}
                    onClick={() => {
                      const examples = config.examples.includes(example)
                        ? config.examples.filter(e => e !== example)
                        : [...config.examples, example];
                      handleConfigUpdate({ examples });
                    }}
                  >
                    <p className="text-sm">{example}</p>
                  </Card>
                ))}

                <Button
                  onClick={() => setStep(2)}
                  disabled={config.examples.length === 0}
                  className="w-full bg-blue-500 hover:bg-blue-600"
                >
                  Continue
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="strictness"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-blue-400" />
                <h3 className="font-medium">How strict should we be?</h3>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between">
                  {["Inclusive", "Balanced", "Strict"].map((level) => (
                    <Button
                      key={level}
                      variant="outline"
                      className={`
                        ${config.strictness === (level === "Inclusive" ? 0.3 : level === "Balanced" ? 0.5 : 0.7)
                          ? 'bg-blue-500/10 border-blue-500/50'
                          : 'bg-slate-800/50'}
                      `}
                      onClick={() => handleConfigUpdate({
                        strictness: level === "Inclusive" ? 0.3 : level === "Balanced" ? 0.5 : 0.7
                      })}
                    >
                      {level}
                    </Button>
                  ))}
                </div>

                <Card className="bg-slate-900/50 border-slate-700 p-4">
                  <p className="text-sm text-gray-600">
                    {config.strictness === 0.3 && "Will catch more signals but may include some false positives"}
                    {config.strictness === 0.5 && "Balanced approach between accuracy and coverage"}
                    {config.strictness === 0.7 && "Focus on high-confidence signals only"}
                  </p>
                </Card>

                <Button
                  onClick={() => onConfigChange(config)}
                  className="w-full bg-blue-500 hover:bg-blue-600"
                >
                  Save Configuration
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}