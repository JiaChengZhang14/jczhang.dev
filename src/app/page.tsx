import { Footer } from "@/components/Footer";
import { AiAutomation } from "@/components/sections/ai-automation/AiAutomation";
import { Experience } from "@/components/sections/experience/Experience";
import { Hero } from "@/components/sections/hero/Hero";
import { Skills } from "@/components/sections/skills/Skills";
import { Projects } from "@/components/sections/projects/Projects";
import { Contact } from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <AiAutomation />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}