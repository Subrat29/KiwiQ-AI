"use client";

import { motion } from "framer-motion";
import { PersonaCard } from "./persona-card";
import { usePersonas } from "@/hooks/use-personas";

export function PersonaGrid() {
  const { insights, selectPersona } = usePersonas();

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-4">Content Operations</h2>
        <div className="grid gap-4">
          {insights.content.map((insight, i) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <PersonaCard insight={insight} onSelect={selectPersona} />
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Technical Decision Makers</h2>
        <div className="grid gap-4">
          {insights.technical.map((insight, i) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <PersonaCard insight={insight} onSelect={selectPersona} />
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Marketing Leadership</h2>
        <div className="grid gap-4">
          {insights.marketing.map((insight, i) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <PersonaCard insight={insight} onSelect={selectPersona} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}