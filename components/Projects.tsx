"use client";

import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "@/data/profile";
import type { Project } from "@/types/profile";

const categories = ["All", "Data Analytics", "Business Intelligence", "Web Development"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="04"
        title="Projects"
        description="Give the two data dashboards a proper look — they're where the analytical thinking shows most clearly."
      />

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
              filter === c
                ? "border-accent/60 bg-accent/10 text-text-primary"
                : "border-border text-text-secondary hover:border-accent/30"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {filtered.map((project) => (
          <div
            key={project.id}
            className={project.stats || project.chart ? "sm:col-span-2 lg:col-span-1" : ""}
          >
            <ProjectCard project={project} onOpen={() => setOpenProject(project)} />
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-border p-6 text-center">
        <p className="text-sm text-text-secondary">
          More projects are on the way — this space will grow as new work ships.
        </p>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
