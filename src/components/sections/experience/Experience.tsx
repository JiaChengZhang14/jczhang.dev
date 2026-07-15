import { SectionWrapper } from "@/components/SectionWrapper";
import { EXPERIENCE } from "@/data/experience";

export function Experience() {
    return (
        <SectionWrapper id="experience">
            <p className="mb-2 font-mono text-sm text-ember">{"// 03 experience"}</p>
            <h2 className="font-display text-3xl font-semibold text-paper md:text-4xl">
                Experiencie
            </h2>

            <div className="mt-12 space-y-0">
                {EXPERIENCE.map((exp, i) => (
                    <div
                        key={i}
                        className="relative border-l border-white/25 py-6 pl-8 last:pb-0"
                    >
                        <span
                            className={`absolute -left-1.25 top-8 h-2.5 w-2.5 rounded-full ${exp.current ? "bg-ember" : "bg-signal"
                                }`}
                        />
                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-2">
                            <div>
                                <h3 className="font-display text-lg font-semibold text-paper">
                                    {exp.role}
                                </h3>
                                <h4 className="font-display text-md font-medium text-fog">
                                    {exp.company}
                                </h4>
                            </div>
                            <span className="font-mono text-xs text-fog">{exp.period}</span>
                        </div>
                        <p className="mt-2 text-sm text-fog">{exp.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}