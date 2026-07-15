import { FunctionComponent } from "react";
import { IconType } from "react-icons";

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



export interface SkillItem {
    name: string;
    icon: IconType | FunctionComponent;
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
}

export interface AiExperiment {
    title: string;
    description: string;
    status: "shipped" | "in-progress" | "exploring";
}

export interface Experience {
    role: string;
    company: string;
    period: string; // ej. "2024 — Presente"
    description: string;
    current?: boolean;
}
