"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DocumentationCard } from "./documentation-card";
import { documentationPatterns } from "../data/documentation-patterns";

interface DocumentationAnalysisProps {
  onNext: () => void;
}

export function DocumentationAnalysis({ onNext }: DocumentationAnalysisProps) {
  return (
    <div className="p-6 space-y-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        {documentationPatterns.map((pattern, index) => (
          <DocumentationCard
            key={pattern.title}
            {...pattern}
            delay={index * 0.2}
          />
        ))}

        <Button
          className="w-full bg-blue-500 hover:bg-blue-600"
          onClick={onNext}
        >
          Analyze Technical Requirements
        </Button>
      </motion.div>
    </div>
  );
}