"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Bot, Play, Pause, Settings, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { Agent } from "@/types/agents";
import { useState } from "react";
import { TestBoxModal } from "../testbox/test-box-modal-dark";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const router = useRouter();
  const [showTestBox, setShowTestBox] = useState(false);

  return (
    <Card className="bg-gradient-to-br backdrop-blur from-neutral-950/95 to-neutral-900 border-neutral-800 hover:shadow-md hover:shadow-neutral-900/90 transition-all p-4">
      <Badge
        variant="outline"
        className={`capitalize py-1
            ${
              agent.status === "active"
                ? "bg-green-400/10 text-green-400 border-green-400/30"
                : agent.status === "paused"
                ? "bg-yellow-400/10 text-yellow-500 border-yellow-400/30"
                : "bg-transparent text-neutral-200 border-neutral-800"
            }
          `}
      >
        {agent.status}
      </Badge>
      <div className="flex items-start justify-between mt-4">
        <div className="flex items-center gap-3">
          <Bot className="w-5 h-5 text-neutral-100" />
          <div>
            <h3 className="font-medium text-neutral-100">{agent.name}</h3>
          </div>
        </div>
      </div>
      <p className="text-sm text-neutral-400 mt-2">{agent.description}</p>

      <div className="space-y-4 my-4">
        <div className="flex justify-between text-sm">
          <span className="text-neutral-400 font-medium">Accuracy</span>
          <span className="text-neutral-200 font-medium">
            {agent.accuracy}%
          </span>
        </div>
        <Progress value={agent.accuracy} className="h-1" />

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-neutral-400 mb-1">Signals Processed</div>
            <div className="font-medium text-neutral-200">
              {agent.signalsProcessed}
            </div>
          </div>
          <div>
            <div className="text-neutral-400 mb-1">Last Active</div>
            <div className="font-medium text-neutral-200">
              {agent.lastActive}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 bg-neutral-900 hover:bg-transparent border-neutral-700 text-neutral-200 hover:text-neutral-200 hover:shadow-md transition-all hover:shadow-neutral-800"
          onClick={() => setShowTestBox(true)}
        >
          <Play className="w-4 h-4 mr-2" />
          Test
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 bg-neutral-900 hover:bg-transparent border-neutral-700 text-neutral-200 hover:text-neutral-200 hover:shadow-md transition-all hover:shadow-neutral-800"
          onClick={() => router.push(`/agents/${agent.id}/configure`)}
        >
          <Settings className="w-4 h-4 mr-2" />
          Configure
        </Button>
      </div>

      <TestBoxModal
        isOpen={showTestBox}
        onClose={() => setShowTestBox(false)}
        agent={agent}
      />
    </Card>
  );
}
