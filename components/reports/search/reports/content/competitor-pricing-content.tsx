"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function CompetitorPricingContent() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Competitor Pricing Analysis</h1>
          <p className="text-gray-600 mt-1">Q1 2024 Pricing Changes</p>
        </div>
        <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
          15 Platforms Analyzed
        </Badge>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-lg font-semibold mb-4">Enterprise Tier Changes</h2>
        <div className="space-y-3">
          {[
            "3 competitors introduced new enterprise tiers",
            "Average price increase: 18%",
            "New focus: AI governance features"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <ArrowRight className="w-4 h-4 text-blue-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-lg font-semibold mb-4">Team Plan Evolution</h2>
        <div className="space-y-3">
          {[
            "5 competitors adjusted team pricing",
            "Trend: Per-seat to token-based models",
            "Average change: -12% per seat"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <ArrowRight className="w-4 h-4 text-blue-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-lg font-semibold mb-4">Customer Reactions</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-semibold text-green-400">34%</div>
            <div className="text-sm text-gray-600">Positive</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-gray-600">41%</div>
            <div className="text-sm text-gray-600">Neutral</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-red-400">25%</div>
            <div className="text-sm text-gray-600">Negative</div>
          </div>
        </div>
        <div className="text-sm text-gray-600 mt-4">
          Sources: Public pricing pages, G2 Reviews (124 pricing mentions), Social Media (892 discussions)
        </div>
      </Card>
    </div>
  );
}