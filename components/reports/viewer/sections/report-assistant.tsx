"use client";

import { useState } from "react";
import { Report } from "@/types/reports";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Send, ArrowRight } from "lucide-react";

interface ReportAssistantProps {
  report: Report;
}

export function ReportAssistant({ report }: ReportAssistantProps) {
  const [messages, setMessages] = useState<Array<{ id: string; role: 'user' | 'assistant'; content: string }>>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `I can help you analyze this ${report.type} report. What would you like to know?`
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: `user-${Date.now()}`,
      role: 'user' as const,
      content: input
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const responseMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant' as const,
        content: `Based on the ${report.type} analysis, I can see several interesting patterns...`
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 1000);
  };

  // font-semibold bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent mt-1
  return (
    <div className="h-full flex flex-col bg-gradient-to-r from-white via-white/90 to-gray-100">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2 text-gray-800">
          <Bot className="w-5 h-5 text-gray-800" />
          <h2 className="font-semibold mt-1">Report Assistant</h2>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 rounded-lg text-sm ${
                msg.role === 'assistant' 
                  ? 'bg-gradient-to-r from-gray-100/50 to-gray-100 border border-gray-200 text-gray-800' 
                  : 'bg-black text-white'
              }`}
            >
              {msg.content}
            </div>
          ))}

          {messages.length === 1 && (
            <div className="space-y-2 mt-4">
              <p className="text-sm text-gray-600">Suggested questions:</p>
              {[
                "What are the key findings?",
                "Show sentiment analysis",
                "Compare with benchmarks",
                "Identify trends"
              ].map((question) => (
                <button
                  key={question}
                  className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
                  onClick={() => {
                    const newMessage = {
                      id: `user-${Date.now()}`,
                      role: 'user' as const,
                      content: question
                    };
                    setMessages(prev => [...prev, newMessage]);
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                  {question}
                </button>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about this report..."
            className="text-gray-800 bg-transparent placeholder:text-gray-500 border-gray-200 focus:border-gray-600 transition-all outline-none ring-0"
          />
          <Button type="submit" size="icon" className="bg-green-500/50 hover:bg-green-500">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}