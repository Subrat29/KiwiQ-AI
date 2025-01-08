"use client";

import { Report } from "@/types/reports";
import { Card } from "@/components/ui/card";

interface ExecutiveSummaryProps {
  report: Report;
}

export function ExecutiveSummary({ report }: ExecutiveSummaryProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Executive Summary</h2>
      <Card className="bg-transparent p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-gray-600 mb-1">Time Period</div>
              <div className="font-medium text-gray-700">June 1-30, 2024</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Total Reviews</div>
              <div className="font-medium text-gray-700">142 Analyzed</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Enterprise Definition</div>
              <div className="font-medium text-gray-700">1000+ employees</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3 text-gray-700">Critical Insights</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                Enterprise security becoming primary selection factor
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                API capabilities driving technical evaluations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bgbg-gray-400" />
                Integration depth increasingly critical
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                Compliance features gap emerging
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}