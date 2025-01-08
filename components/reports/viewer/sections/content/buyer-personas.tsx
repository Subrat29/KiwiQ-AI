"use client";

import { Card } from "@/components/ui/card";

const personas = [
  {
    title: "Technical Decision Makers",
    concerns: [
      { focus: "API capabilities", percentage: 45 },
      { focus: "Security features", percentage: 38 },
      { focus: "Integration depth", percentage: 35 },
      { focus: "Performance metrics", percentage: 28 }
    ],
    requirements: [
      "REST API documentation",
      "Security certifications",
      "Integration flexibility",
      "Performance SLAs"
    ]
  },
  {
    title: "Content Operations Leaders",
    concerns: [
      { focus: "Team workflows", percentage: 52 },
      { focus: "Scale requirements", percentage: 48 },
      { focus: "Template management", percentage: 42 },
      { focus: "Quality controls", percentage: 35 }
    ],
    requirements: [
      "Team collaboration tools",
      "Bulk operations",
      "Template systems",
      "Quality metrics"
    ]
  }
];

export function BuyerPersonas() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Buyer Persona Insights</h2>
      
      <div className="grid gap-6">
        {personas.map((persona) => (
          <Card key={persona.title} className="bg-transparent p-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">{persona.title}</h3>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-4">Primary Concerns</h4>
                <div className="space-y-4">
                  {persona.concerns.map((concern) => (
                    <div key={concern.focus} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">{concern.focus}</span>
                        <span className="text-gray-700 font-medium">{concern.percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${concern.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-4">Key Requirements</h4>
                <ul className="space-y-2">
                  {persona.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}