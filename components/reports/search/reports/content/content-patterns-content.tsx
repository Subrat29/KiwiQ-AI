"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function ContentPatternsContent() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">AI Content Search Patterns</h1>
          <p className="text-gray-600 mt-1">Buyer segment analysis from last 30 days</p>
        </div>
        <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
          2,456 Search Queries
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <h2 className="text-lg font-semibold mb-4">Enterprise (500+ employees)</h2>
          <div className="space-y-3">
            <div className="text-sm text-gray-600">Top Search Terms</div>
            {[
              { term: "enterprise AI content workflow", trend: "+82% MoM" },
              { term: "collaborative AI writing", trend: "+65% MoM" },
              { term: "brand voice customization", trend: "+43% MoM" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  <span>{item.term}</span>
                </div>
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                  {item.trend}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <h2 className="text-lg font-semibold mb-4">Mid-Market (50-500 employees)</h2>
          <div className="space-y-3">
            <div className="text-sm text-gray-600">Top Search Terms</div>
            {[
              { term: "AI marketing automation", trend: "+92% MoM" },
              { term: "social media AI", trend: "+76% MoM" },
              { term: "SEO content generation", trend: "+58% MoM" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  <span>{item.term}</span>
                </div>
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                  {item.trend}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-lg font-semibold mb-4">Key Trend</h2>
        <div className="text-lg">Content workflow & collaboration searches up 3x across all segments</div>
        <div className="text-sm text-gray-600 mt-2">Sources: Google Search Console (1,245 queries), G2 Compare (645 searches), LinkedIn (566 content interactions)</div>
      </Card>
    </div>
  );
}