import { SkillConfigWorkflow } from "@/components/skills/configuration/workflow/skill-config-workflow";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ];
}

export default function SkillConfigPage({ params }: { params: { id: string }}) {
  return (
    <div className="p-6">
      <SkillConfigWorkflow skillId={params.id} />
    </div>
  );
}