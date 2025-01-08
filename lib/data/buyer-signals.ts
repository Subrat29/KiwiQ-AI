export const buyerSignals = {
  enterprise: [
    {
      title: "High Intent Signal Cluster",
      intentScore: 85,
      signals: [
        {
          source: "G2",
          type: "Review",
          content: "Evaluating enterprise security solutions",
          timestamp: "2h ago"
        },
        {
          source: "LinkedIn",
          type: "Engagement",
          content: "CISO viewed technical documentation",
          timestamp: "4h ago"
        }
      ],
      recommendedAction: "Engage with technical decision makers",
      priority: "high"
    },
    {
      title: "Competitive Analysis Activity",
      intentScore: 75,
      signals: [
        {
          source: "Public Forums",
          type: "Discussion",
          content: "Feature comparison thread",
          timestamp: "1d ago"
        }
      ],
      recommendedAction: "Highlight differentiators",
      priority: "medium"
    }
  ],
  competitor: [
    {
      title: "Market Position Change",
      intentScore: 90,
      signals: [
        {
          source: "Competitor Sites",
          type: "Update",
          content: "New enterprise feature launch",
          timestamp: "6h ago"
        }
      ],
      recommendedAction: "Update competitive positioning",
      priority: "high"
    }
  ],
  market: [
    {
      title: "Emerging Requirement Trend",
      intentScore: 70,
      signals: [
        {
          source: "GitHub",
          type: "Issues",
          content: "Integration requests increasing",
          timestamp: "12h ago"
        }
      ],
      recommendedAction: "Evaluate product roadmap alignment",
      priority: "medium"
    }
  ]
};