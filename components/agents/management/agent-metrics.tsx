"use client";

import { Card } from "@/components/ui/card";
import { Bot, Activity, Zap, Clock } from "lucide-react";

const metrics = [
  {
    title: "Active Agents",
    value: "8",
    trend: "+2 this month",
    icon: Bot
  },
  {
    title: "Average Accuracy",
    value: "94.2%",
    trend: "+1.5% vs last month",
    icon: Activity
  },
  {
    title: "Signals/Hour",
    value: "1,250",
    trend: "+12% vs baseline",
    icon: Zap
  },
  {
    title: "Avg. Response Time",
    value: "1.2s",
    trend: "-0.3s this week",
    icon: Clock
  }
];

export function AgentMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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