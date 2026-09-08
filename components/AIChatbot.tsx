"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { askPortfolioAssistant, suggestedQuestions } from "@/lib/chatbot";

type Message = { role: "user" | "assistant"; text: string };

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi, I'm Ask Rishav AI. I answer questions using Rishav's actual portfolio data — try one of the suggestions below, or ask your own.",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function send(question: string) {
    const q = question.trim();
    if (!q) return;
    const answer = askPortfolioAssistant(q);
    setMessages((m) => [...m, { role: "user", text: q }, { role: "assistant", text: answer }]);
    setInput("");
  }

  return (
    <section id="ai-assistant" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="09"
        title="Ask Rishav AI"
        description="A portfolio assistant that only answers from Rishav's real background — no invented achievements."
      />

      <div className="panel rounded-2xl overflow-hidden max-w-2xl">
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border">
          <Sparkles size={15} className="text-accent" />
          <span className="text-sm text-text-primary font-medium">Portfolio Assistant</span>
        </div>

        <div ref={scrollRef} className="h-80 overflow-y-auto scrollbar-thin px-5 py-4 space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                m.role === "user"
                  ? "ml-auto bg-accent/15 text-text-primary"
                  : "bg-bg-elevated border border-border text-text-secondary"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>

        <div className="px-5 pt-3 flex flex-wrap gap-2">
          {suggestedQuestions.slice(0, 3).map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="text-xs text-text-secondary px-3 py-1.5 rounded-full border border-border hover:border-accent/40 hover:text-text-primary transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 px-5 py-4"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about skills, projects, or experience…"
            className="flex-1 bg-bg-elevated border border-border rounded-lg px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent/50 outline-none"
          />
          <button
            type="submit"
            aria-label="Send"
            className="p-2.5 rounded-lg bg-accent text-bg hover:bg-accent-strong transition-colors"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
