"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Plus, X, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSkills } from "@/hooks/use-skills";
import { SkillConfigPanel } from "@/components/skills/configuration/skill-config-panel";

interface SkillsStepProps {
  formData: any;
  updateFormData: (key: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export function SkillsStep({
  formData,
  updateFormData,
  onNext,
  onBack,
}: SkillsStepProps) {
  const { skills } = useSkills();
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    formData.skills || []
  );
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [skillConfigs, setSkillConfigs] = useState<Record<string, any>>({});

  const handleSkillToggle = (skillId: string) => {
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills((prev) => prev.filter((id) => id !== skillId));
      setExpandedSkill(null);
    } else {
      setSelectedSkills((prev) => [...prev, skillId]);
      setExpandedSkill(skillId);
    }
  };

  const handleConfigChange = (skillId: string, config: Record<string, any>) => {
    setSkillConfigs((prev) => ({
      ...prev,
      [skillId]: config,
    }));
  };

  const handleContinue = () => {
    updateFormData(
      "skills",
      selectedSkills.map((id) => ({
        id,
        config: skillConfigs[id] || {},
      }))
    );
    onNext();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Configure Agent Skills</h2>
        <p
          className="text-gray-700
        "
        >
          Add and configure skills to enhance your agent's capabilities
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card
              className={`
                transition-all
                ${
                  selectedSkills.includes(skill.id)
                    ? "bg-green-400/10 border-green-500/50"
                    : "bg-gradient-to-r from-white to-gray-100/50 border-gray-200 hover:shadow-md transition"
                }
              `}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">{skill.name}</h3>
                  <div className="flex items-center gap-2">
                    {selectedSkills.includes(skill.id) && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-700
                         hover:text-blue-400"
                        onClick={() => setExpandedSkill(skill.id)}
                      >
                        <Settings className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSkillToggle(skill.id)}
                      className="text-gray-600
                       hover:text-gray-800"
                    >
                      {selectedSkills.includes(skill.id) ? (
                        <X className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <p
                  className="text-sm text-gray-700
                 mb-3"
                >
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.dataSources.map((source) => (
                    <Badge
                      key={source}
                      variant="outline"
                      className="bg-transparent border-gray-600"
                    >
                      {source}
                    </Badge>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {selectedSkills.includes(skill.id) &&
                  expandedSkill === skill.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-700"
                    >
                      <SkillConfigPanel
                        skill={skill}
                        onConfigChange={(config) =>
                          handleConfigChange(skill.id, config)
                        }
                      />
                    </motion.div>
                  )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={selectedSkills.length === 0}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
