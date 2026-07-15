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
    SiGithub,
    SiAndroid,
    SiN8N,
    SiClaude,
    SiMysql,
    SiDotnet,
} from "react-icons/si";



export const SKILLS: SkillCategory[] = [
    {
        category: "Frontend",
        items: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "shadcn/ui", icon: SiShadcnui },
            { name: "React", icon: SiReact },
        ],
    },
    {
        category: "Backend & Data",
        items: [
            { name: "Supabase", icon: SiSupabase },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Firebase", icon: SiFirebase },
            { name: "Python", icon: SiPython },
            { name: "FastAPI", icon: SiFastapi },
            { name: "MySQL", icon: SiMysql },
        ],
    },
    {
        category: "Mobile",
        items: [
            { name: "Kotlin", icon: SiKotlin },
            { name: "Jetpack Compose", icon: SiJetpackcompose },
            { name: "Android", icon: SiAndroid }
        ],
    },
    {
        category: "AI & Automation",
        items: [
            { name: "Google Gemini API", icon: SiGooglegemini },
            { name: "n8n", icon: SiN8N },
            { name: "Claude", icon: SiClaude },
        ],
    },
    {
        category: "Tooling",
        items: [
            { name: "Vercel", icon: SiVercel },
            { name: "Git", icon: SiGit },
        ],
    },
    {
        category: "Other Languages & Frameworks",
        items: [
            { name: "Java", icon: JavaIcon },
            { name: "C#", icon: CsharpIcon },
            { name: ".NET", icon: SiDotnet },
        ],
    },
];
