"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileCode, Shield } from "lucide-react";
import { PatternCard } from "./pattern-card";
import { patterns } from "../data/patterns";

interface PatternAnalysisProps {
  onNext: () => void;
}

export function PatternAnalysis({ onNext }: PatternAnalysisProps) {
  return (
    <div className="p-6 space-y-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        {patterns.map((pattern, index) => (
          <PatternCard
            key={pattern.title}
            {...pattern}
            delay={index * 0.2}
          />
        ))}

        <Button
          className="w-full bg-blue-500 hover:bg-blue-600"
          onClick={onNext}
        >
          Compare to Typical Patterns
        </Button>
      </motion.div>
    </div>
  );
}