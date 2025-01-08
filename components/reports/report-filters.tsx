"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Filter } from "lucide-react";

const filters = {
  type: [
    { label: "Market Reports", value: "market" },
    { label: "Competitive", value: "competitive" },
    { label: "Reviews", value: "reviews" }
  ],
  timeframe: [
    { label: "Last 7 days", value: "7d" },
    { label: "Last 30 days", value: "30d" },
    { label: "Last 90 days", value: "90d" }
  ]
};

export function ReportFilters() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-gray-600" />
        <span className="text-sm text-gray-600">Time Period</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.timeframe.map((period) => (
          <Badge
            key={period.value}
            variant="outline"
            className="bg-slate-800/50 hover:bg-slate-800 cursor-pointer"
          >
            {period.label}
          </Badge>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-gray-600" />
        <span className="text-sm text-gray-600">Report Type</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {filters.type.map((type) => (
          <Badge
            key={type.value}
            variant="outline"
            className="bg-slate-800/50 hover:bg-slate-800 cursor-pointer"
          >
            {type.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}