"use client";

import { InputPanel } from "./panels-dark/input-panel";
import { ExecutionPanel } from "./panels-dark/execution-panel";
import { OutputPanel } from "./panels-dark/output-panel";
import { Agent } from "@/types/agents";
import { useState } from "react";
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
    <div className="flex-1 flex">
      <InputPanel onExecute={handleExecute} />
      <ExecutionPanel isExecuting={isExecuting} agent={agent} />
      <OutputPanel results={results} />
    </div>
  );
}