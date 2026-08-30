import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutCard() {
  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="relative z-10 flex min-h-[60vh] flex-col justify-center">
        <SectionLabel>
          About
        </SectionLabel>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <h2 className="section-heading max-w-3xl">
              Building, learning,
              <span className="gradient-text"> growing.</span>
            </h2>

            <p className="body-copy mt-7 max-w-2xl text-lg">
              I&apos;m a B.Tech CSE student focused on becoming a
              strong software engineer through real projects,
              open-source contributions, and consistent problem
              solving.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <Badge>
              B.Tech CSE
            </Badge>

            <Badge>
              LPU · 2025 — 2029
            </Badge>

            <Badge>
              Currently in Semester 3
            </Badge>

            <Badge>
              Open Source Contributor
            </Badge>
          </div>
        </div>
      </div>
    </PortfolioCard>
  );
}
