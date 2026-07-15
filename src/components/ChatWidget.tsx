"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

const ANIMATION_DURATION = 200; // ms — debe coincidir con la duración del CSS

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "¡Hola! Pregúntame lo que quieras sobre Jiacheng y su trabajo." },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    function toggleChat() {
        if (isOpen) {
            // Cerrar: primero anima, luego desmonta
            setIsOpen(false);
            setTimeout(() => setIsMounted(false), ANIMATION_DURATION);
        } else {
            // Abrir: monta primero, luego anima
            setIsMounted(true);
            requestAnimationFrame(() => setIsOpen(true));
        }
    }

    async function sendMessage() {
        const trimmed = input.trim();
        if (!trimmed || isLoading) return;

        const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
        setMessages(newMessages);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });
            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: data.reply ?? data.error },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Something went wrong. Try again in a moment." },
            ]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isMounted && (
                <div
                    className={`absolute bottom-18 right-0 flex h-105 w-80 origin-bottom-right flex-col rounded-lg border border-white/10 bg-surface shadow-2xl transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-90 opacity-0"
                        }`}
                >
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                        <p className="font-mono text-sm text-fog">{"// ask about jiacheng"}</p>
                        <button onClick={toggleChat} aria-label="Close chat">
                            <X className="h-4 w-4 text-fog hover:text-paper" />
                        </button>
                    </div>

                    <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`max-w-[85%] rounded-md px-3 py-2 text-sm ${m.role === "user"
                                    ? "ml-auto bg-signal text-paper"
                                    : "bg-ink text-paper/90"
                                    }`}
                            >
                                {m.content}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="max-w-[85%] rounded-md bg-ink px-3 py-2 text-sm text-fog">
                                Escribiendo...
                            </div>
                        )}
                        <div ref={scrollRef} />
                    </div>

                    <div className="flex items-center gap-2 border-t border-white/10 p-3">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Escribe una pregunta..."
                            className="flex-1 rounded-md bg-ink px-3 py-2 text-sm text-paper placeholder:text-fog/50 focus:outline-none focus:ring-1 focus:ring-signal"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={isLoading}
                            aria-label="Send message"
                            className="rounded-md bg-ember p-2 text-ink transition-colors hover:bg-ember/90 disabled:opacity-50"
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            )}

            <button
                onClick={toggleChat}
                aria-label="Toggle chat"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-ember text-ink shadow-lg transition-transform hover:scale-105"
            >
                <MessageCircle className="h-6 w-6" />
            </button>
        </div>
    );
}