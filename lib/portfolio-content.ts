// Content for the redesigned portfolio. Plain data only, so server and client components can share it.

export const profile = {
  name: "Leo Nguyen",
  role: "Full-stack developer",
  location: "Houston, TX",
  email: "nanhtu297@gmail.com",
  resumeHref: "mailto:nanhtu297@gmail.com?subject=Resume%20Request",
  github: "https://github.com/leo2971998",
  linkedin: "https://linkedin.com/in/leo-nguyen-84098a219/",
  photo: "/placeholder-user.png",
}

export type Project = {
  slug: string
  title: string
  dates: string
  tag?: string
  image: { src: string; width: number; height: number }
  outcome: string
  result: string
  role: string
  problem: string[]
  solution: string[]
  contributions?: string[]
  tech: string[]
  liveUrl?: string
  repoUrl?: string
  reportUrl?: string
}

export const projects: Project[] = [
  {
    slug: "swipe-coach",
    title: "Swipe Coach",
    dates: "Sept 2025",
    tag: "HackRice 15",
    image: { src: "/1.png", width: 1373, height: 770 },
    outcome: "Credit card recommendation app that helps people maximize rewards at checkout.",
    result: "Top 5 at HackRice 15 · Capital One Challenge winner",
    role: "Frontend, auth, API, and AI assistant flow",
    problem: [
      "Managing multiple rewards cards means juggling multipliers, rotating bonuses, and fine-print exclusions.",
      "At checkout there's no quick way to know which card maximizes cashback.",
      "Budget impact and category drift stay hidden without clear trend visualizations.",
    ],
    solution: [
      "Securely links cards, normalizes transactions, and recommends the best card in real time.",
      "Pairs a React + TypeScript front end with a Flask + MongoDB backend and Auth0 auth flow.",
      "Adds a Gemini assistant that explains picks, shares savings tips, and tracks monthly insights.",
    ],
    contributions: [
      "Bootstrapped the frontend (Vite + React + TS + Tailwind + shadcn/ui) and set folder and layout conventions.",
      "Wired Auth0 end-to-end: provider setup, protected routes, env plumbing, and authenticated layouts.",
      "Built and refactored the Flask + Mongo backend, including composite and partial indexes and dashboard routes.",
      "Shipped live data features: transactions, cards CRUD, the recommendation pipeline, and budget preferences.",
    ],
    tech: ["React", "TypeScript", "Tailwind", "Flask", "MongoDB", "Auth0", "Gemini"],
    liveUrl: "https://hackrice-4afcb.web.app",
    repoUrl: "https://github.com/leo2971998/HackRice25",
  },
  {
    slug: "volunteer-management",
    title: "Volunteer Management System",
    dates: "Summer 2025",
    tag: "COSC 4353",
    image: { src: "/volunteer-management-dashboard.png", width: 1251, height: 1036 },
    outcome: "Admin platform that matches volunteers to events by skills, availability, and need.",
    result: "Semester capstone, shipped on Vercel",
    role: "Full-stack dashboard, auth, and workflow logic",
    problem: ["The capstone required a complete volunteer management platform built from scratch in one semester."],
    solution: [
      "Architected a Vite + React admin dashboard with responsive workflows for coordinators.",
      "Implemented a Node.js/Express backend on Vercel that powers auth, skill matching, and event updates.",
    ],
    contributions: [
      "Built auth and onboarding: login/register, role-based access, and profile completion enforcement.",
      "Shipped volunteer and admin workflows: Admin Dashboard and Manage Users.",
      "Implemented the events API and an integrated calendar on the dashboard.",
    ],
    tech: ["React", "Vite", "Node.js", "Express", "MySQL", "Vercel"],
    liveUrl: "https://cosc-4353-project.vercel.app/",
    repoUrl: "https://github.com/leo2971998/COSC-4353-Project",
  },
  {
    slug: "covid-xray",
    title: "COVID-19 X-ray Detection",
    dates: "Spring 2025",
    tag: "COSC 4368",
    image: { src: "/covid-xray-detection.png", width: 787, height: 666 },
    outcome: "Chest X-ray classifier tuned for high-sensitivity COVID-19 triage support.",
    result: "89.1% accuracy · 0.964 AUC · 97.7% sensitivity",
    role: "Model training, evaluation, and report writing",
    problem: ["Clinicians must triage high volumes of chest X-rays quickly during COVID-19 surges."],
    solution: ["Trained an EfficientNetV2-B0 model reaching 89.10% accuracy, 0.9643 AUC, and 97.7% sensitivity."],
    tech: ["Python", "TensorFlow/Keras", "EfficientNetV2", "Pandas", "NumPy"],
    repoUrl: "https://github.com/leo2971998/COSC-4368-Fundamentals-of-AI_FinalProject",
    reportUrl: "/Final_Report.pdf",
  },
  {
    slug: "museum-management",
    title: "Museum Management System",
    dates: "Fall 2024",
    tag: "COSC 3380",
    image: { src: "/museum-management-dashboard.png", width: 704, height: 353 },
    outcome: "Full-stack museum database app with REST APIs and Azure deployment.",
    result: "Database systems capstone",
    role: "React frontend, Express APIs, and MySQL schema",
    problem: ["The database systems capstone required a production-style app showcasing schema design and APIs."],
    solution: ["Shipped a Node.js + Express backend with RESTful CRUD on MySQL and a React frontend, deployed to Azure."],
    tech: ["React", "Node.js", "Express", "MySQL", "Azure"],
    repoUrl: "https://github.com/Ephimoon/MuseumDB",
  },
  {
    slug: "musicbot",
    title: "MusicBot",
    dates: "Sept 2024 – Present",
    tag: "Side project",
    image: { src: "/discord-music-bot-interface.png", width: 1332, height: 695 },
    outcome: "Discord music bot with slash commands and button-based playback controls.",
    result: "Personal automation project, still maintained",
    role: "Python bot architecture and async controls",
    problem: ["Discord music bots lean on clunky text commands that slow down casual listeners."],
    solution: ["Built a discord.py bot with slash commands and interactive buttons for easy playback control."],
    tech: ["Python", "discord.py", "asyncio"],
    repoUrl: "https://github.com/leo2971998/MusicBot",
  },
]

