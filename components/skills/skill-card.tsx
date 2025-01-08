"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { Skill } from "@/types/skills";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const router = useRouter();

  return (
    <Card className="bg-gradient-to-r from-white to-gray-100/50 hover:bg-white hover:shadow-md transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-medium mb-1">{skill.name}</h3>
            <p className="text-sm text-gray-600">{skill.description}</p>
          </div>
          <Badge
            variant="outline"
            className="bg-green-400/10 text-green-500 border-green-400/30 w-36 flex items-center justify-center"
          >
            {skill.usageCount} Uses
          </Badge>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {skill.dataSources.map((source) => (
              <Badge key={source} variant="outline" className="bg-gray-100">
                {source}
              </Badge>
            ))}
          </div>
          <div className="text-sm text-gray-600">Created by {skill.team}</div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-transparent hover:bg-transparent hover:shadow-md transition"
            onClick={() => router.push(`/skills/${skill.id}/test`)}
          >
            <Play className="w-4 h-4 mr-2" />
            Test
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-transparent hover:bg-transparent hover:shadow-md transition"
            onClick={() => router.push(`/skills/${skill.id}/configure`)}
          >
            <Settings className="w-4 h-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>
    </Card>
  );
}
