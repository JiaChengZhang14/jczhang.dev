export interface Project {
    slug: string;
    title: string;
    tagline: string;
    problem: string;
    stack: string[];
    challenge: {
        title: string;
        description: string;
    };
    image: string;
    liveUrl?: string;
    repoUrl?: string;
    featured?: boolean;
}

export interface SkillCategory {
    category: "Frontend" | "Backend & Data" | "AI & Automation" | "Tooling";
    items: string[];
}

export interface AiExperiment {
    title: string;
    description: string;
    status: "shipped" | "in-progress" | "exploring";
}