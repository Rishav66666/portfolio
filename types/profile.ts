export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: { name: string; level: "Beginner" | "Intermediate" | "Advanced" }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  location: string;
  duration: string;
  current: boolean;
  responsibilities: string[];
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectChartPoint {
  label: string;
  value: number;
}

export interface Project {
  id: string;
  name: string;
  year: string;
  category: "Data Analytics" | "Business Intelligence" | "Web Development";
  tagline: string;
  problem: string;
  objective: string;
  tools: string[];
  features: string[];
  approach: string;
  insights: string[];
  impact: string;
  stats?: ProjectStat[];
  chart?: {
    type: "bar" | "line";
    title: string;
    data: ProjectChartPoint[];
  };
  featured: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  status: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  topics?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  detail?: string;
  isLeadership?: boolean;
}
