"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const opportunities = [
  {
    stage: "Active Evaluations",
    count: 3,
    companies: [
      { name: "Major Bank Corp", status: "Technical Review" },
      { name: "Financial Services Inc", status: "Technical Review" },
      { name: "Investment Group", status: "Technical Review" }
    ]
  },
  {
    stage: "Early Research",
    count: 2,
    companies: [
      { name: "Banking Tech Ltd", status: "Accessing Documentation" },
      { name: "Finance Solutions", status: "Accessing Documentation" }
    ]
  },
  {
    stage: "Initial Signals",
    count: 2,
    companies: [
      { name: "Global Finance", status: "G2 Comparison" },
      { name: "Enterprise Banking", status: "G2 Comparison" }
    ]
  }
];

export function OpportunityPipeline() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          {opportunities.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">{stage.stage}</h3>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                    {stage.count} Companies
                  </Badge>
                </div>
                <div className="space-y-3">
                  {stage.companies.map((company) => (
                    <div key={company.name} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{company.name}</span>
                      <span className="text-gray-600">{company.status}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}