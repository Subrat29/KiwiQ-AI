"use client";

import { useState, useEffect } from "react";
import { Skill, SkillState } from "@/types/skills";

const mockSkills: Skill[] = [
  {
    id: "1",
    name: "Intent Classification",
    description: "Classify buying intent from user interactions",
    usageCount: 245,
    dataSources: ["G2", "LinkedIn"],
    team: "Data Science",
    category: "Analysis",
    configuration: {
      threshold: 0.85,
      model: "enterprise-v1"
    }
  },
  {
    id: "2",
    name: "Competitor Detection",
    description: "Identify competitor mentions and activities",
    usageCount: 189,
    dataSources: ["Public Forums", "Social Media"],
    team: "Market Intelligence",
    category: "Monitoring",
    configuration: {
      competitors: ["list", "of", "competitors"],
      alertThreshold: 0.75
    }
  }
];

export function useSkills() {
  const [state, setState] = useState<SkillState>({
    skills: mockSkills,
    loading: false,
    error: null
  });

  useEffect(() => {
    // Simulate periodic updates
    const interval = setInterval(() => {
      setState(prev => ({
        ...prev,
        skills: prev.skills.map(skill => ({
          ...skill,
          usageCount: skill.usageCount + Math.floor(Math.random() * 5)
        }))
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return {
    ...state,
    addSkill: (skill: Skill) => {
      setState(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    },
    updateSkill: (id: string, updates: Partial<Skill>) => {
      setState(prev => ({
        ...prev,
        skills: prev.skills.map(skill => 
          skill.id === id ? { ...skill, ...updates } : skill
        )
      }));
    }
  };
}