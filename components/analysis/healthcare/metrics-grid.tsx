"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const metrics = {
  linkedin: {
    impressions: "15,000",
    formFills: "450",
    spend: "$96,750",
    sqlRate: "45%",
    velocity: "35 days"
  },
  sem: {
    impressions: "42,000",
    formFills: "680",
    spend: "$258,400",
    sqlRate: "15%",
    velocity: "58 days"
  }
};

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(metrics).map(([channel, data], i) => (
        <motion.div
          key={channel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <Card className="bg-slate-900/95 border-slate-800/50 p-4">
            <h3 className="text-lg font-medium mb-4 capitalize">{channel} Metrics</h3>
            <div className="space-y-3">
              {Object.entries(data).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}