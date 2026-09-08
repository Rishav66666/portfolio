"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { skillCategories, professionalSkills } from "@/data/profile";

const levelSize: Record<string, string> = {
  Advanced: "text-sm px-4 py-2",
  Intermediate: "text-sm px-3.5 py-1.5",
  Beginner: "text-xs px-3 py-1",
};

const levelRing: Record<string, string> = {
  Advanced: "border-accent/70 text-text-primary bg-accent/10",
  Intermediate: "border-accent/35 text-text-secondary bg-accent/5",
  Beginner: "border-border text-text-muted",
};

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId)!;

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="03"
        title="Skills"
        description="Sized by how deep the experience actually goes — not a made-up percentage."
      />

      <div className="grid lg:grid-cols-[220px_1fr] gap-8">
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`text-left px-4 py-3 rounded-xl border whitespace-nowrap lg:whitespace-normal transition-colors ${
                cat.id === activeId
                  ? "border-accent/60 bg-accent/10 text-text-primary"
                  : "border-border text-text-secondary hover:border-accent/30"
              }`}
            >
              <span className="text-sm font-medium">{cat.title}</span>
            </button>
          ))}
        </div>

        <div className="panel rounded-2xl p-7 min-h-[260px]">
          <p className="text-text-secondary text-sm mb-6">{active.description}</p>
          <div className="flex flex-wrap gap-3">
            {active.skills.map((skill) => (
              <span
                key={skill.name}
                title={skill.level}
                className={`rounded-full border font-medium transition-transform hover:scale-105 cursor-default ${levelSize[skill.level]} ${levelRing[skill.level]}`}
              >
                {skill.name}
                <span className="text-numeric text-[10px] text-text-muted ml-2">
                  {skill.level}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2.5">
        <span className="text-xs text-text-muted mr-1">Also brings:</span>
        {professionalSkills.map((s) => (
          <span key={s} className="text-xs text-text-secondary px-3 py-1 rounded-full border border-border">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
