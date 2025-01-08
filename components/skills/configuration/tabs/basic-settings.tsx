"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Skill } from "@/types/skills";
import { useState } from "react";

interface BasicSettingsProps {
  skill: Skill;
  onConfigChange: (config: Record<string, any>) => void;
}

export function BasicSettings({ skill, onConfigChange }: BasicSettingsProps) {
  const [config, setConfig] = useState(skill.configuration);

  const handleChange = (key: string, value: any) => {
    const newConfig = { ...config, [key]: value };
    setConfig(newConfig);
    onConfigChange(newConfig);
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6 space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Confidence Threshold</label>
          <div className="flex items-center gap-4">
            <Slider
              value={[config.threshold * 100]}
              onValueChange={([value]) => handleChange("threshold", value / 100)}
              min={0}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-sm font-medium w-12">{Math.round(config.threshold * 100)}%</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Model Version</label>
          <Input
            value={config.model}
            onChange={(e) => handleChange("model", e.target.value)}
            className="bg-slate-900/50 border-slate-700"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-600">Auto-tuning</label>
          <Switch
            checked={config.autoTuning}
            onCheckedChange={(checked) => handleChange("autoTuning", checked)}
          />
        </div>
      </div>
    </Card>
  );
}