import { SectionWrapper } from "@/components/SectionWrapper";
import { SKILLS } from "@/data/skills";

export function Skills() {
    return (
        <SectionWrapper id="skills">
            <p className="mb-2 font-mono text-sm text-ember">{"// 04 skills"}</p>
            <h2 className="font-display text-3xl font-semibold text-paper md:text-4xl">
                Skills
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {SKILLS.map((group) => (
                    <div key={group.category}>
                        <h3 className="font-mono text-xs uppercase tracking-wider text-signal-light">
                            {group.category}
                        </h3>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            {group.items.map(({ name, icon: Icon }) => (
                                <div
                                    key={name}
                                    className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-surface p-3 text-center"
                                >
                                    <Icon className="h-6 w-6 text-paper" />
                                    <span className="text-xs text-fog">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}