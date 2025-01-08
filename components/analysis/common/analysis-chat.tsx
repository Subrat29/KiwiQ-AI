"use client";

import { useState } from "react";
import { Command } from "@/components/ui/command";
import { Search, Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function AnalysisChat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const suggestedQuestions = [
    "What drives the performance difference?",
    "Show me the ROI calculation",
    "Compare with industry benchmarks",
    "What are the key risks?"
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-slate-800">
        <h2 className="text-lg font-semibold mb-4">Analysis Chat</h2>
        <Command className="rounded-lg border border-slate-800">
          <div className="flex items-center px-3 py-2">
            <Search className="w-4 h-4 mr-2 text-gray-600" />
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about this analysis..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <Sparkles className="w-4 h-4 text-blue-400" />
          </div>
        </Command>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-2">
          {suggestedQuestions.map((question, i) => (
            <button
              key={i}
              className="w-full text-left p-2 text-sm text-gray-600 hover:bg-slate-800/50 rounded-lg"
              onClick={() => setMessages([...messages, question])}
            >
              {question}
            </button>
          ))}
        </div>
        <div className="mt-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className="bg-slate-800/50 p-3 rounded-lg text-sm">
              {msg}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}