"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Agent } from "@/types/agents";
import { Bot, Activity, Database, Settings, Play } from "lucide-react";
import { TestBoxModal } from "../testbox/test-box-modal";

interface AgentDetailsProps {
  agent: Agent;
}

export function AgentDetails({ agent }: AgentDetailsProps) {
  const [showTestBox, setShowTestBox] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{agent.name}</h1>
          <p className="text-gray-600 mt-2">{agent.description}</p>
        </div>
        <Button 
          onClick={() => setShowTestBox(true)}
          className="bg-blue-500 hover:bg-blue-600"
        >
          <Play className="w-4 h-4 mr-2" />
          Test Agent
        </Button>
      </div>

      {/* Rest of the component remains the same */}
      
      <TestBoxModal 
        isOpen={showTestBox}
        onClose={() => setShowTestBox(false)}
        agent={agent}
      />
    </div>
  );
}