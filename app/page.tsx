"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import React, { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  School,
  ExternalLink,
  Briefcase,
  Award,
  FileText,
  Trophy,
  CircleHelp,
  Lightbulb,
} from "lucide-react"
import { FaAws, FaMicrosoft } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"
import { cn } from "@/lib/utils"

// --- DATA ---
const sections = [
  { id: "hero", label: "About" },
  { id: "experience", label: "Professional Experience" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Education & Certifications" },
]

const experience = [
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

// --- PROJECTS (Swipe Coach first) ---
const projects = [
  // Swipe Coach — with slider, hackathon badges, and contributions
  {
    id: 1,
    title: "Swipe Coach",
    dates: "Sept 2025",
    images: [
      "/1.png",
      "/2.png",
      "/3.png",
      "/4.png",
      "/5.png",
    ],
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
      "Bootstrapped the frontend (Vite + React + TS + Tailwind + shadcn/ui), set folder/layout conventions, tightened .gitignore/env patterns.",
      "Wired Auth0 end-to-end: provider setup, protected routes, env plumbing, and authenticated layouts.",
      "Restructured repo into client/server; purged legacy UI and rebuilt core screens; removed old Plaid/auth hooks and mocks.",
      "Built/refactored Flask + Mongo backend: executable app.py, composite/partial indexes, cleanup of imports, and routes for users/accounts/transactions powering dashboards.",
      "Shipped live data features: transactions + summaries, cards CRUD/secure add flow, recommendation pipeline, and monthly budget prefs persisted and surfaced (Home + Category Momentum).",
      "Refactored recommendations UI: simplified card display, comparison visuals, and cleaner components.",
      "Multiple UX/layout passes: homepage grid fixes, slug tweaks, and general polish.",
      "Security/hygiene: removed committed .env, hardened ignores, reduced artifact churn.",
      "Integration & merges: self-merged feature branches (Mongo integration, budget, secure card flow, email-verification removal, data population, UI enhancements) into main.",
    ],
  },

  // Volunteer Management System — with contributions
  {
    id: 2,
    title: "Volunteer Management System",
    dates: "Summer 2025 - COSC 4353 - Software Design",
    coverImg: "/volunteer-management-dashboard.png",
    problem: [
      "Capstone project required a complete volunteer management platform built from scratch in a semester.",
      "Team needed to coordinate complex volunteer scheduling, event logistics, and real-time updates.",
      "Solution had to showcase solid full-stack development and deployment practices.",
    ],
    solution: [
      "Architected a Vite + React admin dashboard with responsive workflows for coordinators.",
      "Implemented a Node.js/Express backend on Vercel that powers auth, skill matching, and event updates.",
      "Delivered drag-and-drop scheduling, live synchronization, and reporting for volunteer operations.",
    ],
    tech: ["React", "Vite", "Node.js", "Express", "MySQL", "Vercel"],
    repoUrl: "https://github.com/leo2971998/COSC-4353-Project",
    liveUrl: "https://cosc-4353-project.vercel.app/",
    contributions: [
      "Built out auth & onboarding: backend for login/register, role-based auth/admin, profile completion enforcement, login persistence, flash/toast notifications, form validation.",
      "Shipped volunteer & admin workflows: Admin Dashboard route/pages, Manage Users page with major UI improvements, redirect after logout, navbar/link fixes.",
      "Implemented events/calendar: created events API, integrated calendar, VolunteerDashboard calendar, AdminDashboard calendar updates.",
      "Improved request ops & comms: multi-select volunteer requests and notification enhancements.",
      "Data model/UI linkage: connected profile skills → skill table, exposed full name, updated profile and complete-profile pages.",
      "Testing & backend structure: added modular backend (memory repo) + unit tests, adjusted Jest for ESM.",
      "DevEx & hygiene: standardized local API URLs, removed tracked lock/coverage artifacts, general cleanup.",
    ],
  },

  {
    id: 3,
    title: "MusicBot",
    dates: "Sept 2024 – Present",
    coverImg: "/discord-music-bot-interface.png",
    problem: [
      "Discord music bots lean on clunky text commands that slow down casual listeners.",
      "Servers need friendlier controls without sacrificing power features.",
    ],
    solution: [
      "Built a discord.py bot with both slash commands and interactive buttons for easy playback control.",
      "Uses asyncio and youtube_dl to queue, stream, and handle concurrent requests without lag.",
    ],
    tech: ["Python", "Discord.py", "youtube_dl", "Asyncio"],
    repoUrl: "https://github.com/leo2971998/MusicBot",
    liveUrl: null,
  },

  {
    id: 4,
    title: "COVID-19 Chest X-ray Detection",
    dates: "Spring 2025",
    coverImg: "/covid-xray-detection.png",
    problem: [
      "Clinicians must triage high volumes of chest X-rays quickly during COVID-19 surges.",
      "Manual review alone struggles to flag likely pneumonia cases fast enough.",
    ],
    solution: [
      "Trained an EfficientNetV2-B0 transfer-learning model on the CoronaHack dataset with TensorFlow/Keras.",
      "Applied phased fine-tuning, class weighting, and targeted augmentation to boost generalization.",
      "Achieved 89.10% accuracy, 0.9643 AUC, and 97.7% sensitivity for pneumonia detection.",
    ],
    tech: ["Python", "TensorFlow/Keras", "EfficientNetV2-B0", "Pandas", "NumPy"],
    repoUrl: "https://github.com/leo2971998/COSC-4368-Fundamentals-of-AI_FinalProject",
    reportUrl: "/Final_Report.pdf",
    liveUrl: null,
  },

  {
    id: 5,
    title: "Museum Management System",
    dates: "Fall 2024 - COSC 3380 - Database Systems",
    coverImg: "/museum-management-dashboard.png",
    problem: [
      "Database systems capstone required a production-style app showcasing solid schema design and APIs.",
      "Needed an end-to-end build that covered data modeling, backend services, and front-end workflows in one semester.",
    ],
    solution: [
      "Shipped a Node.js + Express backend exposing RESTful CRUD endpoints on top of MySQL.",
      "Crafted a React frontend that manages exhibits, staff, and visitors against those APIs.",
      "Deployed the full stack to Azure Static Web Apps for reliable hosting and delivery.",
    ],
    tech: ["React", "Node.js", "MySQL", "Azure", "Express"],
    repoUrl: "https://github.com/Ephimoon/MuseumDB",
  },
]

const education = [
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

const certifications = [
  { name: "AWS Certified Cloud Practitioner", org: "Amazon Web Services", year: "2021", icon: FaAws, brandColor: "#FF9900" },
  { name: "Azure Administrator Associate", org: "Microsoft", year: "2024", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Data Engineer Associate", org: "Microsoft", year: "2023", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure AI Engineer Associate", org: "Microsoft", year: "2023", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Data Scientist Associate", org: "Microsoft", year: "2023", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Data Fundamentals", org: "Microsoft", year: "2021", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure Fundamentals", org: "Microsoft", year: "2021", icon: FaMicrosoft, brandColor: "#0078D4" },
  { name: "Azure AI Fundamentals", org: "Microsoft", year: "2021", icon: FaMicrosoft, brandColor: "#0078D4" },
]

// --- ANIMATION VARIANTS ---
const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const cardContainerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

// --- THE PAGE COMPONENT ---

export default function Page() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section id="hero" className="w-full min-h-[calc(100vh-3.5rem)] flex items-center justify-center text-center md:text-left px-4">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-3xl mx-auto md:mx-0">
                <motion.h1
                  className="text-3xl sm:text-5xl md:text-6xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gradient-accent">
                    Leo Nguyen
                  </span>
                </motion.h1>
                <motion.p
                  className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Cloud-certified full-stack developer & Computer-Science student
                </motion.p>
                <motion.p
                  className="mt-6 text-base sm:text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  I build secure, scalable web solutions with React, Node.js, Python, and PeopleSoft, drawing on experience at IBM
                  Neudesic, Techwave, and the University of Houston Enterprise Systems. Multiple AWS and Microsoft Azure
                  certifications demonstrate my commitment to cloud-native engineering and continuous learning.
                </motion.p>
              </div>
              <div className="flex flex-col items-center mt-8 md:mt-0">
                <Image src="/placeholder-user.jpg" alt="Headshot" width={256} height={256} className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover" />
                <motion.div className="flex gap-4 mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                  <Button variant="outline" size="icon" asChild className="btn-ghost-wipe bg-transparent">
                    <Link href="https://github.com/leo2971998" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="btn-ghost-wipe bg-transparent">
                    <Link href="https://linkedin.com/in/leo-nguyen-84098a219/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="btn-ghost-wipe bg-transparent">
                    <Link href="mailto:nanhtu297@gmail.com">
                      <Mail className="h-6 w-6" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" onClick={() => scrollTo("experience")}>
            <ArrowDown className="h-6 w-6" />
          </Button>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-20 bg-secondary scroll-mt-14">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <Briefcase className="mr-3 h-8 w-8 text-primary" /> Professional Experience
            </h2>
            <div className="relative max-w-3xl mx-auto space-y-10 sm:space-y-12">
              {/* Timeline line - center on desktop, left on mobile */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 w-0.5 inset-y-0 bg-border translate-x-0 md:-translate-x-1/2"></div>
              {experience.map((job, index) => (
                <motion.div key={`${job.role}-${job.company}`} className="relative" custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={timelineItemVariants}>
                  {/* connector lines */}
                  <span aria-hidden className={cn("absolute left-4 sm:left-6 md:left-1/2 w-0.5 bg-border translate-x-0 md:-translate-x-1/2", index === 0 ? "top-4" : "top-0", "bottom-1/2")} />
                  <span aria-hidden className={cn("absolute left-4 sm:left-6 md:left-1/2 w-0.5 bg-border translate-x-0 md:-translate-x-1/2", index === experience.length - 1 ? "bottom-4" : "bottom-0", "top-1/2")} />
                  <div className="flex items-center mb-1">
                    {/* Timeline icon */}
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground absolute left-4 sm:left-6 top-6 md:left-1/2 md:-translate-x-1/2">
                      <Briefcase className="h-4 w-4" />
                    </div>
                  </div>
                  <Card className={`w-full ml-10 sm:ml-12 md:ml-0 md:w-[calc(50%_-_2rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} transition-shadow hover:shadow-xl`}>
                    <CardHeader>
                      <CardTitle className="text-base font-semibold">{job.role}</CardTitle>
                      <p className="text-sm text-muted-foreground">{job.dates}</p>
                      <p className="text-sm text-muted-foreground">
                        {job.company} – {job.location}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-4 space-y-1 text-sm">
                        {job.description.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-20 scroll-mt-14">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>
            <div className="flex flex-col gap-20">
              {projects.map((project, index) => (
                <motion.div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
                  {/* CONSISTENT SIZE + FULL IMAGE (no crop): use object-contain */}
                  <div className={`relative rounded-lg overflow-hidden shadow-lg ${index % 2 === 0 ? "md:order-first" : "md:order-last"} bg-muted`} style={{ aspectRatio: "600 / 420" }}>
                    {Array.isArray((project as any).images) && (project as any).images.length > 0 ? (
                      <ImageDotsSlider images={(project as any).images as string[]} alt={project.title} />
                    ) : (
                      <Image src={(project as any).coverImg || "/placeholder.svg"} alt={project.title} fill className="object-contain p-2 transition-transform duration-300 hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
                    )}
                  </div>

                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{project.dates}</p>
                    {(project as any).hackathon && (
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <Badge className="flex items-center gap-1">
                          <SiTailwindcss className="h-3.5 w-3.5" />
                          {(project as any).hackathon.name} @ {(project as any).hackathon.host}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Trophy className="h-3.5 w-3.5" />
                          {(project as any).hackathon.placement}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Award className="h-3.5 w-3.5" />
                          {(project as any).hackathon.award}
                        </Badge>
                      </div>
                    )}
                    <div className="grid gap-4 md:grid-cols-2 mb-6">
                      <Card className="h-full border border-border/60 bg-background/80 shadow-sm">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <CircleHelp className="h-4 w-4 text-primary" aria-hidden />
                            <CardTitle className="text-sm font-semibold uppercase tracking-wide text-primary">
                              The Problem
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
                            {(
                              Array.isArray((project as any).problem)
                                ? (project as any).problem
                                : [(project as any).problem]
                            ).map((point: string, idx: number) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                      <Card className="h-full border border-border/60 bg-background/80 shadow-sm">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-emerald-600" aria-hidden />
                            <CardTitle className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                              The Solution
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground">
                            {(
                              Array.isArray((project as any).solution)
                                ? (project as any).solution
                                : [(project as any).solution]
                            ).map((point: string, idx: number) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {(project as any).tech?.map((tech: string) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>

                    {(project as any).contributions && (project as any).contributions.length > 0 && (
                      <>
                        <h4 className="font-semibold mt-2 mb-1 text-primary">My Contributions</h4>
                        <ul className="list-disc pl-4 space-y-1 text-sm mb-6">
                          {(project as any).contributions.map((c: string, i: number) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    <div className="flex gap-4">
                      {(project as any).repoUrl && (
                        <Button variant="outline" asChild className="btn-ghost-wipe bg-transparent">
                          <Link href={(project as any).repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Github
                          </Link>
                        </Button>
                      )}

                      {(project as any).liveUrl && (
                        <Button asChild>
                          <Link href={(project as any).liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                      )}

                      {(project as any).reportUrl && (
                        <Button asChild>
                          <Link href={(project as any).reportUrl} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" /> Read Report
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials Section (stack-by-year timeline) */}
        <section id="credentials" className="w-full py-20 bg-secondary scroll-mt-14">
          <div className="container px-4">
            <div className="grid gap-16 md:grid-cols-2">
              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
                  <School className="mr-3 h-8 w-8 text-primary" /> Education
                </h2>

                {/* ---------- Education timeline ---------- */}
                <TimelineColumn
                  items={education}
                  getYear={(e) => getEndYear(e.dates)}
                  renderCard={({ institution, degree, dates }) => (
                    <Card className="transition-shadow hover:shadow-xl w-56">
                      <CardHeader className="text-center">
                        <CardTitle className="text-base font-semibold">{institution}</CardTitle>
                        <p className="text-sm text-muted-foreground">{degree}</p>
                        <p className="text-sm text-muted-foreground">{dates}</p>
                      </CardHeader>
                    </Card>
                  )}
                  iconFn={(idx) => {
                    const colors = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"]
                    const color = colors[idx % colors.length]
                    return (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: `hsl(var(--${color}))` }}>
                        <School className="h-4 w-4" />
                      </div>
                    )
                  }}
                />
              </div>

              <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
                  <Award className="mr-3 h-8 w-8 text-primary" /> Certifications
                </h2>

                {/* ---------- Certification timeline ---------- */}
                <TimelineColumn
                  items={certifications}
                  getYear={(c) => c.year}
                  renderCard={({ name, org, year, icon: Icon, brandColor }) => (
                    <Card className="transition-shadow hover:shadow-xl w-56">
                      <CardHeader className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: brandColor }}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <CardTitle className="text-base font-semibold">{name}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {org} &nbsp;|&nbsp; {year}
                        </p>
                      </CardHeader>
                    </Card>
                  )}
                  iconFn={(idx) => {
                    const colors = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"]
                    const color = colors[idx % colors.length]
                    return (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: `hsl(var(--${color}))` }}>
                        <Award className="h-4 w-4" />
                      </div>
                    )
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

// ---------- Helper functions ----------
const getEndYear = (dates: string) => {
  const m = dates.match(/(\d{4})\s*$/)
  return m ? m[1] : "N/A"
}

const groupByYear = <T,>(arr: T[], getYear: (item: T) => string): Record<string, T[]> =>
  arr.reduce((acc, cur) => {
    const y = getYear(cur)
    ;(acc[y] ||= []).push(cur)
    return acc
  }, {} as Record<string, T[]>)

type TimelineColumnProps<T> = {
  items: T[]
  getYear: (item: T) => string
  renderCard: (item: T) => React.ReactNode
  icon?: React.ReactNode
  iconFn?: (index: number, group: T[]) => React.ReactNode
}

function TimelineColumn<T>({ items, getYear, renderCard, icon, iconFn }: TimelineColumnProps<T>) {
  const groups = useMemo(() => groupByYear(items, getYear), [items, getYear])

  return (
    <div className="relative mx-auto my-16 max-w-full flex flex-col items-center">
      <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

      {Object.entries(groups)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, group], groupIdx) => (
          <motion.div key={year} className="relative flex flex-col items-center mb-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: groupIdx * 0.1 }}>
            <div className="flex flex-col space-y-4 mb-3">
              {group.map((item, idx) => (
                <div key={idx}>{renderCard(item as any)}</div>
              ))}
            </div>

            <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              {year}
            </div>

            {(icon || iconFn) && <div className="absolute -top-3 left-1/2 -translate-x-1/2">{iconFn ? iconFn(groupIdx, group) : icon}</div>}
          </motion.div>
        ))}
    </div>
  )
}

// ---------- Image slider with dot controls ----------
function ImageDotsSlider({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0) // default to first image (1.png)

  const safeIndex = Math.min(Math.max(index, 0), images.length - 1)
  const current = images[safeIndex]

  return (
    <div className="relative h-full w-full">
      {/* Image */}
      <Image src={current} alt={alt} fill className="object-contain p-2 transition-transform duration-300 hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />

      {/* Dots */}
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
    </div>
  )
}
