"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SummaryCard() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleDrag = (e: React.MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - position.x;
      const newY = e.clientY - position.y;
      
      const card = e.currentTarget as HTMLElement;
      const maxX = window.innerWidth - card.offsetWidth;
      const maxY = window.innerHeight - card.offsetHeight;
      
      card.style.transform = `translate(${Math.max(0, Math.min(maxX, newX))}px, ${Math.max(0, Math.min(maxY, newY))}px)`;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50"
      style={{ 
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none'
      }}
      onMouseDown={handleDragStart}
      onMouseMove={handleDrag}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      <Card className="glass-card w-[320px] shadow-xl">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-primary">Analysis Summary</h3>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-8 w-8"
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronUp className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Current Channel Mix</h4>
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 bg-blue-500 rounded-full" />
                  <div className="h-2 flex-1 bg-green-500 rounded-full" />
                  <div className="h-2 flex-1 bg-purple-500 rounded-full" />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>SEM 60%</span>
                  <span>LinkedIn 25%</span>
                  <span>Other 15%</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Key Findings</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>LinkedIn shows 2.3x better conversion rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Technical audience engagement up 45%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Potential $45k monthly savings</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}