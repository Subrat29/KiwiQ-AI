"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import {
  ChevronLeft,
  FileText,
  Bot,
  Zap,
  Settings,
  Menu,
  Share2
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: Bot, label: "Agents", href: "/agents" },
  { icon: Share2, label: "Workflows", href: "/workflows" },
  { icon: Zap, label: "Automations", href: "/automations" },
  { icon: Settings, label: "Setup", href: "/setup" }
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({ isCollapsed, onToggleCollapse }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-20",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed ? (
          <Logo />
        ) : (
          <div className="w-8 h-8 rounded-full bg-[#3ECF8E]" />
        )}
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          onClick={onToggleCollapse}
        >
          {isCollapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="p-2 space-y-1">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={cn(
              "w-full justify-start px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100",
              pathname?.startsWith(item.href) && "bg-gray-200 text-gray-800",
              isCollapsed && "justify-center p-2"
            )}
            onClick={() => router.push(item.href)}
          >
            <item.icon className="h-5 w-5" />
            {!isCollapsed && (
              <span className="ml-3 text-sm font-medium">{item.label}</span>
            )}
          </Button>
        ))}
      </nav>
    </aside>
  );
}