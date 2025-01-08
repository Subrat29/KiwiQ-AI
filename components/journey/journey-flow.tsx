"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const journeyStages = [
  { name: "LinkedIn Ad", count: 1000, color: "bg-blue-500" },
  { name: "Whitepaper Download", count: 450, color: "bg-green-500" },
  { name: "Product Demo", count: 200, color: "bg-yellow-500" },
  { name: "Sales Calls", count: 85, color: "bg-purple-500" },
  { name: "Closed Won", count: 32, color: "bg-teal-500" }
];

export function JourneyFlow() {
  const maxCount = Math.max(...journeyStages.map(stage => stage.count));

  return (
    <Card className="bg-slate-900/95 border-slate-800/50 p-6">
      <h2 className="text-xl font-semibold mb-6">Journey Flow</h2>
      <div className="space-y-6">
        {journeyStages.map((stage, index) => (
          <div key={stage.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{stage.name}</span>
              <span className="text-gray-600">{stage.count.toLocaleString()}</span>
            </div>
            <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full ${stage.color} rounded-full transition-all duration-1000`}
                style={{ width: `${(stage.count / maxCount) * 100}%` }}
              />
            </div>
            {index < journeyStages.length - 1 && (
              <div className="h-4 w-0.5 bg-slate-800 mx-auto" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}