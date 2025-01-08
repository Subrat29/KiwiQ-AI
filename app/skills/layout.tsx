"use client";

import { Sidebar } from "@/components/layout/sidebar";

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      {children}
    </div>
  );
}
