"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar, Filter, Download, Users } from "lucide-react";

export function JourneyHeader() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold">Enterprise Healthcare Journey Analysis</h1>
        <p className="text-gray-600 mt-2">Based on 500+ customer journeys in healthcare vertical</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <Button variant="outline" className="bg-slate-900/50">
            <Calendar className="w-4 h-4 mr-2" />
            Last 90 Days
          </Button>
          <Button variant="outline" className="bg-slate-900/50">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="bg-slate-900/50">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        <Button 
          variant="default"
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => router.push("/accounts/healthcare")}
        >
          <Users className="w-4 h-4 mr-2" />
          Inspect Accounts
        </Button>
      </div>
    </div>
  );
}