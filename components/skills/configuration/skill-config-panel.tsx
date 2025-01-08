"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Brain, Play } from "lucide-react";
import { Skill } from "@/types/skills";

interface SkillConfigPanelProps {
  skill: Skill;
  onConfigChange: (config: Record<string, any>) => void;
}

export function SkillConfigPanel({
  skill,
  onConfigChange,
}: SkillConfigPanelProps) {
  const [config, setConfig] = useState(skill.configuration);

  const handleConfigUpdate = (updates: Partial<Record<string, any>>) => {
    const newConfig = { ...config, ...updates };
    setConfig(newConfig);
    onConfigChange(newConfig);
  };

  return (
    <div className="p-4">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="w-full bg-green-400/10 border border-green-400/50 p-1">
          <TabsTrigger value="basic" className="flex-1">
            Basic Settings
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex-1">
            Advanced
          </TabsTrigger>
          <TabsTrigger value="test" className="flex-1">
            Test
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-4 space-y-4">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-5 h-5 text-green-600" />
              <h3 className="font-medium">Core Settings</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">
                  Confidence Threshold
                </label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[config.threshold * 100]}
                    onValueChange={([value]) =>
                      handleConfigUpdate({ threshold: value / 100 })
                    }
                    min={0}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium w-12">
                    {Math.round(config.threshold * 100)}%
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">
                  Signal Strength
                </label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[config.signalStrength * 100]}
                    onValueChange={([value]) =>
                      handleConfigUpdate({ signalStrength: value / 100 })
                    }
                    min={0}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium w-12">
                    {Math.round(config.signalStrength * 100)}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Auto-tuning</label>
                <Switch
                  checked={config.autoTuning}
                  onCheckedChange={(checked) =>
                    handleConfigUpdate({ autoTuning: checked })
                  }
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="mt-4 space-y-4">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-5 h-5 text-green-500" />
              <h3 className="font-medium">Advanced Configuration</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Custom Rules</label>
                <Input
                  value={config.customRules || ""}
                  onChange={(e) =>
                    handleConfigUpdate({ customRules: e.target.value })
                  }
                  placeholder="e.g., if signal_strength > 0.8 then priority = high"
                  className="bg-transparent border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Model Version</label>
                <Input
                  value={config.modelVersion || ""}
                  onChange={(e) =>
                    handleConfigUpdate({ modelVersion: e.target.value })
                  }
                  placeholder="e.g., enterprise-v1"
                  className="bg-transparent border-gray-200"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="test" className="mt-4 space-y-4">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Play className="w-5 h-5 text-green-500" />
              <h3 className="font-medium">Test Configuration</h3>
            </div>

            <div className="space-y-4">
              <Input
                placeholder="Enter test input..."
                className="bg-transparent border-gray-200"
              />

              <Button className="w-full bg-green-500 hover:bg-green-600">
                Run Test
              </Button>

              <div className="p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">Results</span>
                  <Badge
                    variant="outline"
                    className="bg-green-400/10 text-green-500 border-green-400/30 py-1"
                  >
                    92% Match
                  </Badge>
                </div>
                <pre className="text-sm whitespace-pre-wrap">
                  {JSON.stringify(config, null, 2)}
                </pre>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
