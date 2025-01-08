"use client";

import { Card } from "@/components/ui/card";

export function Recommendations() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Recommendations</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-transparent p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Immediate Actions</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-3">Security & Compliance</h4>
              <ul className="space-y-2">
                {[
                  "Enhance SSO documentation",
                  "Develop RBAC capabilities",
                  "Improve audit logging"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-3">API & Integration</h4>
              <ul className="space-y-2">
                {[
                  "Enhance rate limiting docs",
                  "Add enterprise endpoints",
                  "Improve bulk operations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-3">Training & Support</h4>
              <ul className="space-y-2">
                {[
                  "Create enterprise onboarding",
                  "Develop technical training",
                  "Enhance documentation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <Card className="bg-transparent p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Long-term Initiatives</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-3">Enterprise Features</h4>
              <ul className="space-y-2">
                {[
                  "Build compliance suite",
                  "Enhance security features",
                  "Develop analytics tools"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-3">Market Positioning</h4>
              <ul className="space-y-2">
                {[
                  "Focus on security messaging",
                  "Highlight scale capabilities",
                  "Emphasize enterprise support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}