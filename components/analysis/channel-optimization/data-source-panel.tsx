"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Database, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dataSources = [
  { name: "LinkedIn Analytics", status: "connected", icon: Database },
  { name: "Google Ads", status: "connected", icon: Database },
  { name: "Salesforce", status: "connected", icon: Database }
];

export function DataSourcePanel() {
  const [connectedSources, setConnectedSources] = useState<string[]>([]);

  useEffect(() => {
    const connectSources = async () => {
      for (let i = 0; i < dataSources.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setConnectedSources(prev => [...prev, dataSources[i].name]);
      }
    };
    connectSources();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-lg font-semibold">Data Sources</h2>
      <div className="space-y-4">
        {dataSources.map((source, index) => (
          <Card key={source.name} className="bg-slate-900/95 border-slate-800/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <source.icon className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">{source.name}</span>
              </div>
              <AnimatePresence>
                {connectedSources.includes(source.name) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {connectedSources.includes(source.name) && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Progress value={100} className="h-1 mt-3" />
              </motion.div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}