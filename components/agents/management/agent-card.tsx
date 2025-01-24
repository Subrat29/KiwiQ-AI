"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Bot, Play, Pause, Settings, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { Agent } from "@/types/agents";
import { useState } from "react";
import { TestBoxModal } from "../testbox/test-box-modal";

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const router = useRouter();
  const [showTestBox, setShowTestBox] = useState(false);

  return (
    <Card className="bg-gradient-to-r from-white to-gray-100/30 hover:bg-white hover:shadow-md transition-all p-4">
      <Badge
        variant="outline"
        className={`capitalize py-1
            ${
              agent.status === "active"
                ? "bg-green-400/10 text-green-500 border-green-400/30"
                : agent.status === "paused"
                ? "bg-yellow-400/10 text-yellow-600 border-yellow-400/30"
                : "bg-gray-100 text-gray-700 border-slate-200"
            }
          `}
      >
        {agent.status}
      </Badge>
      <div className="flex items-start justify-between mt-4">
        <div className="flex items-center gap-3">
          <Bot className="w-5 h-5" />
          <div>
            <h3 className="font-medium">{agent.name}</h3>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{agent.description}</p>

      <div className="space-y-4 my-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 font-medium">Accuracy</span>
          <span className="text-gray-700 font-medium">{agent.accuracy}%</span>
        </div>
        <Progress value={agent.accuracy} className="h-1" />

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-600 mb-1">Signals Processed</div>
            <div className="font-medium">{agent.signalsProcessed}</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">Last Active</div>
            <div className="font-medium">{agent.lastActive}</div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 bg-transparent hover:bg-transparent hover:shadow-md"
          onClick={() => setShowTestBox(true)}
        >
          <Play className="w-4 h-4 mr-2" />
          Test
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 bg-transparent hover:bg-transparent hover:shadow-md"
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
