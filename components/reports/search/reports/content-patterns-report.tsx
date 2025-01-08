"use client";

import { ReportLayout } from "./report-layout";
import { ContentPatternsContent } from "./content/content-patterns-content";

export function ContentPatternsReport() {
  return (
    <ReportLayout reportType="content">
      <ContentPatternsContent />
    </ReportLayout>
  );
}