"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AgentChat } from "./chat/agent-chat";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  agentType: "strategic" | "deal" | "market";
  title: string;
}

export function AgentModal({
  isOpen,
  onClose,
  agentType,
  title,
}: AgentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] h-[600px] p-1 bg-gradient-to-br from-white to-gray-100/80 border-gray-200">
        <DialogTitle className="text-lg font-semibold px-4 pt-3 pb-4 h-fit">
          {title}
          <hr className="mt-4"/>
        </DialogTitle>
        <AgentChat type={agentType} />
      </DialogContent>
    </Dialog>
  );
}
