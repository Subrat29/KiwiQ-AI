"use client";

import { Card } from "@/components/ui/card";

const features = {
  strongest: [
    {
      name: "Content Quality",
      score: "4.8/5",
      details: [
        { label: "Accuracy", value: "95%" },
        { label: "Brand voice", value: "92%" },
        { label: "Multi-language", value: "90%" },
      ],
    },
    {
      name: "API Flexibility",
      score: "4.7/5",
      details: [
        { label: "Integration ease", value: "94%" },
        { label: "Documentation", value: "88%" },
        { label: "Performance", value: "92%" },
      ],
    },
  ],
  improvement: [
    {
      name: "Role-based Access",
      score: "3.7/5",
      issues: [
        "Granular permissions needed",
        "Department-level controls lacking",
        "Custom role definitions limited",
      ],
    },
    {
      name: "Enterprise SSO",
      score: "3.5/5",
      issues: [
        "Limited provider options",
        "Complex implementation",
        "Documentation gaps",
      ],
    },
  ],
};

export function FeatureAnalysis() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">
        Feature Satisfaction Analysis
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6 bg-transparent">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Strongest Features
          </h3>
          <div className="space-y-6">
            {features.strongest.map((feature) => (
              <div key={feature.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-700">
                    {feature.name}
                  </div>
                  <div className="text-green-500 font-semibold">
                    {feature.score}
                  </div>
                </div>
                <div className="space-y-2">
                  {feature.details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-600">{detail.label}</span>
                      <span className="text-gray-700">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-transparent">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Areas for Improvement
          </h3>
          <div className="space-y-6">
            {features.improvement.map((feature) => (
              <div key={feature.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-gray-700">
                    {feature.name}
                  </div>
                  <div className="text-red-400 font-semibold">
                    {feature.score}
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.issues.map((issue, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
