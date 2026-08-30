import { HeroCard } from "@/components/hero/HeroCard";

export default function Home() {
  return (
    <main>
      <section className="portfolio-section min-h-screen">
        <div className="portfolio-container">
          <HeroCard />
        </div>
      </section>
    </main>
  );
}