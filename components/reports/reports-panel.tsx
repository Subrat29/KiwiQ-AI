"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReportList } from "./report-list";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function ReportsPanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed right-0 top-0 h-screen z-10">
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className={`absolute -left-8 top-6 border-l bg-white border-t border-b border-gray-400 rounded-l-lg z-20 transition-all ${
          isExpanded ? "h-8 w-8" : "h-24 w-8"
        }`}
      >
        {isExpanded ? (
          <div>
            <ChevronRight size={15} className="text-gray-500" />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <FileText className="h-4 w-4 rotate-90" />
            <span className="text-xs font-medium rotate-90 mb-2">Reports</span>
          </div>
        )}
      </Button>

      {/* Panel Content */}
      <motion.div
        initial={false}
        animate={{
          width: isExpanded ? "320px" : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="h-full border-l bg-white border-gray-200 overflow-hidden shadow-xl"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Reports</h2>
            </div>
          </div>

          {/* Report List */}
          <ScrollArea className="flex-1">
            <div className="p-4">
              <ReportList />
            </div>
          </ScrollArea>
        </div>
      </motion.div>
    </div>
  );
}
