"use client";

import { Card } from "@/components/ui/card";

export function MarketDynamics() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Market Pricing Dynamics</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-transparent p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Pricing Model Shifts</h3>
          <div className="space-y-3">
            {[
              "60% of market moving to usage-based",
              "Security premiums becoming standard",
              "Compliance features as add-ons",
              "Professional services bundling"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-transparent p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Deal Size Analysis</h3>
          <div className="space-y-4">
            {[
              { segment: "Small (1000-2500 employees)", value: "$75K avg" },
              { segment: "Mid (2500-5000 employees)", value: "$150K avg" },
              { segment: "Large (5000+ employees)", value: "$250K+ avg" }
            ].map((segment) => (
              <div key={segment.segment} className="flex justify-between text-sm">
                <span className="text-gray-600">{segment.segment}</span>
                <span className="text-green-600 font-medium">{segment.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}