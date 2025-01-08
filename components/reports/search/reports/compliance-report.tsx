"use client";

import { ReportLayout } from "./report-layout";
import { ComplianceContent } from "./content/compliance-content";

export function ComplianceReport() {
  return (
    <ReportLayout reportType="compliance">
      <ComplianceContent />
    </ReportLayout>
  );
}