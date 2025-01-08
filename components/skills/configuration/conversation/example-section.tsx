"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { motion } from "framer-motion";

interface ExampleSectionProps {
  onSelect: (example: string) => void;
  onNext: () => void;
}

const examples = [
  {
    text: "CISO reviewing SSO documentation",
    metadata: "High intent, Technical focus"
  },
  {
    text: "Multiple stakeholders accessing security whitepapers",
    metadata: "Group behavior, Content engagement"
  },
  {
    text: "Enterprise security team requesting compliance docs",
    metadata: "Direct intent, Multiple signals"
  }
];

export function ExampleSection({ onSelect, onNext }: ExampleSectionProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <h3 className="text-lg font-medium mb-4">Examples that match</h3>
      <div className="space-y-4">
        {examples.map((example, i) => (
          <motion.div
            key={example.text}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="bg-slate-900/50 border-slate-700 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm mb-1">{example.text}</p>
                  <p className="text-xs text-gray-600">{example.metadata}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-green-400"
                    onClick={() => onSelect(example.text)}
                  >
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-red-400"
                  >
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        <Button
          onClick={onNext}
          className="w-full bg-blue-500 hover:bg-blue-600 mt-4"
        >
          Continue
        </Button>
      </div>
    </Card>
  );
}