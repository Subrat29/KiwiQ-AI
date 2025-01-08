"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const suggestions = [
  "Enterprise security requirements",
  "Technical decision maker engagement",
  "Compliance documentation access",
  "API integration patterns"
];

interface SuggestionChipsProps {
  onSelect: (suggestion: string) => void;
}

export function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion, i) => (
        <motion.div
          key={suggestion}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Badge
            variant="outline"
            className="bg-slate-800/50 cursor-pointer hover:bg-slate-800"
            onClick={() => onSelect(suggestion)}
          >
            {suggestion}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
}