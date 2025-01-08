"use client";

import { useState, useEffect } from "react";
import { Report } from "@/types/reports";
import { reports as initialReports } from "@/lib/data/reports";

export function useReports() {
  const [reports, setReports] = useState<Report[]>(initialReports);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true);
      setTimeout(() => {
        setReports(prev => prev.map(report => ({
          ...report,
          date: updateTimestamp(report.date)
        })));
        setLoading(false);
      }, 3000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const filteredReports = reports.filter(report => {
    if (searchQuery && !report.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedType && report.type !== selectedType) {
      return false;
    }
    return true;
  });

  return {
    reports: filteredReports,
    loading,
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType
  };
}

function updateTimestamp(timestamp: string): string {
  if (timestamp.includes('h ago')) {
    const hours = parseInt(timestamp);
    return hours > 1 ? `${hours + 1}h ago` : '2h ago';
  }
  return timestamp;
}