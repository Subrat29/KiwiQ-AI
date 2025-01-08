"use client";

import { useSkills } from "@/hooks/use-skills";
import { SkillCard } from "./skill-card";
import { motion } from "framer-motion";

export function SkillsGrid() {
  const { skills } = useSkills();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </div>
  );
}