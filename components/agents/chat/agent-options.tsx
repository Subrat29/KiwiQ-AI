"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AgentOption } from "@/types/agents";

interface AgentOptionsProps {
  options: AgentOption[];
  onSelect: (optionId: string) => void;
}

export function AgentOptions({ options, onSelect }: AgentOptionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-3 flex gap-2"
    >
      {options.map((option) => (
        <Button
          key={option.id}
          variant="outline"
          size="sm"
          className="bg-gray-100 hover:bg-slate-200/50"
          onClick={() => onSelect(option.id)}
        >
          {option.label}
        </Button>
      ))}
    </motion.div>
  );
}