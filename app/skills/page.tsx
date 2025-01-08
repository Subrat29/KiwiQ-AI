"use client";

import { SkillsGrid } from "@/components/skills/skills-grid";

export default function SkillsPage() {
  return (
    <div className="max-w-[1400px] mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Skills Library</h1>
      <p className="text-gray-600">Configure and manage your AI skills</p>
      <SkillsGrid />
    </div>
  );
}