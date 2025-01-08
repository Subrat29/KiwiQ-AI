"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Database, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { availableDataSources } from "@/lib/data/data-sources";

interface DataSourcesStepProps {
  formData: any;
  updateFormData: (key: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export function DataSourcesStep({ formData, updateFormData, onNext, onBack }: DataSourcesStepProps) {
  const [selectedSources, setSelectedSources] = useState<string[]>(formData.dataSources || []);

  const handleSourceToggle = (sourceId: string) => {
    setSelectedSources(prev => 
      prev.includes(sourceId) 
        ? prev.filter(id => id !== sourceId)
        : [...prev, sourceId]
    );
  };

  const handleContinue = () => {
    updateFormData("dataSources", selectedSources);
    onNext();
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Connect Data Sources</h2>
        <p className="text-gray-700">Select the data sources your agent will analyze</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {availableDataSources.map((source, i) => (
          <motion.div
            key={source.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card 
              className={`
                p-4 cursor-pointer transition-all
                ${selectedSources.includes(source.id)
                  ? 'bg-green-400/10 border-green-500/50' 
                  : 'bg-gradient-to-r from-white to-gray-100/50 border-gray-200 hover:shadow-md transition'}
              `}
              onClick={() => handleSourceToggle(source.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-gray-800" />
                  <h3 className="font-medium">{source.name}</h3>
                </div>
                {selectedSources.includes(source.id) && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
              </div>
              <p className="text-sm text-gray-700 mb-3">{source.description}</p>
              <div className="flex flex-wrap gap-2">
                {source.features.map((feature) => (
                  <Badge
                    key={feature}
                    variant="outline"
                    className="bg-transparent border-gray-600"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
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
          disabled={selectedSources.length === 0}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Continue
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}