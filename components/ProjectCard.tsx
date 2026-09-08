import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/profile";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="text-left panel rounded-2xl p-6 hover:border-accent/50 transition-colors group h-full flex flex-col"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="text-xs text-accent font-mono">{project.category}</span>
        <span className="text-xs text-text-muted">{project.year}</span>
      </div>

      <h3 className="text-text-primary font-medium text-lg mb-2 leading-snug">
        {project.name}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
        {project.tagline}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tools.slice(0, 3).map((t) => (
          <span key={t} className="text-[11px] text-text-muted px-2 py-0.5 rounded-full border border-border">
            {t}
          </span>
        ))}
      </div>

      <span className="inline-flex items-center gap-1.5 text-sm text-text-primary group-hover:text-accent transition-colors">
        View case study
        <ArrowUpRight size={14} />
      </span>
    </button>
  );
}
