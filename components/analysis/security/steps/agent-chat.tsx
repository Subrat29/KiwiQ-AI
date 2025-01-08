"use client";

import { useState, useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Send } from "lucide-react";

interface AgentChatProps {
  signalData: {
    title: string;
    intentScore: number;
    description: string;
  };
}

interface Message {
  id: string;
  type: "user" | "agent";
  content: string;
}

const suggestedQuestions = [
  "What's driving this security evaluation trend?",
  "Compare this to typical enterprise patterns",
  "Show me the stakeholder breakdown",
  "What are the key risks to watch?"
];

export function AgentChat({ signalData }: AgentChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial welcome message
    setMessages([
      {
        id: "welcome",
        type: "agent",
        content: `I'm analyzing the security evaluation patterns for ${signalData.title}. What would you like to know?`
      }
    ]);
  }, [signalData.title]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (content: string) => {
    if (!content.trim() || isThinking) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsThinking(true);

    // Simulate AI response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        type: "agent",
        content: `Based on the analysis of ${signalData.title}, I can see that... [AI response would go here]`
      };
      setMessages(prev => [...prev, response]);
      setIsThinking(false);
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col bg-slate-900/95">
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-blue-400" />
          <h2 className="font-medium">Analysis Assistant</h2>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4" ref={scrollRef}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 rounded-lg text-sm ${
                msg.type === "agent" 
                  ? "bg-slate-800/50 text-gray-700" 
                  : "bg-blue-500/10 text-gray-700 ml-4"
              }`}
            >
              {msg.content}
            </div>
          ))}

          {isThinking && (
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Analyzing...
            </div>
          )}

          {messages.length === 1 && (
            <div className="space-y-2 mt-4">
              <p className="text-sm text-gray-600">Suggested questions:</p>
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  className="w-full text-left p-2 text-sm text-gray-600 hover:bg-slate-800/50 rounded-lg"
                  onClick={() => handleSend(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-slate-800">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="bg-slate-800/50 border-slate-700"
          />
          <Button 
            type="submit" 
            size="icon"
            disabled={!input.trim() || isThinking}
            className="bg-blue-500 hover:bg-blue-600"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}