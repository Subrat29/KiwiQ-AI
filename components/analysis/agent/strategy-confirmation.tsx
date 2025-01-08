"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface StrategyConfirmationProps {
  onConfirm: (strategy: string) => void;
}

export function StrategyConfirmation({ onConfirm }: StrategyConfirmationProps) {
  const [selected, setSelected] = useState<string>("");

  const strategies = [
    { value: "enterprise", label: "Continue with enterprise focus" },
    { value: "midmarket", label: "Include mid-market" },
    { value: "vertical", label: "Focus on specific verticals" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 rounded-lg bg-slate-800/50"
    >
      <div className="flex items-start gap-3">
        <Target className="w-4 h-4 mt-1 text-blue-400" />
        <div className="space-y-3">
          <p className="text-sm">Based on your data, I'm focusing on enterprise accounts ($1B+)</p>

          <RadioGroup
            value={selected}
            onValueChange={setSelected}
            className="space-y-2"
          >
            {strategies.map((strategy) => (
              <div key={strategy.value} className="flex items-center space-x-2">
                <RadioGroupItem value={strategy.value} id={strategy.value} />
                <Label htmlFor={strategy.value} className="text-sm">
                  {strategy.label}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {selected && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onConfirm(selected)}
              className="text-blue-400 hover:text-blue-300"
            >
              <Check className="w-4 h-4 mr-2" />
              Confirm Strategy
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}