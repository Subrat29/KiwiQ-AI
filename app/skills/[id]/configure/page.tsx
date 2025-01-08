import { SkillConfigWorkflow } from "@/components/skills/configuration/workflow/skill-config-workflow";
import { getSkillIds } from "@/lib/utils/skills";

export function generateStaticParams() {
  return getSkillIds();
}

export default function SkillConfigPage({ params }: { params: { id: string }}) {
  return (
    <div className="p-6">
      <SkillConfigWorkflow skillId={params.id} />
    </div>
  );
}