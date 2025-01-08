'use client'

import { BaseNode } from './base-node'
import { FileOutput } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { NodeProps } from 'reactflow'

export function OutputNode({ id, data }: NodeProps) {
  const handleOutputTypeChange = (value: string) => {
    console.log('Output type changed to:', value);
    data.outputType = value;
    console.log('Node data after change:', data);
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      icon={<FileOutput className="w-4 h-4" />}
      inputs={['input']}
      onDelete={data.onDelete}
    >
      <div className="space-y-3">
        <div className="space-y-2">
          <Label>Output Type</Label>
          <Select 
            defaultValue="text"
            onValueChange={handleOutputTypeChange}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text">Text</SelectItem>
              <SelectItem value="json">JSON</SelectItem>
              <SelectItem value="file">File</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-2 p-2 bg-slate-50 rounded-md min-h-[60px] text-sm text-slate-500">
          Output preview will appear here...
        </div>
      </div>
    </BaseNode>
  )
}

