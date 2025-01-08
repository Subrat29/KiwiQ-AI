export const technicalRequirements = [
  {
    title: "Performance Requirements",
    requirements: [
      "Peak throughput: ~10,000 requests/minute",
      "Expected latency: <100ms",
      "Availability target: 99.99%"
    ],
    priority: "high"
  },
  {
    title: "Integration Patterns",
    requirements: [
      "Webhook-driven updates",
      "Bulk data synchronization",
      "Real-time event streaming"
    ],
    priority: "high"
  },
  {
    title: "Security Controls",
    requirements: [
      "OAuth 2.0 authentication",
      "Rate limiting per endpoint",
      "Request validation"
    ],
    priority: "high"
  }
] as const;