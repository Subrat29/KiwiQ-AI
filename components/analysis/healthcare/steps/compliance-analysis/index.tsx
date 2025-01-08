"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ComplianceCard } from "./compliance-card";
import { complianceData } from "./data";

interface ComplianceAnalysisProps {
  onNext: () => void;
}

export function ComplianceAnalysis({ onNext }: ComplianceAnalysisProps) {
  return (
    <div className="p-6 space-y-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        {complianceData.map((pattern, index) => (
          <ComplianceCard
            key={pattern.title}
            {...pattern}
            delay={index * 0.2}
          />
        ))}

        <Button
          className="w-full bg-blue-500 hover:bg-blue-600"
          onClick={onNext}
        >
          Analyze Requirements
        </Button>
      </motion.div>
    </div>
  );
}