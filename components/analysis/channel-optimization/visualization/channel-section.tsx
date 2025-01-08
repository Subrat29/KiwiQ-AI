"use client";

import { motion } from "framer-motion";
import { ChannelFlow } from "./channel-flow";

export function ChannelSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-lg p-6 mb-6"
    >
      <ChannelFlow />
    </motion.div>
  );
}