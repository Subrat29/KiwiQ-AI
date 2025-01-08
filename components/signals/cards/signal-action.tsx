"use client";

import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

interface SignalActionProps {
  onAction: () => void;
}

export function SignalAction({ onAction }: SignalActionProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-600">Recommended Action:</span>
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-blue-400 hover:text-blue-300"
        onClick={onAction}
      >
        <TrendingUp className="w-4 h-4 mr-2" />
        Take Action
      </Button>
    </div>
  );
}