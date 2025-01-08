import { LineChart, BarChart, PieChart, TrendingUp } from "lucide-react";

export const featuredReports = [
  {
    category: "Journey Maps",
    items: [
      {
        title: "Enterprise Healthcare Journey Analysis",
        time: "2h ago",
        icon: LineChart,
        path: "/journey/healthcare",
        details: "Deep dive into the enterprise healthcare customer journey, including key touchpoints, conversion rates, and drop-off points. Analysis shows 45% improvement in engagement after implementing personalized content strategy."
      },
      {
        title: "Mid-Market Tech Customer Paths",
        time: "1d ago",
        icon: TrendingUp,
        details: "Comprehensive analysis of mid-market technology sector customer journeys. Highlights include 3x better conversion rates when technical content is delivered early in the journey."
      },
      {
        title: "Financial Services Buyer Journey",
        time: "2d ago",
        icon: BarChart,
        details: "Detailed mapping of financial services procurement process. Key finding: 60% faster deal closure when compliance documentation is proactively provided."
      }
    ]
  },
  {
    category: "Channel Analysis",
    items: [
      {
        title: "Q4 Multi-Channel Attribution Report",
        time: "1h ago",
        icon: PieChart,
        details: "Complete breakdown of Q4 channel performance across all segments. LinkedIn showing 2.3x better ROI compared to other channels for enterprise deals."
      },
      {
        title: "Paid Social ROI Deep Dive",
        time: "4h ago",
        icon: BarChart,
        details: "Detailed analysis of paid social media performance. Technical whitepapers driving 3x more qualified leads than product-focused content."
      }
    ]
  }
];