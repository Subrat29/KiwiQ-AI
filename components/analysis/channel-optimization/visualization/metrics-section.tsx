"use client";

import { motion } from "framer-motion";
import { MetricsGrid } from "./metrics-grid";

export function MetricsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-lg p-6 mb-6"
    >
      <MetricsGrid />
    </motion.div>
  );
}