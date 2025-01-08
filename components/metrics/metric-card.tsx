"use client";

import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend: {
    value: string;
    isPositive: boolean;
  };
  description: string;
}

export function MetricCard({ title, value, trend, description }: MetricCardProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700/50 p-4 hover:scale-[1.02] transition-all duration-150">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className={cn(
          "flex items-center text-xs",
          trend.isPositive ? "text-green-400" : "text-red-400"
        )}>
          {trend.isPositive ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
          {trend.value}
        </div>
      </div>
      <div className="text-2xl font-semibold mb-2">{value}</div>
      <div className="text-xs text-gray-600 border-t border-slate-700/50 pt-2">
        {description}
      </div>
    </Card>
  );
}