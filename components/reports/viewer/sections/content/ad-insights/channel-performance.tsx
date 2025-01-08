"use client";

import { Card } from "@/components/ui/card";

const channels = {
  linkedin: {
    metrics: [
      { label: "Enterprise decision-maker reach", value: "2.8M" },
      { label: "Average CTR", value: "2.4%" },
      { label: "Cost per MQL", value: "$380" },
      { label: "Conversion rate", value: "3.2%" }
    ],
    engagement: [
      { role: "Technical roles", ctr: "3.1%" },
      { role: "Security roles", ctr: "2.8%" },
      { role: "Content roles", ctr: "2.2%" }
    ]
  },
  google: {
    metrics: [
      { label: "Enterprise keywords", value: "850" },
      { label: "Average position", value: "2.3" },
      { label: "CPC trend", value: "↑12%" },
      { label: "Quality score avg", value: "8/10" }
    ],
    keywords: [
      "enterprise ai writing",
      "ai content security",
      "enterprise content automation",
      "secure ai platform"
    ]
  }
};

export function ChannelPerformance() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Channel Performance</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-transparent p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">LinkedIn Performance</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-3">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {channels.linkedin.metrics.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <div className="text-sm text-gray-600">{metric.label}</div>
                    <div className="text-lg font-medium text-green-600 font-medium">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-3">Audience Engagement</h4>
              <div className="space-y-2">
                {channels.linkedin.engagement.map((item) => (
                  <div key={item.role} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.role}</span>
                    <span className="text-green-600 font-medium">{item.ctr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-transparent p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Google Ads Performance</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-3">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {channels.google.metrics.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <div className="text-sm text-gray-600">{metric.label}</div>
                    <div className="text-lg font-medium text-green-600">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-3">Top Keywords</h4>
              <div className="space-y-2">
                {channels.google.keywords.map((keyword) => (
                  <div key={keyword} className="flex items-center gap-2 text-sm text-gray-600 capitalize">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    {keyword}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}