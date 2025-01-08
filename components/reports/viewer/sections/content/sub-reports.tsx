"use client";

import { Report } from "@/types/reports";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SubReportsProps {
  report: Report;
}

const subReports = {
  market: [
    { title: "Feature Adoption Analysis", date: "2h ago" },
    { title: "User Segment Breakdown", date: "4h ago" },
    { title: "Market Share Trends", date: "1d ago" }
  ],
  competitive: [
    { title: "Competitor Feature Matrix", date: "3h ago" },
    { title: "Pricing Strategy Analysis", date: "6h ago" },
    { title: "Market Position Map", date: "1d ago" }
  ],
  reviews: [
    { title: "Sentiment Analysis", date: "1h ago" },
    { title: "Feature Request Patterns", date: "5h ago" },
    { title: "User Feedback Themes", date: "1d ago" }
  ]
};

export function SubReports({ report }: SubReportsProps) {
  const relevantReports = subReports[report.type] || [];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Related Reports</h2>
      <div className="grid gap-4">
        {relevantReports.map((subReport, i) => (
          <Card key={i} className="bg-slate-900/95 border-slate-800/50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium mb-1">{subReport.title}</h3>
                <p className="text-sm text-gray-600">{subReport.date}</p>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-400">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}