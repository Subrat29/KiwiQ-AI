"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Save, Play, Settings } from "lucide-react";

interface HeaderProps {
  skillName: string;
  status: "draft" | "active" | "testing";
  onSave: () => void;
  onTest: () => void;
}

export function Header({ skillName, status, onSave, onTest }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6  p-4 rounded-lg border border-gray-200">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">{skillName}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-400/30 capitalize">
              {status}
            </Badge>
            <span className="text-sm text-gray-600">Last edited 2m ago</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button variant="outline" onClick={onTest} className="text-gray-800">
            <Play className="w-4 h-4 mr-2" />
            Test
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button className="bg-black hover:shadow-md transition hover:bg-black" onClick={onSave}>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </motion.div>
      </div>
    </div>
  );
}