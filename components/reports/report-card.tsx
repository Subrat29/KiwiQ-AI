"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ReportCardProps {
  report: {
    id: string;
    title: string;
    type: string;
    date: string;
  };
}

export function ReportCard({ report }: ReportCardProps) {
  const router = useRouter();

  return (
    <Card 
      className="bg-white border-gray-200 p-3 hover:bg-gray-100 transition-all cursor-pointer"
      onClick={() => router.push(`/reports/${report.id}`)}
    >
      <div className="flex items-center justify-between mb-2">
        <Badge 
          variant="outline" 
          className={`capitalize
            ${report.type === 'market' ? 'bg-blue-500/10 text-blue-500 border-blue-500/30' :
              report.type === 'competitive' ? 'bg-green-500/10 text-green-500 border-green-500/30' :
              'bg-purple-500/10 text-purple-500 border-purple-500/30'}
          `}
        >
          {report.type}
        </Badge>
        <span className="text-xs text-gray-400">{report.date}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium truncate mr-2 text-gray-700">{report.title}</h3>
        <ArrowRight className="w-4 h-4 text-gray-500" />
      </div>
    </Card>
  );
}