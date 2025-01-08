"use client";

import { useState, useCallback } from "react";
import { AgentType, AgentState, AgentMessage, AgentOption } from "@/types/agents";
import { agentResponses } from "@/lib/data/agent-responses";

// Generate a unique ID for messages
const generateMessageId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export function useAgent(type: AgentType) {
  const [state, setState] = useState<AgentState>({
    messages: [],
    isThinking: false,
    context: {
      analysisStage: 'initial'
    }
  });

  const sendMessage = useCallback(async (message: string) => {
    if (state.isThinking) return;

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, {
        id: generateMessageId(),
        type: 'user',
        content: message,
        timestamp: new Date().toISOString()
      }],
      isThinking: true
    }));

    await new Promise(resolve => setTimeout(resolve, 1500));

    const response = agentResponses[type][state.context.analysisStage];
    
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, {
        id: generateMessageId(),
        type: 'agent',
        content: response.content,
        timestamp: new Date().toISOString(),
        options: response.options
      }],
      isThinking: false,
      context: {
        ...prev.context,
        analysisStage: 'analyzing'
      }
    }));
  }, [type, state.context.analysisStage, state.isThinking]);

  const selectOption = useCallback(async (option: AgentOption) => {
    if (state.isThinking) return;

    setState(prev => ({
      ...prev,
      isThinking: true,
      context: {
        ...prev.context,
        selectedOption: option.id
      }
    }));

    await new Promise(resolve => setTimeout(resolve, 1000));

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, {
        id: generateMessageId(),
        type: 'agent',
        content: `Executing: ${option.action}. Expected impact: ${option.impact}`,
        timestamp: new Date().toISOString()
      }],
      isThinking: false
    }));
  }, [state.isThinking]);

  return {
    messages: state.messages,
    isThinking: state.isThinking,
    sendMessage,
    selectOption
  };
}