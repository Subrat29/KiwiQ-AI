"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RequirementsCard } from "./requirements-card";
import { technicalRequirements } from "../data/technical-requirements";

interface TechnicalRequirementsProps {
  onNext: () => void;
}

export function TechnicalRequirements({ onNext }: TechnicalRequirementsProps) {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        {technicalRequirements.map((requirement, index) => (
          <RequirementsCard
            key={requirement.title}
            {...requirement}
            delay={index * 0.2}
          />
        ))}

        <Button
          className="w-full bg-blue-500 hover:bg-blue-600"
          onClick={onNext}
        >
          View Similar Market Patterns
        </Button>
      </motion.div>
    </div>
  );
}