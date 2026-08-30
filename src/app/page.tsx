import { AboutCard } from "@/components/about/AboutCard";
import { CardStack } from "@/components/cards/CardStack";
import { GitHubCard } from "@/components/github/GitHubCard";
import { HeroCard } from "@/components/hero/HeroCard";
import { LeetCodeCard } from "@/components/leetcode/LeetCodeCard";
import { ProjectsCard } from "@/components/projects/ProjectsCard";
import { SkillsCard } from "@/components/skills/SkillsCard";

export default function Home() {
  return (
    <main>
      <div className="portfolio-container">
        <CardStack>
          <HeroCard />
          <AboutCard />
          <SkillsCard />
          <ProjectsCard />
          <GitHubCard />
          <LeetCodeCard />
        </CardStack>
      </div>
    </main>
  );
}