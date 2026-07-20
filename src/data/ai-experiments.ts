import { AiExperiment } from "@/lib/types";

export const AI_EXPERIMENTS: Record<"en" | "es", AiExperiment[]> = {
    en: [
        {
            title: "Context-Aware Chatbot (This Portfolio)",
            description:
                "Integration with the Google Gemini API, maintaining a $0 operational cost by leveraging the free tier without sacrificing real functionality. Live in production right now.",
            status: "shipped",
        },
        {
            title: "Workflow Automation",
            description:
                "Exploring how to automate repetitive daily tasks using AI as a decision-making layer rather than just a text generator.",
            status: "in-progress",
        },
        {
            title: "RAG with Custom Data in Supabase",
            description:
                "Investigating how to structure dynamic context in Postgres for more precise answers, moving away from relying solely on static system prompts.",
            status: "exploring",
        },
    ],
    es: [
        {
            title: "Chatbot con contexto propio (este portfolio)",
            description:
                "Integración con la API de Google Gemini, manteniendo un coste operativo de $0 aprovechando el free tier sin sacrificar funcionalidad real. Corriendo en producción ahora mismo.",
            status: "shipped",
        },
        {
            title: "Automatización de workflows",
            description:
                "Explorando cómo automatizar tareas repetitivas del día a día usando IA como capa de decisión, no solo como generador de texto.",
            status: "in-progress",
        },
        {
            title: "RAG con datos propios en Supabase",
            description:
                "Investigando cómo estructurar contexto dinámico en Postgres para respuestas más precisas, dejando atrás la dependencia exclusiva de un system prompt estático.",
            status: "exploring",
        },
    ],
};