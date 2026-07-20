import { Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com/JiaChengZhang14", icon: GithubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jiacheng-zhang-a69739251/", icon: LinkedinIcon },
    { label: "Email", href: "mailto:contact.jczhang@gmail.com", icon: Mail },
];

export async function Footer() {
    const t = await getTranslations("footer");
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-surface">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-8">
                <div className="text-center md:text-left">
                    <p className="font-display text-lg font-semibold text-paper">Jiacheng Zhang</p>
                    <p className="mt-1 font-mono text-sm text-fog">{"contact.jczhang@gmail.com"}</p>
                    <p className="mt-1 font-mono text-sm text-fog">{t("location")}</p>
                </div>

                <div className="flex items-center gap-5">
                    {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                        <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} aria-label={label} className="text-fog transition-colors hover:text-signal-light">
                            <Icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>
            </div>
            <div className="border-t border-white/5 py-4">
                <p className="text-center font-mono text-xs text-fog/70">{t("copyright", { year })}</p>
            </div>
        </footer>
    );
}