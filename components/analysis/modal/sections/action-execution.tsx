"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, AlertTriangle, ChevronDown, ChevronUp, Download, Share2 } from "lucide-react";

interface TimelineStep {
  week: number;
  title: string;
  status: "pending" | "ready";
  estimate: string;
}

const timeline: TimelineStep[] = [
  {
    week: 1,
    title: "Identify top SEM campaigns",
    status: "ready",
    estimate: "2-3 days"
  },
  {
    week: 2,
    title: "Set up LinkedIn campaigns",
    status: "pending",
    estimate: "3-4 days"
  },
  {
    week: 3,
    title: "Begin budget transition",
    status: "pending",
    estimate: "5-7 days"
  },
  {
    week: 4,
    title: "Monitor & optimize",
    status: "pending",
    estimate: "Ongoing"
  }
];

export function ActionExecution() {
  const [showTimeline, setShowTimeline] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleExecute = () => {
    setIsExecuting(true);
    // Add execution logic here
    setTimeout(() => setIsExecuting(false), 2000);
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700/50 mt-6">
      <div className="p-6 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Shift $45,000 to LinkedIn Campaigns
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Next 30 days
              </span>
              <span className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                Low Risk - Reversible
              </span>
            </div>
          </div>
          <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
            Ready to Execute
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-lg font-medium">Expected Impact</div>
            <div className="text-sm text-gray-600">
              $45,000 monthly savings • 25% higher SQL rate
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowTimeline(!showTimeline)}>
              {showTimeline ? (
                <ChevronUp className="w-4 h-4 mr-2" />
              ) : (
                <ChevronDown className="w-4 h-4 mr-2" />
              )}
              Timeline
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button 
              variant="default" 
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 min-w-[120px]"
              onClick={handleExecute}
              disabled={isExecuting}
            >
              <Play className="w-4 h-4 mr-2" />
              {isExecuting ? "Executing..." : "Execute"}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {showTimeline && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-4 gap-4 pt-4 border-t border-slate-700">
                {timeline.map((step) => (
                  <div key={step.week} className="space-y-2">
                    <div className="text-sm text-gray-600">Week {step.week}</div>
                    <div className="p-4 rounded-lg bg-slate-900/50 space-y-2">
                      <div className="font-medium">{step.title}</div>
                      <div className="flex items-center justify-between text-sm">
                        <Badge 
                          variant="outline" 
                          className={step.status === "ready" 
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                            : "bg-slate-500/10 text-gray-600 border-slate-500/30"
                          }
                        >
                          {step.status}
                        </Badge>
                        <span className="text-gray-600">{step.estimate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}