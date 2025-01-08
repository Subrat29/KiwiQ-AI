"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const filters = [
  "Enterprise ($1B+)",
  "Technical Decision Makers",
  "High Engagement",
  "Active Pipeline",
  "CISO Engaged"
];

export function AccountsFilters() {
  return (
    <div className="flex items-center gap-2">
      {filters.map((filter) => (
        <Badge
          key={filter}
          variant="outline"
          className="bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20 cursor-pointer"
        >
          {filter}
        </Badge>
      ))}
      <Button variant="ghost" size="sm" className="text-gray-600">
        + Add Filter
      </Button>
    </div>
  );
}