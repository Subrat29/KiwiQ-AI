"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ReportChat } from "../chat/report-chat";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ReportLayoutProps {
  children: React.ReactNode;
  reportType: string;
  onClose?: () => void;
}

export function ReportLayout({ children, reportType, onClose }: ReportLayoutProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Header with close button */}
      <div className="flex justify-end p-4 border-b border-slate-800">
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 rounded-full hover:bg-slate-800/50"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        )}
      </div>

      {/* Main content area */}
      <div className="flex-1 flex relative">
        <ScrollArea className="flex-1">
          <div className="p-6 pr-[350px]">
            {children}
          </div>
        </ScrollArea>
        <ReportChat reportType={reportType} />
      </div>
    </div>
  );
}