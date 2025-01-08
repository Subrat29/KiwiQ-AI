"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, HelpCircle, Save } from "lucide-react";
import { Agent } from "@/types/agents";

interface TestBoxHeaderProps {
  agent: Agent;
  onClose: () => void;
}

export function TestBoxHeader({ agent, onClose }: TestBoxHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-lg font-semibold">{agent.name}</h2>
          <div className="flex items-center gap-2 mt-1">
            <Badge 
              variant="outline" 
              className="bg-green-400/10 text-green-500 border-green-400/30 py-1"
            >
              {agent.accuracy}% Accuracy
            </Badge>
            <span className="text-sm text-gray-600">
              {agent.signalsProcessed} signals processed
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 hover:text-gray-700"
          onClick={() => console.log("Save feedback")}
        >
          <Save className="w-4 h-4 mr-2" />
          Save Feedback
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:text-gray-700 mr-6"
        >
          <HelpCircle className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}