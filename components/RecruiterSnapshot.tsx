import { GraduationCap, Target, Wrench, Briefcase, FolderKanban, Download } from "lucide-react";
import { personal } from "@/data/profile";

const rows = [
  { icon: GraduationCap, label: "Education", value: personal.quickSnapshot.education },
  { icon: Target, label: "Primary Focus", value: personal.quickSnapshot.focus },
  { icon: Wrench, label: "Core Tools", value: personal.quickSnapshot.tools.join("  ·  ") },
  { icon: Briefcase, label: "Experience", value: personal.quickSnapshot.experience },
  { icon: FolderKanban, label: "Projects", value: personal.quickSnapshot.projectAreas },
];

export default function RecruiterSnapshot() {
  return (
    <section className="mx-auto max-w-6xl px-6 -mt-8 relative z-10">
      <div className="panel rounded-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h2 className="font-display text-xl text-text-primary">Quick snapshot</h2>
          <span className="text-xs text-text-muted">For recruiters — 15 second read</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {rows.map((row) => (
            <div key={row.label}>
              <row.icon size={16} className="text-accent mb-2.5" />
              <p className="text-xs text-text-muted mb-1">{row.label}</p>
              <p className="text-sm text-text-primary leading-snug">{row.value}</p>
            </div>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="mt-7 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-strong transition-colors"
        >
          <Download size={15} />
          Download full resume
        </a>
      </div>
    </section>
  );
}
