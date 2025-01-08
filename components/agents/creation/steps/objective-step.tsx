"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { agentTemplates } from "@/lib/data/agent-templates";

interface ObjectiveStepProps {
  formData: any;
  updateFormData: (key: string, value: any) => void;
  onNext: () => void;
}

export function ObjectiveStep({ formData, updateFormData, onNext }: ObjectiveStepProps) {
  const [objective, setObjective] = useState(formData.objective || "");
  const [selectedTemplate, setSelectedTemplate] = useState(formData.template || "");

  const handleContinue = () => {
    updateFormData("objective", objective);
    updateFormData("template", selectedTemplate);
    onNext();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Define Your Agent's Objective</h2>
        <Input
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
          placeholder="e.g., Monitor enterprise healthcare buying signals"
          className="bg-transparent border-gray-200"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Choose a Template</h2>
        <div className="grid grid-cols-2 gap-4">
          {agentTemplates.map((template, i) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card 
                className={`
                  p-4 cursor-pointer transition-all
                  ${selectedTemplate === template.id 
                    ? 'bg-green-400/10 border-green-500/50' 
                    : 'bg-gradient-to-r from-white to-gray-100/50 border-gray-200 hover:shadow-md transition'}
                `}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Bot className="w-5 h-5 text-gray-800" />
                  <h3 className="font-medium">{template.name}</h3>
                </div>
                <p className="text-sm text-gray-700">{template.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleContinue}
          disabled={!objective || !selectedTemplate}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}