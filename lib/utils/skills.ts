// Utility functions for skills
export function getSkillIds() {
  // In a real app, this would fetch from an API or database
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ];
}

export function getSkillById(id: string) {
  // Mock implementation - replace with actual data fetching
  return {
    id,
    name: "Intent Classification",
    status: "draft" as const,
    // Add other skill properties as needed
  };
}