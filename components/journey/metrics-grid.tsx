"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, Users, Target } from "lucide-react";
import { MetricCard } from "@/components/journey/metric-card";

const metrics = [
  {
    title: "Avg Deal Size",
    value: "$285,000",
    trend: "+15% vs benchmark",
    isPositive: true,
    icon: TrendingUp
  },
  {
    title: "Time to Close",
    value: "45 days",
    trend: "-12 days vs avg",
    isPositive: true,
    icon: Clock
  },
  {
    title: "Stakeholders Involved",
    value: "4.2 avg",
    detail: "Most common: CISO, CTO",
    icon: Users
  },
  {
    title: "Conversion Rate",
    value: "8.5%",
    trend: "+2.1% vs target",
    isPositive: true,
    icon: Target
  }
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  );
}