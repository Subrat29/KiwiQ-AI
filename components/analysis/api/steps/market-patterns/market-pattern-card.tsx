"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface MarketPatternCardProps {
  name: string;
  status: string;
  focus: string[];
  delay: number;
}

export function MarketPatternCard({ name, status, focus, delay }: MarketPatternCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card className="bg-slate-800/50 border-slate-700/50 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">{name}</h3>
          <span className="text-sm text-gray-600">{status}</span>
        </div>
        <div className="space-y-2">
          {focus.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <ArrowRight className="w-4 h-4 mt-1 text-blue-400" />
              <span className="text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}