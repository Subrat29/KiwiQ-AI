"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skill } from "@/types/skills";
import { CheckCircle, AlertCircle } from "lucide-react";

interface PreviewPanelProps {
  skill: Skill;
}

export function PreviewPanel({ skill }: PreviewPanelProps) {
  const validationStatus = {
    configuration: true,
    dataSources: true,
    rules: skill.configuration.rules?.length > 0
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Configuration Status</h3>
          <div className="space-y-2">
            {Object.entries(validationStatus).map(([key, isValid]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm capitalize">{key}</span>
                {isValid ? (
                  <Badge className="bg-green-500/10 text-green-400 border-green-500/30">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Valid
                  </Badge>
                ) : (
                  <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Needs Review
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Sample Output</h3>
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <pre className="text-sm whitespace-pre-wrap">
              {JSON.stringify({
                confidence: skill.configuration.threshold,
                model: skill.configuration.model,
                rules: skill.configuration.rules?.length || 0
              }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </Card>
  );
}