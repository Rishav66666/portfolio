import { NextRequest, NextResponse } from "next/server";
import { askPortfolioAssistant } from "@/lib/chatbot";

/**
 * This route currently answers using the local structured data in
 * src/data/profile.ts via src/lib/chatbot.ts — no external API calls,
 * so no key is required to run the site.
 *
 * To upgrade to a real LLM later:
 * 1. Add your key to `.env.local` (never commit it, never send it to the client),
 *    e.g. ANTHROPIC_API_KEY=... / OPENAI_API_KEY=... / GEMINI_API_KEY=...
 * 2. In this file, if the key is present, call the provider's API from the
 *    server, passing the contents of `profile.ts` as grounding context and
 *    an instruction to only answer from that data (with the same fallback
 *    message used in chatbot.ts).
 * 3. Keep the local fallback below for when no key is configured.
 */
export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (typeof question !== "string" || !question.trim()) {
      return NextResponse.json({ answer: "Please ask a question about Rishav's portfolio." });
    }

    // Local, key-free answer engine (default behavior).
    const answer = askPortfolioAssistant(question);

    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json(
      { answer: "Something went wrong answering that — please try again." },
      { status: 500 }
    );
  }
}
