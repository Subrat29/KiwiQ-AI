"use client";

import { useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AgentMessage } from "./agent-message";
import { UserMessage } from "./user-message";
import { AgentInput } from "./agent-input";
import { useAgent } from "@/hooks/use-agent";
import { AgentOption } from "@/types/agents";

interface AgentChatProps {
  type: "strategic" | "deal" | "market";
}

export function AgentChat({ type }: AgentChatProps) {
  const { messages, isThinking, sendMessage, selectOption } = useAgent(type);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      sendMessage("Analyze this signal");
    }
  }, [messages.length, sendMessage]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOptionSelect = (option: AgentOption) => {
    selectOption(option);
  };

  return (
    <div className="flex flex-col h-full bg-transparent">
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4" ref={scrollRef}>
          {messages.map((message) =>
            message.type === "agent" ? (
              <AgentMessage
                key={message.id}
                message={message}
                onOptionSelect={(optionId) => {
                  const option = message.options?.find(
                    (o) => o.id === optionId
                  );
                  if (option) handleOptionSelect(option);
                }}
              />
            ) : (
              <UserMessage key={message.id} message={message} />
            )
          )}
          {isThinking && (
            <div className="flex items-center gap-2 text-gray-800 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Analyzing...
            </div>
          )}
        </div>
      </ScrollArea>

      <AgentInput
        onSend={sendMessage}
        isThinking={isThinking}
        placeholder="Ask about this analysis..."
      />
    </div>
  );
}
