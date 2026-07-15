import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";


export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}