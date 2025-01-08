"use client";

import { Sidebar } from "@/components/layout/sidebar";

export default function AgentsLayout({
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
