import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { experience } from "@/data/experience";

export function ExperienceCard() {
  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="relative z-10">
        <SectionLabel>Experience</SectionLabel>

        <div className="mt-8 max-w-3xl">
          <h2 className="section-heading">
            Work that{" "}
            <span className="gradient-text">shaped me.</span>
          </h2>

          <p className="body-copy mt-6 max-w-2xl text-lg">
            Practical experience building software, solving problems,
            and learning through real projects.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {experience.map((item) => (
            <ExperienceItem
              key={`${item.company}-${item.role}`}
              {...item}
            />
          ))}
        </div>
      </div>
    </PortfolioCard>
  );
}
