import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { githubStats } from "@/data/github";

export function GitHubCard() {
  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="relative z-10">
        <SectionLabel>
          GitHub
        </SectionLabel>

        <div className="mt-8 max-w-3xl">
          <h2 className="section-heading">
            Building in{" "}
            <span className="gradient-text">
              public.
            </span>
          </h2>

          <p className="body-copy mt-6 max-w-2xl text-lg">
            {githubStats.focus}.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface-solid)] p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[var(--muted)]">
                GitHub
              </p>

              <h3 className="mt-1 text-2xl font-semibold">
                @{githubStats.username}
              </h3>
            </div>

            <Badge>
              Open Source
            </Badge>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {githubStats.highlights.map((highlight) => (
              <Badge key={highlight}>
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </PortfolioCard>
  );
}
