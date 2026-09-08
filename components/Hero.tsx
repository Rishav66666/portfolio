"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, MessageSquareText } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { personal, projects } from "@/data/profile";

function RoleSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % personal.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-7 overflow-hidden relative">
      {personal.roles.map((role, i) => (
        <motion.p
          key={role}
          className="text-accent font-mono text-sm sm:text-base absolute inset-0"
          initial={false}
          animate={{
            y: i === index ? 0 : i < index ? -28 : 28,
            opacity: i === index ? 1 : 0,
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          {role}
        </motion.p>
      ))}
    </div>
  );
}

const chartData = projects[0].chart?.data.map((d) => ({ name: d.label, value: d.value })) ?? [];

function LiveDataPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="panel rounded-2xl p-5 w-full max-w-sm shadow-2xl shadow-black/40"
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-text-muted font-mono">sales_dashboard.xlsx</p>
        <span className="flex items-center gap-1.5 text-xs text-data-positive">
          <span className="h-1.5 w-1.5 rounded-full bg-data-positive animate-pulse" />
          live
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {projects[0].stats?.slice(0, 4).map((stat) => (
          <div key={stat.label} className="rounded-lg bg-bg-elevated/60 border border-border px-3 py-2.5">
            <p className="text-[11px] text-text-muted mb-1">{stat.label}</p>
            <p className="text-numeric text-sm text-text-primary">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" hide />
            <Tooltip
              cursor={{ fill: "rgba(34,211,238,0.06)" }}
              contentStyle={{
                background: "#0f1729",
                border: "1px solid #1e2a45",
                borderRadius: 8,
                fontSize: 12,
              }}
              labelStyle={{ color: "#94a3b8" }}
            />
            <Bar dataKey="value" fill="#22d3ee" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 grid-backdrop overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-text-secondary text-sm mb-4">{personal.location}</p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-text-primary mb-5 max-w-xl">
            Turning data into decisions.
          </h1>

          <RoleSwitcher />

          <p className="mt-6 text-text-secondary max-w-md leading-relaxed">
            {personal.summary.split(".")[0]}. Currently a {personal.quickSnapshot.experience.split(",")[0]}.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-accent text-bg text-sm font-medium hover:bg-accent-strong transition-colors"
            >
              View my work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2.5 rounded-lg border border-border text-sm text-text-primary hover:border-accent/60 transition-colors flex items-center gap-2"
            >
              <ArrowDownToLine size={15} />
              Download resume
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"
            >
              <MessageSquareText size={15} />
              Let&apos;s connect
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <LiveDataPanel />
        </div>
      </div>
    </section>
  );
}
