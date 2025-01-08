"use client";

import { Bot } from "lucide-react";

export function ChatHeader() {
  return (
    <div className="p-4 border-b border-slate-800">
      <div className="flex items-center gap-2">
        <Bot className="w-5 h-5 text-blue-400" />
        <h2 className="font-medium">Analysis Assistant</h2>
      </div>
    </div>
  );
}