"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, FileText, Mail } from "lucide-react";

interface KeyMetricsProps {
  type: "healthcare" | "nurture" | "content";
}

const metrics = {
  healthcare: [
    {
      label: "LinkedIn Performance",
      value: "3x Better ROI",
      trend: "+215% vs SEM",
      icon: TrendingUp
    },
    {
      label: "Time to Close",
      value: "35 days",
      trend: "-23 days vs SEM",
      icon: Clock
    },
    {
      label: "Decision Maker Access",
      value: "68% VP+",
      trend: "+45% vs SEM",
      icon: Users
    }
  ],
  nurture: [
    {
      label: "Demo Booking Rate",
      value: "42%",
      trend: "+14% vs 7-day",
      icon: Clock
    },
    {
      label: "Show-up Rate",
      value: "92%",
      trend: "+17% improvement",
      icon: Users
    },
    {
      label: "Response Time",
      value: "4.2 hours",
      trend: "-65% vs baseline",
      icon: Mail
    }
  ],
  content: [
    {
      label: "Technical Content",
      value: "3x SQLs",
      trend: "vs general content",
      icon: FileText
    },
    {
      label: "Engagement Time",
      value: "12.5 min",
      trend: "+8.5 min vs avg",
      icon: Clock
    },
    {
      label: "Conversion Rate",
      value: "35%",
      trend: "+23% vs baseline",
      icon: TrendingUp
    }
  ]
};

export function KeyMetrics({ type }: KeyMetricsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-3 gap-4"
    >
      {metrics[type]?.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="bg-slate-800/50 border-slate-700/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <metric.icon className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-600">{metric.label}</span>
            </div>
            <div className="text-2xl font-semibold mb-1">{metric.value}</div>
            <div className="text-sm text-green-400">{metric.trend}</div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}