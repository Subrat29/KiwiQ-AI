"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bot, Clock } from "lucide-react";

interface AgentStatusCardProps {
  name: string;
  status: string;
  progress: number;
  task: string;
  startTime: string;
  tools: string[];
}

export function AgentStatusCard({
  name,
  status,
  progress,
  task,
  startTime,
  tools
}: AgentStatusCardProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700/50 mb-4">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <Bot className="w-4 h-4 mr-2 text-blue-400" />
            <h3 className="font-medium text-sm">{name}</h3>
          </div>
          <Badge
            variant="outline"
            className="bg-blue-500/10 text-blue-400 border-blue-400/30"
          >
            {status}
          </Badge>
        </div>
        
        <Progress value={progress} className="h-1 mb-3" />
        
        <p className="text-sm text-gray-600 mb-3">{task}</p>
        
        <div className="flex items-center text-xs text-slate-500 mb-3">
          <Clock className="w-3 h-3 mr-1" />
          {startTime}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge
              key={tool}
              variant="secondary"
              className="bg-slate-900/50 text-xs"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}