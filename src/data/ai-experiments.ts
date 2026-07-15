import { AiExperiment } from "@/lib/types";

export const AI_EXPERIMENTS: AiExperiment[] = [
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
];