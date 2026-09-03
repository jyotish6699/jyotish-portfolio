import Image from "next/image";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HeroCard() {
  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="ambient-orb ambient-orb-purple -right-20 -top-20" />

      <div className="ambient-orb ambient-orb-cyan -bottom-32 -left-20" />

      <div className="relative z-10 flex min-h-[60vh] flex-col justify-center">
        <div className="flex flex-col-reverse items-center gap-10 md:grid md:grid-cols-[minmax(0,1fr)_220px] md:items-center md:gap-12">
          <div>
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

          <div className="relative order-first flex w-full justify-center md:order-none">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border border-[var(--border-strong)] bg-[var(--surface-solid)] shadow-[0_20px_50px_rgba(17,19,26,0.12)] md:h-52 md:w-52">
              <Image
                src="/profile.jpg"
                alt="Jyotish Kumar"
                fill
                priority
                sizes="(max-width: 768px) 192px, 208px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </PortfolioCard>
  );
}
