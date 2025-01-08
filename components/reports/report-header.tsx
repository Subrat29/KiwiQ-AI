"use client";

import { FileText } from "lucide-react";

export function ReportHeader() {
  return (
    <div className="p-4 border-b border-slate-800">
      <div className="flex items-center gap-2">
        <FileText className="w-5 h-5 text-blue-400" />
        <h2 className="text-lg font-semibold">Reports</h2>
      </div>
      <p className="text-sm text-gray-600 mt-1">Market & competitive intelligence</p>
    </div>
  );
}