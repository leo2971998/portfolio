"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowUp,
  Award,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Cloud,
  Code2,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  School,
  Trophy,
  Zap,
} from "lucide-react"
import { FaAws, FaMicrosoft } from "react-icons/fa"
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiFlask,
  SiExpress,
  SiMysql,
  SiTensorflow,
  SiGit,
  SiDocker,
} from "react-icons/si"
import { cn } from "@/lib/utils"
import type { IconType } from "react-icons"

// --- TYPES ---

type ExperienceItem = {
  role: string
  company: string
  dates: string
  location: string
  description: string[]
}

type HackathonInfo = {
  name: string
  host: string
  placement: string
  award: string
}

type Project = {
  id: number
  title: string
  dates: string
  images?: string[]
  coverImg?: string
  problem: string[]
  solution: string[]
  tech: string[]
  repoUrl?: string | null
  liveUrl?: string | null
  reportUrl?: string | null
  hackathon?: HackathonInfo
  contributions?: string[]
}

type EducationItem = {
  id: number
  institution: string
  degree: string
  dates: string
}

type CertificationItem = {
  name: string
  org: string
  year: string
  icon: IconType
  brandColor: string
}

// --- DATA ---

const experience: ExperienceItem[] = [
  {
    role: "Student Worker Application Developer",
    company: "University of Houston Enterprise Systems",
    dates: "June 2024 – Present",
    location: "Houston, TX",
    description: [
      "Troubleshoot and resolve issues in the PeopleSoft system, supporting university operations.",
      "Develop projects with PowerApps and Microsoft Flow, delivering automated workflows.",
      "Complete PeopleSoft training and contribute to system-improvement initiatives.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Neudesic, an IBM Company",
    dates: "May 2023 – March 2024",
    location: "Houston, TX",
    description: [
      "Contributed to Agile project management and led software reliability initiatives.",
      "Developed machine-learning models and data-analysis pipelines through API integrations.",
      "Gained expertise in cloud services, enabling contributions to cloud-based projects.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Techwave Consulting Inc.",
    dates: "June 2022 – December 2022",
    location: "Houston, TX",
    description: [
      "Led the development of a comprehensive website using Java, JavaScript, Oracle Database, Spring Boot, HTML, and CSS.",
      "Earned cloud certifications from AWS, Microsoft Azure, and Google Cloud.",
      "Contributed to full-stack development, cloud computing, and project management.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "AndTech Solutions LLC",
    dates: "May 2021 – February 2022",
    location: "Houston, TX",
    description: [
      "Developed a web-based application using Python and JavaScript",
      "Managed and analyzed large datasets with QuickBase",
      "Created and modified functions in QuickBase to meet client requirements",
      "Gained experience in the entire software development lifecycle",
    ],
  },
]

const projects: Project[] = [
  {
    id: 1,
    title: "Swipe Coach",
    dates: "Sept 2025",
    images: ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"],
    problem: [
      "Managing multiple rewards cards means juggling multipliers, rotating bonuses, and fine-print exclusions.",
      "In checkout moments there's no quick way to know which card maximizes cashback.",
      "Budget impact and category drift stay hidden without clear trend visualizations.",
    ],
    solution: [
      "Securely links cards, normalizes transactions, and recommends the best card in real time.",
      "Pairs a React + TypeScript front end with a Flask + MongoDB backend and Auth0 auth flow.",
      "Layers on a Gemini assistant that explains picks, shares savings tips, and tracks monthly insights.",
    ],
    tech: ["React", "TypeScript", "Tailwind", "shadcn/ui", "Flask", "MongoDB", "Auth0", "Gemini"],
    repoUrl: "https://github.com/leo2971998/HackRice25",
    liveUrl: "https://hackrice-4afcb.web.app",
    hackathon: {
      name: "HackRice 15",
      host: "Rice University",
      placement: "Top 5",
      award: "Capital One Challenge Winner",
    },
    contributions: [
      "Bootstrapped the frontend (Vite + React + TS + Tailwind + shadcn/ui), set folder/layout conventions.",
      "Wired Auth0 end-to-end: provider setup, protected routes, env plumbing, and authenticated layouts.",
      "Built/refactored Flask + Mongo backend: app.py, composite/partial indexes, routes for dashboards.",
      "Shipped live data features: transactions, cards CRUD, recommendation pipeline, and budget prefs.",
      "Multiple UX/layout passes: homepage grid fixes, slug tweaks, and general polish.",
    ],
  },
  {
    id: 2,
    title: "Volunteer Management System",
    dates: "Summer 2025 - COSC 4353",
    coverImg: "/volunteer-management-dashboard.png",
    problem: [
      "Capstone project required a complete volunteer management platform built from scratch in a semester.",
    ],
    solution: [
      "Architected a Vite + React admin dashboard with responsive workflows for coordinators.",
      "Implemented a Node.js/Express backend on Vercel that powers auth, skill matching, and event updates.",
    ],
    tech: ["React", "Vite", "Node.js", "Express", "MySQL", "Vercel"],
    repoUrl: "https://github.com/leo2971998/COSC-4353-Project",
    liveUrl: "https://cosc-4353-project.vercel.app/",
    contributions: [
      "Built out auth & onboarding: backend login/register, role-based auth, profile completion enforcement.",
      "Shipped volunteer & admin workflows: Admin Dashboard, Manage Users page, navbar/link fixes.",
      "Implemented events/calendar: events API, integrated calendar, dashboard calendar updates.",
    ],
  },
  {
    id: 3,
    title: "MusicBot",
    dates: "Sept 2024 – Present",
    coverImg: "/discord-music-bot-interface.png",
    problem: ["Discord music bots lean on clunky text commands that slow down casual listeners."],
    solution: ["Built a discord.py bot with slash commands and interactive buttons for easy playback control."],
    tech: ["Python", "Discord.py", "youtube_dl", "Asyncio"],
    repoUrl: "https://github.com/leo2971998/MusicBot",
    liveUrl: null,
  },
  {
    id: 4,
    title: "COVID-19 X-ray Detection",
    dates: "Spring 2025",
    coverImg: "/covid-xray-detection.png",
    problem: ["Clinicians must triage high volumes of chest X-rays quickly during COVID-19 surges."],
    solution: [
      "Trained an EfficientNetV2-B0 model achieving 89.10% accuracy, 0.9643 AUC, and 97.7% sensitivity.",
    ],
    tech: ["Python", "TensorFlow/Keras", "EfficientNetV2-B0", "Pandas", "NumPy"],
    repoUrl: "https://github.com/leo2971998/COSC-4368-Fundamentals-of-AI_FinalProject",
    reportUrl: "/Final_Report.pdf",
    liveUrl: null,
  },
  {
    id: 5,
    title: "Museum Management System",
    dates: "Fall 2024 - COSC 3380",
    coverImg: "/museum-management-dashboard.png",
    problem: ["Database systems capstone required a production-style app showcasing schema design and APIs."],
    solution: ["Shipped a Node.js + Express backend with RESTful CRUD on MySQL, React frontend, deployed to Azure."],
    tech: ["React", "Node.js", "MySQL", "Azure", "Express"],
    repoUrl: "https://github.com/Ephimoon/MuseumDB",
  },
]

const education: EducationItem[] = [
  {
    id: 1,
    institution: "University of Houston",
    degree: "Bachelor of Science in Computer Science",
    dates: "Aug 2022 – Aug 2025",
  },
  {
    id: 2,
    institution: "Houston Community College",
    degree: "Associate of Science in Computer Science",
    dates: "Aug 2020 – May 2022",
  },
]

const certifications: CertificationItem[] = [
  { name: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", year: "2021", icon: FaAws, brandColor: "#FF9900" },
  { name: "Azure Administrator Associate", org: "Microsoft", year: "2024", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Data Engineer Associate", org: "Microsoft", year: "2023", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure AI Engineer Associate", org: "Microsoft", year: "2023", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Data Scientist Associate", org: "Microsoft", year: "2023", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Data Fundamentals", org: "Microsoft", year: "2021", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Fundamentals", org: "Microsoft", year: "2021", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure AI Fundamentals", org: "Microsoft", year: "2021", icon: FaMicrosoft, brandColor: "#0078D4" },
]

const techStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Flask", icon: SiFlask, color: "#000000" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
]

const projectLayout: Record<number, { card: string; aspect: string; techLimit: number; summaryClamp: string }> = {
  1: { card: "md:col-span-4 md:row-span-2", aspect: "16 / 9", techLimit: 8, summaryClamp: "line-clamp-3" },
  2: { card: "md:col-span-2", aspect: "16 / 10", techLimit: 4, summaryClamp: "line-clamp-2" },
  3: { card: "md:col-span-2", aspect: "16 / 10", techLimit: 4, summaryClamp: "line-clamp-2" },
  4: { card: "md:col-span-3", aspect: "16 / 10", techLimit: 5, summaryClamp: "line-clamp-2" },
  5: { card: "md:col-span-3", aspect: "16 / 10", techLimit: 5, summaryClamp: "line-clamp-2" },
}

// --- ANIMATION HELPERS ---
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.5, delay },
})

