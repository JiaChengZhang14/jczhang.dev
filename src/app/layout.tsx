import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AmbientNetwork } from "@/components/AmbientNetwork";
import { ChatWidget } from "@/components/ChatWidget";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Jiacheng Zhang — Full-Stack Developer & AI Integration | Madrid",
  description:
    "Full-stack developer specialized in Next.js, TypeScript, Supabase and AI integration. Building end-to-end web products and automating workflows with LLMs. Based in Madrid.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-ink font-body text-paper antialiased`}>
        <AmbientNetwork />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}