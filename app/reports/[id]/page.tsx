import { reports } from "@/lib/data/reports";
import { ReportViewer } from "@/components/reports/viewer/report-viewer";

export const dynamicParams = false;

export function generateStaticParams() {
  return reports.map((report) => ({
    id: report.id,
  }));
}

export default function ReportPage({ params }: { params: { id: string } }) {
  const report = reports.find(r => r.id === params.id);

  if (!report) {
    return (
      <div className="min-h-screen text-gray-700 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Report Not Found</h1>
          <p className="text-gray-600">The requested report could not be found.</p>
        </div>
      </div>
    );
  }

  return <ReportViewer report={report} />;
}