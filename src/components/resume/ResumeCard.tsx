"use client";

import { useState } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ResumeCard() {
  const [viewOpen, setViewOpen] = useState(false);

  return (
    <PortfolioCard className="p-6 sm:p-8 md:p-10 lg:p-12">
      <div className="relative flex h-full min-h-[70vh] flex-col overflow-hidden rounded-[20px]">
        <div className="ambient-orb ambient-orb-orange -right-24 -top-24" />
        <div className="ambient-orb ambient-orb-purple -bottom-28 -left-24" />

        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Resume</SectionLabel>
            <h2 className="section-heading mt-4">My Resume</h2>
            <p className="body-copy mt-4 max-w-2xl">
              A concise overview of my engineering journey, projects, skills,
              and open-source work.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setViewOpen((value) => !value)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-solid)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:bg-[var(--border)]"
              aria-expanded={viewOpen}
            >
              <FileText size={16} />
              {viewOpen ? "Close Resume" : "View Resume"}
            </button>

            <a
              href="/Jyotish_Kumar_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-8 flex-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] p-2 shadow-inner">
          {viewOpen ? (
            <iframe
              title="Jyotish Kumar Resume"
              src="/Jyotish_Kumar_CV.pdf#view=FitH"
              className="h-[58vh] w-full rounded-xl bg-white"
            />
          ) : (
            <div className="flex min-h-[58vh] flex-col items-center justify-center px-6 py-12 text-center">
              <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] shadow-sm">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-semibold">Ready to view?</h3>
              <p className="body-copy mt-3 max-w-md">
                Open the full one-page CV here, or download it directly as a PDF.
              </p>
              <a
                href="/Jyotish_Kumar_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
              >
                Open PDF in new tab
                <ExternalLink size={15} />
              </a>
            </div>
          )}
        </div>
      </div>
    </PortfolioCard>
  );
}
