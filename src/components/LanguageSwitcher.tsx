"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
    const locale = useLocale();
    const t = useTranslations("languageSwitcher");
    const router = useRouter();
    const pathname = usePathname();

    function switchLocale() {
        const newLocale = locale === "en" ? "es" : "en";
        const segments = pathname.split("/");
        segments[1] = newLocale;
        router.push(segments.join("/"));
    }

    return (
        <button
            onClick={switchLocale}
            aria-label={t("ariaLabel")}
            className="fixed top-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface text-fog shadow-lg transition-colors hover:border-signal hover:text-signal-light"
        >
            <Languages className="h-5 w-5" />
            <span className="absolute -bottom-1 -right-1 rounded-full bg-ember px-1.5 py-0.5 font-mono text-[10px] font-semibold leading-none text-ink">
                {locale.toUpperCase()}
            </span>
        </button>
    );
}