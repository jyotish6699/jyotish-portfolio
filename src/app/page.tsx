import { CardStack } from "@/components/cards/CardStack";
import { AboutCard } from "@/components/about/AboutCard";
import { HeroCard } from "@/components/hero/HeroCard";

export default function Home() {
  return (
    <main>
      <div className="portfolio-container">
        <CardStack>
          <HeroCard />
          <AboutCard />
        </CardStack>
      </div>
    </main>
  );
}