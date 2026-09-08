import type {
  SkillCategory,
  ExperienceItem,
  Project,
  EducationItem,
  Certification,
  Achievement,
} from "@/types/profile";

export const personal = {
  name: "Rishav Raj",
  shortName: "Rishav",
  roles: [
    "Data Analyst",
    "Business Analytics Enthusiast",
    "Power BI & Excel Dashboard Developer",
    "Python & SQL Learner",
  ],
  location: "Greater Noida, Uttar Pradesh, India",
  email: "rishav501raj@gmail.com",
  phone: "+91-8002086861",
  linkedin: "https://linkedin.com/in/rishav-raj-08629b328",
  github: "https://github.com/Rishav66666",
  summary:
    "I'm a Computer Science and Engineering graduate specializing in Data Science, currently working as a Data Analytics Intern. My work sits at the intersection of numbers and narrative — I clean messy datasets, build dashboards in Power BI and Excel, and write Python and SQL to pull the signal out of the noise. What I enjoy most is the moment a spreadsheet stops being a spreadsheet and starts explaining something: which product is quietly losing money, which region is about to spike, which trend nobody noticed yet.",
  quickSnapshot: {
    education: "B.Tech CSE — Data Science, Galgotias University",
    focus: "Data Analytics & Business Analytics",
    tools: ["Python", "SQL", "Power BI", "Excel"],
    experience: "Data Analytics Intern, Vision India Services Pvt. Ltd.",
    projectAreas: "Data Analytics · Dashboards · Web Systems",
  },
};

export const skillCategories: SkillCategory[] = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    description: "Turning raw, messy data into something you can trust.",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
      { name: "Pandas", level: "Intermediate" },
      { name: "NumPy", level: "Intermediate" },
      { name: "Data Cleaning", level: "Advanced" },
      { name: "Statistical Analysis", level: "Intermediate" },
      { name: "Exploratory Data Analysis", level: "Intermediate" },
    ],
  },
  {
    id: "visualization",
    title: "Data Visualization & Reporting",
    description: "Making the story in the data impossible to miss.",
    skills: [
      { name: "Microsoft Power BI", level: "Advanced" },
      { name: "Microsoft Excel", level: "Advanced" },
      { name: "Pivot Tables & Charts", level: "Advanced" },
      { name: "KPI Cards", level: "Advanced" },
      { name: "Interactive Dashboards", level: "Advanced" },
      { name: "Slicers", level: "Advanced" },
      { name: "Data Storytelling", level: "Intermediate" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Where the data actually lives, and how to ask it questions.",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "Oracle SQL", level: "Advanced" },
      { name: "Database Design", level: "Intermediate" },
      { name: "Database Management", level: "Intermediate" },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "The other half of shipping a dashboard people can reach.",
    skills: [
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    description: "The daily workbench.",
    skills: [
      { name: "VS Code", level: "Advanced" },
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "LaTeX", level: "Beginner" },
    ],
  },
];

export const professionalSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Teamwork",
  "Communication",
  "Time Management",
  "Adaptability",
  "Leadership",
];

