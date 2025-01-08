"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle } from "lucide-react";
import { ExecutionConfirmation } from "./execution-confirmation";

interface ExecutionStateProps {
  onExecute: () => void;
}

export function ExecutionState({ onExecute }: ExecutionStateProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <>
      <div className="p-6 rounded-lg bg-slate-800/50 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Ready to Execute</h3>
            <p className="text-sm text-gray-600 mt-1">All systems connected and ready</p>
          </div>
          <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
            Ready
          </Badge>
        </div>

        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 h-12 text-base font-medium"
          onClick={() => setShowConfirmation(true)}
        >
          <Play className="w-4 h-4 mr-2" />
          Execute Channel Optimization
        </Button>
      </div>

      <ExecutionConfirmation
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={onExecute}
        onModify={() => setShowConfirmation(false)}
      />
    </>
  );
}