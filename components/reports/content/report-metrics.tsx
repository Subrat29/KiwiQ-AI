"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ReportMetricsProps {
  metrics?: { [key: string]: string };
}

export function ReportMetrics({ metrics }: ReportMetricsProps) {
  if (!metrics) return null;

  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(metrics).map(([key, value], i) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="bg-slate-900/95 border-slate-800/50 p-4">
            <div className="text-sm text-gray-600 mb-1">{key}</div>
            <div className="text-xl font-semibold">{value}</div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}