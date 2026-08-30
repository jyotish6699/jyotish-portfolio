import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EducationItem } from "@/components/education/EducationItem";
import { education } from "@/data/education";

export function EducationCard() {
  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="relative z-10">
        <SectionLabel>Education</SectionLabel>

        <div className="mt-8 max-w-3xl">
          <h2 className="section-heading">
            Where I&apos;ve{" "}
            <span className="gradient-text">learned.</span>
          </h2>

          <p className="body-copy mt-6 max-w-2xl text-lg">
            The academic foundation behind my engineering journey.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {education.map((item) => (
            <EducationItem key={`${item.institution}-${item.degree}`} {...item} />
          ))}
        </div>
      </div>
    </PortfolioCard>
  );
}
