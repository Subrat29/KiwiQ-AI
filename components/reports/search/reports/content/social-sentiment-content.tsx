"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function SocialSentimentContent() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Social Sentiment Analysis</h1>
          <p className="text-gray-600 mt-1">Platform discussion analysis from last 30 days</p>
        </div>
        <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
          2,845 Mentions
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <h2 className="text-lg font-semibold mb-4">Reddit Insights</h2>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600 mb-2">Top Discussion Themes</div>
              <div className="space-y-2">
                {[
                  { theme: "Feature Comparisons", percentage: "42%" },
                  { theme: "Use Cases", percentage: "31%" },
                  { theme: "Pricing", percentage: "27%" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                      <span>{item.theme}</span>
                    </div>
                    <span>{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <h2 className="text-lg font-semibold mb-4">LinkedIn Insights</h2>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600 mb-2">Key Themes</div>
              <div className="space-y-2">
                {[
                  { theme: "Enterprise Implementation", percentage: "45%" },
                  { theme: "Team Collaboration", percentage: "32%" },
                  { theme: "ROI Stories", percentage: "23%" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                      <span>{item.theme}</span>
                    </div>
                    <span>{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-lg font-semibold mb-4">Sentiment Distribution</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            { platform: "Jasper AI", sentiment: "76% Positive" },
            { platform: "Copy AI", sentiment: "72% Positive" },
            { platform: "Writer", sentiment: "68% Positive" }
          ].map((item) => (
            <div key={item.platform} className="text-center">
              <div className="text-lg font-semibold">{item.platform}</div>
              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30 mt-2">
                {item.sentiment}
              </Badge>
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-600 mt-4">
          Sources: Reddit (r/marketing, r/copywriting, r/startups), LinkedIn Business Groups
        </div>
      </Card>
    </div>
  );
}