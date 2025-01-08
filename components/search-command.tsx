"use client";

import { useState } from "react";
import { Command } from "@/components/ui/command";
import { Search, Sparkles } from "lucide-react";
import { SearchReportModal } from "./reports/search/search-report-modal";

const suggestedQueries = [
  "Which enterprise accounts are researching AI compliance requirements right now",
  "Track AI content search patterns by buyer segments the last month",
  "Have there been any competitor pricing shifts the last quarter?",
  "Latest comments about Jasper AI, Copy AI and Writer on Reddit and LinkedIn",
];

export function SearchCommand() {
  const [isFocused, setIsFocused] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState<string>("");

  const handleQuerySelect = (query: string) => {
    setSelectedQuery(query);
    setShowReport(true);
    setIsFocused(false);
  };

  return (
    <>
      <div className="relative w-full">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r rounded-xl blur-xl transition-all duration-500 group-hover:opacity-100 opacity-0" />
          <Command className="relative rounded-xl borderbackdrop-blur-xl border shadow-xl overflow-visible">
            <div className="flex items-center px-4 py-3">
              <Search className="w-4 h-4 mr-2" />
              <input
                placeholder="Ask anything about market intelligence..."
                className="flex-1 bg-transparent outline-none"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              />
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
          </Command>
        </div>

        {isFocused && (
          <div className="absolute top-full left-0 right-0 mt-2 backdrop-blur-xl bg-white rounded-xl border p-2 shadow-2xl z-50">
            {suggestedQueries.map((query, i) => (
              <div
                key={i}
                className="px-3 py-2 text-sm hover:bg-gray-100 text-gray-600 rounded-lg cursor-pointer transition-colors"
                onClick={() => handleQuerySelect(query)}
              >
                {query}
              </div>
            ))}
          </div>
        )}
      </div>

      <SearchReportModal
        isOpen={showReport}
        onClose={() => setShowReport(false)}
        reportType={selectedQuery}
      />
    </>
  );
}
