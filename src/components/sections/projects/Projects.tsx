"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PROJECTS } from "@/data/projects";
import { ExternalLink, LayoutGrid, Rows3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons";

type Layout = "list" | "grid";

export function Projects() {
    const [layout, setLayout] = useState<Layout>("grid");

    return (
        <SectionWrapper id="projects">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <p className="mb-2 font-mono text-sm text-ember">{"// 02 projects"}</p>
                    <h2 className="font-display text-3xl font-semibold text-paper md:text-4xl">
                        Projects
                    </h2>
                </div>

                <div className="opacity-0 md:opacity-100 flex items-center gap-1 rounded-md border border-white/10 bg-surface p-1">
                    <button
                        onClick={() => setLayout("grid")}
                        aria-label="Grid view"
                        aria-pressed={layout === "grid"}
                        className={cn(
                            "rounded p-1.5 transition-colors",
                            layout === "grid"
                                ? "bg-signal text-paper"
                                : "text-fog hover:text-paper"
                        )}
                    >
                        <LayoutGrid className="h-4 w-4" />
                    </button>
                    <button
                        onClick={() => setLayout("list")}
                        aria-label="List view"
                        aria-pressed={layout === "list"}
                        className={cn(
                            "rounded p-1.5 transition-colors",
                            layout === "list"
                                ? "bg-signal text-paper"
                                : "text-fog hover:text-paper"
                        )}
                    >
                        <Rows3 className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <div
                className={cn(
                    "gap-8",
                    layout === "list" ? "flex flex-col" : "grid md:grid-cols-2"
                )}
            >
                {PROJECTS.map((project) => (
                    <article
                        key={project.slug}
                        className="rounded-lg border border-white/10 bg-surface p-6 md:p-8"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="font-display text-xl font-semibold text-paper md:text-2xl">
                                    {project.title}
                                </h3>
                                <p className="mt-1 text-sm text-fog">{project.tagline}</p>
                            </div>

                            <div className="flex gap-3">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Visit live site"
                                        className="text-fog transition-colors hover:text-signal-light"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="View repository"
                                        className="text-fog transition-colors hover:text-signal-light"
                                    >
                                        <GithubIcon className="h-5 w-5" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="mt-4 text-paper/90">{project.problem}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-signal/30 bg-signal/10 px-3 py-1 font-mono text-xs text-signal-light"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-5 border-t border-white/5 pt-4">
                            <p className="font-mono text-xs text-ember">
                                {project.challenge.title}
                            </p>
                            <p className="mt-1 text-sm text-fog">
                                {project.challenge.description}
                            </p>
                        </div>
                    </article>
                ))
                }
            </div >
        </SectionWrapper >
    );
}
