"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, ExternalLink } from "lucide-react";
import { SecurityAnalysisModal } from "@/components/analysis/security/security-analysis-modal";

interface EnterpriseSignalCardProps {
  title: string;
  intentScore: number;
  description: string;
  sources: string[];
  signals: string[];
}

export function EnterpriseSignalCard({
  title,
  intentScore,
  description,
  sources,
  signals
}: EnterpriseSignalCardProps) {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <>
      <Card className=" w-[400px] shrink-0">
        <div className="p-6 space-y-6">
          {/* Intent Score */}
          <Badge 
            variant="outline" 
            className="bg-green-400/10 text-green-600 border-green-500/30 py-1"
          >
            {intentScore}% Intent Score
          </Badge>

          {/* Description Box */}
          <div className=" border  rounded-lg p-2">
            <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
          </div>

          {/* Sources */}
          <div className="flex flex-wrap gap-2">
            {sources.map((source) => (
              <Badge
                key={source}
                variant="outline"
                className="bg-gray-200/50 text-gray-600 border-gray-400"
              >
                {source}
              </Badge>
            ))}
          </div>

          {/* Signals */}
          <div className="space-y-3">
            {signals.map((signal, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <ArrowRight className="w-4 h-4 mt-1 text-green-500 shrink-0" />
                <span className="text-gray-500">{signal}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              size="sm"
              className="flex-1 bg-green-400 hover:bg-green-500 text-black"
              onClick={() => setShowAnalysis(true)}
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Dive Deeper
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              className="flex-1 bg-gray-200 hover:bg-gray-400/50 border-gray-400"
            >
              <FileText className="w-4 h-4 mr-2 opacity-70" />
              Request Report
              <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
            </Button>
          </div>
        </div>
      </Card>

      <SecurityAnalysisModal
        isOpen={showAnalysis}
        onClose={() => setShowAnalysis(false)}
        signalData={{
          title,
          intentScore,
          description
        }}
      />
    </>
  );
}