export type Role = {
  title: string
  company: string
  start: string
  end: string
  location: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: "Student Application Developer",
    company: "University of Houston Enterprise Systems",
    start: "Jun 2024",
    end: "Present",
    location: "Houston, TX",
    points: [
      "Troubleshoot and resolve PeopleSoft issues that support university operations.",
      "Build automated workflows with PowerApps and Microsoft Flow.",
      "Contribute to system-improvement initiatives after completing PeopleSoft training.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Neudesic, an IBM Company",
    start: "May 2023",
    end: "Mar 2024",
    location: "Houston, TX",
    points: [
      "Led software reliability initiatives within an Agile delivery team.",
      "Developed machine-learning models and data-analysis pipelines through API integrations.",
      "Contributed to cloud-based client projects.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Techwave Consulting Inc.",
    start: "Jun 2022",
    end: "Dec 2022",
    location: "Houston, TX",
    points: [
      "Led development of a full website using Java, Spring Boot, JavaScript, and Oracle Database.",
      "Earned cloud certifications from AWS, Microsoft Azure, and Google Cloud.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "AndTech Solutions LLC",
    start: "May 2021",
    end: "Feb 2022",
    location: "Houston, TX",
    points: [
      "Developed a web-based application using Python and JavaScript.",
      "Managed and analyzed large client datasets, extending QuickBase functions to meet requirements.",
    ],
  },
]

export const toolkit: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"] },
  { group: "Backend", items: ["Node.js", "Express", "Flask", "Python", "REST APIs"] },
  { group: "Data & ML", items: ["MongoDB", "MySQL", "TensorFlow / Keras", "Pandas"] },
  { group: "Cloud & tooling", items: ["Azure", "AWS", "Vercel", "Docker", "Git", "Auth0"] },
]

export const education = [
  { school: "University of Houston", degree: "B.S. Computer Science", dates: "2022 – 2025" },
  { school: "Houston Community College", degree: "A.S. Computer Science", dates: "2020 – 2022" },
]

export const certifications: { issuer: string; items: { name: string; year: string }[] }[] = [
  {
    issuer: "Microsoft Azure",
    items: [
      { name: "Azure Administrator Associate", year: "2024" },
      { name: "Azure Data Engineer Associate", year: "2023" },
      { name: "Azure AI Engineer Associate", year: "2023" },
      { name: "Azure Data Scientist Associate", year: "2023" },
      { name: "Azure Data Fundamentals", year: "2021" },
      { name: "Azure Fundamentals", year: "2021" },
      { name: "Azure AI Fundamentals", year: "2021" },
    ],
  },
  {
    issuer: "Amazon Web Services",
    items: [{ name: "AWS Certified Cloud Practitioner", year: "2021" }],
  },
]
