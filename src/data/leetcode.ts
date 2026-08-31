export const leetcodeConfig = {
  username: "Sx5pUQ256W",
  profileUrl: "https://leetcode.com/u/Sx5pUQ256W/",
  focus: "Data structures, algorithms, and consistent problem solving.",
  highlights: [
    "Array & string patterns",
    "Sliding window",
    "Hashing",
    "Problem solving",
  ],
} as const;

export type LeetCodeStats = {
  totalSolved: number | null;
  easySolved: number | null;
  mediumSolved: number | null;
  hardSolved: number | null;
  ranking: number | null;
  currentStreak: number | null;
  activeDays: number | null;
};

export const emptyLeetCodeStats: LeetCodeStats = {
  totalSolved: null,
  easySolved: null,
  mediumSolved: null,
  hardSolved: null,
  ranking: null,
  currentStreak: null,
  activeDays: null,
};