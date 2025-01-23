"use client";

import { useState } from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { InputPanel } from "./panels/input-panel";
import { ExecutionPanel } from "./panels/execution-panel";
import { OutputPanel } from "./panels/output-panel";
import { Agent } from "@/types/agents";
import { TestResult } from "@/types/testbox";

interface TestBoxContentProps {
  agent: Agent;
}

export function TestBoxContent({ agent }: TestBoxContentProps) {
  const [isExecuting, setIsExecuting] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);

  const handleExecute = async (input: string) => {
    setIsExecuting(true);
    
    // Simulate execution
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const result: TestResult = {
      id: Date.now().toString(),
      input,
      output: "Sample analysis result based on input",
      confidence: 92,
      executionTime: "1.2s",
      timestamp: new Date().toISOString(),
      skills: ["Intent Classification", "Sentiment Analysis"]
    };

    setResults(prev => [...prev, result]);
    setIsExecuting(false);
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="h-full">
      <ResizablePanel defaultSize={30} minSize={30}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <InputPanel onExecute={handleExecute} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50} minSize={10}>
            <ExecutionPanel isExecuting={isExecuting} agent={agent} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      
      <ResizableHandle />
      
      <ResizablePanel defaultSize={70} minSize={40}>
        <OutputPanel results={results} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}