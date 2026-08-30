import { CardStack } from "@/components/cards/CardStack";
import { HeroCard } from "@/components/hero/HeroCard";

export default function Home() {
  return (
    <main>
      <div className="portfolio-container">
        <CardStack>
          <HeroCard />
        </CardStack>
      </div>
    </main>
  );
}