"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const TYPE_SPEED = 25;

export function TerminalWindow() {
    const t = useTranslations("terminal");
    const lines = t.raw("lines") as { prompt: string; output: string }[];

    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [phase, setPhase] = useState<"prompt" | "output">("prompt");

    useEffect(() => {
        setLineIndex(0);
        setCharIndex(0);
        setPhase("prompt");
    }, [lines]);

    useEffect(() => {
        if (lineIndex >= lines.length) return;
        const currentText = phase === "prompt" ? lines[lineIndex].prompt : lines[lineIndex].output;

        if (charIndex < currentText.length) {
            const timer = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
            return () => clearTimeout(timer);
        }

        const pause = setTimeout(() => {
            if (phase === "prompt") {
                setPhase("output");
                setCharIndex(0);
            } else {
                setLineIndex((l) => l + 1);
                setCharIndex(0);
                setPhase("prompt");
            }
        }, phase === "prompt" ? 200 : 500);

        return () => clearTimeout(pause);
    }, [charIndex, phase, lineIndex, lines]);

    return (
        <div className="w-full max-w-xl rounded-lg border border-white/10 bg-surface font-mono text-base shadow-2xl shadow-signal/10">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3.5 w-3.5 rounded-full bg-ember/70" />
                <span className="h-3.5 w-3.5 rounded-full bg-fog/40" />
                <span className="h-3.5 w-3.5 rounded-full bg-fog/40" />
                <span className="ml-2 text-sm text-fog">{t("header")}</span>
            </div>
            <div className="space-y-4 px-5 py-6">
                {lines.slice(0, lineIndex).map((line, i) => (
                    <div key={i}>
                        <p className="text-signal-light">
                            <span className="text-fog">$</span> {line.prompt}
                        </p>
                        <p className="whitespace-pre-line pl-3 text-paper/90">{line.output}</p>
                    </div>
                ))}
                {lineIndex < lines.length && (
                    <div>
                        <p className="text-signal-light">
                            <span className="text-fog">$</span>{" "}
                            {phase === "prompt" ? lines[lineIndex].prompt.slice(0, charIndex) : lines[lineIndex].prompt}
                            {phase === "prompt" && <span className="animate-pulse text-signal-light">▍</span>}
                        </p>
                        {phase === "output" && (
                            <p className="whitespace-pre-line pl-3 text-paper/90">
                                {lines[lineIndex].output.slice(0, charIndex)}
                                <span className="animate-pulse text-signal-light">▍</span>
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}