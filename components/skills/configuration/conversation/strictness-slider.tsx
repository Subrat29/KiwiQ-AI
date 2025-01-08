"use client";

import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface StrictnessSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function StrictnessSlider({ value, onChange }: StrictnessSliderProps) {
  const getLabel = (value: number) => {
    if (value <= 0.33) return "Inclusive";
    if (value <= 0.66) return "Balanced";
    return "Strict";
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <h3 className="text-lg font-medium mb-4">How strict should we be?</h3>
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Inclusive</span>
            <span>Balanced</span>
            <span>Strict</span>
          </div>
          <Slider
            value={[value * 100]}
            onValueChange={([val]) => onChange(val / 100)}
            min={0}
            max={100}
            step={1}
            className="my-4"
          />
          <div className="text-center">
            <div className="text-lg font-medium text-blue-400">{getLabel(value)}</div>
            <p className="text-sm text-gray-600 mt-1">
              {value <= 0.33
                ? "Catch more signals with lower confidence"
                : value <= 0.66
                ? "Balance between accuracy and coverage"
                : "Focus on high-confidence signals only"}
            </p>
          </div>
        </div>

        <div className="bg-slate-900/50 p-4 rounded-lg">
          <h4 className="text-sm font-medium mb-2">Preview</h4>
          <div className="text-sm text-gray-600">
            {value <= 0.33 && "Will catch ~80% of signals with 70%+ confidence"}
            {value > 0.33 && value <= 0.66 && "Will catch ~60% of signals with 85%+ confidence"}
            {value > 0.66 && "Will catch ~40% of signals with 95%+ confidence"}
          </div>
        </div>
      </div>
    </Card>
  );
}