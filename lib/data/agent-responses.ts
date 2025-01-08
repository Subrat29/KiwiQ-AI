export const agentResponses = {
  strategic: {
    initial: {
      content: "I'm analyzing this market position change. I can see several important implications for our competitive strategy. Would you like me to break down the key impacts?",
      options: [
        {
          id: "analyze",
          label: "Show Impact Analysis",
          action: "Analyze competitive implications",
          impact: "Understand market position"
        },
        {
          id: "monitor",
          label: "Monitor Changes",
          action: "Track ongoing developments",
          impact: "Stay informed"
        }
      ]
    },
    analyzing: {
      content: "Here's what I've found:\n\n1. Competitor's enterprise SSO launch affects 3 active deals\n2. Technical decision makers showing increased interest\n3. Potential impact on deal velocity\n\nWould you like to see the affected accounts?",
      options: [
        {
          id: "details",
          label: "Show Affected Accounts",
          action: "View impact details",
          impact: "Identify risks"
        },
        {
          id: "strategy",
          label: "Suggest Strategy",
          action: "Get recommendations",
          impact: "Mitigate risks"
        }
      ]
    }
  },
  deal: {
    initial: {
      content: "I've identified a pattern in enterprise deal progression. Technical validation is happening earlier in the cycle.",
      options: [
        {
          id: "adapt",
          label: "Adapt Strategy",
          action: "Update engagement approach",
          impact: "Improve win rates"
        }
      ]
    }
  },
  market: {
    initial: {
      content: "There's an emerging trend in API-first requirements across enterprise RFPs.",
      options: [
        {
          id: "analyze",
          label: "Analyze Trend",
          action: "Deep dive into requirement patterns",
          impact: "Align product strategy"
        }
      ]
    }
  }
};