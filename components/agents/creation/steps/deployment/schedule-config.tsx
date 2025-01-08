"use client";

import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Clock } from "lucide-react";

interface ScheduleConfigProps {
  frequency: string;
  onFrequencyChange: (value: string) => void;
}

export function ScheduleConfig({ frequency, onFrequencyChange }: ScheduleConfigProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="w-5 h-5 text-blue-400" />
        <h3 className="font-medium">Update Schedule</h3>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Update Frequency</label>
          <Select
            value={frequency}
            onValueChange={onFrequencyChange}
            options={[
              { label: "Real-time", value: "realtime" },
              { label: "Every hour", value: "hourly" },
              { label: "Every 6 hours", value: "6hours" },
              { label: "Daily", value: "daily" }
            ]}
          />
        </div>
      </div>
    </Card>
  );
}