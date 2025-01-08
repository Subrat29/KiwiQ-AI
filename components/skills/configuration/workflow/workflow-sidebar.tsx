"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";

interface WorkflowSidebarProps {
  skillId: string;
  selectedNode: string | null;
}

export function WorkflowSidebar({ skillId, selectedNode }: WorkflowSidebarProps) {
  if (!selectedNode) {
    return (
      <Card className="w-80 bg-slate-900/95 border-slate-800/50 p-6">
        <p className="text-gray-600 text-sm">
          Select a node to configure its settings
        </p>
      </Card>
    );
  }

  return (
    <Card className="w-80 bg-slate-900/95 border-slate-800/50">
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Node Name</Label>
              <Input 
                defaultValue="Intent Classification"
                className="bg-slate-800/50 border-slate-700"
              />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea 
                defaultValue="Classify user intent and extract key information"
                className="bg-slate-800/50 border-slate-700 min-h-[100px]"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Model Settings</h3>
            
            <div className="space-y-2">
              <Label>Model Version</Label>
              <Input 
                defaultValue="gpt-4"
                className="bg-slate-800/50 border-slate-700"
              />
            </div>

            <div className="space-y-2">
              <Label>Temperature</Label>
              <Slider
                defaultValue={[0.7]}
                max={1}
                step={0.1}
                className="my-4"
              />
            </div>

            <div className="flex items-center justify-between">
              <Label>Enable Streaming</Label>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Prompt Template</h3>
            <Textarea 
              defaultValue="Given the following input, classify the user's intent:\n\n{{input}}\n\nIntent:"
              className="bg-slate-800/50 border-slate-700 min-h-[200px] font-mono text-sm"
            />
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
}