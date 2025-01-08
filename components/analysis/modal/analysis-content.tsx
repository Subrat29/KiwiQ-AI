"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KeyMetrics } from "./sections/key-metrics";
import { ChannelComparison } from "./sections/channel-comparison";
import { AudienceInsights } from "./sections/audience-insights";
import { ActionExecution } from "./sections/action-execution";

interface AnalysisContentProps {
  type: "healthcare" | "nurture" | "content";
}

export function AnalysisContent({ type }: AnalysisContentProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="p-6 space-y-6">
      <KeyMetrics type={type} />
      
      <AnimatePresence>
        {type === "healthcare" && (
          <>
            <ChannelComparison 
              isExpanded={expandedSections.includes("channels")}
              onToggle={() => toggleSection("channels")}
            />
            <AudienceInsights 
              isExpanded={expandedSections.includes("audience")}
              onToggle={() => toggleSection("audience")}
            />
            <ActionExecution />
          </>
        )}
        {/* Add conditional sections for nurture and content types */}
      </AnimatePresence>
    </div>
  );
}