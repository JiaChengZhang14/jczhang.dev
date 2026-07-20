"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Mail, Check, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const EMAIL = "contact.jczhang@gmail.com";

function CopyEmailButton({ ariaLabel }: { ariaLabel: string }) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <button onClick={handleCopy} aria-label={ariaLabel} className="rounded-md p-1.5 text-fog transition-colors hover:text-signal-light">
            {copied ? <Check className="h-4 w-4 text-ember" /> : <Copy className="h-4 w-4" />}
        </button>
    );
}

export function Contact() {
    const t = useTranslations("contact");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error();
            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        }
    }

    return (
        <SectionWrapper id="contact">
            <p className="mb-2 font-mono text-sm text-ember">{t("label")}</p>
            <h2 className="font-display text-3xl font-semibold text-paper md:text-4xl">{t("title")}</h2>
            <p className="mt-4 max-w-xl text-fog">{t("subtitle")}</p>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
                <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-white/10 bg-surface p-6 md:col-span-2 md:row-span-2">
                    <div>
                        <label htmlFor="name" className="mb-1 block font-mono text-xs text-fog">{t("form.name")}</label>
                        <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full rounded-md border border-white/10 bg-ink px-4 py-2.5 text-sm text-paper placeholder:text-fog/50 focus:outline-none focus:ring-1 focus:ring-signal"
                            placeholder={t("form.namePlaceholder")} />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-1 block font-mono text-xs text-fog">{t("form.email")}</label>
                        <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full rounded-md border border-white/10 bg-ink px-4 py-2.5 text-sm text-paper placeholder:text-fog/50 focus:outline-none focus:ring-1 focus:ring-signal"
                            placeholder={t("form.emailPlaceholder")} />
                    </div>

                    <div>
                        <label htmlFor="message" className="mb-1 block font-mono text-xs text-fog">{t("form.message")}</label>
                        <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="w-full resize-none rounded-md border border-white/10 bg-ink px-4 py-2.5 text-sm text-paper placeholder:text-fog/50 focus:outline-none focus:ring-1 focus:ring-signal"
                            placeholder={t("form.messagePlaceholder")} />
                    </div>

                    <button type="submit" disabled={status === "sending"} className="rounded-md bg-ember px-6 py-3 font-medium text-ink transition-colors hover:bg-ember/90 disabled:opacity-50">
                        {status === "sending" ? t("form.submitting") : t("form.submit")}
                    </button>

                    {status === "sent" && <p className="text-sm text-signal-light">{t("form.success")}</p>}
                    {status === "error" && <p className="text-sm text-red-400">{t("form.error")}</p>}
                </form>

                <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-surface p-5">
                    <div className="flex items-center justify-between">
                        <Mail className="h-5 w-5 text-signal-light" />
                        <CopyEmailButton ariaLabel={t("emailCard.copyAriaLabel")} />
                    </div>
                    <div>
                        <p className="font-mono text-xs text-fog">{t("emailCard.label")}</p>
                        <p className="mt-1 truncate text-sm text-paper/90">{EMAIL}</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-4 rounded-lg border border-white/10 bg-surface p-5">
                    <a href="https://github.com/JiaChengZhang14" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-fog transition-colors hover:text-signal-light">
                        <GithubIcon className="h-5 w-5" />
                        <span className="text-sm">{t("social.github")}</span>
                    </a>
                    <a href="https://www.linkedin.com/in/jiacheng-zhang-a69739251/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-fog transition-colors hover:text-signal-light">
                        <LinkedinIcon className="h-5 w-5" />
                        <span className="text-sm">{t("social.linkedin")}</span>
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
}