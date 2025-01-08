"use client";

import { motion } from "framer-motion";
import { SignalCard } from "../cards/signal-card";
import { useSignals } from "@/hooks/use-signals";

export function EnterpriseSignals() {
  const { signals } = useSignals();

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Enterprise Signals</h2>
      <div className="grid gap-4">
        {signals.enterprise.map((signal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <SignalCard signal={signal} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}