import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { leetcodeStats } from "@/data/leetcode";

export function LeetCodeCard() {
  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="relative z-10">
        <SectionLabel>
          LeetCode
        </SectionLabel>

        <div className="mt-8 max-w-3xl">
          <h2 className="section-heading">
            Learning through{" "}
            <span className="gradient-text">
              problems.
            </span>
          </h2>

          <p className="body-copy mt-6 max-w-2xl text-lg">
            {leetcodeStats.focus}.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface-solid)] p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[var(--muted)]">
                LeetCode
              </p>

              <h3 className="mt-1 text-2xl font-semibold">
                @{leetcodeStats.username}
              </h3>
            </div>

            <Badge>
              Problem Solving
            </Badge>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {leetcodeStats.highlights.map((highlight) => (
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
