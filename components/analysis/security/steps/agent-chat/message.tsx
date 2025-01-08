"use client";

interface MessageProps {
  type: "user" | "agent";
  content: string;
}

export function Message({ type, content }: MessageProps) {
  return (
    <div
      className={`p-3 rounded-lg text-sm ${
        type === "agent" 
          ? "bg-slate-800/50 text-gray-700" 
          : "bg-blue-500/10 text-gray-700 ml-4"
      }`}
    >
      {content}
    </div>
  );
}