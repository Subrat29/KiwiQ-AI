"use client";

import { useState, useEffect } from "react";
import { Report } from "@/types/reports";
import { reports as initialReports } from "@/lib/data/reports";

export function useReport(id: string) {
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const loadReport = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const found = initialReports.find(r => r.id === id);
      setReport(found || null);
      setLoading(false);
    };

    loadReport();
  }, [id]);

  return { report, loading };
}