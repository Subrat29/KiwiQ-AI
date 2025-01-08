"use client";

import { Sidebar } from "@/components/layout/sidebar";

export default function HealthcareJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-gray-700">
      <Sidebar />
      <div className="pl-16 lg:pl-64 transition-all duration-300">
        {children}
      </div>
    </div>
  );
}