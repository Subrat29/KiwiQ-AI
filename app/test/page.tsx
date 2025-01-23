"use client";

import { useState, useEffect } from "react";
import MarkdownRenderer from "@/components/reports/markdown-render/MarkdownRenderer";

export default function Home() {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(null);
  const documentId = "unique-doc-id" // Replace with actual document ID logic

  useEffect(() => {
    fetch("/markdown-report.md")
      .then(response => response.text())
      .then(setMarkdown)
      .catch(setError);
  }, []);

  if (error) return <div className="text-red-500 p-4">Failed to load report</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">LinkedIn Ad Analysis Report</h1>
      <MarkdownRenderer content={markdown} documentId={documentId} />
    </div>
  );
}