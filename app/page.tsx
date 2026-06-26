"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, MotionConfig } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowUp,
  Award,
  BrainCircuit,
  Cloud,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Sparkles,
  Trophy,
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
import { PixelCodeBot, type CodeBotMode } from "@/components/pixel-codebot"
import { PixelCrewMascot, type CrewMascotModel, type CrewMascotMode } from "@/components/pixel-crew-mascot"

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

type MissionMascot =
  | { type: "codebot"; mode: CodeBotMode }
  | { type: "crew"; model: CrewMascotModel; mode: CrewMascotMode }

// --- DATA ---

const experience: ExperienceItem[] = [
  {
    role: "Student Worker Application Developer",
    company: "University of Houston Enterprise Systems",
    dates: "June 2024 - Present",
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
    dates: "May 2023 - March 2024",
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
    dates: "June 2022 - December 2022",
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
    dates: "May 2021 - February 2022",
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
    dates: "Sept 2024 - Present",
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
    dates: "Aug 2022 - Aug 2025",
  },
  {
    id: 2,
    institution: "Houston Community College",
    degree: "Associate of Science in Computer Science",
    dates: "Aug 2020 - May 2022",
  },
]

const certifications: CertificationItem[] = [
  { name: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", year: "2021", icon: FaAws, brandColor: "#FF9900" },
  { name: "Azure Administrator Associate", org: "Microsoft Azure", year: "2024", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Data Engineer Associate", org: "Microsoft Azure", year: "2023", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure AI Engineer Associate", org: "Microsoft Azure", year: "2023", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Data Scientist Associate", org: "Microsoft Azure", year: "2023", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Data Fundamentals", org: "Microsoft Azure", year: "2021", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Fundamentals", org: "Microsoft Azure", year: "2021", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure AI Fundamentals", org: "Microsoft Azure", year: "2021", icon: FaMicrosoft, brandColor: "#0078D4" },
]

const techStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Flask", icon: SiFlask, color: "#94a3b8" },
  { name: "Express", icon: SiExpress, color: "#94a3b8" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
]

const stats = [
  { value: "Top 5", label: "HackRice 15" },
  { value: "8", label: "Cloud certs" },
  { value: "4", label: "SWE roles" },
]

const missionBriefs = [
  {
    title: "Interfaces",
    detail: "React and TypeScript screens with clean dashboards, auth flows, and project polish.",
    metric: "front end",
    icon: Layers3,
    mascot: { type: "codebot", mode: "present" },
  },
  {
    title: "APIs and data",
    detail: "Node, Flask, Express, and database work that keep product workflows moving.",
    metric: "backend",
    icon: Database,
    mascot: { type: "crew", model: "bug", mode: "action" },
  },
  {
    title: "Cloud and AI",
    detail: "Cloud-certified builds with practical ML, Gemini assistants, and deployment practice.",
    metric: "shipping",
    icon: BrainCircuit,
    mascot: { type: "crew", model: "scientist", mode: "present" },
  },
] satisfies { title: string; detail: string; metric: string; icon: IconType; mascot: MissionMascot }[]

const commandLog = [
  { label: "auth routes", value: "online" },
  { label: "project cards", value: "synced" },
  { label: "cloud profile", value: "verified" },
]

const heroSlides = [
  { label: "Selected", value: "Swipe Coach" },
  { label: "Stack", value: "React + Flask" },
  { label: "Focus", value: "Auth, AI, data" },
]

const projectLayout: Record<number, { card: string; aspect: string; techLimit: number; summaryClamp: string }> = {
  1: { card: "md:col-span-4 md:row-span-2", aspect: "16 / 9", techLimit: 8, summaryClamp: "line-clamp-3" },
  2: { card: "md:col-span-2", aspect: "16 / 10", techLimit: 4, summaryClamp: "line-clamp-2" },
  3: { card: "md:col-span-2", aspect: "16 / 10", techLimit: 4, summaryClamp: "line-clamp-2" },
  4: { card: "md:col-span-3", aspect: "16 / 10", techLimit: 5, summaryClamp: "line-clamp-2" },
  5: { card: "md:col-span-3", aspect: "16 / 10", techLimit: 5, summaryClamp: "line-clamp-2" },
}

const projectGuides: Record<number, MissionMascot> = {
  1: { type: "codebot", mode: "idle" },
  2: { type: "crew", model: "bug", mode: "idle" },
  3: { type: "crew", model: "bug", mode: "idle" },
  4: { type: "crew", model: "scientist", mode: "idle" },
  5: { type: "crew", model: "bug", mode: "idle" },
}

const projectSignals: Record<number, string[]> = {
  1: ["Auth0", "Gemini", "cashback"],
  2: ["roles", "matching", "events"],
  3: ["slash commands", "audio", "async"],
  4: ["AUC 0.9643", "sensitivity", "medical AI"],
  5: ["schema", "REST", "Azure"],
}

// --- ANIMATION HELPERS ---
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0.88, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] as const },
})

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0.82, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 as const },
  transition: { duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] as const },
})

