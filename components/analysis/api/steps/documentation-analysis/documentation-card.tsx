"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface DocumentationCardProps {
  title: string;
  icon: LucideIcon;
  items: string[];
  delay: number;
}

export function DocumentationCard({ title, icon: Icon, items, delay }: DocumentationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card className="bg-slate-800/50 border-slate-700/50 p-4">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-5 h-5 text-blue-400" />
          <h3 className="font-medium">{title}</h3>
        </div>
        <div className="space-y-2">
          {items.map((item, i) => (
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