export const experience: ExperienceItem[] = [
  {
    id: "vision-india",
    role: "Data Analytics Intern",
    org: "Vision India Services Pvt. Ltd.",
    location: "Noida, Uttar Pradesh",
    duration: "July 2026 – Present",
    current: true,
    responsibilities: [
      "Performed data cleaning, analysis, and visualization to generate meaningful business insights.",
      "Created reports and dashboards using Microsoft Excel to support data-driven decision-making.",
      "Analyzed datasets to identify trends, patterns, and key performance indicators.",
      "Conducted research and supported project-related analytical activities.",
      "Collaborated with professionals and cross-functional teams on real-world data analytics projects.",
    ],
  },
  {
    id: "nayara-energy",
    role: "Industrial Trainee — Mobile SIM Management",
    org: "Nayara Energy Refinery Division",
    location: "India",
    duration: "2025",
    current: false,
    responsibilities: [
      "Completed structured industrial training on mobile SIM lifecycle and management processes.",
      "Gained exposure to operational data handling within a refinery-scale organization.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "sales-dashboard",
    name: "Business Sales Analytics Dashboard",
    year: "2026",
    category: "Business Intelligence",
    tagline: "An Excel dashboard that turns raw transaction data into a live read on the business.",
    problem:
      "Sales data was spread across raw transaction records with no fast way to see performance by product, region, or time period.",
    objective:
      "Build a single interactive dashboard where a decision-maker can see revenue, profit, and customer trends at a glance, then drill down by state, category, or month.",
    tools: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "KPI Cards", "Slicers"],
    features: [
      "Revenue and profit analysis",
      "Monthly sales trend tracking",
      "Top products and customer segments",
      "State-wise sales breakdown across India",
      "Dynamic charts and interactive maps",
      "Real-time filtering via slicers",
    ],
    approach:
      "Started from raw order-level data, cleaned and structured it, then modeled it into Pivot Tables feeding a set of linked KPI cards, charts, and a state-wise map — all controlled by a shared set of slicers so any filter updates the entire dashboard at once.",
    insights: [
      "Clothing and Electronics were the highest-revenue categories, with distinct seasonal patterns.",
      "A small number of states accounted for a disproportionate share of total sales.",
      "Average profit margin sat around 11.67%, with clear variance by category worth investigating further.",
    ],
    impact:
      "Replaced static, manually-updated reports with a single reusable dashboard that updates instantly as filters change, making it far faster to spot trends and answer ad-hoc questions.",
    stats: [
      { label: "Total Revenue", value: "₹253.97M" },
      { label: "Total Profit", value: "₹23.55M" },
      { label: "Total Orders", value: "4,490" },
      { label: "Total Customers", value: "600" },
      { label: "Avg Order Value", value: "₹0.06M" },
      { label: "Avg Profit Margin", value: "11.67%" },
    ],
    chart: {
      type: "bar",
      title: "Revenue by Category (illustrative)",
      data: [
        { label: "Clothing", value: 78 },
        { label: "Electronics", value: 92 },
        { label: "Furniture", value: 54 },
        { label: "Groceries", value: 41 },
        { label: "Office Supplies", value: 35 },
      ],
    },
    featured: true,
  },
  {
    id: "covid-dashboard",
    name: "COVID-19 Global Time-Series Analysis Dashboard",
    year: "2026",
    category: "Data Analytics",
    tagline: "A global, time-aware view of the pandemic — cases, deaths, testing, and vaccination in one place.",
    problem:
      "COVID-19 data spans countries, continents, and time in a way that's hard to reason about from raw tables — trends, rankings, and comparisons all get lost in the scale of the dataset.",
    objective:
      "Build an interactive Excel dashboard that lets someone explore global COVID-19 trends across geography and time without needing to touch the underlying data.",
    tools: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "KPI Cards", "Maps", "Slicers"],
    features: [
      "Tracks total cases, deaths, testing, population, and vaccination",
      "Country and continent-level breakdowns",
      "Top 10 country rankings",
      "Time-series trend visualization",
      "Interactive filters: Continent, Country, Month, Year",
    ],
    approach:
      "Structured the raw time-series data into Pivot Tables split by geography and date, then layered KPI cards, ranked tables, and a map visualization on top — all linked to a common set of slicers for Continent, Country, Month, and Year.",
    insights: [
      "Case and death trends varied sharply by continent and by wave, visible immediately once plotted over time.",
      "Top 10 country rankings shifted meaningfully depending on whether the metric was total cases, deaths, or vaccination rate.",
      "Vaccination trends showed clear divergence in pace across countries once filtered by year.",
    ],
    impact:
      "Turned a large, unwieldy global dataset into something explorable in seconds — filter by continent or year and the whole dashboard, from KPIs to the map, updates together.",
    chart: {
      type: "line",
      title: "Illustrative Global Trend Shape",
      data: [
        { label: "Wave 1", value: 20 },
        { label: "Wave 2", value: 65 },
        { label: "Wave 3", value: 40 },
        { label: "Wave 4", value: 85 },
        { label: "Recovery", value: 30 },
      ],
    },
    featured: true,
  },
  {
    id: "sim-management",
    name: "Mobile SIM Management System",
    year: "2025",
    category: "Web Development",
    tagline: "Web modules supporting SIM lifecycle management and customer data handling.",
    problem:
      "Operational SIM lifecycle and customer data handling needed reliable, structured web-based tooling rather than manual processes.",
    objective:
      "Contribute to web-based modules that improve the accuracy and reliability of SIM-related operational data.",
    tools: ["HTML", "CSS", "JavaScript", "Node.js"],
    features: [
      "Data entry interfaces",
      "Data validation",
      "Reporting features",
      "Responsive user interfaces",
      "Backend API integration",
      "Operational data management",
    ],
    approach:
      "Worked within the existing system architecture to build and refine front-end modules, wiring them to backend APIs and adding validation to reduce data-entry errors.",
    insights: [
      "Consistent validation at the entry point measurably reduced downstream data-quality issues.",
    ],
    impact:
      "Improved data accuracy and operational reliability for SIM lifecycle and customer-data workflows during the training period.",
    featured: true,
  },
];

