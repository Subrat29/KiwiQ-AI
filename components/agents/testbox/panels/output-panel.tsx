"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TestResult } from "@/types/testbox";
import { AnimatePresence, motion } from "framer-motion";
import { Save, ThumbsDown, ThumbsUp } from "lucide-react";

interface OutputPanelProps {
  results: TestResult[];
}

export function OutputPanel({ results }: OutputPanelProps) {
  return (
    <div className="w-1/3 p-4 overflow-y-auto">
      <h3 className="font-medium">Results</h3>

      <AnimatePresence>
        {results.map((result) => (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="bg-transparent p-4 space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className="bg-green-400/10 text-green-500 border-green-400/30"
                >
                  {result.confidence}% Confidence
                </Badge>
                <span className="text-sm text-gray-700">
                  {result.executionTime}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-gray-700">Input</div>
                <div className="text-sm font-medium">{result.input}</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm text-gray-700">Output</div>
                <div className="text-sm font-medium">{result.output}</div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-700 hover:text-green-400"
                  >
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-700 hover:text-red-400 mt-1"
                  >
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save as Template
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
