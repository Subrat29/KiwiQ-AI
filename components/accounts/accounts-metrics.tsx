"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, Users, Target } from "lucide-react";

const metrics = [
  {
    title: "Total Accounts",
    value: "523",
    trend: "+12% vs prev. quarter",
    icon: Users
  },
  {
    title: "Engagement Rate",
    value: "42%",
    trend: "+8% vs benchmark",
    icon: TrendingUp
  },
  {
    title: "Avg. Deal Size",
    value: "$285K",
    trend: "+15% vs target",
    icon: Target
  },
  {
    title: "Sales Cycle",
    value: "45 days",
    trend: "-12 days vs avg",
    icon: Clock
  }
];

export function AccountsMetrics() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="bg-slate-900/95 border-slate-800/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">{metric.title}</span>
            <metric.icon className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-semibold mb-1">{metric.value}</div>
          <div className="text-sm text-green-400">{metric.trend}</div>
        </Card>
      ))}
    </div>
  );
}