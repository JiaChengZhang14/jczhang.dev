"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";


interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-5xl px-6 py-24 transition-all duration-700 ease-out md:px-8",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
    >
      {children}
    </section>
  );
}