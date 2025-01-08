"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const metrics = [
  {
    label: "Total Monthly Spend",
    value: "$250,000",
    trend: null
  },
  {
    label: "Cost per Lead",
    value: "$285",
    previousValue: "$380",
    trend: "down"
  },
  {
    label: "SQL Rate",
    value: "18.75%",
    previousValue: "15%",
    trend: "up"
  },
  {
    label: "Pipeline Velocity",
    value: "43d",
    previousValue: "58d",
    trend: "down"
  }
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="bg-slate-900/95 border-slate-800/50 p-4">
            <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl font-semibold">{metric.value}</div>
              {metric.previousValue && (
                <div className={`text-sm ${metric.trend === 'up' ? 'text-green-400' : 'text-blue-400'}`}>
                  from {metric.previousValue}
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}