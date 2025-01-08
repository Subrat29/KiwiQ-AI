"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Handle, Position } from "reactflow";

interface BaseNodeProps {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  inputs?: string[];
  outputs?: string[];
  id: string;
  onDelete: (id: string) => void;
}

export function BaseNode({
  title,
  icon,
  children,
  inputs = [],
  outputs = [],
  id,
  onDelete,
}: BaseNodeProps) {
  const [connectedHandles, setConnectedHandles] = useState<Set<string>>(new Set());
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const updateConnections = () => {
      const edges = document.querySelectorAll('.react-flow__edge');
      const connected = new Set<string>();
      
      edges.forEach((edge) => {
        const edgeElement = edge as HTMLElement;
        const source = edgeElement.getAttribute('data-source');
        const target = edgeElement.getAttribute('data-target');
        const sourceHandle = edgeElement.getAttribute('data-sourcehandle');
        const targetHandle = edgeElement.getAttribute('data-targethandle');
        
        if (source === id && sourceHandle) {
          connected.add(sourceHandle);
        }
        if (target === id && targetHandle) {
          connected.add(targetHandle);
        }
      });
      
      setConnectedHandles(connected);
    };

    updateConnections();
    const observer = new MutationObserver(updateConnections);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [id]);

  return (
    <Card
      className={`w-[280px] ${
        isSelected ? 'bg-white shadow-lg border-green-400 border-2' : 'bg-gradient-to-br from-white/70 to-gray-100/50'
      } transition-all`}
      onClick={() => setIsSelected(true)}
      onMouseOver={() =>  setIsSelected(true)}
      onMouseLeave={() => setIsSelected(false)}
      onDragStart={() => setIsSelected(true)}
      onDragEnd={() => setIsSelected(false)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 border-b">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 hover:bg-slate-100"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3">{children}</CardContent>
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={input}
          style={{
            top: `${((index + 1) / (inputs.length + 1)) * 100}%`,
            backgroundColor: connectedHandles.has(input) ? "#22c55e" : "white",
            border: "1px solid gray",
            borderRadius: "50%",
            width: "8px",
            height: "8px",
          }}
        />
      ))}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={output}
          style={{
            top: `${((index + 1) / (outputs.length + 1)) * 100}%`,
            backgroundColor: connectedHandles.has(output) ? "#22c55e" : "white",
            border: "1px solid gray",
            borderRadius: "50%",
            width: "8px",
            height: "8px",
          }}
        />
      ))}
    </Card>
  );
}
