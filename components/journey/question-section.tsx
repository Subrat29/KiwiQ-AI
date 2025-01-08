"use client";

import { useState } from "react";
import { Command } from "@/components/ui/command";
import { Search, Sparkles } from "lucide-react";
import { suggestedQuestions } from "@/lib/data/journey-insights";

export function QuestionSection() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full mb-6">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transition-all duration-500 group-hover:opacity-100 opacity-0" />
        <Command className="relative rounded-xl border border-slate-800/50 bg-slate-900/95 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center px-4 py-3">
            <Search className="w-4 h-4 mr-2 text-gray-600" />
            <input
              placeholder="Ask anything about this journey analysis..."
              className="flex-1 bg-transparent outline-none placeholder:text-gray-600 text-gray-700"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          </div>
        </Command>
      </div>
      
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-slate-800/50 p-2 shadow-2xl z-50">
          {suggestedQuestions.map((question, i) => (
            <div
              key={i}
              className="px-3 py-2 text-sm text-gray-600 hover:bg-slate-800/50 rounded-lg cursor-pointer transition-colors"
            >
              {question}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}