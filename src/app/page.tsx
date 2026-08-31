import { AboutCard } from "@/components/about/AboutCard";
import { CardStack } from "@/components/cards/CardStack";
import { ContactCard } from "@/components/contact/ContactCard";
import { EducationCard } from "@/components/education/EducationCard";
import { Footer } from "@/components/footer/Footer";
import { GitHubCard } from "@/components/github/GitHubCard";
import { HeroCard } from "@/components/hero/HeroCard";
import { LeetCodeCard } from "@/components/leetcode/LeetCodeCard";
import { Navbar } from "@/components/navbar/Navbar";
import { OpenSourceCard } from "@/components/open-source/OpenSourceCard";
import { ProjectsCard } from "@/components/projects/ProjectsCard";
import { SkillsCard } from "@/components/skills/SkillsCard";
import TerminalCard from "@/components/terminal/TerminalCard";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="portfolio-container">
        <CardStack>
          <section id="home">
            <HeroCard />
          </section>

          <section id="about">
            <AboutCard />
          </section>

          <section id="skills">
            <SkillsCard />
          </section>

          <section id="projects">
            <ProjectsCard />
          </section>

          <section id="opensource">
            <OpenSourceCard />
          </section>

          <section id="github">
            <GitHubCard />
          </section>

          <section id="leetcode">
            <LeetCodeCard />
          </section>

          <section id="terminal">
            <TerminalCard />
          </section>

          <section id="education">
            <EducationCard />
          </section>

          <section id="contact">
            <ContactCard />
          </section>
        </CardStack>

        <Footer />
      </div>
    </main>
  );
}