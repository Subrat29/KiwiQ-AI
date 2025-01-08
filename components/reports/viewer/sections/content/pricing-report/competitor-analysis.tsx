"use client";

import { Card } from "@/components/ui/card";

const competitors = {
  copyai: {
    name: "Copy.ai",
    changes: [
      "New usage-based enterprise tier",
      "Starting at $25K/month",
      "Added security premium (+20%)",
      "Volume discounts increased"
    ],
    details: [
      { label: "Base", value: "$25K/month (up to 100 users)" },
      { label: "Security Add-on", value: "+$5K/month" },
      { label: "API Access", value: "Usage-based" },
      { label: "Support", value: "Included" }
    ]
  },
  writer: {
    name: "Writer.ai",
    changes: [
      "Introduced compliance package",
      "New API pricing model",
      "Enterprise minimum raised 25%",
      "Added professional services"
    ],
    details: [
      { label: "Base", value: "$30K/month (unlimited users)" },
      { label: "Compliance Suite", value: "+$8K/month" },
      { label: "API", value: "Per-call pricing" },
      { label: "Services", value: "$250/hour" }
    ]
  }
};

export function CompetitorAnalysis() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Competitor Pricing Analysis</h2>
      
      <div className="grid gap-6">
        {Object.entries(competitors).map(([key, competitor]) => (
          <Card key={key} className="bg-transparent p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">{competitor.name} Changes</h3>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-3">Core Changes</h4>
                <ul className="space-y-2">
                  {competitor.changes.map((change, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-3">Package Details</h4>
                <div className="space-y-2">
                  {competitor.details.map((detail) => (
                    <div key={detail.label} className="flex justify-between text-sm">
                      <span className="text-gray-600">{detail.label}</span>
                      <span className="text-green-600 font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}