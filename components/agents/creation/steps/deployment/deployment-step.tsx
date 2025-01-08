"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { ScheduleConfig } from "./schedule-config";
import { AlertConfig } from "./alert-config";
import { useRouter } from "next/navigation";

interface DeploymentStepProps {
  formData: any;
  onBack: () => void;
}

export function DeploymentStep({ formData, onBack }: DeploymentStepProps) {
  const router = useRouter();
  const [isDeploying, setIsDeploying] = useState(false);
  const [config, setConfig] = useState({
    frequency: "hourly",
    alerts: {
      email: false,
      slack: false,
      emailAddress: "",
      slackChannel: ""
    }
  });

  const handleDeploy = async () => {
    setIsDeploying(true);
    // Simulate deployment
    await new Promise(resolve => setTimeout(resolve, 2000));
    router.push("/agents");
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Configure Deployment</h2>
        <p className="text-gray-600">Set up your agent's schedule and notifications</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ScheduleConfig
            frequency={config.frequency}
            onFrequencyChange={(value) => setConfig(prev => ({ ...prev, frequency: value }))}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <AlertConfig
            config={config.alerts}
            onConfigChange={(alerts) => setConfig(prev => ({ ...prev, alerts }))}
          />
        </motion.div>
      </div>

      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-600 hover:text-gray-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleDeploy}
          disabled={isDeploying}
          className="bg-blue-500 hover:bg-blue-600"
        >
          <Rocket className="w-4 h-4 mr-2" />
          {isDeploying ? "Deploying..." : "Deploy Agent"}
        </Button>
      </div>
    </div>
  );
}