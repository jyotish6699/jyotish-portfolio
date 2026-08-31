import Link from "next/link";

import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  emptyLeetCodeStats,
  leetcodeConfig,
  type LeetCodeStats,
} from "@/data/leetcode";

const LEETCODE_QUERY = `
  query userProfile($username: String!) {
    matchedUser(username: $username) {
      profile {
        ranking
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      submissionCalendar
    }
  }
`;

type LeetCodeResponse = {
  data?: {
    matchedUser?: {
      profile?: {
        ranking?: number | null;
      } | null;
      submitStatsGlobal?: {
        acSubmissionNum?: Array<{
          difficulty: string;
          count: number;
        }>;
      } | null;
      submissionCalendar?: string | null;
    } | null;
  };
  errors?: Array<{
    message?: string;
  }>;
};

function getSubmissionCount(
  submissions:
    | Array<{
        difficulty: string;
        count: number;
      }>
    | undefined,
  difficulty: string,
) {
  return (
    submissions?.find((item) => item.difficulty === difficulty)?.count ?? null
  );
}

function calculateActivityStats(calendar: string | null | undefined) {
  if (!calendar) {
    return {
      currentStreak: null,
      activeDays: null,
    };
  }

  try {
    const parsed = JSON.parse(calendar) as Record<string, number>;

    const activeDates = Object.entries(parsed)
      .filter(([, count]) => count > 0)
      .map(([timestamp]) => {
        const date = new Date(Number(timestamp) * 1000);

        return date.toISOString().slice(0, 10);
      });

    const uniqueDates = [...new Set(activeDates)].sort();

    if (uniqueDates.length === 0) {
      return {
        currentStreak: 0,
        activeDays: 0,
      };
    }

    const activeDateSet = new Set(uniqueDates);

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    const todayKey = today.toISOString().slice(0, 10);

    const yesterday = new Date(today);
    yesterday.setUTCDate(yesterday.getUTCDate() - 1);

    const yesterdayKey = yesterday.toISOString().slice(0, 10);

    let streak = 0;
    let cursor: Date;

    if (activeDateSet.has(todayKey)) {
      cursor = today;
    } else if (activeDateSet.has(yesterdayKey)) {
      cursor = yesterday;
    } else {
      return {
        currentStreak: 0,
        activeDays: uniqueDates.length,
      };
    }

    while (activeDateSet.has(cursor.toISOString().slice(0, 10))) {
      streak += 1;

      cursor = new Date(cursor);
      cursor.setUTCDate(cursor.getUTCDate() - 1);
    }

    return {
      currentStreak: streak,
      activeDays: uniqueDates.length,
    };
  } catch {
    return {
      currentStreak: null,
      activeDays: null,
    };
  }
}

async function getLeetCodeStats(): Promise<LeetCodeStats> {
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        query: LEETCODE_QUERY,
        variables: {
          username: leetcodeConfig.username,
        },
      }),
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return emptyLeetCodeStats;
    }

    const result = (await response.json()) as LeetCodeResponse;

    const user = result.data?.matchedUser;

    if (!user) {
      return emptyLeetCodeStats;
    }

    const submissions = user.submitStatsGlobal?.acSubmissionNum;

    const activity = calculateActivityStats(user.submissionCalendar);

    return {
      totalSolved: getSubmissionCount(submissions, "All"),
      easySolved: getSubmissionCount(submissions, "Easy"),
      mediumSolved: getSubmissionCount(submissions, "Medium"),
      hardSolved: getSubmissionCount(submissions, "Hard"),
      ranking: user.profile?.ranking ?? null,
      currentStreak: activity.currentStreak,
      activeDays: activity.activeDays,
    };
  } catch {
    return emptyLeetCodeStats;
  }
}

function formatNumber(value: number | null) {
  if (value === null) {
    return "—";
  }

  return new Intl.NumberFormat("en-US").format(value);
}

function StatCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description?: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </p>

      <p className="mt-3 text-3xl font-semibold tracking-tight">
        {value}
      </p>

      {description ? (
        <p className="mt-1 text-sm text-[var(--muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export async function LeetCodeCard() {
  const stats = await getLeetCodeStats();

  const liveDataAvailable = stats.totalSolved !== null;

  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="relative z-10">
        <SectionLabel>LeetCode</SectionLabel>

        <div className="mt-8 max-w-4xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-heading">
                Learning through{" "}
                <span className="gradient-text">
                  problems.
                </span>
              </h2>

              <p className="body-copy mt-6 max-w-2xl text-lg">
                {leetcodeConfig.focus}
              </p>
            </div>

            <Badge>
              {liveDataAvailable ? "Live public data" : "Profile available"}
            </Badge>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface-solid)] p-6 md:p-8">
          <div className="flex flex-col gap-5 border-b border-[var(--border)] pb-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-[var(--muted)]">
                LeetCode profile
              </p>

              <h3 className="mt-1 text-2xl font-semibold">
                @{leetcodeConfig.username}
              </h3>
            </div>

            <Link
              href={leetcodeConfig.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-[var(--foreground)]"
            >
              View Profile ↗
            </Link>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Solved"
              value={formatNumber(stats.totalSolved)}
              description="Total accepted problems"
            />

            <StatCard
              label="Easy"
              value={formatNumber(stats.easySolved)}
              description="Solved"
            />

            <StatCard
              label="Medium"
              value={formatNumber(stats.mediumSolved)}
              description="Solved"
            />

            <StatCard
              label="Hard"
              value={formatNumber(stats.hardSolved)}
              description="Solved"
            />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <StatCard
              label="Global rank"
              value={formatNumber(stats.ranking)}
              description="Current profile ranking"
            />

            <StatCard
              label="Streak"
              value={
                stats.currentStreak === null
                  ? "—"
                  : `${stats.currentStreak} day${
                      stats.currentStreak === 1 ? "" : "s"
                    }`
              }
              description="Current activity streak"
            />

            <StatCard
              label="Active days"
              value={formatNumber(stats.activeDays)}
              description="Days with submissions"
            />
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Current focus
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {leetcodeConfig.highlights.map((highlight) => (
                <Badge key={highlight}>
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          {!liveDataAvailable ? (
            <p className="mt-6 text-sm text-[var(--muted)]">
              Live statistics are temporarily unavailable. The profile link
              remains available and the section will automatically recover
              when public LeetCode data is reachable again.
            </p>
          ) : null}
        </div>
      </div>
    </PortfolioCard>
  );
}