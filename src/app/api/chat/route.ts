import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { ABOUT_CONTEXT } from "@/data/about-context";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        if (!Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ error: "No messages provided" }, { status: 400 });
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: ABOUT_CONTEXT,
        });

        // Todo menos el último mensaje (que se envía aparte)
        const priorMessages = messages.slice(0, -1);


        const firstUserIndex = priorMessages.findIndex(
            (m: { role: string }) => m.role === "user"
        );
        const trimmedPriorMessages =
            firstUserIndex === -1 ? [] : priorMessages.slice(firstUserIndex);

        const history = trimmedPriorMessages.map((m: { role: string; content: string }) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
        }));

        const lastMessage = messages[messages.length - 1];

        const chat = model.startChat({ history });
        const result = await chat.sendMessage(lastMessage.content);
        const text = result.response.text();

        return NextResponse.json({ reply: text });
    } catch (error) {
        console.error("Chat API error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Try again in a moment." },
            { status: 500 }
        );
    }
}