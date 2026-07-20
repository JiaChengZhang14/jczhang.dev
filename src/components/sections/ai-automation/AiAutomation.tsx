import { getTranslations, getLocale } from "next-intl/server";
import { SectionWrapper } from "@/components/SectionWrapper";
import { AI_EXPERIMENTS } from "@/data/ai-experiments";
import { cn } from "@/lib/utils";

export async function AiAutomation() {
    const t = await getTranslations("aiAutomation");
    const locale = (await getLocale()) as "en" | "es";
    const experiments = AI_EXPERIMENTS[locale];

    const STATUS_LABEL: Record<string, string> = {
        shipped: t("status.shipped"),
        "in-progress": t("status.inProgress"),
        exploring: t("status.exploring"),
    };

    const STATUS_STYLE: Record<string, string> = {
        shipped: "bg-ember/15 text-ember border-ember/30",
        "in-progress": "bg-signal/15 text-signal-light border-signal/30",
        exploring: "bg-white/5 text-fog border-white/10",
    };

    return (
        <SectionWrapper id="ai-automation">
            <p className="mb-2 font-mono text-sm text-ember">{t("label")}</p>
            <h2 className="font-display text-3xl font-semibold text-paper md:text-4xl">
                {t("title")}
            </h2>
            <p className="mt-4 max-w-2xl text-fog">{t("intro")}</p>

            <div className="mt-6 rounded-lg border border-signal/20 bg-signal/5 px-5 py-4">
                <p className="text-sm text-paper/90">
                    <span className="text-ember">💬</span> {t("chatBanner")}
                </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {experiments.map((exp) => (
                    <div key={exp.title} className="rounded-lg border border-white/10 bg-surface p-5">
                        <span className={cn("inline-block rounded-full border px-2.5 py-0.5 font-mono text-xs", STATUS_STYLE[exp.status])}>
                            {STATUS_LABEL[exp.status]}
                        </span>
                        <h3 className="mt-3 font-display text-lg font-semibold text-paper">{exp.title}</h3>
                        <p className="mt-2 text-sm text-fog">{exp.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}