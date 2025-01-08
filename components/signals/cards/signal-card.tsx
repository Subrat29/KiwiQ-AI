"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { SignalHeader } from "./signal-header";
import { SignalItem } from "./signal-item";
import { SignalAction } from "./signal-action";
import { FeedbackButtons } from "@/components/ui/feedback-buttons";
import { AgentModal } from "@/components/agents/agent-modal";
import { Signal } from "@/types/signals";

interface SignalCardProps {
  signal: Signal;
}

export function SignalCard({ signal }: SignalCardProps) {
  const [showAgent, setShowAgent] = useState(false);

  const handleFeedback = (type: "up" | "down") => {
    console.log(`Signal feedback: ${type}`, signal.title);
  };

  return (
    <>
      <Card className="bg-slate-900/95 border-slate-800/50 p-4 hover:border-slate-700/50 transition-all">
        <div className="flex items-start justify-between mb-4">
          <SignalHeader
            title={signal.title}
            priority={signal.priority}
            intentScore={signal.intentScore}
            signalCount={signal.signals.length}
          />
          <FeedbackButtons onFeedback={handleFeedback} />
        </div>

        <div className="space-y-3 mb-4">
          {signal.signals.map((s, i) => (
            <SignalItem
              key={i}
              content={s.content}
              source={s.source}
              timestamp={s.timestamp}
            />
          ))}
        </div>

        <SignalAction onAction={() => setShowAgent(true)} />
      </Card>

      <AgentModal
        isOpen={showAgent}
        onClose={() => setShowAgent(false)}
        agentType="strategic"
        title={`Analysis: ${signal.title}`}
      />
    </>
  );
}