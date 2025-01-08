"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function WorkflowToolbar() {
  return (
    <Card className="w-64 bg-slate-900/50 border-slate-800/50">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" />
          <Input 
            placeholder="Search nodes..." 
            className="pl-9 bg-slate-800/50 border-slate-700"
          />
        </div>
        
        {/* Node types will go here */}
        <div className="mt-4 space-y-2">
          <div className="p-3 bg-slate-800/50 rounded-lg cursor-move">Input Node</div>
          <div className="p-3 bg-slate-800/50 rounded-lg cursor-move">Data Connector</div>
          <div className="p-3 bg-slate-800/50 rounded-lg cursor-move">AI Agent</div>
          <div className="p-3 bg-slate-800/50 rounded-lg cursor-move">Output Node</div>
        </div>
      </div>
    </Card>
  );
}