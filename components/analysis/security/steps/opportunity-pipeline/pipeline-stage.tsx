"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OpportunityStage } from "../types";

interface PipelineStageProps {
  stage: OpportunityStage;
  index: number;
}

export function PipelineStage({ stage, index }: PipelineStageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <Card className="bg-slate-800/50 border-slate-700/50 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">{stage.stage}</h3>
          <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
            {stage.count} Companies
          </Badge>
        </div>
        <div className="space-y-3">
          {stage.companies.map((company) => (
            <div key={company.name} className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{company.name}</span>
              <span className="text-gray-600">{company.status}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}