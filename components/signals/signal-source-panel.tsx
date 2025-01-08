"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { signalSources } from "@/lib/data/signal-sources";
import { SourceItem } from "./source/source-item";

export function SignalSourcePanel() {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <motion.div
      initial={false}
      animate={{
        width: isExpanded ? "280px" : "64px"
      }}
      className="border-r border-slate-800 relative overflow-hidden"
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 -right-3 w-6 h-12 bg-slate-900 border border-slate-800 rounded-r-lg z-10"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </Button>

      <div className="p-4">
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Signal Sources</h2>
                <span className="text-sm text-gray-600">{signalSources.length} Connected</span>
              </div>
              {signalSources.map((source) => (
                <Card key={source.name} className="bg-slate-900/95 border-slate-800/50 p-4">
                  <SourceItem {...source} isConnected={true} />
                </Card>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {signalSources.map((source) => (
                <div
                  key={source.name}
                  className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
                  title={source.name}
                >
                  <div 
                    className={`w-2 h-2 rounded-full ${
                      source.signalStrength === 'high' ? 'bg-green-400' :
                      source.signalStrength === 'medium' ? 'bg-yellow-400' :
                      'bg-slate-400'
                    }`}
                  />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}