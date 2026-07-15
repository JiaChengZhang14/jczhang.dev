import { Footer } from "@/components/Footer";
import { AiAutomation } from "@/components/sections/ai-automation/AiAutomation";
import { Experience } from "@/components/sections/experience/Experience";
import { Hero } from "@/components/sections/hero/Hero";
import { Skills } from "@/components/sections/skills/Skills";
import { Projects } from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <AiAutomation />
      <Skills />
      <Footer />
    </main>
  );
}