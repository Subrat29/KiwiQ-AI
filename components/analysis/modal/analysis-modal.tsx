"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AnalysisHeader } from "./analysis-header";
import { AnalysisContent } from "./analysis-content";
import { AnalysisChat } from "./analysis-chat";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysisType: "healthcare" | "nurture" | "content";
}

const titles = {
  healthcare: "Healthcare Analysis",
  nurture: "Nurture Sequence Analysis",
  content: "Content Performance Analysis"
};

export function AnalysisModal({ isOpen, onClose, analysisType }: AnalysisModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] w-[1200px] h-[80vh] p-0 modal-gradient border-slate-700/30 backdrop-blur-xl">
        <DialogHeader>
          <VisuallyHidden>
            <DialogTitle>{titles[analysisType]}</DialogTitle>
          </VisuallyHidden>
        </DialogHeader>
        <div className="flex flex-col h-full">
          <AnalysisHeader type={analysisType} onClose={onClose} />
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <AnalysisContent type={analysisType} />
            </div>
            <div className="w-[350px] border-l border-slate-800">
              <AnalysisChat type={analysisType} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}