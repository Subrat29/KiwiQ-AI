"use client";

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";

interface AlertConfig {
  email: boolean;
  slack: boolean;
  emailAddress: string;
  slackChannel: string;
}

interface AlertConfigProps {
  config: AlertConfig;
  onConfigChange: (config: AlertConfig) => void;
}

export function AlertConfig({ config, onConfigChange }: AlertConfigProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <div className="flex items-center gap-3 mb-6">
        <Bell className="w-5 h-5 text-blue-400" />
        <h3 className="font-medium">Alert Settings</h3>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium mb-1">Email Alerts</div>
            <div className="text-sm text-gray-600">Get notified via email</div>
          </div>
          <Switch
            checked={config.email}
            onCheckedChange={(checked) => 
              onConfigChange({ ...config, email: checked })
            }
          />
        </div>

        {config.email && (
          <Input
            value={config.emailAddress}
            onChange={(e) => onConfigChange({ ...config, emailAddress: e.target.value })}
            placeholder="Email address"
            className="bg-slate-900/50 border-slate-700"
          />
        )}

        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium mb-1">Slack Notifications</div>
            <div className="text-sm text-gray-600">Get notified in Slack</div>
          </div>
          <Switch
            checked={config.slack}
            onCheckedChange={(checked) => 
              onConfigChange({ ...config, slack: checked })
            }
          />
        </div>

        {config.slack && (
          <Input
            value={config.slackChannel}
            onChange={(e) => onConfigChange({ ...config, slackChannel: e.target.value })}
            placeholder="Slack channel (e.g., #alerts)"
            className="bg-slate-900/50 border-slate-700"
          />
        )}
      </div>
    </Card>
  );
}