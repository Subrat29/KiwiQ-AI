"use client";

import { SkillsGrid } from "@/components/skills/skills-grid";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus, ArrowLeft, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AgentSkillsPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1400px] mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex  gap-4">
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
            <h1 className="text-3xl font-bold">Skills Library</h1>
            <p className="text-gray-600 mt-2">
              Reusable workflow components for your agents
            </p>
          </div>
        </div>
        <Button
          className="bg-green-500 hover:shadow-md hover:bg-green-500 transition"
          onClick={() => router.push("/agents/skills/create")}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Skill
        </Button>
      </div>

      <SkillsGrid />
    </div>
  );
}
