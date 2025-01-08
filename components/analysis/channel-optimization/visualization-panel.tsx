"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { MetricsSection } from "./visualization/metrics-section";
import { ChannelSection } from "./visualization/channel-section";
import { ComparisonSection } from "./visualization/comparison-section";
import { SummaryCard } from "./visualization/summary-card";

export function VisualizationPanel() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && currentStep < 3) {
      const timer = setInterval(() => {
        setCurrentStep(prev => Math.min(prev + 1, 3));
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isLoading, currentStep]);

  useEffect(() => {
    if (currentStep === 3) {
      const timer = setTimeout(() => setShowSummary(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[600px] text-muted-foreground space-y-4">
        <div className="relative">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <div className="absolute inset-0 blur-lg bg-primary/20 animate-pulse" />
        </div>
        <p className="text-lg font-medium blue-glow">Analyzing channel performance data...</p>
      </div>
    );
  }

  return (
    <>
      <div className="p-6 space-y-6">
        <h2 className="text-xl font-semibold blue-glow">Channel Performance Analysis</h2>
        
        {currentStep >= 1 && <MetricsSection />}
        {currentStep >= 2 && <ChannelSection />}
        {currentStep >= 3 && <ComparisonSection />}
      </div>
      {showSummary && <SummaryCard />}
    </>
  );
}