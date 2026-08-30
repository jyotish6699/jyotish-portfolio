"use client";

import { useState } from "react";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { gssocAchievement } from "@/data/open-source";

export function OpenSourceCard() {
  const [showDetails, setShowDetails] = useState(false);

  const stats = [
    {
      label: "Global Rank",
      value: `#${gssocAchievement.globalRank}`,
    },
    {
      label: "Ranking",
      value: gssocAchievement.ranking,
    },
    {
      label: "Score",
      value: gssocAchievement.score.toLocaleString(),
    },
    {
      label: "Merged PRs",
      value: gssocAchievement.mergedPRs.toString(),
    },
    {
      label: "Projects",
      value: gssocAchievement.projects.toString(),
    },
    {
      label: "Badges",
      value: gssocAchievement.badges.toString(),
    },
  ];

  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="relative z-10">
        <SectionLabel>Open Source</SectionLabel>

        <div className="mt-8 max-w-4xl">
          <h2 className="section-heading">
            Building in{" "}
            <span className="gradient-text">the open.</span>
          </h2>

          <p className="body-copy mt-6 max-w-2xl text-lg">
            Contributing to open source, learning from real projects,
            and growing through collaboration with the developer community.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-white/70">
          <div className="border-b border-black/10 p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                  {gssocAchievement.year}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <h3 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                    {gssocAchievement.program} 2026
                  </h3>

                  <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-sm font-semibold text-[var(--accent)]">
                    {gssocAchievement.status}
                  </span>
                </div>

                <p className="mt-3 text-lg text-slate-500">
                  GirlScript Summer of Code
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 px-5 py-4 md:min-w-[180px]">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                  Tier
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-950">
                  {gssocAchievement.tier}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {gssocAchievement.ranking}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/80 p-5 md:p-6"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  {stat.label}
                </p>

                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-black/10 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="font-medium text-slate-950">
                26 merged contributions across 6 projects.
              </p>

              <p className="mt-1 text-sm text-slate-500">
                A milestone in my open-source journey.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowDetails((current) => !current)}
              aria-expanded={showDetails}
              className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-black/20 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
            >
              {showDetails
                ? "Hide Contributions"
                : "View Contributions"}
            </button>
          </div>

          {showDetails && (
            <div className="border-t border-black/10 bg-slate-50/70 p-6 md:p-8">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                  Contribution Snapshot
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  A focused open-source milestone.
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Completed GSSoC 2026 with an A Tier ranking,
                  Global Rank #{gssocAchievement.globalRank}, a score
                  of {gssocAchievement.score.toLocaleString()}, and{" "}
                  {gssocAchievement.mergedPRs} merged pull requests
                  across {gssocAchievement.projects} projects.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Global Rank
                    </p>

                    <p className="mt-2 text-xl font-semibold">
                      #{gssocAchievement.globalRank}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Score
                    </p>

                    <p className="mt-2 text-xl font-semibold">
                      {gssocAchievement.score.toLocaleString()}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      Badges
                    </p>

                    <p className="mt-2 text-xl font-semibold">
                      {gssocAchievement.badges}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PortfolioCard>
  );
}