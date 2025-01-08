"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface OptionButtonProps {
  id: string;
  label: string;
  description: string;
  onSelect: (id: string) => void;
  delay?: number;
}

export function OptionButton({ id, label, description, onSelect, delay = 0.2 }: OptionButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <Button
        variant="ghost"
        className="w-full justify-start p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50"
        onClick={() => onSelect(id)}
      >
        <ArrowRight className="w-4 h-4 mr-3 text-blue-400" />
        <div className="text-left">
          <div className="font-medium">{label}</div>
          <div className="text-sm text-gray-600">{description}</div>
        </div>
      </Button>
    </motion.div>
  );
}