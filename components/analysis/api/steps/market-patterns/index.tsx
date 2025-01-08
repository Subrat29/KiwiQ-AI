"use client";

import { motion } from "framer-motion";
import { MarketPatternCard } from "./market-pattern-card";
import { marketPatterns } from "../data/market-patterns";

export function MarketPatterns() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        <h2 className="text-lg font-semibold">Similar Enterprise Patterns</h2>
        <p className="text-sm text-gray-600">
          I've identified 3 other enterprise platforms showing similar evaluation patterns:
        </p>

        <div className="space-y-4">
          {marketPatterns.map((pattern, index) => (
            <MarketPatternCard
              key={pattern.name}
              {...pattern}
              delay={index * 0.2}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}