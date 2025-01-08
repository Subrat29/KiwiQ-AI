import { SkillTestingEnvironment } from "@/components/skills/testing/skill-testing-environment";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ];
}

export default function SkillTestPage({ params }: { params: { id: string }}) {
  return (
    <div className="p-6">
      <SkillTestingEnvironment skillId={params.id} />
    </div>
  );
}