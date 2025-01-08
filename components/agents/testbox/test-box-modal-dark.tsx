"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { TestBoxHeader } from "./test-box-header-dark";
import { TestBoxContent } from "./test-box-content-dark";
import { Agent } from "@/types/agents";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface TestBoxModalProps {
  isOpen: boolean;
  onClose: () => void;
  agent: Agent;
}

export function TestBoxModal({ isOpen, onClose, agent }: TestBoxModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] h-[90vh] p-0 overflow-y-auto bg-gradient-to-br from-neutral-950/95 to-neutral-900 backdrop-blur border-neutral-900">
        <VisuallyHidden>
          <DialogTitle>Test {agent.name}</DialogTitle>
        </VisuallyHidden>
        <div className="flex flex-col h-full">
          <TestBoxHeader agent={agent} onClose={onClose} />
          <TestBoxContent agent={agent} />
        </div>
      </DialogContent>
    </Dialog>
  );
}