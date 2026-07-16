"use client";

import { useEffect, useState } from "react";

const LINES = [
    { prompt: "whoami", output: "jiacheng-zhang" },
    {
        prompt: "cat focus.txt",
        output: "Frontend dev · Next.js & TypeScript\nIntegrating AI into existing products",
    },
    { prompt: "status", output: "working · open to collaboration" },
];

const TYPE_SPEED = 25; // ms por carácter

export function TerminalWindow() {
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [phase, setPhase] = useState<"prompt" | "output">("prompt");

    useEffect(() => {
        if (lineIndex >= LINES.length) return;

        const currentText =
            phase === "prompt" ? LINES[lineIndex].prompt : LINES[lineIndex].output;

        if (charIndex < currentText.length) {
            const timer = setTimeout(() => {
                setCharIndex((c) => c + 1);
            }, TYPE_SPEED);
            return () => clearTimeout(timer);
        }

        // Terminó de escribir esta parte
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
    }, [charIndex, phase, lineIndex]);

    return (
        <div className="w-full max-w-xl rounded-lg border border-white/10 bg-surface font-mono text-base shadow-2xl shadow-signal/10">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3.5 w-3.5 rounded-full bg-ember/70" />
                <span className="h-3.5 w-3.5 rounded-full bg-fog/40" />
                <span className="h-3.5 w-3.5 rounded-full bg-fog/40" />
                <span className="ml-2 text-sm text-fog">portfolio.sh</span>
            </div>
            <div className="space-y-4 px-5 py-6">
                {/* Líneas ya completadas */}
                {LINES.slice(0, lineIndex).map((line, i) => (
                    <div key={i}>
                        <p className="text-signal-light">
                            <span className="text-fog">$</span> {line.prompt}
                        </p>
                        <p className="whitespace-pre-line pl-3 text-paper/90">
                            {line.output}
                        </p>
                    </div>
                ))}

                {/* Línea actual, escribiéndose */}
                {lineIndex < LINES.length && (
                    <div>
                        <p className="text-signal-light">
                            <span className="text-fog">$</span>{" "}
                            {phase === "prompt"
                                ? LINES[lineIndex].prompt.slice(0, charIndex)
                                : LINES[lineIndex].prompt}
                            {phase === "prompt" && (
                                <span className="animate-pulse text-signal-light">▍</span>
                            )}
                        </p>
                        {phase === "output" && (
                            <p className="whitespace-pre-line pl-3 text-paper/90">
                                {LINES[lineIndex].output.slice(0, charIndex)}
                                <span className="animate-pulse text-signal-light">▍</span>
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}