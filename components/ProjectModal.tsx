"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import type { Project } from "@/types/profile";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
            className="relative panel w-full sm:max-w-2xl sm:rounded-2xl h-full sm:h-auto sm:max-h-[85vh] overflow-y-auto scrollbar-thin p-6 sm:p-9"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 sm:top-7 sm:right-7 text-text-muted hover:text-text-primary transition-colors"
            >
              <X size={20} />
            </button>

            <span className="text-xs text-accent font-mono">{project.category} · {project.year}</span>
            <h3 className="font-display text-2xl sm:text-3xl text-text-primary mt-2 mb-3 pr-8">
              {project.name}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-7">{project.tagline}</p>

            {project.stats && (
              <div className="grid grid-cols-3 gap-3 mb-7">
                {project.stats.map((s) => (
                  <div key={s.label} className="rounded-lg bg-bg-elevated/60 border border-border px-3 py-2.5">
                    <p className="text-[11px] text-text-muted mb-1">{s.label}</p>
                    <p className="text-numeric text-sm text-text-primary">{s.value}</p>
                  </div>
                ))}
              </div>
            )}

            {project.chart && (
              <div className="mb-8">
                <p className="text-xs text-text-muted mb-2">{project.chart.title}</p>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    {project.chart.type === "bar" ? (
                      <BarChart data={project.chart.data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                        <XAxis dataKey="label" tick={{ fill: "#5b6b85", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: "#5b6b85", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <Tooltip
                          contentStyle={{ background: "#0f1729", border: "1px solid #1e2a45", borderRadius: 8, fontSize: 12 }}
                          cursor={{ fill: "rgba(34,211,238,0.06)" }}
                        />
                        <Bar dataKey="value" fill="#22d3ee" radius={[3, 3, 0, 0]} />
                      </BarChart>
                    ) : (
                      <LineChart data={project.chart.data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                        <XAxis dataKey="label" tick={{ fill: "#5b6b85", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: "#5b6b85", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <Tooltip
                          contentStyle={{ background: "#0f1729", border: "1px solid #1e2a45", borderRadius: 8, fontSize: 12 }}
                        />
                        <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={2} dot={{ r: 3, fill: "#22d3ee" }} />
                      </LineChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-7 mb-7">
              <div>
                <h4 className="text-text-primary text-sm font-medium mb-2">Problem</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-text-primary text-sm font-medium mb-2">Objective</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{project.objective}</p>
              </div>
            </div>

            <div className="mb-7">
              <h4 className="text-text-primary text-sm font-medium mb-2">Approach</h4>
              <p className="text-sm text-text-secondary leading-relaxed">{project.approach}</p>
            </div>

            <div className="mb-7">
              <h4 className="text-text-primary text-sm font-medium mb-2">Key features</h4>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="text-sm text-text-secondary flex gap-2">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-7">
              <h4 className="text-text-primary text-sm font-medium mb-2">Key insights</h4>
              <ul className="space-y-1.5">
                {project.insights.map((i) => (
                  <li key={i} className="text-sm text-text-secondary flex gap-2 leading-relaxed">
                    <span className="text-data-positive mt-1.5 h-1 w-1 rounded-full bg-data-positive shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-7">
              <h4 className="text-text-primary text-sm font-medium mb-2">Impact</h4>
              <p className="text-sm text-text-secondary leading-relaxed">{project.impact}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
              {project.tools.map((t) => (
                <span key={t} className="text-xs text-text-secondary px-2.5 py-1 rounded-full border border-border">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
