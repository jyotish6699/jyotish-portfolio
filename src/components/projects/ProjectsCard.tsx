import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectItem } from "@/components/projects/ProjectItem";
import { projects } from "@/data/projects";

export function ProjectsCard() {
  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="relative z-10">
        <SectionLabel>
          Projects
        </SectionLabel>

        <div className="mt-8 max-w-3xl">
          <h2 className="section-heading">
            Things I&apos;ve{" "}
            <span className="gradient-text">
              built.
            </span>
          </h2>

          <p className="body-copy mt-6 max-w-2xl text-lg">
            A selection of projects where I turn ideas into
            working software.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {projects.map((project) => (
            <ProjectItem
              key={project.name}
              {...project}
            />
          ))}
        </div>
      </div>
    </PortfolioCard>
  );
}
