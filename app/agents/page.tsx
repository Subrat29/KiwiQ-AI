"use client";

import { AgentGrid } from "@/components/agents/management/agent-grid";
import { Button } from "@/components/ui/button";
import { Bot, Code2, Database, Plus, Workflow, Zap } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const agentCategories = [
  {
    title: "Skills Library",
    description: "Create and manage reusable agent capabilities",
    icon: Code2,
    href: "/agents/skills",
    count: 24,
  },
  {
    title: "Agent Configuration",
    description: "Define agent behaviors and access controls",
    icon: Bot,
    href: "/agents/config",
    count: 8,
  },
  {
    title: "Workflow Builder",
    description: "Design complex agent workflows visually",
    icon: Workflow,
    href: "/workflows",
    count: 12,
  },
  {
    title: "Data Sources",
    description: "Connect and manage agent data access",
    icon: Database,
    href: "/agents/data",
    count: 15,
  },
] as const;

export default function AgentsPage() {
  const router = useRouter();

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Agent Studio</h1>
            <p className="text-gray-500 mt-2">
              Create and manage your intelligent agents
            </p>
          </div>
          {/* <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => router.push("/agents/skills")}
              className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              <Zap className="w-4 h-4 mr-2" />
              Skills Library
            </Button>
            <Button
              onClick={() => router.push("/agents/new")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Agent
            </Button>
          </div> */}
        </div>

        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {agentCategories.map((category) => (
            <Card
              key={category.title}
              className="border-[#EAEAEA] bg-white transition-shadow hover:shadow-md"
            >
              <Link href={category.href}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <category.icon className="h-5 w-5 text-[#00C694]" />
                      <CardTitle className="text-base text-[#1F1F1F]">
                        {category.title}
                      </CardTitle>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-[#FAFAFA] text-[#666666] border-[#EAEAEA]"
                    >
                      {category.count}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#666666]">
                    {category.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div> */}

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Agents</h2>
          <AgentGrid />
        </div>
      </div>
    </div>
  );
}
