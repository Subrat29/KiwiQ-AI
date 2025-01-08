"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  isPositive?: boolean;
  detail?: string;
  icon: React.ElementType;
}

export function MetricCard({ title, value, trend, isPositive, detail, icon: Icon }: MetricCardProps) {
  return (
    <Card className="bg-slate-900/95 border-slate-800/50 p-4 hover:scale-[1.02] transition-all duration-150">
      <div className="flex items-start justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">{title}</span>
        <Icon className="w-4 h-4 text-gray-600" />
      </div>
      <div className="text-2xl font-semibold mb-1">{value}</div>
      {trend && (
        <div className={cn(
          "text-sm",
          isPositive ? "text-green-400" : "text-red-400"
        )}>
          {trend}
        </div>
      )}
      {detail && (
        <div className="text-sm text-gray-600">{detail}</div>
      )}
    </Card>
  );
}