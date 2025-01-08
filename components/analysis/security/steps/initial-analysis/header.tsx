"use client";

import { Bot } from "lucide-react";

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <Bot className="w-5 h-5 text-blue-400" />
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}