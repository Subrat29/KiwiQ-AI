"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const activeUsers = [
  { name: "Sarah K.", activity: "viewing journey analysis" },
  { name: "Alex M.", activity: "reviewing actions" }
];

const pendingItems = {
  actions: 2,
  insights: 5,
  comments: 3
};

export function TeamPanel() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={cn(
      "fixed bottom-0 right-6 transition-all duration-300",
      isExpanded ? "mb-0" : "-mb-[calc(100%-2.5rem)]"
    )}>
      <Card className="w-80 bg-slate-900/95 border-slate-800/50 backdrop-blur-xl">
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex items-center justify-between p-2 hover:bg-slate-800/50"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            <span>Team Activity</span>
            <Badge variant="secondary" className="ml-2 bg-slate-800">
              5 online
            </Badge>
          </div>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          )}
        </Button>
        
        <CardContent className="p-4 space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Active Users</h4>
            {activeUsers.map((user, i) => (
              <div key={i} className="flex items-center mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                <span className="text-sm font-medium mr-2">{user.name}</span>
                <span className="text-xs text-gray-600">
                  {user.activity}
                </span>
              </div>
            ))}
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Pending Items</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Actions need approval</span>
                <span>{pendingItems.actions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saved insights this week</span>
                <span>{pendingItems.insights}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">New comments</span>
                <span>{pendingItems.comments}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}