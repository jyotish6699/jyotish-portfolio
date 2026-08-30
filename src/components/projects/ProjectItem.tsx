import { Badge } from "@/components/ui/Badge";

type ProjectItemProps = {
  name: string;
  type: string;
  description: string;
  technologies: string[];
  featured?: boolean;
};

export function ProjectItem({
  name,
  type,
  description,
  technologies,
  featured = false,
}: ProjectItemProps) {
  return (
    <article className="group rounded-3xl border border-[var(--border)] bg-[var(--surface-solid)] p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            {type}
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            {name}
          </h3>
        </div>

        {featured && (
          <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold">
            Featured
          </span>
        )}
      </div>

      <p className="body-copy mt-5 max-w-2xl">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <Badge
            key={technology}
            className="px-3 py-1.5 text-xs"
          >
            {technology}
          </Badge>
        ))}
      </div>
    </article>
  );
}
