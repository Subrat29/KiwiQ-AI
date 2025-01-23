"use client";

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';

export function RootLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        isCollapsed={isCollapsed} 
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)} 
      />
      <main 
        className={`flex-grow p-4 transition-all duration-300 ${
          isCollapsed 
            ? 'ml-16'  // Narrow sidebar width 
            : 'ml-64'  // Full sidebar width
        }`}
      >
        {children}
      </main>
    </div>
  );
}
