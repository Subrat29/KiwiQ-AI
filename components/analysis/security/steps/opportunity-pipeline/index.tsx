"use client";

import { motion } from "framer-motion";
import { PipelineStage } from "./pipeline-stage";
import { opportunities } from "../data/opportunities";

export function OpportunityPipeline() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          {opportunities.map((stage, index) => (
            <PipelineStage key={stage.stage} stage={stage} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}