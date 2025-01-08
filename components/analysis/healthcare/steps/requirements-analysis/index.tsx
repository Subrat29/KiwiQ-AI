"use client";

import { motion } from "framer-motion";
import { RequirementsCard } from "./requirements-card";
import { requirementsData } from "./data";

export function RequirementsAnalysis() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        <h2 className="text-lg font-semibold">Critical Requirements</h2>
        <p className="text-sm text-gray-600">
          Based on the documentation patterns, here are the critical requirements:
        </p>

        <div className="space-y-4">
          {requirementsData.map((requirement, index) => (
            <RequirementsCard
              key={requirement.title}
              {...requirement}
              delay={index * 0.2}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}