import { Report } from "@/types/reports";

export const reports: Report[] = [
  {
    id: "1",
    title: "G2 Enterprise Reviews Analysis - June 2024",
    type: "market",
    date: "2h ago",
    metrics: {
      "Review Velocity": "+15%",
      "Sentiment Trend": "↑",
      "Category Position": "#2",
      "Key Themes": "API, Security"
    },
    findings: [
      "Technical decision makers showing 2.8x higher engagement",
      "Security features mentioned in 85% of reviews",
      "API flexibility driving positive sentiment",
      "Integration ecosystem gaining traction"
    ],
    confidence: 92
  },
  {
    id: "2",
    title: "Enterprise Pricing Shifts - Q2 2024",
    type: "competitive",
    date: "4h ago",
    metrics: {
      "Price Changes": "3",
      "New Plans": "2",
      "Market Position": "Mid-tier",
      "Impact": "Medium"
    },
    findings: [
      "Copy.ai introduced usage-based enterprise tier",
      "Writer.ai adjusted API pricing structure",
      "New compliance add-ons emerging",
      "Shift towards consumption-based models"
    ],
    confidence: 88
  },
  {
    id: "3",
    title: "Competitor Ad Insights - Q2 2024",
    type: "competitive",
    date: "6h ago",
    metrics: {
      "Total Market Spend": "$8.5M",
      "LinkedIn CTR": "2.4%",
      "Security Focus": "45%",
      "Campaign ROI": "+32%"
    },
    findings: [
      "Heavy focus on enterprise security messaging",
      "LinkedIn outperforming for technical roles",
      "Security certifications driving +45% CTR",
      "Technical content resonating strongly"
    ],
    confidence: 90
  }
];