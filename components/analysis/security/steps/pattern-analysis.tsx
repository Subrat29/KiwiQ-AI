"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Shield, FileCode } from "lucide-react";

interface PatternAnalysisProps {
  onNext: () => void;
}

export function PatternAnalysis({ onNext }: PatternAnalysisProps) {
  const patterns = [
    {
      title: "SSO Documentation Review Pattern",
      icon: FileCode,
      items: [
        "All accessed enterprise SSO guides within 48 hours",
        "Average time spent: 45 minutes (3x normal)",
        "Downloaded complete technical specifications"
      ]
    },
    {
      title: "API Security Queries",
      icon: Shield,
      items: [
        "Focused on AI governance endpoints",
        "Security logging requirements",
        "Compliance validation methods"
      ]
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        {patterns.map((pattern, index) => (
          <motion.div
            key={pattern.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-slate-800/50 border-slate-700/50 p-4">
              <div className="flex items-center gap-3 mb-4">
                <pattern.icon className="w-5 h-5 text-blue-400" />
                <h3 className="font-medium">{pattern.title}</h3>
              </div>
              <div className="space-y-2">
                {pattern.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-400" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}

        <Button
          className="w-full bg-blue-500 hover:bg-blue-600"
          onClick={onNext}
        >
          Compare to Typical Patterns
        </Button>
      </motion.div>
    </div>
  );
}