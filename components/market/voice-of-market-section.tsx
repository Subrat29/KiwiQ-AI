"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { VoiceOfMarketCard } from "./voice-of-market-card";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const marketInsights = [
  {
    role: "ENTERPRISE TECHNICAL LEADER",
    source: "VP of Engineering at Major US Bank",
    platform: "LinkedIn Comment",
    content: "We've been testing several AI platforms for our content teams. Security has been a huge bottleneck. Basic SSO isn't enough - we need enterprise-grade controls that actually work with our existing security stack.",
    impact: "Security integration requirements",
    timestamp: "2h ago"
  },
  {
    role: "TECHNICAL EVALUATION",
    source: "Senior Solutions Architect",
    platform: "G2 Review",
    content: "Pros: The content quality and API performance are solid. We're processing about 5k requests daily without issues. Cons: Enterprise features need work. SSO setup was painful, audit logging is basic.",
    impact: "Enterprise feature gaps",
    timestamp: "6h ago"
  },
  {
    role: "CONTENT OPERATIONS",
    source: "Global Content Director at F500 Retail",
    platform: "LinkedIn Post",
    content: "Finally got our content automation program approved for 2024! Any recommendations for platforms that can handle multi-market, enterprise-scale content ops? Big focus on compliance and workflow controls.",
    impact: "Enterprise buying signal",
    timestamp: "12h ago"
  },
  // Add remaining insights...
];

export function VoiceOfMarketSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const showNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1 >= marketInsights.length ? 0 : prev + 1));
    }
  };

  const showPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 < 0 ? marketInsights.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setInterval(showNext, 10000); // Auto-advance every 10 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-green-500" />
          <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">Voice of Market</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">
            {currentIndex + 1} / {marketInsights.length}
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={showPrev}
              className="hover:bg-gray-100 text-gray-500 hover:text-gray-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={showNext}
              className="hover:bg-gray-100 text-gray-500 hover:text-gray-800"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative h-[280px]">
        <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <VoiceOfMarketCard {...marketInsights[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}