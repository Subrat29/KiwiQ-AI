"use client";

import { cn } from "@/lib/utils";

interface FilterPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function FilterPill({ label, active, onClick }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150",
        active
          ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
          : "bg-slate-800/50 text-gray-600 hover:bg-slate-800/70"
      )}
    >
      {label}
    </button>
  );
}