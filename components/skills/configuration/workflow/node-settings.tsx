"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WorkflowNode } from "@/types/skills";

interface NodeSettingsProps {
  node: WorkflowNode | null;
  onUpdate: (id: string, updates: Partial<WorkflowNode>) => void;
}

export function NodeSettings({ node, onUpdate }: NodeSettingsProps) {
  if (!node) {
    return (
      <Card className="p-6">
        <div className="text-center text-gray-700 text-sm">
          Select a node to configure its settings
        </div>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card className=" p-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Node Name</Label>
            <Input
              value={node.data.name}
              onChange={(e) =>
                onUpdate(node.id, {
                  data: { ...node.data, name: e.target.value },
                })
              }
              className="bg-transparent border-gray-200"
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              value={node.data.description}
              onChange={(e) =>
                onUpdate(node.id, {
                  data: { ...node.data, description: e.target.value },
                })
              }
              className="bg-transparent border-gray-200 min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Model Version</Label>
            <Select
              onValueChange={(value) =>
                onUpdate(node.id, {
                  data: { ...node.data, model: value },
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a model..."/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="gpt-4">GPT-4</SelectItem>
                  <SelectItem value="claude-3.5">
                    Claude 3.5 Sonnet (Preview)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Label>Enable Streaming</Label>
            <Switch
              checked={node.data.streaming || false}
              onCheckedChange={(checked) =>
                onUpdate(node.id, {
                  data: { ...node.data, streaming: checked },
                })
              }
            />
          </div>

          {node.type === "process" && (
            <div className="space-y-2">
              <Label>Prompt Template</Label>
              <Textarea
                value={node.data.prompt || ""}
                onChange={(e) =>
                  onUpdate(node.id, {
                    data: { ...node.data, prompt: e.target.value },
                  })
                }
                className="bg-transparent border-gray-200 min-h-[200px] font-mono text-sm"
                placeholder="Enter prompt template..."
              />
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
