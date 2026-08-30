export type OpenSourceAchievement = {
  year: number;
  program: string;
  globalRank: number;
  ranking: string;
  tier: string;
  score: number;
  mergedPRs: number;
  projects: number;
  badges: number;
  status: "Completed";
};

export const gssocAchievement: OpenSourceAchievement = {
  year: 2026,
  program: "GSSoC",
  globalRank: 136,
  ranking: "Top 1%",
  tier: "A Tier",
  score: 23281,
  mergedPRs: 26,
  projects: 6,
  badges: 13,
  status: "Completed",
};
