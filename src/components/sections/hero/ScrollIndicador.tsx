"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export function ScrollIndicator() {
    const t = useTranslations("scrollIndicator");

    return (
        <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            aria-label={t("ariaLabel")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fog transition-colors hover:text-signal-light motion-safe:animate-bounce-subtle"
        >
            <ChevronDown className="h-7 w-7" />
        </button>
    );
}