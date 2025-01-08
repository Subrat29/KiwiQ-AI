"use client";

import { Sidebar } from "@/components/layout/sidebar";

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-gray-800">
      <Sidebar />
      {children}
    </div>
  );
}