// --- SHARED ---

function SectionLabel({
  index,
  kicker,
  title,
  className,
}: {
  index: string
  kicker: string
  title: string
  className?: string
}) {
  return (
    <motion.div className={cn("mb-12", className)} {...fadeUpView()}>
      <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]">
        <span className="text-primary">{index}</span>
        <span className="h-px w-8 bg-border" />
        <span className="text-muted-foreground">{kicker}</span>
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
    </motion.div>
  )
}

function MissionMascotDisplay({ mascot }: { mascot: MissionMascot }) {
  if (mascot.type === "codebot") {
    return <PixelCodeBot mode={mascot.mode} scale={0.86} />
  }

  return <PixelCrewMascot model={mascot.model} mode={mascot.mode} scale={0.95} />
}

function ProjectGuideMascot({
  guide,
  active,
  present,
}: {
  guide: MissionMascot
  active: boolean
  present: boolean
}) {
  if (guide.type === "codebot") {
    const mode: CodeBotMode = present ? "present" : active ? "point" : "idle"
    return <PixelCodeBot mode={mode} scale={0.56} />
  }

  const mode: CrewMascotMode = present ? "present" : active ? "action" : "idle"
  return <PixelCrewMascot model={guide.model} mode={mode} scale={0.58} />
}

// --- PAGE ---

