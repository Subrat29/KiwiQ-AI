"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Info, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AssumptionValidationProps {
  onValidate: (isCorrect: boolean, feedback?: string) => void;
}

export function AssumptionValidation({ onValidate }: AssumptionValidationProps) {
  const [showInput, setShowInput] = useState(false);
  const [feedback, setFeedback] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20"
    >
      <div className="flex items-start gap-3">
        <Info className="w-4 h-4 mt-1 text-blue-400" />
        <div className="space-y-3">
          <p className="text-sm">
            I assume CISO engagement is a priority for healthcare enterprise deals. Correct?
          </p>

          {!showInput ? (
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onValidate(true)}
                className="text-green-400 hover:text-green-300"
              >
                <Check className="w-4 h-4 mr-2" />
                Yes, continue analysis
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowInput(true)}
                className="text-gray-600 hover:text-gray-600"
              >
                <X className="w-4 h-4 mr-2" />
                No, adjust focus
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              <Input
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Help me understand your priority personas"
                className="bg-slate-800/50 border-slate-700"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onValidate(false, feedback)}
                className="text-blue-400 hover:text-blue-300"
              >
                Update Analysis
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}