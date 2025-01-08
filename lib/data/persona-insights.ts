import { PersonaState } from "@/types/personas";

export const personaInsights: PersonaState = {
  content: [
    {
      id: "content-1",
      personaType: "content",
      title: "Content Scale Planning",
      description: "Multiple signals indicating content team expansion",
      signals: [
        {
          id: "cs-1",
          type: "content",
          title: "Director of Content Operations Role",
          description: "New position opened at TechCorp",
          source: "LinkedIn",
          timestamp: "2h ago",
          confidence: 85
        },
        {
          id: "cs-2",
          type: "content",
          title: "Content Team Growth",
          description: "Planning 3x team expansion",
          source: "G2",
          timestamp: "4h ago",
          confidence: 90
        }
      ],
      recommendations: [
        "Highlight team collaboration features",
        "Showcase enterprise scaling capabilities",
        "Present workflow automation ROI"
      ],
      priority: "high",
      confidence: 88
    }
  ],
  technical: [
    {
      id: "tech-1",
      personaType: "technical",
      title: "Enterprise Security Review",
      description: "Active security evaluation signals",
      signals: [
        {
          id: "ts-1",
          type: "technical",
          title: "SSO Requirements",
          description: "CISO reviewing enterprise SSO options",
          source: "GitHub",
          timestamp: "1h ago",
          confidence: 92
        }
      ],
      recommendations: [
        "Share enterprise security whitepaper",
        "Schedule technical architecture review",
        "Provide compliance documentation"
      ],
      priority: "high",
      confidence: 90
    }
  ],
  marketing: [
    {
      id: "mkt-1",
      personaType: "marketing",
      title: "Global Expansion Planning",
      description: "Signals indicating international growth",
      signals: [
        {
          id: "ms-1",
          type: "marketing",
          title: "Multi-Language Requirements",
          description: "Exploring content localization tools",
          source: "G2",
          timestamp: "3h ago",
          confidence: 85
        }
      ],
      recommendations: [
        "Present global content workflow",
        "Share localization capabilities",
        "Highlight multi-market success stories"
      ],
      priority: "medium",
      confidence: 82
    }
  ]
};