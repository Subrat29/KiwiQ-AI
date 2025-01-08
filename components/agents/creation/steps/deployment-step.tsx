"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Bell } from "lucide-react";

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
      slackChannel: "",
    },
  });

  const handleDeploy = async () => {
    setIsDeploying(true);
    // Simulate deployment
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push("/agents");
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Configure Deployment</h2>
        <p className="text-gray-700">
          Set up your agent's schedule and notifications
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-green-600" />
              <h3 className="font-medium">Update Schedule</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-700">
                  Update Frequency
                </label>
                <Select
                  value={config.frequency}
                  onValueChange={(value) =>
                    setConfig((prev) => ({ ...prev, frequency: value }))
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="realtime">Real-time</SelectItem>
                      <SelectItem value="hourly">Every hour</SelectItem>
                      <SelectItem value="6hours">Every 6 hours</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-5 h-5 text-green-600" />
              <h3 className="font-medium">Alert Settings</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium mb-1">Email Alerts</div>
                  <div className="text-sm text-gray-700">
                    Get notified via email
                  </div>
                </div>
                <Switch
                  checked={config.alerts.email}
                  onCheckedChange={(checked) =>
                    setConfig((prev) => ({
                      ...prev,
                      alerts: { ...prev.alerts, email: checked },
                    }))
                  }
                />
              </div>

              {config.alerts.email && (
                <Input
                  value={config.alerts.emailAddress}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      alerts: { ...prev.alerts, emailAddress: e.target.value },
                    }))
                  }
                  placeholder="Email address"
                  className="bg-transparent border-gray-200"
                />
              )}

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium mb-1">Slack Notifications</div>
                  <div className="text-sm text-gray-700">
                    Get notified in Slack
                  </div>
                </div>
                <Switch
                  checked={config.alerts.slack}
                  onCheckedChange={(checked) =>
                    setConfig((prev) => ({
                      ...prev,
                      alerts: { ...prev.alerts, slack: checked },
                    }))
                  }
                />
              </div>

              {config.alerts.slack && (
                <Input
                  value={config.alerts.slackChannel}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      alerts: { ...prev.alerts, slackChannel: e.target.value },
                    }))
                  }
                  placeholder="Slack channel (e.g., #alerts)"
                  className="bg-transparent border-gray-200"
                />
              )}
            </div>
          </Card>
        </motion.div>
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
