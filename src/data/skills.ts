import { CsharpIcon, JavaIcon } from "@/components/icons";
import { SkillCategory } from "@/lib/types";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiShadcnui,
    SiReact,
    SiSupabase,
    SiPostgresql,
    SiFirebase,
    SiPython,
    SiFastapi,
    SiKotlin,
    SiJetpackcompose,
    SiGooglegemini,
    SiVercel,
    SiGit,
    SiAndroid,
    SiN8N,
    SiClaude,
    SiMysql,
    SiDotnet,
} from "react-icons/si";

const ICONS = {
    frontend: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "shadcn/ui", icon: SiShadcnui },
        { name: "React", icon: SiReact },
    ],
    backend: [
        { name: "Supabase", icon: SiSupabase },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Firebase", icon: SiFirebase },
        { name: "Python", icon: SiPython },
        { name: "FastAPI", icon: SiFastapi },
        { name: "MySQL", icon: SiMysql },
    ],
    mobile: [
        { name: "Kotlin", icon: SiKotlin },
        { name: "Jetpack Compose", icon: SiJetpackcompose },
        { name: "Android", icon: SiAndroid },
    ],
    ai: [
        { name: "Google Gemini API", icon: SiGooglegemini },
        { name: "n8n", icon: SiN8N },
        { name: "Claude", icon: SiClaude },
    ],
    tooling: [
        { name: "Vercel", icon: SiVercel },
        { name: "Git", icon: SiGit },
    ],
    otherLangs: [
        { name: "Java", icon: JavaIcon },
        { name: "C#", icon: CsharpIcon },
        { name: ".NET", icon: SiDotnet },
    ],
};

export const SKILLS: Record<"en" | "es", SkillCategory[]> = {
    en: [
        { category: "Frontend", items: ICONS.frontend },
        { category: "Backend & Data", items: ICONS.backend },
        { category: "Mobile", items: ICONS.mobile },
        { category: "AI & Automation", items: ICONS.ai },
        { category: "Tooling", items: ICONS.tooling },
        { category: "Other Languages & Frameworks", items: ICONS.otherLangs },
    ],
    es: [
        { category: "Frontend", items: ICONS.frontend },
        { category: "Backend y Datos", items: ICONS.backend },
        { category: "Mobile", items: ICONS.mobile },
        { category: "IA y Automatización", items: ICONS.ai },
        { category: "Herramientas", items: ICONS.tooling },
        { category: "Otros lenguajes y frameworks", items: ICONS.otherLangs },
    ],
};