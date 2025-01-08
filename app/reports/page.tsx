"use client";

import { ReportsHeader } from "@/components/reports/reports-header";
import { ReportList } from "@/components/reports/report-list";

export default function ReportsPage() {
  return (
    <div className="max-w-[1400px] mx-auto p-6 space-y-6">
      <ReportsHeader />
      <ReportList />
    </div>
  );
}