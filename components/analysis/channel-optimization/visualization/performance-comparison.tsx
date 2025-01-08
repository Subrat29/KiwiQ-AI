"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const metrics = [
  {
    name: "Cost per Lead",
    linkedin: { value: "$215", performance: 85 },
    sem: { value: "$380", performance: 45 }
  },
  {
    name: "SQL Conversion",
    linkedin: { value: "12%", performance: 80 },
    sem: { value: "5%", performance: 40 }
  },
  {
    name: "Deal Velocity",
    linkedin: { value: "35 days", performance: 90 },
    sem: { value: "58 days", performance: 50 }
  }
];

export function PerformanceComparison() {
  return (
    <Card className="bg-slate-900/95 border-slate-800/50 p-6 mb-6">
      <h3 className="text-lg font-medium mb-4">Channel Performance Comparison</h3>
      <div className="space-y-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="space-y-4"
          >
            <div className="text-sm font-medium">{metric.name}</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-400">LinkedIn</span>
                  <span>{metric.linkedin.value}</span>
                </div>
                <motion.div
                  className="h-2 bg-slate-800 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.linkedin.performance}%` }}
                    transition={{ delay: (i * 0.2) + 0.5, duration: 0.5 }}
                  />
                </motion.div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-green-400">SEM</span>
                  <span>{metric.sem.value}</span>
                </div>
                <motion.div
                  className="h-2 bg-slate-800 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.sem.performance}%` }}
                    transition={{ delay: (i * 0.2) + 0.5, duration: 0.5 }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}