"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion, MotionConfig } from "framer-motion"
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type RefObject } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowUp,
  Award,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Trophy,
  X,
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
  outcome: string
  result: string
  role: string
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
    outcome: "Credit card recommendation app that helps users maximize rewards at checkout.",
    result: "Top 5 at HackRice 15 - Capital One Challenge Winner",
    role: "Frontend, auth, API, and AI assistant flow",
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
    outcome: "Volunteer admin platform for matching people, skills, and event needs.",
    result: "Semester capstone shipped on Vercel",
    role: "Full-stack dashboard, auth, and workflow logic",
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
    outcome: "Discord music bot with slash commands and button-based playback controls.",
    result: "Personal automation project",
    role: "Python bot architecture and async controls",
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
    outcome: "Chest X-ray classifier tuned for high-sensitivity COVID-19 triage support.",
    result: "89.10% accuracy - 0.9643 AUC",
    role: "Model training, evaluation, and report writing",
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
    outcome: "Full-stack museum database app with REST APIs and Azure deployment.",
    result: "Database systems capstone",
    role: "React frontend, Express APIs, and MySQL schema work",
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

const azureCerts = certifications.filter((cert) => cert.org === "Microsoft Azure").length

// Recruiter quick-scan rows shown in the hero, so the essentials sit above the fold.
const atAGlance = [
  { label: "Now", value: `${experience[0].role}, University of Houston` },
  { label: "Experience", value: `${experience.length} engineering roles since 2021, incl. Neudesic (an IBM Company)` },
  { label: "Education", value: `${education[0].degree}, ${education[0].institution}` },
  { label: "Core stack", value: "React, TypeScript, Node/Express, Flask, Python, MongoDB, MySQL" },
  { label: "Cloud", value: `${azureCerts} Azure certifications + AWS Cloud Practitioner` },
  { label: "Highlight", value: "Top 5 at HackRice 15, Capital One Challenge winner" },
]

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

