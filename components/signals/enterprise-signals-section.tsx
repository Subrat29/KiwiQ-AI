"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { EnterpriseSignalCard } from "./enterprise-signal-card";
import { motion } from "framer-motion";

const signals = [
  {
    title: "Enterprise Security Momentum",
    intentScore: 94,
    description: "3 Fortune 500 financial services companies evaluating enterprise security features simultaneously",
    sources: ["G2 Sell API", "Documentation Analytics"],
    signals: [
      "Technical teams actively reviewing SSO documentation",
      "Multiple enterprise security API queries",
      "Security team engagement patterns"
    ]
  },
  {
    title: "Healthcare Compliance Wave",
    intentScore: 92,
    description: "5 major healthcare providers showing coordinated evaluation patterns",
    sources: ["G2 Sell API", "LinkedIn Sales Navigator"],
    signals: [
      "HIPAA compliance documentation trending",
      "Technical security reviews initiated",
      "Enterprise platform comparisons"
    ]
  },
  {
    title: "Enterprise API Evaluation",
    intentScore: 91,
    description: "Major e-commerce platform's dev team exploring API capabilities",
    sources: ["GitHub Enterprise", "Documentation Analytics"],
    signals: [
      "3x spike in enterprise endpoint documentation views",
      "Integration architecture discussions",
      "Technical team expansion signals"
    ]
  }
];

export function EnterpriseSignalsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">
            Enterprise Signals
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            High-intent buying signals from enterprise accounts
          </p>
        </div>
      </div>

      <ScrollArea className="w-full pb-4">
        <div className="flex gap-6">
          {signals.map((signal, i) => (
            <EnterpriseSignalCard 
              key={i} 
              {...signal} 
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="mt-2" />
      </ScrollArea>
    </motion.div>
  );
}