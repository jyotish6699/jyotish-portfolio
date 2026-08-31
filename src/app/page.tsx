import { AboutCard } from "@/components/about/AboutCard";
import { CardStack } from "@/components/cards/CardStack";
import { ContactCard } from "@/components/contact/ContactCard";
import { EducationCard } from "@/components/education/EducationCard";
import { Footer } from "@/components/footer/Footer";
import { GitHubCard } from "@/components/github/GitHubCard";
import { HeroCard } from "@/components/hero/HeroCard";
import { LeetCodeCard } from "@/components/leetcode/LeetCodeCard";
import { OpenSourceCard } from "@/components/open-source/OpenSourceCard";
import { ProjectsCard } from "@/components/projects/ProjectsCard";
import { SkillsCard } from "@/components/skills/SkillsCard";
import TerminalCard from "@/components/terminal/TerminalCard";

export default function Home() {
  return (
    <main>
      <div className="portfolio-container">
        <CardStack>
          <HeroCard />
          <AboutCard />
          <SkillsCard />
          <ProjectsCard />
          <OpenSourceCard />
          <GitHubCard />
          <LeetCodeCard />
          <TerminalCard />
          <EducationCard />
          <ContactCard />
        </CardStack>

        <Footer />
      </div>
    </main>
  );
}