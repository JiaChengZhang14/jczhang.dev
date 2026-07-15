import { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
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
        stack: [
            "Kotlin",
            "Jetpack Compose",
            "Python",
            "FastAPI",
        ],
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
];