"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ReportsHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-700" />
        <Input 
          placeholder="Search reports..." 
          className="pl-9 border-gray-200 shadow-sm"
        />
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="bg-gray-100">
          Last 30 Days
        </Button>
        <Button variant="outline" size="sm" className="bg-gray-100">
          Market Reports
        </Button>
        <Button variant="outline" size="sm" className="bg-gray-100">
          Competitive
        </Button>
      </div>
    </div>
  );
}