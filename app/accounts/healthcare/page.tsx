"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Filter, Download } from "lucide-react";
import { AccountsTable } from "@/components/accounts/accounts-table";
import { AccountsFilters } from "@/components/accounts/accounts-filters";
import { AccountsMetrics } from "@/components/accounts/accounts-metrics";

export default function HealthcareAccountsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-gray-700">
      <div className="max-w-[1400px] mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => router.push("/journey/healthcare")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Journey Analysis
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Enterprise Healthcare Accounts</h1>
              <p className="text-gray-600 mt-2">Analyzing 500+ accounts in healthcare vertical</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="bg-slate-900/50">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="bg-slate-900/50">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <AccountsMetrics />
        <AccountsFilters />
        <AccountsTable />
      </div>
    </div>
  );
}