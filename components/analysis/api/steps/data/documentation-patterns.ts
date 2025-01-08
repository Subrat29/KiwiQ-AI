import { FileCode, Clock, Shield } from "lucide-react";

export const documentationPatterns = [
  {
    title: "Most Viewed API Documentation",
    icon: FileCode,
    items: [
      "Authentication endpoints (22 views)",
      "Bulk data processing (19 views)",
      "Error handling specifications (15 views)",
      "Rate limiting guidelines (12 views)"
    ]
  },
  {
    title: "Review Duration Analysis",
    icon: Clock,
    items: [
      "3x longer on rate limiting docs",
      "Multiple team members reviewing same endpoints",
      "Heavy focus on error scenarios"
    ]
  },
  {
    title: "Security Documentation",
    icon: Shield,
    items: [
      "API authentication methods",
      "Rate limiting and throttling",
      "Security best practices"
    ]
  }
];