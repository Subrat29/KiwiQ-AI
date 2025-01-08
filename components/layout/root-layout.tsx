"use client";

import { Sidebar } from '@/components/layout/sidebar';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="pl-16 lg:pl-64 transition-all duration-300">
        {children}
      </div>
    </div>
  );
}