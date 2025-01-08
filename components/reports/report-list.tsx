"use client";

import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { ReportCard } from "./report-card";
import { useReports } from "@/hooks/use-reports";

export function ReportList() {
  const { reports, loading } = useReports();

  if (loading) {
    return (
      <Card className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <div className="rounded-full px-2 py-1 w-full bg-gray-200/50">
            <Skeleton className="h-4 w-2/4" />
          </div>
          <Skeleton className="h-4 w-1/4" />
        </div>
        <Skeleton className="h-4 w-full" />
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </div>
  );
}
