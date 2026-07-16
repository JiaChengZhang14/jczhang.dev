import { SectionWrapper } from "@/components/SectionWrapper";
import { TerminalWindow } from "@/components/sections/hero/TerminalWindow";
import { ScrollIndicator } from "./ScrollIndicador";
import { ContactButton } from "./ContactButton";

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
            Specializing in integrating AI solutions into existing products: workflow automation, LLM-powered features, and architectures that seamlessly bridge frontend, backend, and artificial intelligence.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="rounded-md bg-ember px-6 py-3 font-medium text-ink transition-colors hover:bg-ember/90"
            >
              Check my CV !
            </a>

            <ContactButton />
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <TerminalWindow />
        </div>
        <ScrollIndicator />
      </div>
    </SectionWrapper>
  );
}