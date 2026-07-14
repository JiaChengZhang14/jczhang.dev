import { SectionWrapper } from "@/components/SectionWrapper";
import { TerminalWindow } from "@/components/sections/hero/TerminalWindow";

export function Hero() {
  return (
    <SectionWrapper id="hero" className="flex items-center min-h-screen">
      <div className="grid items-center justify-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-sm text-ember">
            {"// FullStack Developer"}
          </p>
          <h1 className="font-display text-4xl font-semibold text-paper md:text-5xl">
            JiaCheng Zhang
          </h1>
          <h2 className="mt-2 font-display text-xl font-medium text-fog md:text-2xl">
            Full-stack developer building AI-powered products
          </h2>
          <p className="mt-4 max-w-md text-fog">
            Especializado en integrar soluciones de IA en productos existentes: automatización de workflows, features con LLMs, y arquitecturas que combinan frontend, backend e inteligencia artificial.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-md bg-ember px-6 py-3 font-medium text-ink transition-colors hover:bg-ember/90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-md border border-signal px-6 py-3 font-medium text-paper transition-colors hover:bg-signal/10 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <TerminalWindow />
        </div>
      </div>
    </SectionWrapper>
  );
}