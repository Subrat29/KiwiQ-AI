"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function ComplianceContent() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Enterprise AI Compliance Research</h1>
          <p className="text-gray-600 mt-1">Active research signals from last 30 days</p>
        </div>
        <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
          128 Enterprise Accounts
        </Badge>
      </div>

      <Card className="bg-slate-800/50 border-slate-700/50 p-6">
        <h2 className="text-lg font-semibold mb-4">High Activity Companies</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-600">Financial Services</h3>
            <div className="grid gap-2">
              {[
                "8 Fortune 500 Financial Services",
                "6 Healthcare Enterprises",
                "4 Government Contractors"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <h2 className="text-lg font-semibold mb-4">Key Research Areas</h2>
          <div className="space-y-3">
            {[
              "AI Model Governance",
              "Data Privacy Controls",
              "Audit Trail Requirements",
              "Security Certifications"
            ].map((area, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <ArrowRight className="w-4 h-4 text-blue-400" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <h2 className="text-lg font-semibold mb-4">Research Patterns</h2>
          <div className="space-y-3">
            {[
              "85% focus on security documentation",
              "72% reviewing compliance features",
              "64% examining audit capabilities",
              "58% evaluating data controls"
            ].map((pattern, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <ArrowRight className="w-4 h-4 text-blue-400" />
                <span>{pattern}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}