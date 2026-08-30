import { AboutCard } from "@/components/about/AboutCard";
import { CardStack } from "@/components/cards/CardStack";
import { HeroCard } from "@/components/hero/HeroCard";
import { SkillsCard } from "@/components/skills/SkillsCard";

export default function Home() {
  return (
    <main>
      <div className="portfolio-container">
        <CardStack>
          <HeroCard />
          <AboutCard />
          <SkillsCard />
        </CardStack>
      </div>
    </main>
  );
}