function ProjectDetailsDrawer({
  project,
  guide,
  signals,
  closeButtonRef,
  onClose,
  onSlideAction,
}: {
  project: Project
  guide: MissionMascot
  signals: string[]
  closeButtonRef: RefObject<HTMLButtonElement | null>
  onClose: () => void
  onSlideAction: () => void
}) {
  const images = project.images ?? (project.coverImg ? [project.coverImg] : ["/placeholder.svg"])
  const contributions = project.contributions ?? []
  const hasActions = project.repoUrl || project.liveUrl || project.reportUrl
  const drawerRef = useRef<HTMLElement>(null)

  const handleDrawerKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return

    const drawer = drawerRef.current
    if (!drawer) return

    const focusable = Array.from(
      drawer.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true")

    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <motion.div
      className="project-detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <motion.aside
        ref={drawerRef}
        className="project-detail-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-detail-title-${project.id}`}
        onKeyDown={handleDrawerKeyDown}
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 28 }}
        transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div className="project-detail-topbar">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              Case study / {project.dates}
            </p>
            <h2
              id={`project-detail-title-${project.id}`}
              className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl"
            >
              {project.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {project.outcome}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="project-detail-close"
            aria-label="Close project details"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="project-detail-hero">
          <div className="project-detail-media">
            <div className="project-scan-sweep" aria-hidden="true" />
            <ImageDotsSlider images={images} alt={`${project.title} screenshots`} onSlideAction={onSlideAction} />
          </div>

          <div className="project-detail-side">
            <div className="project-detail-guide" data-guide-state="present">
              <ProjectGuideMascot guide={guide} active present />
            </div>
            <div className="project-signal-strip">
              {signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
            <p className="project-result-note">{project.result}</p>
            {project.hackathon && (
              <div className="project-detail-awards">
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
          </div>
        </div>

        <div className="project-detail-grid">
          <section className="project-detail-section">
            <span>Challenge</span>
            <ul>
              {project.problem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="project-detail-section">
            <span>Build</span>
            <ul>
              {project.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        {contributions.length > 0 && (
          <section className="project-detail-section">
            <span>My contributions</span>
            <ul>
              {contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="project-detail-section">
          <span>Tech stack</span>
          <div className="project-detail-tech">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline" className="border-border text-xs font-normal text-muted-foreground">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {hasActions && (
          <div className="project-detail-actions">
            {project.repoUrl && (
              <Button variant="outline" size="sm" asChild className="btn-ghost-wipe bg-transparent text-xs">
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-3.5 w-3.5" />
                  Code
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" asChild className="btn-gradient text-xs">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  Demo
                </Link>
              </Button>
            )}
            {project.reportUrl && (
              <Button variant="outline" size="sm" asChild className="bg-transparent text-xs">
                <Link href={project.reportUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-1.5 h-3.5 w-3.5" />
                  Report
                </Link>
              </Button>
            )}
          </div>
        )}
      </motion.aside>
    </motion.div>
  )
}

// --- PAGE ---

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null)
  const [mascotMode, setMascotMode] = useState<CodeBotMode>("idle")
  const mascotTimerRef = useRef<number | null>(null)
  const projectDrawerCloseRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    return () => {
      if (mascotTimerRef.current) {
        window.clearTimeout(mascotTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!selectedProject) return

    const previousFocus = document.activeElement
    const originalOverflow = document.body.style.overflow

    document.body.style.overflow = "hidden"
    projectDrawerCloseRef.current?.focus({ preventScroll: true })

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus({ preventScroll: true })
      }
    }
  }, [selectedProject])

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
    document.getElementById(id)?.scrollIntoView({ behavior: "auto" })
  }

  const activateProject = (projectId: number) => {
    setActiveProjectId(projectId)
    triggerMascot("point", 900)
  }

  const deactivateProject = (projectId: number) => {
    setActiveProjectId((current) => (current === projectId ? null : current))
  }

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project)
    setActiveProjectId(project.id)
    triggerMascot("present", 1200)
  }

  const selectedProjectGuide = selectedProject
    ? projectGuides[selectedProject.id] ?? projectGuides[1]
    : projectGuides[1]
  const selectedProjectSignals = selectedProject
    ? projectSignals[selectedProject.id] ?? selectedProject.tech.slice(0, 3)
    : []

  const certGroups = certifications.reduce<Record<string, CertificationItem[]>>((acc, cert) => {
    ;(acc[cert.org] ??= []).push(cert)
    return acc
  }, {})

  return (
    <MotionConfig reducedMotion="user">
      <main id="main-content" tabIndex={-1} className="portfolio-home flex flex-col items-center overflow-x-hidden outline-none">
        {/* HERO */}
        <section
          id="hero"
          className="hero-cockpit relative flex w-full items-start overflow-hidden px-4 py-6 md:px-6 md:py-10"
        >
          <div className="hero-grid" />
          <div className="ambient-glow left-[12%] top-[8%] h-[28rem] w-[28rem]" />

          <div className="relative mx-auto w-full max-w-6xl">
            <div className="mission-shell grid gap-6 sm:p-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8">
              <div className="hero-brief-panel flex flex-col justify-between rounded-xl border border-border/70 bg-background/35 p-5 md:p-8">
                <motion.div {...fadeUp(0)}>
                  <div className="mb-6 flex flex-wrap items-center gap-3">
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
                    Available for full-stack roles
                  </div>

                  <h1 className="mt-6 max-w-3xl font-display text-[2.65rem] font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.25rem]">
                    Full-stack developer.
                    <br />
                    <span className="text-primary">React, cloud &amp; AI.</span>
                  </h1>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                    I turn messy workflows into clean interfaces and dependable APIs. Most recently:
                    Swipe Coach, a credit card rewards coach that placed Top 5 at HackRice 15.
                  </p>
                </motion.div>

                <motion.div className="mt-6" {...fadeUp(0.18)}>
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
                      <Link href="mailto:nanhtu297@gmail.com?subject=Resume%20Request" aria-label="Email Leo Nguyen for resume">
                        <FileText className="mr-2 h-4 w-4" />
                        Resume
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

                  <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                    {stats.map((s) => (
                      <div key={s.label} className="stat-tile !p-3 sm:!p-4">
                        <div className="font-display text-xl font-bold text-primary sm:text-2xl">{s.value}</div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.aside className="mission-console !min-h-0" {...fadeUp(0.12)}>
                <div className="mb-2 flex items-center justify-between gap-4 border-b border-border/70 pb-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      For recruiters
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight">At a glance</h2>
                  </div>
                  <div className="-my-2 shrink-0" aria-hidden="true">
                    <PixelCodeBot mode={mascotMode} scale={0.95} />
                  </div>
                </div>

                <dl className="divide-y divide-border/70">
                  {atAGlance.map((row) => (
                    <div key={row.label} className="grid gap-1 py-2.5 sm:grid-cols-[7rem_1fr] sm:gap-3 sm:py-3">
                      <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{row.label}</dt>
                      <dd className="text-sm leading-relaxed text-foreground">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-3 grid grid-cols-3 gap-2 border-t border-border/70 pt-4 text-center text-xs font-medium">
                  {[
                    { id: "projects", label: `${projects.length} projects` },
                    { id: "experience", label: `${experience.length} roles` },
                    { id: "skills", label: `${certifications.length} certs` },
                  ].map((jump) => (
                    <a
                      key={jump.id}
                      href={`#${jump.id}`}
                      className="rounded-lg border border-border bg-background/60 px-2 py-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {jump.label} →
                    </a>
                  ))}
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="project-deck-section w-full scroll-mt-14 px-4 py-10 md:px-6 md:py-14">
          <div className="container mx-auto max-w-6xl px-0 sm:px-6">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionLabel index="01" kicker="Selected work" title="Projects" className="mb-0" />
              <div className="project-deck-command max-md:!hidden">
                <div>
                  <span>Selected projects</span>
                  <strong>{projects.length} case studies</strong>
                </div>
                <div className="project-slot-strip" aria-label="Project slots">
                  {projects.map((project, index) => (
                    <button
                      type="button"
                      className={selectedProject?.id === project.id || (!selectedProject && index === 0) ? "is-active" : undefined}
                      key={project.id}
                      aria-label={`View ${project.title} case study`}
                      onClick={() => openProjectDetails(project)}
                    >
                      0{index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured project spans the row; the rest are compact thumbnail cards to keep the section short. */}
            <div className="project-inspection-grid grid grid-cols-1 gap-4 md:grid-cols-2">
              {projects.map((project, index) => {
                const featured = index === 0
                const guide = projectGuides[project.id] ?? projectGuides[1]
                const signals = projectSignals[project.id] ?? project.tech.slice(0, 3)
                const previewImage = project.images?.[0] ?? project.coverImg ?? "/placeholder.svg"
                const isProjectActive =
                  activeProjectId === project.id || selectedProject?.id === project.id || (featured && mascotMode !== "idle")
                const guideState = selectedProject?.id === project.id ? "present" : isProjectActive ? "active" : "idle"

                return (
                  <motion.article
                    key={project.id}
                    className={cn(
                      "project-card surface grid gap-4 overflow-hidden p-4 sm:p-5",
                      featured
                        ? "md:col-span-2 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-8"
                        : "grid-cols-[6.5rem_1fr] sm:grid-cols-[9.5rem_1fr]",
                    )}
                    {...fadeUpView(Math.min(index * 0.05, 0.2))}
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
                      className={cn(
                        "project-media-frame relative overflow-hidden rounded-xl border border-border bg-background/40",
                        featured ? "aspect-[16/9]" : "aspect-[4/3] self-start",
                      )}
                    >
                      <div className="project-scan-sweep" aria-hidden="true" />
                      <Image
                        src={previewImage}
                        alt={`${project.title} preview`}
                        fill
                        className={cn("object-contain", featured ? "p-2" : "p-1")}
                        sizes={featured ? "(min-width: 768px) 55vw, 100vw" : "160px"}
                      />
                      {featured && (
                        <div className="project-card-guide" data-guide-state={guideState}>
                          <ProjectGuideMascot guide={guide} active={isProjectActive} present={selectedProject?.id === project.id} />
                        </div>
                      )}
                    </div>

                    <div className="project-card-body flex min-w-0 flex-col gap-2.5">
                      <div>
                        <h3
                          className={cn(
                            "font-display font-bold tracking-tight",
                            featured ? "text-2xl md:text-3xl" : "text-base leading-snug sm:text-lg",
                          )}
                        >
                          {project.title}
                        </h3>
                        <p className="font-mono text-xs text-muted-foreground">{project.dates}</p>
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
                        </div>
                      )}

                      <p className={cn("text-sm leading-relaxed text-muted-foreground", !featured && "line-clamp-2")}>
                        {project.outcome}
                      </p>

                      {featured ? (
                        <>
                          <div className="project-card-proof">
                            <span>{project.result}</span>
                            <span>{project.role}</span>
                          </div>
                          <div className="project-signal-strip">
                            {signals.map((signal) => (
                              <span key={signal}>{signal}</span>
                            ))}
                          </div>
                        </>
                      ) : (
                        <p className="text-xs font-semibold leading-snug text-foreground">{project.result}</p>
                      )}

                      <div className="project-card-action-row mt-auto flex-wrap gap-x-4 gap-y-2 pt-1">
                        <Button
                          type="button"
                          size="sm"
                          className={cn("btn-gradient text-xs", featured ? "h-9" : "h-8 px-3")}
                          onClick={() => openProjectDetails(project)}
                        >
                          <FileText className="mr-1.5 h-3.5 w-3.5" />
                          Case study
                        </Button>
                        {project.liveUrl && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live
                          </Link>
                        )}
                        {project.repoUrl && (
                          <Link
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                          >
                            <Github className="h-3.5 w-3.5" />
                            Code
                          </Link>
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
        <section id="experience" className="w-full scroll-mt-14 px-4 py-10 md:px-6 md:py-14">
          <div className="container mx-auto max-w-6xl px-0 sm:px-6">
            <SectionLabel index="02" kicker="Where I've worked" title="Experience" className="mb-8" />

            <div className="grid gap-4 md:grid-cols-2">
              {experience.map((job, i) => (
                <motion.article
                  key={`${job.role}-${job.company}`}
                  className="surface flex flex-col p-5"
                  {...fadeUpView(Math.min(i * 0.05, 0.15))}
                >
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-primary">{job.dates}</p>
                    {job.dates.includes("Present") ? (
                      <Badge className="text-[10px]">Current</Badge>
                    ) : (
                      <span className="text-xs text-muted-foreground">{job.location}</span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight">{job.role}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted-foreground">
                    {job.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS & CREDENTIALS */}
        <section id="skills" className="w-full scroll-mt-14 px-4 py-10 md:px-6 md:py-14">
          <div className="container mx-auto max-w-6xl px-0 sm:px-6">
            <SectionLabel index="03" kicker="What I bring" title="Skills & credentials" className="mb-8" />

            <div className="grid gap-4 lg:grid-cols-3">
              <motion.div className="surface p-5" {...fadeUpView()}>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Skills</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <li
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-sm"
                    >
                      <tech.icon className="h-3.5 w-3.5" style={{ color: tech.color }} aria-hidden="true" />
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="surface p-5" {...fadeUpView(0.05)}>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Education</h3>
                <ul className="mt-2 divide-y divide-border">
                  {education.map((item) => (
                    <li key={item.id} className="py-3">
                      <p className="font-medium">{item.institution}</p>
                      <p className="text-sm text-muted-foreground">{item.degree}</p>
                      <p className="mt-0.5 font-mono text-xs text-muted-foreground">{item.dates}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div className="surface p-5" {...fadeUpView(0.1)}>
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Certifications · {certifications.length}
                </h3>
                <div className="mt-4 space-y-4">
                  {Object.entries(certGroups).map(([org, certs]) => {
                    const Icon = certs[0].icon
                    return (
                      <div key={org}>
                        <div className="mb-1.5 flex items-center gap-2">
                          <span
                            className="flex h-5 w-5 items-center justify-center rounded"
                            style={{ backgroundColor: certs[0].brandColor }}
                          >
                            <Icon className="h-3 w-3 text-white" />
                          </span>
                          <h4 className="text-sm font-semibold">{org}</h4>
                        </div>
                        <ul className="space-y-1">
                          {certs.map((cert) => (
                            <li key={cert.name} className="flex items-baseline justify-between gap-3 text-sm">
                              <span className="text-foreground/90">{cert.name}</span>
                              <span className="shrink-0 font-mono text-[11px] text-muted-foreground">{cert.year}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-cta-section w-full scroll-mt-16 px-4 pb-14 pt-4 md:px-6 md:pb-16">
          <div className="container mx-auto max-w-6xl px-0 sm:px-6">
            <motion.div className="contact-cta" {...fadeUpView()}>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Contact</p>
                <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                  Let&apos;s build something useful.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  I am open to full-stack, frontend, backend, cloud, and AI product engineering roles.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button className="btn-gradient" asChild>
                  <Link href="mailto:nanhtu297@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email me
                  </Link>
                </Button>
                <Button variant="outline" asChild className="btn-ghost-wipe bg-transparent">
                  <Link href="mailto:nanhtu297@gmail.com?subject=Resume%20Request" aria-label="Email Leo Nguyen for resume">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
                <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
                  <Link href="https://linkedin.com/in/leo-nguyen-84098a219/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsDrawer
            project={selectedProject}
            guide={selectedProjectGuide}
            signals={selectedProjectSignals}
            closeButtonRef={projectDrawerCloseRef}
            onClose={() => setSelectedProject(null)}
            onSlideAction={() => {
              setActiveProjectId(selectedProject.id)
              triggerMascot("point", 1200)
            }}
          />
        )}
      </AnimatePresence>

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
            className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-border bg-background/95 text-foreground shadow-lg shadow-background/20 backdrop-blur transition hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Show next project image"
            onClick={() => showSlide(safeIndex + 1)}
            className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md border border-border bg-background/95 text-foreground shadow-lg shadow-background/20 backdrop-blur transition hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
