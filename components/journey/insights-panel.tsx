"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ThumbsUp, ThumbsDown, Sparkles } from "lucide-react";
import { journeyInsights } from "@/lib/data/journey-insights";

export function InsightsPanel() {
  const [currentInsight, setCurrentInsight] = useState(0);

  const insight = journeyInsights[currentInsight];

  return (
    <Card className="bg-slate-900/95 border-slate-800/50">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
          AI Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium text-lg">{insight.title}</h3>
          <p className="text-gray-600">{insight.primaryText}</p>
          <p className="text-sm text-gray-600">{insight.explanation}</p>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-sm font-medium text-blue-400">Recommendation</p>
            <p className="mt-1 text-sm">{insight.recommendation}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">AI Confidence</span>
            <span className="text-blue-400">{insight.confidence}%</span>
          </div>
          <Progress value={insight.confidence} className="h-1" />
        </div>

        <div className="flex justify-between pt-4 border-t border-slate-800">
          <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <ThumbsUp className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <ThumbsDown className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <div className="flex gap-1">
            {journeyInsights.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentInsight ? "bg-blue-400" : "bg-slate-700"
                }`}
                onClick={() => setCurrentInsight(index)}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}