// --- THE PAGE COMPONENT ---

export default function Page() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <main className="flex flex-col items-center">
        {/* ═══════════════ HERO BENTO GRID ═══════════════ */}
        <section
          id="hero"
          className="relative w-full min-h-[calc(100vh-3.5rem)] flex items-center px-4 py-16"
        >
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="hero-orb hero-orb-a" />
            <div className="hero-orb hero-orb-b" />
            <div className="hero-grid" />
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {/* Photo Card */}
              <motion.div className="bento-card flex flex-col items-center justify-center gap-3 md:row-span-2" {...fadeUp(0)}>
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-b from-primary/30 to-gradient-accent/20 blur-xl" />
                  <Image
                    src="/placeholder-user.png"
                    alt="Leo Nguyen headshot"
                    width={200}
                    height={200}
                    className="hero-ring relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  Houston, TX
                </div>
              </motion.div>

              {/* Name + Bio Card */}
              <motion.div className="bento-card md:col-span-3 md:row-span-2 flex flex-col justify-center" {...fadeUp(0.1)}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  <span className="text-gradient">Leo Nguyen</span>
                </h1>
                <p className="mt-3 text-lg sm:text-xl text-muted-foreground font-medium">
                  Cloud-certified full-stack developer building secure, scalable products
                </p>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl">
                  Experience across React, Node.js, Python, and enterprise systems with hands-on
                  delivery at Neudesic, Techwave, and the University of Houston.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button className="btn-gradient" onClick={() => scrollTo("projects")}>
                    View Projects
                  </Button>
                  <Button variant="outline" asChild className="btn-ghost-wipe bg-transparent">
                    <Link href="mailto:nanhtu297@gmail.com?subject=Resume%20Request">
                      <FileText className="mr-2 h-4 w-4" />
                      Request Resume
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Stat Cards */}
              <motion.div className="bento-card flex flex-col items-center justify-center text-center" {...fadeUp(0.2)}>
                <Trophy className="h-6 w-6 text-primary mb-1" />
                <span className="text-2xl font-bold">Top 5</span>
                <span className="text-xs text-muted-foreground">HackRice 15</span>
              </motion.div>

              <motion.div className="bento-card flex flex-col items-center justify-center text-center" {...fadeUp(0.25)}>
                <Cloud className="h-6 w-6 text-primary mb-1" />
                <span className="text-2xl font-bold">8</span>
                <span className="text-xs text-muted-foreground">Cloud Certifications</span>
              </motion.div>

              <motion.div className="bento-card flex flex-col items-center justify-center text-center" {...fadeUp(0.3)}>
                <Briefcase className="h-6 w-6 text-primary mb-1" />
                <span className="text-2xl font-bold">4</span>
                <span className="text-xs text-muted-foreground">Software Roles</span>
              </motion.div>

              {/* Social Card */}
              <motion.div className="bento-card flex flex-col items-center justify-center gap-3" {...fadeUp(0.35)}>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" asChild className="btn-ghost-wipe bg-transparent h-9 w-9">
                    <Link href="https://github.com/leo2971998" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="btn-ghost-wipe bg-transparent h-9 w-9">
                    <Link href="https://linkedin.com/in/leo-nguyen-84098a219/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="btn-ghost-wipe bg-transparent h-9 w-9">
                    <Link href="mailto:nanhtu297@gmail.com">
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <span className="text-xs text-muted-foreground">Let&apos;s connect</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════ TECH STACK ═══════════════ */}
        <section className="w-full py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div className="flex items-center gap-3 mb-8" {...fadeUpView()}>
              <Zap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Tech I Work With</h2>
            </motion.div>
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
              {...fadeUpView(0.1)}
            >
              {techStack.map((tech) => (
                <div key={tech.name} className="tech-icon-card">
                  <tech.icon className="h-7 w-7" style={{ color: tech.color }} />
                  <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ PROJECTS BENTO GRID ═══════════════ */}
        <section id="projects" className="w-full py-16 bg-secondary/50 px-4 scroll-mt-14">
          <div className="container mx-auto max-w-5xl">
            <motion.div className="flex items-center gap-3 mb-10" {...fadeUpView()}>
              <Code2 className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Projects</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(220px,auto)]">
              {projects.map((project, index) => {
                const isFeatured = index === 0
                const isExpanded = expandedProject === project.id
                const contributions = project.contributions ?? []
                const layout = projectLayout[project.id] ?? {
                  card: "md:col-span-3",
                  aspect: "16 / 10",
                  techLimit: 4,
                  summaryClamp: "line-clamp-2",
                }

                return (
                  <motion.article
                    key={project.id}
                    className={cn(
                      "project-card bento-card overflow-hidden flex h-full flex-col",
                      layout.card,
                    )}
                    {...fadeUpView(index * 0.08)}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect()
                      e.currentTarget.style.setProperty("--glow-x", `${e.clientX - rect.left}px`)
                      e.currentTarget.style.setProperty("--glow-y", `${e.clientY - rect.top}px`)
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.setProperty("--glow-x", "50%")
                      e.currentTarget.style.setProperty("--glow-y", "50%")
                    }}
                  >
                    {/* Image */}
                    <div
                      className="relative rounded-xl overflow-hidden bg-muted mb-4"
                      style={{ aspectRatio: layout.aspect }}
                    >
                      {project.images && project.images.length > 0 ? (
                        <ImageDotsSlider images={project.images} alt={project.title} />
                      ) : (
                        <Image
                          src={project.coverImg || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-contain p-2"
                          sizes="(min-width: 768px) 33vw, 100vw"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold">{project.title}</h3>
                          <p className="text-xs text-muted-foreground">{project.dates}</p>
                        </div>
                      </div>

                      {project.hackathon && (
                        <div className="flex flex-wrap gap-1.5">
                          <Badge className="text-xs flex items-center gap-1">
                            <Code2 className="h-3 w-3" />
                            {project.hackathon.name}
                          </Badge>
                          <Badge variant="secondary" className="text-xs flex items-center gap-1">
                            <Trophy className="h-3 w-3" />
                            {project.hackathon.placement}
                          </Badge>
                          <Badge variant="secondary" className="text-xs flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            {project.hackathon.award}
                          </Badge>
                        </div>
                      )}

                      <p className={cn("text-sm text-muted-foreground", layout.summaryClamp)}>
                        {project.solution[0]}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                        {project.tech.slice(0, layout.techLimit).map((t) => (
                          <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                        ))}
                        {!isFeatured && project.tech.length > layout.techLimit && (
                          <Badge variant="secondary" className="text-xs">+{project.tech.length - layout.techLimit}</Badge>
                        )}
                      </div>

                      {/* Expandable contributions (featured only) */}
                      {isFeatured && contributions.length > 0 && (
                        <div className="mt-2">
                          <button
                            className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                            onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                          >
                            {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                            {isExpanded ? "Hide" : "Show"} contributions ({contributions.length})
                          </button>
                          {isExpanded && (
                            <ul className="mt-2 list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                              {contributions.map((c) => <li key={c}>{c}</li>)}
                            </ul>
                          )}
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="flex gap-2 mt-3">
                        {project.repoUrl && (
                          <Button variant="outline" size="sm" asChild className="btn-ghost-wipe bg-transparent h-8 text-xs">
                            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-1.5 h-3.5 w-3.5" />
                              Code
                            </Link>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" asChild className="btn-gradient h-8 text-xs">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                              Demo
                            </Link>
                          </Button>
                        )}
                        {project.reportUrl && (
                          <Button variant="outline" size="sm" asChild className="h-8 text-xs">
                            <Link href={project.reportUrl} target="_blank" rel="noopener noreferrer">
                              <FileText className="mr-1.5 h-3.5 w-3.5" />
                              Report
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════ EXPERIENCE ═══════════════ */}
        <section id="experience" className="w-full py-16 px-4 scroll-mt-14">
          <div className="container mx-auto max-w-5xl">
            <motion.div className="flex items-center gap-3 mb-8" {...fadeUpView()}>
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Experience</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experience.map((job, i) => (
                <motion.div key={`${job.role}-${job.company}`} className="exp-card" {...fadeUpView(i * 0.08)}>
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="text-sm text-primary font-medium mt-0.5">{job.company}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{job.dates} · {job.location}</p>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground mt-3">
                    {job.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ CREDENTIALS ═══════════════ */}
        <section id="credentials" className="w-full py-16 bg-secondary/50 px-4 scroll-mt-14">
          <div className="container mx-auto max-w-5xl">
            {/* Education */}
            <motion.div className="flex items-center gap-3 mb-6" {...fadeUpView()}>
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Education</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {education.map((item, i) => (
                <motion.div key={item.id} className="bento-card" {...fadeUpView(i * 0.08)}>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                      <School className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.institution}</h3>
                      <p className="text-sm text-muted-foreground">{item.degree}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.dates}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div className="flex items-center gap-3 mb-6" {...fadeUpView()}>
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Certifications</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={`${cert.name}-${cert.year}`}
                  className="cert-card"
                  style={{ borderLeftColor: cert.brandColor, borderLeftWidth: 3 }}
                  {...fadeUpView(i * 0.05)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="flex items-center justify-center w-7 h-7 rounded-full shrink-0"
                      style={{ backgroundColor: cert.brandColor }}
                    >
                      <cert.icon className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{cert.year}</span>
                  </div>
                  <p className="text-sm font-medium leading-tight">{cert.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="w-full border-t bg-background/95">
        <div className="container px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Leo Nguyen · Portfolio</p>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" asChild className="btn-ghost-wipe bg-transparent">
              <Link href="https://github.com/leo2971998" target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-4 w-4" />
                Github
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="btn-ghost-wipe bg-transparent">
              <Link href="https://linkedin.com/in/leo-nguyen-84098a219/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-1.5 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="btn-ghost-wipe bg-transparent"
              onClick={() => scrollTo("hero")}
            >
              <ArrowUp className="mr-1.5 h-4 w-4" />
              Back to top
            </Button>
          </div>
        </div>
      </footer>
    </>
  )
}

// ---------- Image slider with dot controls ----------
function ImageDotsSlider({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0)

  const safeIndex = images.length > 0 ? Math.min(Math.max(index, 0), images.length - 1) : 0
  const current = images[safeIndex] ?? "/placeholder.svg"

  return (
    <div className="relative h-full w-full">
      <Image src={current} alt={alt} fill className="object-contain p-2" sizes="(min-width: 768px) 50vw, 100vw" />

      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-2">
          {images.map((_, i) => {
            const active = i === safeIndex
            return (
              <button
                key={i}
                type="button"
                aria-label={`Show image ${i + 1}`}
                aria-current={active}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border border-border transition-transform",
                  active ? "bg-primary scale-110" : "bg-muted-foreground/30 hover:scale-105"
                )}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
