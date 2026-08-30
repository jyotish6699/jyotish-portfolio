import { Badge } from "@/components/ui/Badge";

type SkillGroupProps = {
  title: string;
  skills: string[];
};

export function SkillGroup({
  title,
  skills,
}: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-5">
      <p className="text-sm font-semibold text-[var(--muted)]">
        {title}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} className="px-3 py-1.5 text-xs">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
