import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactData } from "@/data/contact";

export function ContactCard() {
  return (
    <PortfolioCard className="p-8 md:p-12 lg:p-16">
      <div className="ambient-orb ambient-orb-purple -right-24 -top-24" />

      <div className="ambient-orb ambient-orb-cyan -bottom-32 -left-24" />

      <div className="relative z-10">
        <SectionLabel>CONTACT</SectionLabel>

        <h2 className="display-heading mt-6 max-w-4xl">
          Let&apos;s build something{" "}
          <span className="gradient-text">meaningful.</span>
        </h2>

        <p className="body-copy mt-8 max-w-2xl text-lg md:text-xl">
          I&apos;m always interested in building useful software,
          contributing to open source, and connecting with people
          who enjoy solving interesting problems.
        </p>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur-sm md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Get in touch
          </p>

          <a
            href={`mailto:${contactData.email}`}
            className="mt-4 block break-all text-xl font-semibold text-slate-950 transition-opacity hover:opacity-60 md:text-2xl"
          >
            {contactData.email}
          </a>

          <p className="body-copy mt-4 max-w-xl">
            {contactData.availability}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <a
            href={contactData.github.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-black/10 bg-white/70 p-6 transition-transform hover:-translate-y-1"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              GitHub
            </p>

            <p className="mt-3 text-xl font-semibold text-slate-950">
              {contactData.github.label} ↗
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Explore my projects and open-source work.
            </p>
          </a>

          <a
            href={contactData.linkedin.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-black/10 bg-white/70 p-6 transition-transform hover:-translate-y-1"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              LinkedIn
            </p>

            <p className="mt-3 text-xl font-semibold text-slate-950">
              {contactData.linkedin.label} ↗
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Connect with me professionally.
            </p>
          </a>
        </div>
      </div>
    </PortfolioCard>
  );
}
