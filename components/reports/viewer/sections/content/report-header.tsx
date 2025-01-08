"use client";

import { Report } from "@/types/reports";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ReportHeaderProps {
  report: Report;
}

export function ReportHeader({ report }: ReportHeaderProps) {
  const router = useRouter();

  return (
    <div className="border-b border-gray-200">
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={() => router.push("/")}
            className="flex items-center text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-0 h-10 w-10"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ArrowLeft className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>Mission Control</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-gray-700 border-gray-200 bg-gray-100">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="text-gray-700 border-gray-200 bg-gray-100">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className="bg-green-400/10 text-green-500 border-green-400/30 capitalize"
            >
              {report.type}
            </Badge>
            <span className="text-sm text-gray-500">{report.date}</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent mt-1">{report.title}</h1>
          <Badge 
            variant="outline" 
            className="bg-green-500/10 text-green-500 border-green-400/30"
          >
            {report.confidence}% Confidence
          </Badge>
        </div>
      </div>
    </div>
  );
}