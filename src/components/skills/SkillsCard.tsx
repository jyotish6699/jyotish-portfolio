import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SkillGroup } from "@/components/skills/SkillGroup";
import { skillGroups } from "@/data/skills";

export function SkillsCard() {
  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="relative z-10">
        <SectionLabel>
          Skills
        </SectionLabel>

        <div className="mt-8 max-w-3xl">
          <h2 className="section-heading">
            Tools I use to{" "}
            <span className="gradient-text">
              build.
            </span>
          </h2>

          <p className="body-copy mt-6 max-w-2xl text-lg">
            A growing toolkit shaped by projects, open source,
            problem solving, and continuous learning.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.title}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </PortfolioCard>
  );
}
