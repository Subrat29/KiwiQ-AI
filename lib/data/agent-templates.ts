export const agentTemplates = [
  {
    id: "market-analyzer",
    name: "Market Trend Analyzer",
    description: "Analyzes market trends and competitor movements to identify opportunities",
    dataSources: ["G2", "LinkedIn", "Public Forums"],
    defaultConfig: {
      updateFrequency: "hourly",
      alertThreshold: 0.85
    }
  },
  {
    id: "competitive-intel",
    name: "Competitive Intelligence",
    description: "Monitors competitor pricing, features, and positioning changes",
    dataSources: ["G2", "Competitor Sites"],
    defaultConfig: {
      updateFrequency: "daily",
      alertThreshold: 0.9
    }
  },
  {
    id: "enterprise-signals",
    name: "Enterprise Signal Detector",
    description: "Identifies high-intent enterprise buying signals across channels",
    dataSources: ["LinkedIn", "G2", "Google Ads"],
    defaultConfig: {
      updateFrequency: "realtime",
      alertThreshold: 0.8
    }
  },
  {
    id: "content-optimizer",
    name: "Content Performance Optimizer",
    description: "Analyzes content performance and suggests optimizations",
    dataSources: ["Google Analytics", "LinkedIn", "G2"],
    defaultConfig: {
      updateFrequency: "daily",
      alertThreshold: 0.85
    }
  }
];