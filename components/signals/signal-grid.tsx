"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EnterpriseSignalList } from "./lists/enterprise-signal-list";

export function SignalGrid() {
  return (
    <Card className="bg-slate-900/95 border-slate-800/50 h-full">
      <ScrollArea className="h-full">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Enterprise Signals</h2>
          <div className="grid grid-cols-3 gap-4">
            <EnterpriseSignalList compact />
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
}