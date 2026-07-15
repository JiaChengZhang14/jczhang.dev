import { Project } from "@/lib/types";



export const PROJECTS: Project[] = [
    {
        slug: "aldebaran",
        title: "Limpiacristales.net",
        tagline: "Web de servicios profesionales para cliente (En desarrollo)",
        problem:
            "Un negocio de limpieza de cristales necesitaba una web profesional que generara confianza y facilitara el contacto/reserva de clientes.",
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
            title: "Cumplimiento GDPR sin sacrificar analítica",
            description:
                "Implementé Klaro + Google Analytics Consent Mode v2 para que el sitio recogiera datos analíticos solo con consentimiento explícito, cumpliendo GDPR sin perder visibilidad sobre el tráfico real.",
        },
        image: "/images/aldebaran.png",
        liveUrl: "https://limpiacristales.net",
        featured: true,
    },
    {
        slug: "wewiza",
        title: "WeWiza",
        tagline: "App móvil nativa con backend propio en Python",
        problem:
            "Construir una aplicación móvil completa de extremo a extremo, incluyendo backend propio, en vez de depender de un BaaS.",
        stack: [
            "Kotlin",
            "Jetpack Compose",
            "Python",
            "FastAPI",
        ],
        challenge: {
            title: "Backend propio en vez de soluciones gestionadas",
            description:
                "Diseñé e implementé una API REST con FastAPI para servir la app, en vez de usar Firebase/Supabase — control total sobre la lógica de negocio y la estructura de datos.",
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
            "Necesitaba un portfolio propio que demostrara no solo frontend, sino integración full-stack y de IA en un producto real.",
        stack: [
            "Next.js 15",
            "TypeScript",
            "Tailwind CSS v4",
            "Supabase",
            "Google Gemini API",
            "Vercel",
        ],
        challenge: {
            title: "Chatbot con contexto propio, sin coste de suscripción",
            description:
                "Integré un chatbot conectado a la API gratuita de Gemini con contexto sobre mi perfil, manteniendo el coste de la infraestructura en $0.",
        },
        image: "/images/portfolio.png",
        repoUrl: "https://github.com/JiaChengZhang14/jczhang.dev",
        featured: true,
    },
];