'use client'

import { BaseNode } from './base-node'
import { Bot } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { NodeProps } from 'reactflow'
import { Agent } from '@/types/agents'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

// Temporary import of mock data (replace with your actual data fetching)
const mockAgents: Agent[] = [
  {
    id: "1",
    name: "Market Trend Analyzer",
    description: "Analyzes market trends and competitor movements",
    status: "active",
    accuracy: 94,
    signalsProcessed: "12,450",
    lastActive: "2m ago",
    dataSources: ["G2", "LinkedIn", "Public Forums"],
    type: "market"
  },
  {
    id: "2",
    name: "Competitive Intel Agent",
    description: "Monitors competitor pricing and feature changes",
    status: "active",
    accuracy: 92,
    signalsProcessed: "8,320",
    lastActive: "5m ago",
    dataSources: ["G2", "Competitor Sites"],
    type: "competitive"
  },
  {
    id: "3",
    name: "Enterprise Signal Detector",
    description: "Identifies high-intent enterprise buying signals",
    status: "paused",
    accuracy: 88,
    signalsProcessed: "15,720",
    lastActive: "1h ago",
    dataSources: ["LinkedIn", "G2", "Google Ads"],
    type: "enterprise"
  }
];

export function AgentNode({ id, data }: NodeProps) {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [customInstructions, setCustomInstructions] = useState('');

  const handleAgentSelect = (value: string) => {
    const agent = mockAgents.find(a => a.id === value);
    setSelectedAgent(agent || null);
    data.selectedAgent = agent;
  };

  return (
    <BaseNode
      id={id}
      title="Agent"
      icon={<Bot className="w-4 h-4" />}
      onDelete={data.onDelete}
      inputs={['input', 'context']}
      outputs={['output']}
    >
      <div className="space-y-3">
        <div className="space-y-2">
          <Label>Select Agent</Label>
          <Select 
            onValueChange={handleAgentSelect}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose an agent..." />
            </SelectTrigger>
            <SelectContent>
              {mockAgents.map((agent) => (
                <SelectItem key={agent.id} value={agent.id}>
                  {agent.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedAgent && (
            <div className="mt-2 space-y-2">
              <p className="text-sm text-gray-600">{selectedAgent.description}</p>
              <div className="flex flex-wrap gap-1">
                {selectedAgent.dataSources.map((source) => (
                  <Badge key={source} variant="secondary" className="text-xs bg-transparent border border-gray-200 hover:bg-gray-100">
                    {source}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label>Custom Instructions</Label>
          <Textarea 
            placeholder="Add any custom instructions for the agent..."
            className="min-h-[80px]"
            value={customInstructions}
            onChange={(e) => setCustomInstructions(e.target.value)}
          />
        </div>
      </div>
    </BaseNode>
  )
}

