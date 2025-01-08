"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const channels = [
  { name: "LinkedIn", budget: 62500, color: "bg-blue-500" },
  { name: "SEM", budget: 150000, color: "bg-green-500" },
  { name: "Content Syndication", budget: 37500, color: "bg-purple-500" }
];

export function ChannelFlow() {
  const totalBudget = channels.reduce((sum, channel) => sum + channel.budget, 0);

  return (
    <Card className="bg-slate-900/95 border-slate-800/50 p-6 mb-6">
      <h3 className="text-lg font-medium mb-4">Current Channel Allocation</h3>
      <div className="space-y-4">
        {channels.map((channel, i) => (
          <motion.div
            key={channel.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span>{channel.name}</span>
              <span className="text-gray-600">
                ${channel.budget.toLocaleString()} ({((channel.budget / totalBudget) * 100).toFixed(1)}%)
              </span>
            </div>
            <motion.div
              className="h-2 bg-slate-800 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <motion.div
                className={`h-full ${channel.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${(channel.budget / totalBudget) * 100}%` }}
                transition={{ delay: (i * 0.2) + 0.5, duration: 0.5 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}