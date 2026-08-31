import { contactData } from "@/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-[min(calc(100%-32px),1180px)] pb-10 pt-4">
      <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/60 px-6 py-8 shadow-[0_20px_60px_rgba(17,19,26,0.06)] backdrop-blur-2xl md:px-10 md:py-10">
        <div className="ambient-orb ambient-orb-purple -right-24 -top-28" />
        <div className="ambient-orb ambient-orb-cyan -bottom-32 -left-24" />

        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xl font-semibold tracking-tight text-slate-950">
              Jyotish Kumar.
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Software Engineer · Developer Tools · AI · Open Source
            </p>
          </div>

          <nav
            aria-label="Footer links"
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600"
          >
            <a
              href={`mailto:${contactData.email}`}
              className="transition-opacity hover:opacity-60"
            >
              Email
            </a>

            <a
              href={contactData.github.href}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              GitHub ↗
            </a>

            <a
              href={contactData.linkedin.href}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              LinkedIn ↗
            </a>
          </nav>
        </div>

        <div className="relative z-10 mt-8 border-t border-black/10 pt-6">
          <p className="text-xs tracking-wide text-slate-400">
            © {year} Jyotish Kumar. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
