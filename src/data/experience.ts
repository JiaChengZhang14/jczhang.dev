import { Experience } from "@/lib/types";

export const EXPERIENCE: Record<"en" | "es", Experience[]> = {
    en: [
        {
            role: "IT Business Analyst | Software Developer",
            company: "ArteConfort",
            period: "April 2026 — Present",
            description:
                "Gather and analyze business requirements from each department, translating and communicating them effectively to the technical team in China to align development with business needs.",
            current: true,
        },
        {
            role: "Web Developer",
            company: "Hanyu Chinese School",
            period: "November 2024 — September 2025",
            description:
                "Developed and structured web designs using custom code and WordPress, building custom interactive components with JavaScript to enhance user experience.",
        },
        {
            role: "Software Developer Trainee",
            company: "Airbus",
            period: "April 2024 — June 2024",
            description:
                "Developed internal business applications integrated with SAP using ABAP during my internship program.",
        },
    ],
    es: [
        {
            role: "Analista de Negocio IT | Desarrollador de Software",
            company: "ArteConfort",
            period: "Abril 2026 — Presente",
            description:
                "Recopilo y analizo requisitos de negocio de cada departamento, traduciéndolos y comunicándolos de forma efectiva al equipo técnico en China para alinear el desarrollo con las necesidades del negocio.",
            current: true,
        },
        {
            role: "Desarrollador Web",
            company: "Hanyu Chinese School",
            period: "Noviembre 2024 — Septiembre 2025",
            description:
                "Desarrollé y estructuré diseños web usando código propio y WordPress, construyendo componentes interactivos personalizados con JavaScript para mejorar la experiencia de usuario.",
        },
        {
            role: "Desarrollador de Software en Prácticas",
            company: "Airbus",
            period: "Abril 2024 — Junio 2024",
            description:
                "Desarrollé aplicaciones de negocio internas integradas con SAP usando ABAP durante mi programa de prácticas.",
        },
    ],
};