"use client";

import { useState } from "react";
import { TestingPlayground } from "./testing-playground";
import { TestingSidebar } from "./testing-sidebar";
import { TestResult } from "@/types/skills";

interface SkillTestingEnvironmentProps {
  skillId: string;
}

export function SkillTestingEnvironment({ skillId }: SkillTestingEnvironmentProps) {
  const [results, setResults] = useState<TestResult[]>([]);

  const handleTest = async (input: string) => {
    // Simulate test execution
    const result: TestResult = {
      id: Date.now().toString(),
      input,
      output: "Sample test result based on input",
      confidence: 0.92,
      timestamp: new Date().toISOString(),
      feedback: null
    };
    setResults(prev => [...prev, result]);
  };

  return (
    <div className="flex h-[calc(100vh-12rem)] gap-6">
      <TestingPlayground 
        skillId={skillId}
        onTest={handleTest}
      />
      <TestingSidebar 
        results={results}
        onFeedback={(id, feedback) => {
          setResults(prev => prev.map(r => 
            r.id === id ? { ...r, feedback } : r
          ));
        }}
      />
    </div>
  );
}