import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HeroCard() {
  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="ambient-orb ambient-orb-purple -right-20 -top-20" />
      <div className="ambient-orb ambient-orb-cyan -bottom-32 -left-20" />

      <div className="relative z-10 flex min-h-[60vh] flex-col justify-center">
        <SectionLabel>Software Engineer</SectionLabel>

        <div className="mt-6 grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_220px] md:gap-12 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div className="order-2 md:order-1">
            <h1 className="display-heading max-w-5xl">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Jyotish Kumar.</span>
            </h1>

            <p className="body-copy mt-8 max-w-2xl text-lg md:text-xl">
              B.Tech CSE student at Lovely Professional University,
              building software, exploring developer tools, backend
              systems, AI, and open source.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Badge>Software Engineering</Badge>
              <Badge>Developer Tools</Badge>
              <Badge>AI</Badge>
              <Badge>Open Source</Badge>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:-translate-x-5 md:-translate-y-6 lg:-translate-x-7">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border border-[var(--border-strong)] bg-[var(--surface-solid)] shadow-[0_20px_50px_rgba(17,19,26,0.12)] md:h-52 md:w-52 lg:h-56 lg:w-56">
              <img
                src="/profile.jpeg"
                alt="Jyotish Kumar"
                className="h-full w-full scale-110 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </PortfolioCard>
  );
}
