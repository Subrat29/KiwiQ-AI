"use client";

import { MetricCard } from "./metric-card";

const metrics = [
  {
    title: "MQL-SQL Conversion",
    value: "32%",
    trend: { value: "+5%", isPositive: true },
    description: "Message resonance improving in healthcare"
  },
  {
    title: "Customer Acquisition Cost",
    value: "$2,850",
    trend: { value: "-12%", isPositive: true },
    description: "Channel optimization driving efficiency"
  },
  {
    title: "Pipeline Velocity",
    value: "45 days",
    trend: { value: "-8 days", isPositive: true },
    description: "Improved nurture timing impact"
  },
  {
    title: "Marketing Qualified Leads",
    value: "245",
    trend: { value: "+15%", isPositive: true },
    description: "Exceeding quarterly target"
  }
];

export function MetricsBar() {
  return (
    <div className="grid grid-cols-4 gap-4 mx-4 my-6">
      {metrics.map((metric, i) => (
        <MetricCard key={i} {...metric} />
      ))}
    </div>
  );
}