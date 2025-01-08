"use client";

import { AgentCreationStepper } from "@/components/agents/creation/agent-creation-stepper";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewAgentPage() {
  const router = useRouter();

  return (
    <div className="w-full p-6 space-y-6">
      <Button
        variant="ghost"
        onClick={() => router.push("/agents")}
        className="flex items-center text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-0 h-10 w-10"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ArrowLeft className="w-4 h-4" />
            </TooltipTrigger>
            <TooltipContent>Agents</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Button>

      <div>
        <h1 className="text-3xl font-bold">Create New Agent</h1>
        <p className="text-gray-600 mt-2">
          Configure your AI agent in 4 simple steps
        </p>
      </div>

      <AgentCreationStepper />
    </div>
  );
}
