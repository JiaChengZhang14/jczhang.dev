"use client";

import { useTranslations } from "next-intl";

export function ContactButton() {
    const t = useTranslations("hero");

    return (
        <button
            onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-md border border-signal px-6 py-3 font-medium text-paper transition-colors hover:bg-signal/10 hover:text-white"
        >
            {t("ctaContact")}
        </button>
    );
}