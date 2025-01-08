"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { TestResult } from "@/types/skills";

interface TestingSidebarProps {
  results: TestResult[];
  onFeedback: (id: string, feedback: "positive" | "negative") => void;
}

export function TestingSidebar({ results, onFeedback }: TestingSidebarProps) {
  return (
    <Card className="w-96 bg-gradient-to-r from-white to-gray-100/50">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-medium text-gray-700">Test Results</h2>
      </div>

      <ScrollArea className="h-[calc(100vh-14rem)]">
        <div className="p-4 space-y-4">
          {results.map((result) => (
            <Card
              key={result.id}
              className="p-4 space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-[#3ECF8E]/10 text-[#3ECF8E] border-[#3ECF8E]/30">
                    {Math.round(result.confidence * 100)}% Confidence
                  </Badge>
                  <span className="text-xs text-zinc-400">
                    {new Date(result.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <p className="text-xs text-gray-600">Input</p>
                  <p className="text-sm text-gray-700">{result.input}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-gray-600">Output</p>
                  <p className="text-sm text-gray-700">{result.output}</p>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${
                    result.feedback === "positive" 
                      ? "text-green-500" 
                      : "text-gray-500 hover:text-green-500"
                  }`}
                  onClick={() => onFeedback(result.id, "positive")}
                >
                  <ThumbsUp className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${
                    result.feedback === "negative" 
                      ? "text-red-400" 
                      : "text-gray-500 hover:text-red-400"
                  }`}
                  onClick={() => onFeedback(result.id, "negative")}
                >
                  <ThumbsDown className="w-4 h-4 mt-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}