export const education: EducationItem[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering (Data Science)",
    institution: "Galgotias University, Greater Noida",
    location: "Greater Noida, Uttar Pradesh",
    duration: "2023 – 2026",
    status: "Graduated",
  },
  {
    id: "diploma",
    degree: "Diploma",
    field: "Electronics Engineering",
    institution: "Govt. Polytechnic College, Banka, Bihar",
    location: "Banka, Bihar",
    duration: "2020 – 2023",
    status: "Completed",
  },
  {
    id: "secondary",
    degree: "Secondary Education",
    field: "CBSE",
    institution: "ParaMount Academy, Tarapur, Bihar",
    location: "Tarapur, Bihar",
    duration: "2019",
    status: "Completed",
  },
];

export const certifications: Certification[] = [
  {
    id: "oracle-sql",
    name: "Database Programming with SQL",
    issuer: "Oracle Academy",
    year: "2024",
  },
  {
    id: "power-bi",
    name: "Power BI Workshop",
    issuer: "OfficeMaster",
    year: "2025",
    topics: ["Data Visualization", "Dashboard Creation", "Business Intelligence"],
  },
  {
    id: "nayara",
    name: "Industrial Training — Mobile SIM Management",
    issuer: "Nayara Energy Refinery Division",
    year: "2025",
  },
  {
    id: "codsoft",
    name: "AI Internship",
    issuer: "CodSoft",
    year: "2026",
    topics: ["4-week Virtual Internship"],
  },
  {
    id: "ccna",
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
  {
    id: "azure",
    name: "Essentials of Microsoft Azure",
    issuer: "DigiSaksham Program",
    year: "2025",
  },
];

export const achievements: Achievement[] = [
  {
    id: "career-edge",
    title: "Career Edge – Young Professional",
    issuer: "TCS iON",
    date: "July 2025",
    detail: "Communication, Presentation, Interview Skills, IT Overview, AI Overview",
  },
  {
    id: "comm-skills",
    title: "Communication Skills Certification",
    issuer: "TCS iON",
    date: "July 2025",
  },
  {
    id: "soft-skills",
    title: "Introduction to Soft Skills",
    issuer: "TCS iON",
    date: "July 2025",
  },
  {
    id: "class-rep",
    title: "Class Representative — B.Tech CSE (Data Science)",
    issuer: "Galgotias University",
    date: "2025 – 2026",
    detail:
      "Served as the point of contact between the faculty and the batch, coordinating academic and administrative matters for the cohort.",
    isLeadership: true,
  },
];

export const dataMindsetSteps = [
  { id: "raw", label: "Raw Data", detail: "Start with the data exactly as it comes — messy, incomplete, unfiltered." },
  { id: "clean", label: "Data Cleaning", detail: "Fix errors, handle missing values, standardize formats." },
  { id: "explore", label: "Exploration", detail: "Look for shape, outliers, and first patterns before assuming anything." },
  { id: "analyze", label: "Analysis", detail: "Apply statistical and analytical methods to test what's really going on." },
  { id: "visualize", label: "Visualization", detail: "Turn findings into charts and dashboards people can actually read." },
  { id: "insight", label: "Business Insights", detail: "Translate the visuals into a decision someone can act on." },
];

export const careerJourney = [
  { year: "2019", label: "School", detail: "Completed secondary education (CBSE) at ParaMount Academy, Tarapur, Bihar." },
  { year: "2020", label: "Diploma Journey", detail: "Began a Diploma in Electronics Engineering in Banka, Bihar." },
  { year: "2023", label: "B.Tech, Data Science", detail: "Started B.Tech CSE (Data Science) at Galgotias University, Greater Noida." },
  { year: "2025", label: "Certifications & Leadership", detail: "Earned Power BI, Azure, and CCNA certifications; became Class Representative." },
  { year: "2026", label: "Data Analytics Internship", detail: "Graduated and joined Vision India Services Pvt. Ltd. as a Data Analytics Intern." },
  { year: "Present", label: "Career Growth", detail: "Building analytical depth through real business dashboards and data projects." },
];

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
  { label: "AI Assistant", href: "#ai-assistant" },
  { label: "Contact", href: "#contact" },
];
