import { Project } from "@/lib/types";

export const PROJECTS: Record<"en" | "es", Project[]> = {
    en: [
        {
            slug: "aldebaran",
            title: "Limpiacristales.net",
            tagline: "Professional service website for client (Under development)",
            problem:
                "A local glass cleaning business needed a professional website to build customer trust and streamline client bookings and inquiries.",
            stack: [
                "Next.js 15",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "Firebase Firestore",
                "Klaro (GDPR consent)",
                "Vercel",
            ],
            challenge: {
                title: "GDPR compliance without sacrificing analytics",
                description:
                    "Implemented Klaro and Google Analytics Consent Mode v2 to ensure explicit user consent before tracking data, achieving full GDPR compliance while maintaining crucial visibility into traffic.",
            },
            image: "/images/aldebaran.png",
            liveUrl: "https://limpiacristales-net.vercel.app/",
            featured: true,
        },
        {
            slug: "wewiza",
            title: "WeWiza",
            tagline: "Native mobile application with a custom Python backend",
            problem:
                "To build a complete end-to-end mobile application with a custom, self-hosted backend instead of relying on external BaaS platforms.",
            stack: ["Kotlin", "Jetpack Compose", "Python", "FastAPI"],
            challenge: {
                title: "Custom backend over managed services",
                description:
                    "Designed and implemented a RESTful API using FastAPI to power the mobile application, choosing full control over the database structure and business logic instead of relying on Firebase or Supabase.",
            },
            image: "/images/wewiza.png",
            repoUrl: "https://github.com/JiaChengZhang14/Wewiza",
            featured: true,
        },
        {
            slug: "portfolio",
            title: "jczhang.dev",
            tagline: "This portfolio website, built from scratch",
            problem:
                "I needed a personal portfolio that would showcase not only my frontend skills but also practical full-stack capabilities and integration with AI.",
            stack: [
                "Next.js 15",
                "TypeScript",
                "Tailwind CSS v4",
                "Supabase",
                "Google Gemini API",
                "Vercel",
            ],
            challenge: {
                title: "Context-aware chatbot with $0 infrastructure costs",
                description:
                    "Integrated a chatbot powered by Google Gemini API with custom-engineered context about my profile, successfully keeping backend and hosting costs at $0.",
            },
            image: "/images/portfolio.png",
            repoUrl: "https://github.com/JiaChengZhang14/jczhang.dev",
            featured: true,
        },
    ],
    es: [
        {
            slug: "aldebaran",
            title: "Limpiacristales.net",
            tagline: "Web de servicios profesionales para cliente (en desarrollo)",
            problem:
                "Un negocio local de limpieza de cristales necesitaba una web profesional que generara confianza y facilitara las reservas y consultas de clientes.",
            stack: [
                "Next.js 15",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "Firebase Firestore",
                "Klaro (consentimiento GDPR)",
                "Vercel",
            ],
            challenge: {
                title: "Cumplimiento GDPR sin sacrificar analítica",
                description:
                    "Implementé Klaro y Google Analytics Consent Mode v2 para asegurar el consentimiento explícito antes de recoger datos, logrando cumplimiento GDPR completo sin perder visibilidad clave sobre el tráfico.",
            },
            image: "/images/aldebaran.png",
            liveUrl: "https://limpiacristales-net.vercel.app/",
            featured: true,
        },
        {
            slug: "wewiza",
            title: "WeWiza",
            tagline: "Aplicación móvil nativa con backend propio en Python",
            problem:
                "Construir una aplicación móvil completa de extremo a extremo con un backend propio y autoalojado, en vez de depender de plataformas BaaS externas.",
            stack: ["Kotlin", "Jetpack Compose", "Python", "FastAPI"],
            challenge: {
                title: "Backend propio frente a servicios gestionados",
                description:
                    "Diseñé e implementé una API REST con FastAPI para dar soporte a la aplicación móvil, priorizando el control total sobre la estructura de datos y la lógica de negocio en vez de depender de Firebase o Supabase.",
            },
            image: "/images/wewiza.png",
            repoUrl: "https://github.com/JiaChengZhang14/Wewiza",
            featured: true,
        },
        {
            slug: "portfolio",
            title: "jczhang.dev",
            tagline: "Este mismo portfolio, construido desde cero",
            problem:
                "Necesitaba un portfolio personal que mostrara no solo mis skills de frontend, sino capacidades reales full-stack e integración con IA.",
            stack: [
                "Next.js 15",
                "TypeScript",
                "Tailwind CSS v4",
                "Supabase",
                "Google Gemini API",
                "Vercel",
            ],
            challenge: {
                title: "Chatbot con contexto propio y coste de infraestructura $0",
                description:
                    "Integré un chatbot con la API de Google Gemini y contexto propio sobre mi perfil, manteniendo el coste de backend y hosting en $0.",
            },
            image: "/images/portfolio.png",
            repoUrl: "https://github.com/JiaChengZhang14/jczhang.dev",
            featured: true,
        },
    ],
};