"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isThinking: boolean;
}

export function ChatInput({ value, onChange, onSubmit, isThinking }: ChatInputProps) {
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex gap-2"
    >
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask a question..."
        className="bg-slate-800/50 border-slate-700"
      />
      <Button 
        type="submit" 
        size="icon"
        disabled={!value.trim() || isThinking}
        className="bg-blue-500 hover:bg-blue-600"
      >
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}