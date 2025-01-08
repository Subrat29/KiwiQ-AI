import { SkillTestingEnvironment } from "@/components/skills/testing/skill-testing-environment";
import { getSkillIds } from "@/lib/utils/skills";

export function generateStaticParams() {
  return getSkillIds();
}

export default function SkillTestPage({ params }: { params: { id: string }}) {
  return (
    <div className="p-6">
      <SkillTestingEnvironment skillId={params.id} />
    </div>
  );
}