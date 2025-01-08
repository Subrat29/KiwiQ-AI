"use client";

import { SearchCommand } from "@/components/search-command";
import { MainLayout } from "@/components/layout/main-layout";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto p-6">
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-bold mb-1 text-black">Mission Control</h1>
          <h2 className="text-xl text-gray-600 mb-6">Buyer Intelligence</h2>
          <SearchCommand />
        </header>
        <MainLayout />
      </div>
    </div>
  );
}