export default function Page() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null)
  const [mascotMode, setMascotMode] = useState<CodeBotMode>("idle")
  const mascotTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (mascotTimerRef.current) {
        window.clearTimeout(mascotTimerRef.current)
      }
    }
  }, [])

  const triggerMascot = (mode: Exclude<CodeBotMode, "idle">, duration = 1150) => {
    if (mascotTimerRef.current) {
      window.clearTimeout(mascotTimerRef.current)
    }

    setMascotMode(mode)
    mascotTimerRef.current = window.setTimeout(() => {
      setMascotMode("idle")
      mascotTimerRef.current = null
    }, duration)
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const activateProject = (projectId: number) => {
    setActiveProjectId(projectId)
    triggerMascot("point", 900)
  }

  const deactivateProject = (projectId: number) => {
    setActiveProjectId((current) => (current === projectId ? null : current))
  }

  const certGroups = certifications.reduce<Record<string, CertificationItem[]>>((acc, cert) => {
    ;(acc[cert.org] ??= []).push(cert)
    return acc
  }, {})

  return (
    <MotionConfig reducedMotion="user">
      <main id="main-content" tabIndex={-1} className="flex flex-col items-center overflow-x-hidden outline-none">
        {/* HERO */}
        <section
          id="hero"
          className="hero-cockpit relative flex w-full items-start overflow-hidden px-4 py-10 md:min-h-[calc(100dvh-3.5rem)] md:items-center md:px-6 md:py-20"
        >
          <div className="hero-grid" />
          <div className="ambient-glow left-[12%] top-[8%] h-[28rem] w-[28rem]" />
          <div className="cockpit-rail cockpit-rail-left" aria-hidden="true" />
          <div className="cockpit-rail cockpit-rail-right" aria-hidden="true" />
          <div className="cockpit-readout" aria-hidden="true">
            <span>React</span>
            <span>APIs</span>
            <span>Cloud</span>
            <span>AI</span>
          </div>

          <div className="relative mx-auto w-full max-w-6xl">
            <div className="mission-shell grid gap-6 sm:p-7 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 lg:p-8">
              <div className="hero-brief-panel flex min-h-[31rem] flex-col justify-between rounded-xl border border-border/70 bg-background/35 p-5 md:p-8">
                <motion.div {...fadeUp(0)}>
                  <div className="mb-8 flex flex-wrap items-center gap-3">
                    <Image
                      src="/placeholder-user.png"
                      alt="Leo Nguyen headshot"
                      width={64}
                      height={64}
                      priority
                      className="avatar-ring h-14 w-14 rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                        Leo Nguyen
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">Houston, TX / full-stack developer</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_18px_hsl(var(--primary))]" />
                    Portfolio mission active
                  </div>

                  <h1 className="mt-6 max-w-3xl font-display text-[2.65rem] font-bold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                    I build software that feels calm, capable, and ready to ship.
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                    I am a cloud-certified full-stack developer focused on React interfaces,
                    practical backend systems, and AI-assisted product features that solve real user problems.
                  </p>
                </motion.div>

                <motion.div className="mt-10" {...fadeUp(0.18)}>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      className="btn-gradient"
                      onClick={() => {
                        triggerMascot("point", 1200)
                        scrollTo("projects")
                      }}
                    >
                      View Projects
                    </Button>
                    <Button variant="outline" asChild className="btn-ghost-wipe bg-transparent">
                      <Link href="mailto:nanhtu297@gmail.com?subject=Resume%20Request">
                        <FileText className="mr-2 h-4 w-4" />
                        Request Resume
                      </Link>
                    </Button>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" asChild className="h-9 w-9 text-muted-foreground hover:text-foreground">
                        <Link href="https://github.com/leo2971998" target="_blank" rel="noopener noreferrer" aria-label="Leo Nguyen on GitHub">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild className="h-9 w-9 text-muted-foreground hover:text-foreground">
                        <Link href="https://linkedin.com/in/leo-nguyen-84098a219/" target="_blank" rel="noopener noreferrer" aria-label="Leo Nguyen on LinkedIn">
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild className="h-9 w-9 text-muted-foreground hover:text-foreground">
                        <Link href="mailto:nanhtu297@gmail.com" aria-label="Email Leo Nguyen">
                          <Mail className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {stats.map((s) => (
                      <div key={s.label} className="stat-tile">
                        <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
                        <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.aside className="mission-console" {...fadeUp(0.12)}>
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-border/70 pb-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      Project controls
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight">Portfolio preview</h2>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>

                <div className="mission-stage hero-mascot-stage">
                  <div className="mission-radar" aria-hidden="true" />
                  <PixelCodeBot mode={mascotMode} scale={2.35} />
                  <div className="holo-slide-stack">
                    {heroSlides.map((slide) => (
                      <div className="holo-slide" key={slide.label}>
                        <span>{slide.label}</span>
                        <strong>{slide.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {commandLog.map((line, index) => (
                    <div key={line.label} className="console-line">
                      <span className="font-mono text-primary">0{index + 1}</span>
                      <span>{line.label}</span>
                      <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.18em] text-primary/80">
                        {line.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="mini-panel">
                    <Cloud className="h-4 w-4 text-primary" />
                    <span>Cloud ready</span>
                  </div>
                  <div className="mini-panel">
                    <Code2 className="h-4 w-4 text-primary" />
                    <span>React + API</span>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* MISSION BRIEF */}
        <section className="system-map-section w-full px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="system-map-grid grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
              <motion.div className="system-map-intro brief-intro surface p-6 md:p-7" {...fadeUpView()}>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Build map</p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  A quick map of what I build.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A compact map of the work: interfaces, backend systems, cloud experiments,
                  and the project details behind each build.
                </p>
              </motion.div>

              <div className="system-map-cards grid gap-4 md:grid-cols-3">
                {missionBriefs.map((brief, index) => {
                  const Icon = brief.icon
                  return (
                    <motion.article
                      key={brief.title}
                      className="system-map-card brief-card surface p-5"
                      {...fadeUpView(0.08 + index * 0.05)}
                    >
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="system-map-index">0{index + 1}</span>
                        <div className="brief-mascot">
                          <MissionMascotDisplay mascot={brief.mascot} />
                        </div>
                      </div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary/90">
                        {brief.metric}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{brief.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{brief.detail}</p>
                    </motion.article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* TECH */}
        <section className="w-full px-6 py-20">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              className="tech-deck mb-8 flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between md:p-6"
              {...fadeUpView()}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Tech I work with
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  Tools behind the builds.
                </h2>
              </div>
              <PixelCrewMascot model="scientist" mode="action" scale={1.32} />
            </motion.div>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6"
              {...fadeUpView(0.1)}
            >
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <tech.icon
                    className="h-6 w-6 opacity-60 transition-all duration-300 [filter:grayscale(1)] group-hover:opacity-100 group-hover:[filter:grayscale(0)]"
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="project-deck-section w-full scroll-mt-14 px-6 py-24 md:py-28">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionLabel index="01" kicker="Selected work" title="Projects" className="mb-0" />
              <div className="project-deck-command">
                <div>
                  <span>Build queue</span>
                  <strong>{projects.length} selected projects</strong>
                </div>
                <div className="project-slot-strip" aria-label="Project slots">
                  {projects.map((project, index) => (
                    <span className={index === 0 ? "is-active" : undefined} key={project.id}>
                      0{index + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-inspection-grid grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-6">
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
                const guide = projectGuides[project.id] ?? projectGuides[1]
                const signals = projectSignals[project.id] ?? project.tech.slice(0, 3)
                const isProjectActive = activeProjectId === project.id || (isFeatured && mascotMode !== "idle")
                const guideState = isExpanded ? "present" : isProjectActive ? "active" : "idle"

                return (
                  <motion.article
                    key={project.id}
                    className={cn("project-card surface flex h-full flex-col overflow-hidden p-5", layout.card)}
                    {...fadeUpView(Math.min(index * 0.06, 0.3))}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect()
                      e.currentTarget.style.setProperty("--glow-x", `${e.clientX - rect.left}px`)
                      e.currentTarget.style.setProperty("--glow-y", `${e.clientY - rect.top}px`)
                    }}
                    onMouseEnter={() => activateProject(project.id)}
                    onMouseLeave={() => deactivateProject(project.id)}
                    onFocus={() => activateProject(project.id)}
                    onBlur={(e) => {
                      const nextTarget = e.relatedTarget
                      if (!(nextTarget instanceof Node) || !e.currentTarget.contains(nextTarget)) {
                        deactivateProject(project.id)
                      }
                    }}
                  >
                    <div
                      className="project-media-frame relative mb-4 overflow-hidden rounded-xl border border-border bg-background/40"
                      style={{ aspectRatio: layout.aspect }}
                    >
                      <div className="project-scan-sweep" aria-hidden="true" />
                      {project.images && project.images.length > 0 ? (
                        <ImageDotsSlider
                          images={project.images}
                          alt={project.title}
                          onSlideAction={() => {
                            setActiveProjectId(project.id)
                            triggerMascot("point", 1200)
                          }}
                        />
                      ) : (
                        <Image
                          src={project.coverImg || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-contain p-2"
                          sizes="(min-width: 768px) 33vw, 100vw"
                        />
                      )}
                      <div className="project-card-guide" data-guide-state={guideState}>
                        <ProjectGuideMascot guide={guide} active={isProjectActive} present={isExpanded} />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-bold tracking-tight">{project.title}</h3>
                          <p className="font-mono text-xs text-muted-foreground">{project.dates}</p>
                        </div>
                      </div>

                      {project.hackathon && (
                        <div className="flex flex-wrap gap-1.5">
                          <Badge className="flex items-center gap-1 text-xs">
                            <Code2 className="h-3 w-3" />
                            {project.hackathon.name}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                            <Trophy className="h-3 w-3" />
                            {project.hackathon.placement}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                            <Award className="h-3 w-3" />
                            {project.hackathon.award}
                          </Badge>
                        </div>
                      )}

                      <p className={cn("text-sm leading-relaxed text-muted-foreground", layout.summaryClamp)}>
                        {project.solution[0]}
                      </p>

                      <div className="project-signal-strip">
                        {signals.map((signal) => (
                          <span key={signal}>{signal}</span>
                        ))}
                      </div>

                      {isFeatured && (
                        <div className="featured-proof-grid">
                          <div>
                            <span>Challenge</span>
                            <p>{project.problem[0]}</p>
                          </div>
                          <div>
                            <span>Build</span>
                            <p>{project.solution[1] ?? project.solution[0]}</p>
                          </div>
                        </div>
                      )}

                      <div className={cn("flex flex-wrap gap-1.5 pt-2", isFeatured ? "mt-3" : "mt-auto")}>
                        {project.tech.slice(0, layout.techLimit).map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="border-border text-xs font-normal text-muted-foreground"
                          >
                            {t}
                          </Badge>
                        ))}
                        {!isFeatured && project.tech.length > layout.techLimit && (
                          <Badge variant="outline" className="border-border text-xs font-normal text-muted-foreground">
                            +{project.tech.length - layout.techLimit}
                          </Badge>
                        )}
                      </div>

                      {isFeatured && contributions.length > 0 && (
                        <div className="mt-2">
                          <button
                            className="flex items-center gap-1 rounded-sm text-xs font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            onClick={() => {
                              setExpandedProject(isExpanded ? null : project.id)
                              triggerMascot("present", 1200)
                            }}
                          >
                            {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                            {isExpanded ? "Hide" : "Show"} contributions ({contributions.length})
                          </button>
                          {isExpanded && (
                            <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-muted-foreground">
                              {contributions.map((c) => (
                                <li key={c}>{c}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

                      <div className="mt-3 flex gap-2">
                        {project.repoUrl && (
                          <Button variant="outline" size="sm" asChild className="btn-ghost-wipe h-8 bg-transparent text-xs">
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

        {/* EXPERIENCE */}
        <section id="experience" className="w-full scroll-mt-14 px-6 py-24 md:py-28">
          <div className="container mx-auto max-w-3xl">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionLabel index="02" kicker="Where I've worked" title="Experience" className="mb-0" />
              <motion.div className="section-companion" {...fadeUpView(0.08)}>
                <PixelCrewMascot model="bug" mode="action" scale={1.3} />
              </motion.div>
            </div>

            <div className="relative ml-2 space-y-12 border-l border-border pl-8">
              {experience.map((job, i) => (
                <motion.div key={`${job.role}-${job.company}`} className="relative" {...fadeUpView(i * 0.06)}>
                  <span className="absolute -left-[2.6rem] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">
                    {job.dates} - {job.location}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">{job.role}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                    {job.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section id="credentials" className="w-full scroll-mt-14 px-6 py-24 md:py-28">
          <div className="container mx-auto max-w-3xl">
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionLabel index="03" kicker="Education & certs" title="Credentials" className="mb-0" />
              <motion.div className="section-companion" {...fadeUpView(0.08)}>
                <PixelCrewMascot model="scientist" mode="present" scale={1.3} />
              </motion.div>
            </div>

            {/* Education: clean rows, no cards */}
            <motion.div className="mb-16" {...fadeUpView()}>
              <h3 className="mb-2 font-mono text-sm tracking-tight text-muted-foreground">
                Education
              </h3>
              <div>
                {education.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-baseline justify-between gap-4 border-b border-border py-4"
                  >
                    <div className="min-w-0">
                      <h4 className="font-medium">{item.institution}</h4>
                      <p className="text-sm text-muted-foreground">{item.degree}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">{item.dates}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications: grouped by issuer, compact chips */}
            <motion.div {...fadeUpView(0.05)}>
              <h3 className="mb-5 font-mono text-sm tracking-tight text-muted-foreground">
                Certifications
              </h3>
              <div className="space-y-8">
                {Object.entries(certGroups).map(([org, certs]) => {
                  const Icon = certs[0].icon
                  const color = certs[0].brandColor
                  return (
                    <div key={org}>
                      <div className="mb-3 flex items-center gap-2.5">
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-md"
                          style={{ backgroundColor: color }}
                        >
                          <Icon className="h-3.5 w-3.5 text-white" />
                        </span>
                        <h4 className="text-sm font-semibold">{org}</h4>
                        <span className="font-mono text-xs text-muted-foreground">
                          {certs.length} {certs.length === 1 ? "cert" : "certs"}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {certs.map((cert) => (
                          <span
                            key={cert.name}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 text-sm"
                          >
                            <span className="font-mono text-[11px] text-muted-foreground">{cert.year}</span>
                            {cert.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p className="font-mono text-xs">Leo Nguyen - Houston, TX</p>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="https://github.com/leo2971998" target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="https://linkedin.com/in/leo-nguyen-84098a219/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-1.5 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => scrollTo("hero")}
            >
              <ArrowUp className="mr-1.5 h-4 w-4" />
              Back to top
            </Button>
          </div>
        </div>
      </footer>
    </MotionConfig>
  )
}

// ---------- Image slider with dot controls ----------
function ImageDotsSlider({
  images,
  alt,
  onSlideAction,
}: {
  images: string[]
  alt: string
  onSlideAction?: () => void
}) {
  const [index, setIndex] = useState(0)

  const safeIndex = images.length > 0 ? Math.min(Math.max(index, 0), images.length - 1) : 0
  const current = images[safeIndex] ?? "/placeholder.svg"
  const showControls = images.length > 1

  const showSlide = (nextIndex: number) => {
    if (!showControls) return

    const normalizedIndex = (nextIndex + images.length) % images.length
    setIndex(normalizedIndex)
    onSlideAction?.()
  }

  return (
    <div className="relative h-full w-full">
      <Image src={current} alt={alt} fill className="object-contain p-2" sizes="(min-width: 768px) 50vw, 100vw" />

      {showControls && (
        <>
          <button
            type="button"
            aria-label="Show previous project image"
            onClick={() => showSlide(safeIndex - 1)}
            className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md border border-border bg-background/78 text-foreground shadow-lg shadow-background/20 backdrop-blur transition hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Show next project image"
            onClick={() => showSlide(safeIndex + 1)}
            className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md border border-border bg-background/78 text-foreground shadow-lg shadow-background/20 backdrop-blur transition hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-2">
          {images.map((_, i) => {
            const active = i === safeIndex
            return (
              <button
                key={i}
                type="button"
                aria-label={`Show image ${i + 1}`}
                aria-current={active}
                onClick={() => showSlide(i)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border border-border transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  active ? "scale-110 bg-primary" : "bg-muted-foreground/30 hover:scale-105",
                )}
              />
            )
          })}
          </div>
        </>
      )}
    </div>
  )
}
