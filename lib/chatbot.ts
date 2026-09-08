import {
  personal,
  skillCategories,
  professionalSkills,
  experience,
  projects,
  education,
  certifications,
  achievements,
} from "@/data/profile";

const FALLBACK =
  "I don't have verified information about that in Rishav's portfolio yet. Try asking about his skills, projects, experience, or education.";

type Intent = {
  id: string;
  patterns: RegExp[];
  answer: () => string;
};

function listAllSkills(): string[] {
  return skillCategories.flatMap((c) => c.skills.map((s) => s.name));
}

function findSkillMention(question: string): string | null {
  const q = question.toLowerCase();
  const all = listAllSkills();
  return all.find((s) => q.includes(s.toLowerCase())) ?? null;
}

const GENERIC_WORDS = new Set([
  "dashboard",
  "system",
  "analytics",
  "management",
  "global",
  "analysis",
  "series",
  "business",
]);

function findProjectMention(question: string) {
  const q = question.toLowerCase();
  return projects.find(
    (p) =>
      q.includes(p.name.toLowerCase()) ||
      q.includes(p.id.replace(/-/g, " ")) ||
      p.name
        .toLowerCase()
        .split(" ")
        .some((word) => word.length > 4 && !GENERIC_WORDS.has(word) && q.includes(word))
  );
}

const intents: Intent[] = [
  {
    id: "who",
    patterns: [/who is/i, /about (him|rishav|you)/i, /tell me about (him|rishav|yourself)/i, /introduce/i],
    answer: () =>
      `${personal.name} is a ${personal.roles[0]} based in ${personal.location}. ${personal.summary}`,
  },
  {
    id: "hire",
    patterns: [/why (should|would) (we|i|you) hire/i, /why hire/i, /strong candidate/i],
    answer: () =>
      `${personal.name} pairs hands-on tools — ${personal.quickSnapshot.tools.join(", ")} — with real project experience: ${projects
        .filter((p) => p.featured)
        .map((p) => p.name)
        .join(", ")}. He's currently working as a ${personal.quickSnapshot.experience.split(",")[0]}, applying these skills to live business data rather than just coursework.`,
  },
  {
    id: "skills-strongest",
    patterns: [/strongest skills?/i, /best skills?/i, /core skills?/i, /main skills?/i],
    answer: () => {
      const advanced = skillCategories
        .flatMap((c) => c.skills)
        .filter((s) => s.level === "Advanced")
        .map((s) => s.name);
      return `Rishav's strongest (Advanced-level) skills are: ${advanced.join(", ")}.`;
    },
  },
  {
    id: "skills-all",
    patterns: [/technical skills/i, /what skills/i, /skill set/i, /skillset/i],
    answer: () =>
      skillCategories
        .map((c) => `${c.title}: ${c.skills.map((s) => s.name).join(", ")}`)
        .join(" | "),
  },
  {
    id: "professional-skills",
    patterns: [/soft skills/i, /professional skills/i, /people skills/i],
    answer: () => `Rishav's professional / soft skills include: ${professionalSkills.join(", ")}.`,
  },
  {
    id: "power-bi",
    patterns: [/power ?bi/i],
    answer: () => {
      const s = skillCategories
        .flatMap((c) => c.skills)
        .find((s) => s.name.toLowerCase().includes("power bi"));
      return `Yes — Rishav's Power BI proficiency is ${s?.level ?? "listed"}. He's used it for building interactive dashboards with KPI cards, slicers, and pivot-based reporting, and completed a dedicated Power BI Workshop (OfficeMaster, 2025).`;
    },
  },
  {
    id: "excel",
    patterns: [/excel/i],
    answer: () => {
      const s = skillCategories
        .flatMap((c) => c.skills)
        .find((s) => s.name.toLowerCase().includes("excel"));
      return `Rishav's Excel proficiency is ${s?.level ?? "listed"}. His Business Sales Analytics Dashboard and COVID-19 Global Time-Series Dashboard were both built in Excel using Pivot Tables, Pivot Charts, KPI Cards, and Slicers.`;
    },
  },
  {
    id: "programming-languages",
    patterns: [/programming languages?/i, /which languages/i, /code in/i],
    answer: () =>
      "Rishav primarily works with Python and SQL for data analysis, along with HTML, CSS, and JavaScript (plus Node.js) for web development.",
  },
  {
    id: "databases",
    patterns: [/databases?/i, /mysql/i, /oracle/i],
    answer: () =>
      "Rishav has worked with MySQL and Oracle SQL, along with database design and management, including a Database Programming with SQL certification from Oracle Academy (2024).",
  },
  {
    id: "internship",
    patterns: [/internship/i, /data analytics intern/i, /current (job|role)/i, /where does he work/i, /work experience/i, /experience/i],
    answer: () => {
      const current = experience.find((e) => e.current);
      if (!current) return FALLBACK;
      return `Rishav is currently a ${current.role} at ${current.org} (${current.duration}, ${current.location}). Responsibilities include: ${current.responsibilities.join(" ")}`;
    },
  },
  {
    id: "education",
    patterns: [/education/i, /degree/i, /university/i, /college/i, /graduate/i, /studied/i],
    answer: () =>
      education
        .map((e) => `${e.degree} in ${e.field} — ${e.institution} (${e.duration}, ${e.status})`)
        .join(" | "),
  },
  {
    id: "certifications",
    patterns: [/certifications?/i, /certificates?/i],
    answer: () =>
      certifications.map((c) => `${c.name} — ${c.issuer} (${c.year})`).join(" | "),
  },
  {
    id: "achievements",
    patterns: [/achievements?/i, /leadership/i, /class representative/i],
    answer: () =>
      achievements.map((a) => `${a.title} — ${a.issuer} (${a.date})`).join(" | "),
  },
  {
    id: "projects-all",
    patterns: [/projects?/i, /what has he (built|completed|done)/i, /portfolio projects?/i],
    answer: () =>
      projects
        .map((p) => `${p.name} (${p.year}, ${p.category}): ${p.tagline}`)
        .join(" | "),
  },
  {
    id: "contact",
    patterns: [/contact/i, /email/i, /phone/i, /reach (him|you)/i, /linkedin/i, /github/i],
    answer: () =>
      `You can reach Rishav at ${personal.email} or ${personal.phone}. LinkedIn: ${personal.linkedin} — GitHub: ${personal.github}.`,
  },
];

export function askPortfolioAssistant(question: string): string {
  const trimmed = question.trim();
  if (!trimmed) return FALLBACK;

  const project = findProjectMention(trimmed);
  if (project) {
    return `${project.name} (${project.year}, ${project.category}): ${project.objective} Tools: ${project.tools.join(", ")}. Impact: ${project.impact}`;
  }

  for (const intent of intents) {
    if (intent.patterns.some((p) => p.test(trimmed))) {
      return intent.answer();
    }
  }

  const skill = findSkillMention(trimmed);
  if (skill) {
    const found = skillCategories
      .flatMap((c) => c.skills)
      .find((s) => s.name.toLowerCase() === skill.toLowerCase());
    if (found) {
      return `Yes, Rishav has ${found.level}-level experience with ${found.name}.`;
    }
  }

  return FALLBACK;
}

export const suggestedQuestions = [
  "Who is Rishav Raj?",
  "What are his strongest skills?",
  "Does he know Power BI?",
  "Tell me about his Data Analytics internship.",
  "What projects has he completed?",
  "Why should we hire him?",
];
