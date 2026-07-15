"use client";

import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
    function handleClick() {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <button
            onClick={handleClick}
            aria-label="Scroll to projects"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fog transition-colors hover:text-signal-light  motion-safe:animate-bounce-subtle"
        >
            <ChevronDown className="h-7 w-7" />
        </button>
    );
}