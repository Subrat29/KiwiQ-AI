"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Database } from "lucide-react";
import { BaseNode } from "./base-node";
import { NodeProps } from 'reactflow'

export function DataSourceNode({ id, data }: NodeProps) {
  const Icon = data.sourceIcon || Database;

  return (
    <BaseNode
      id={id}
      title={data.sourceType || "Data Source"}
      icon={<Icon className="w-4 h-4" />}
      inputs={["input"]}
      outputs={["output"]}
      onDelete={data.onDelete}
    >
      <div className="space-y-3">
        <div className="bg-gray-100 p-2 rounded-md">
          <span className="text-xs text-gray-500">
            {" "}
            We can have a selection for what channel of the data source we want
            to connect to.
          </span>
        </div>
        <div className="space-y-2">
          <Label>Connection String</Label>
          <Input placeholder="Enter connection details..." />
        </div>
      </div>
    </BaseNode>
  );
}
