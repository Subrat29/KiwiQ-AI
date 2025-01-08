"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

interface ExecutionConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onModify: () => void;
}

export function ExecutionConfirmation({ isOpen, onClose, onConfirm, onModify }: ExecutionConfirmationProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[600px] modal-gradient border-slate-700/30 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Review Channel Optimization Changes
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Key Changes</h3>
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                4-week rollout
              </Badge>
            </div>

            {[
              "Reduce SEM budget by $45,000 (30%)",
              "Increase LinkedIn budget by $45,000",
              "Update tracking for new campaign structure",
              "Set up performance monitoring alerts"
            ].map((change, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
                <ArrowRight className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{change}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Connected Tools</h4>
            <div className="grid grid-cols-3 gap-3">
              {["LinkedIn Campaign Manager", "Google Ads", "Salesforce"].map((tool) => (
                <div key={tool} className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium">Safety Features</h4>
            <div className="space-y-2">
              {[
                "Changes will be implemented gradually over 4 weeks",
                "Automatic rollback if performance drops >10%",
                "24/7 monitoring and alerts enabled"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="default"
              className="flex-1 bg-blue-500 hover:bg-blue-600"
              onClick={onConfirm}
            >
              Confirm & Execute
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={onModify}
            >
              Modify Plan
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}