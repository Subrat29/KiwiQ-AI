"use client";

import { Card } from "@/components/ui/card";

export function SentimentTrends() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Review Velocity & Sentiment Trends</h2>
      
      <Card className="p-6 bg-transparent">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Overall Metrics</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-slate-600 mb-1">New Reviews</div>
                  <div className="text-2xl font-semibold text-gray-700">142</div>
                  <div className="text-sm text-green-500">+40% vs prev. quarter</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Sentiment Score</div>
                  <div className="text-2xl font-semibold text-gray-700">4.4/5</div>
                  <div className="text-sm text-green-500">↑0.3 from Q1</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Enterprise Satisfaction</div>
                  <div className="text-2xl font-semibold text-gray-700">88%</div>
                  <div className="text-sm text-green-500">↑5% improvement</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Security Mentions</div>
                  <div className="text-2xl font-semibold text-gray-700">85%</div>
                  <div className="text-sm text-green-500">QoQ increase</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Industry Distribution</h3>
            <div className="grid grid-cols-5 gap-4">
              {[
                { industry: "Technology", percentage: 35 },
                { industry: "Financial Services", percentage: 25 },
                { industry: "Healthcare", percentage: 20 },
                { industry: "Manufacturing", percentage: 15 },
                { industry: "Others", percentage: 5 }
              ].map((item) => (
                <div key={item.industry} className="text-center">
                  <div className="text-2xl font-semibold text-gray-700 mb-1">{item.percentage}%</div>
                  <div className="text-sm font-medium text-gray-600">{item.industry}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}