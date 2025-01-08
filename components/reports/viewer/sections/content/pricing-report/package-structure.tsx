"use client";

import { Card } from "@/components/ui/card";

const addons = [
  {
    name: "Advanced Security",
    price: "+$5K/month",
    features: [
      "SSO implementation",
      "Custom security controls",
      "Advanced encryption"
    ]
  },
  {
    name: "Compliance Suite",
    price: "+$3K/month",
    features: [
      "Audit logging",
      "Compliance reporting",
      "Data residency options"
    ]
  },
  {
    name: "Custom Model Training",
    price: "+$8K/month",
    features: [
      "Brand voice training",
      "Custom model deployment",
      "Performance tuning"
    ]
  },
  {
    name: "Premium Support",
    price: "+$2K/month",
    features: [
      "24/7 coverage",
      "Technical account manager",
      "Priority response"
    ]
  }
];

export function PackageStructure() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Package Structure Evolution</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {addons.map((addon) => (
          <Card key={addon.name} className="bg-transparent p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-700">{addon.name}</h3>
              <span className="text-green-600 font-medium">{addon.price}</span>
            </div>
            
            <ul className="space-y-2">
              {addon.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}