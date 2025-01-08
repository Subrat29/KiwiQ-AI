"use client";

import { useState } from "react";
import { FilterPill } from "./filter-pill";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const filterOptions = [
  "Enterprise Deals",
  "Healthcare Vertical",
  "Last 30 Days",
  "High-Value Accounts",
  "Enterprise Tech"
];

export function QuickFilters() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["Enterprise Deals"]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => setActiveFilters([]);

  return (
    <div className="flex items-center gap-2 mx-4 mb-6 overflow-x-auto pb-2">
      {filterOptions.map((filter) => (
        <FilterPill
          key={filter}
          label={filter}
          active={activeFilters.includes(filter)}
          onClick={() => toggleFilter(filter)}
        />
      ))}
      {activeFilters.length > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-gray-600 hover:text-gray-600"
        >
          <X className="w-4 h-4 mr-1" />
          Clear
        </Button>
      )}
    </div>
  );
}