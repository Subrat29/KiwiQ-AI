"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface RequirementsCardProps {
  title: string;
  requirements: string[];
  priority: "high" | "medium" | "low";
  delay: number;
}

export function RequirementsCard({ title, requirements, priority, delay }: RequirementsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card className="bg-slate-800/50 border-slate-700/50 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">{title}</h3>
          <Badge 
            variant="outline" 
            className={`
              ${priority === 'high' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
                priority === 'medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' :
                'bg-slate-500/10 text-gray-600 border-slate-500/30'}
            `}
          >
            {priority} Priority
          </Badge>
        </div>
        <div className="space-y-2">
          {requirements.map((req, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <ArrowRight className="w-4 h-4 mt-1 text-blue-400" />
              <span className="text-gray-600">{req}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}