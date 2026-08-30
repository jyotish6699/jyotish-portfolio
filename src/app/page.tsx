import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function Home() {
  return (
    <main>
      <section className="portfolio-section min-h-screen">
        <div className="portfolio-container">
          <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
            <div className="ambient-orb ambient-orb-purple -right-20 -top-20" />

            <div className="ambient-orb ambient-orb-cyan -bottom-32 -left-20" />

            <div className="relative z-10 flex min-h-[60vh] flex-col justify-center">
              <SectionLabel>
                Software Engineer
              </SectionLabel>

              <h1 className="display-heading mt-6 max-w-5xl">
                Hi, I&apos;m{" "}
                <span className="gradient-text">
                  Jyotish Kumar.
                </span>
              </h1>

              <p className="body-copy mt-8 max-w-2xl text-lg md:text-xl">
                B.Tech CSE student at Lovely Professional University,
                building software, exploring developer tools, backend
                systems, AI, and open source.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Badge>
                  Software Engineering
                </Badge>

                <Badge>
                  Developer Tools
                </Badge>

                <Badge>
                  AI
                </Badge>

                <Badge>
                  Open Source
                </Badge>
              </div>
            </div>
          </PortfolioCard>
        </div>
      </section>
    </main>
  );
}