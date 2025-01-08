"use client";

import { BaseNode } from "./base-node";
import { FileInput, FileText, Image, Table, Code2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { NodeProps } from "reactflow";
import { MultiSelect, Option } from "@/components/ui/multi-select";

const fileTypeOptions: Option[] = [
  {
    value: "pdf",
    label: "PDF Files",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    value: "image",
    label: "Image Files",
    icon: <Image className="w-4 h-4" />,
  },
  {
    value: "csv",
    label: "CSV Files",
    icon: <Table className="w-4 h-4" />,
  },
  {
    value: "json",
    label: "JSON Files",
    icon: <Code2 className="w-4 h-4" />,
  },
];

export function InputNode({ id, data }: NodeProps) {
  const [inputType, setInputType] = useState("text");
  const [selectedFileTypes, setSelectedFileTypes] = useState<string[]>(["pdf"]);

  // Update the node data when input type changes
  const handleInputTypeChange = (value: string) => {
    console.log('Input type changed to:', value);
    setInputType(value);
    data.inputType = value;
    console.log('Node data after change:', data);
  };

  // Update the node data when file types change
  const handleFileTypesChange = (types: string[]) => {
    setSelectedFileTypes(types);
    data.selectedFileTypes = types;
  };

  return (
    <BaseNode
      id={id}
      onDelete={data.onDelete}
      title="Input"
      icon={<FileInput className="w-4 h-4" />}
      outputs={["output"]}
    >
      <div className="space-y-3">
        <div className="space-y-2">
          <Label>Input Type</Label>
          <Select
            defaultValue="text"
            onValueChange={handleInputTypeChange}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text">Text</SelectItem>
              <SelectItem value="file">File</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {inputType === "file" && (
          <div className="space-y-2">
            <Label>Allowed File Types</Label>
            <MultiSelect
              options={fileTypeOptions}
              selected={selectedFileTypes}
              onChange={handleFileTypesChange}
              placeholder="Select file types..."
            />
          </div>
        )}
      </div>
    </BaseNode>
  );
}
