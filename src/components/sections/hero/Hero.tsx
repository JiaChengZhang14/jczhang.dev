import { getTranslations } from "next-intl/server";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TerminalWindow } from "@/components/sections/hero/TerminalWindow";
import { ScrollIndicator } from "./ScrollIndicador";
import { ContactButton } from "./ContactButton";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <SectionWrapper id="hero" className="flex items-center min-h-screen">
      <div className="grid items-center justify-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-sm text-ember">{t("role")}</p>
          <h1 className="font-display text-4xl font-semibold text-paper md:text-5xl">
            {t("name")}
          </h1>
          <h2 className="mt-2 font-display text-xl font-medium text-fog md:text-2xl">
            {t("tagline")}
          </h2>
          <p className="mt-4 max-w-md text-fog">{t("description")}</p>
          <div className="mt-8 flex gap-4">
            <a
              href="https://www.linkedin.com/in/jiacheng-zhang-a69739251/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-ember px-6 py-3 font-medium text-ink transition-colors hover:bg-ember/90"
            >
              {t("ctaCV")}
            </a>
            <ContactButton />
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <TerminalWindow />
        </div>
        <ScrollIndicator />
      </div>
    </SectionWrapper >
  );
}