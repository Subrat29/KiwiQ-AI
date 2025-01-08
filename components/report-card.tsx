"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LineChart, BarChart } from "lucide-react";

interface ReportItem {
  title: string;
  time: string;
  icon: any;
  details?: string;
  path?: string;
}

interface ReportCardProps {
  category: string;
  items: ReportItem[];
}

export function ReportCard({ category, items }: ReportCardProps) {
  const router = useRouter();
  const [selectedReport, setSelectedReport] = useState<ReportItem | null>(null);

  const handleDiveDeeper = (item: ReportItem) => {
    if (item.path) {
      router.push(item.path);
    } else {
      setSelectedReport(item);
    }
  };

  return (
    <Card className="bg-slate-900/95 border-slate-800/50 backdrop-blur-xl hover:border-slate-700/50 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-gray-700">{category}</CardTitle>
      </CardHeader>
      <CardContent>
        {items.map((item, j) => (
          <div
            key={j}
            className="group flex items-center p-3 rounded-lg mb-2 hover:bg-slate-800/50 cursor-pointer transition-all"
          >
            <item.icon className="w-5 h-5 mr-3 text-blue-400" />
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-200">{item.title}</div>
              <div className="text-xs text-gray-600">{item.time}</div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleDiveDeeper(item)}
            >
              <ArrowUpRight className="w-4 h-4" />
              <span className="ml-2">Dive Deeper</span>
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}