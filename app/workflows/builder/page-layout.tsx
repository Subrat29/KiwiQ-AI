"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Save,
  Play,
  FileInput,
  Database,
  Bot,
  FileOutput,
  Slack,
  Linkedin,
  BarChart,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface LayoutProps {
  children: React.ReactNode;
  onAddNode: (
    type: string,
    sourceData?: { sourceType: string; icon: any }
  ) => void;
  onSavePipeline: (name: string) => void;
  pipelineConfig?: {
    inputs: Array<{
      type: "text" | "file";
      allowedFileTypes?: string[];
    }>;
    dataSources: string[];
    agentName: string;
    outputType: "text" | "json";
  };
}

export function Layout({
  children,
  onAddNode,
  onSavePipeline,
  pipelineConfig,
}: LayoutProps) {
  const [dataSourceOpen, setDataSourceOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [pipelineName, setPipelineName] = useState("");
  const [isRunModalOpen, setIsRunModalOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [chatOutput, setChatOutput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  const dataSources = [
    { name: "Slack", icon: Slack },
    { name: "LinkedIn", icon: Linkedin },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDataSourceOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRunPipeline = async () => {
    setIsStreaming(true);
    // Simulate streaming output
    const dummyResponse =
      pipelineConfig?.outputType === "json"
        ? '{"result": "Sample output", "confidence": 0.95}'
        : "This is a sample text output from the agent...";

    // Simulate streaming character by character
    for (let i = 0; i < dummyResponse.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setChatOutput(dummyResponse.slice(0, i + 1));
    }
    setIsStreaming(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="flex items-center text-sm text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Pipelines
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="text-gray-600">
                  <Save className="w-4 h-4 mr-2" />
                  Save Pipeline
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-medium">Save Pipeline</h4>
                  <div className="space-y-2">
                    <Input
                      placeholder="Enter pipeline name"
                      value={pipelineName}
                      onChange={(e) => setPipelineName(e.target.value)}
                    />
                    <Button
                      className="w-full"
                      onClick={() => {
                        if (pipelineName) {
                          onSavePipeline(pipelineName);
                          setPipelineName("");
                        }
                      }}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Button
              className="bg-green-500 hover:bg-green-600"
              onClick={() => setIsRunModalOpen(true)}
            >
              <Play className="w-4 h-4 mr-2" />
              Run
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border-t border-gray-200">
          <Button
            variant="ghost"
            onClick={() => onAddNode("input")}
            className="text-gray-800 hover:text-gray-800"
          >
            <FileInput className="w-4 h-4 mr-2" />
            Input
          </Button>
          <div className="relative">
            <Button
              variant="ghost"
              className="text-gray-800 hover:text-gray-800"
              onClick={() => setDataSourceOpen(!dataSourceOpen)}
            >
              <Database className="w-4 h-4 mr-2" />
              Data Source
            </Button>
            {dataSourceOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
              >
                <div className="py-1" role="menu">
                  {dataSources.map((source) => (
                    <button
                      key={source.name}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        onAddNode("dataSource", {
                          sourceType: source.name,
                          icon: source.icon,
                        });
                        setDataSourceOpen(false);
                      }}
                    >
                      <source.icon className="w-4 h-4 mr-2" />
                      {source.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            onClick={() => onAddNode("agent")}
            className="text-gray-800 hover:text-gray-800"
          >
            <Bot className="w-4 h-4 mr-2" />
            Agent
          </Button>
          <Button
            variant="ghost"
            onClick={() => onAddNode("output")}
            className="text-gray-800 hover:text-gray-800"
          >
            <FileOutput className="w-4 h-4 mr-2" />
            Output
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">{children}</main>

      <Dialog open={isRunModalOpen} onOpenChange={setIsRunModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              Test Pipeline: {pipelineConfig?.agentName || "Agent"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Input Section */}
            <div className="space-y-4">
              {pipelineConfig?.inputs.map((input, index) => (
                <div key={index} className="space-y-2">
                  {input.type === "text" && (
                    <>
                      <Label>Text Input</Label>
                      <Textarea
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        placeholder="Enter your message..."
                        className="min-h-[100px]"
                      />
                    </>
                  )}
                  {input.type === "file" && (
                    <>
                      <Label>File Input</Label>
                      <Input
                        type="file"
                        accept={input.allowedFileTypes?.join(",")}
                        onChange={(e) =>
                          setSelectedFile(e.target.files?.[0] || null)
                        }
                      />
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Data Sources Section */}
            {pipelineConfig?.dataSources &&
              pipelineConfig.dataSources.length > 0 && (
                <div className="space-y-2">
                  <Label>Connected Data Sources:</Label>
                  <div className="text-sm text-gray-500">
                    {pipelineConfig.dataSources.join(", ")}
                  </div>
                </div>
              )}

            {/* Output Section */}
            <div className="space-y-2">
              <Label>Output</Label>
              <div className="min-h-[200px] p-4 bg-gray-50 rounded-md">
                <pre className="whitespace-pre-wrap">
                  {chatOutput || "Output will appear here..."}
                </pre>
              </div>
            </div>

            <Button
              className="w-full"
              onClick={handleRunPipeline}
              disabled={isStreaming}
            >
              {isStreaming ? "Processing..." : "Submit"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
