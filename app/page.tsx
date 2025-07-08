"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import React, { useMemo } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, ArrowDown, School, ExternalLink, Briefcase, Award } from "lucide-react"
import { FaAws, FaMicrosoft } from "react-icons/fa"
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

const projects = [
  {
    id: 1,
    title: "Museum Management System",
    dates: "Aug 2024 – Dec 2024",
    coverImg: "/museum-management-dashboard.png",
    problem:
      "For a capstone database course, the brief called for a practical full-stack application demonstrating database design, API development, and front-end integration. The challenge was to deliver a comprehensive system from scratch within a single semester.",
    solution:
      "I designed and developed a complete museum management system. The back-end, built with Node.js and Express, exposes a robust RESTful API for all CRUD operations against a MySQL database. The React front-end consumes this API to provide an intuitive interface for managing exhibits, staff, and visitors. The entire application is deployed on Azure Static Web Apps for reliable and scalable hosting.",
    tech: ["React", "Node.js", "MySQL", "Azure", "Express"],
    repoUrl: "https://github.com/Ephimoon/MuseumDB",
  },
  {
    id: 2,
    title: "MusicBot",
    dates: "Sept 2024 – Present",
    coverImg: "/discord-music-bot-interface.png",
    problem:
      "Music playback in Discord servers often relies on cumbersome text commands and offers limited user convenience.",
    solution:
      "I developed a Python-based Discord bot using discord.py and youtube_dl. A key feature is dual interaction support — traditional text commands and interactive buttons — to accommodate users of all experience levels. Asynchronous processing enables the bot to handle concurrent requests with no perceptible latency.",
    tech: ["Python", "Discord.py", "youtube_dl", "Asyncio"],
    repoUrl: "https://github.com/leo2971998/MusicBot",
    liveUrl: null,
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
  {
    name: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    year: "2021",
    icon: FaAws,
    brandColor: "#FF9900",
  },
  {
    name: "Azure Administrator Associate",
    org: "Microsoft",
    year: "2024",
    icon: FaMicrosoft,
    brandColor: "#0078D4",
  },
  {
    name: "Azure Data Engineer Associate",
    org: "Microsoft",
    year: "2023",
    icon: FaMicrosoft,
    brandColor: "#0078D4",
  },
  {
    name: "Azure AI Engineer Associate",
    org: "Microsoft",
    year: "2023",
    icon: FaMicrosoft,
    brandColor: "#0078D4",
  },
  {
    name: "Azure Data Scientist Associate",
    org: "Microsoft",
    year: "2023",
    icon: FaMicrosoft,
    brandColor: "#0078D4",
  },
  {
    name: "Azure Data Fundamentals",
    org: "Microsoft",
    year: "2021",
    icon: FaMicrosoft,
    brandColor: "#0078D4",
  },
  {
    name: "Azure Fundamentals",
    org: "Microsoft",
    year: "2021",
    icon: FaMicrosoft,
    brandColor: "#0078D4",
  },
  {
    name: "Azure AI Fundamentals",
    org: "Microsoft",
    year: "2021",
    icon: FaMicrosoft,
    brandColor: "#0078D4",
  },
]

// --- ANIMATION VARIANTS ---
const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const cardContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

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
              <motion.div
                className="flex gap-4 mt-8 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                size="lg"
                onClick={() => scrollTo("projects")}
                className="btn-gradient"
                >
                View my work
                </Button>
                <Button size="lg" variant="outline" asChild className="btn-ghost-wipe bg-transparent">
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                className="flex gap-2 mt-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button variant="outline" size="icon" asChild className="btn-ghost-wipe bg-transparent">
                  <Link href="https://github.com/leo2971998" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="btn-ghost-wipe bg-transparent">
                  <Link href="https://linkedin.com/in/leo-nguyen-84098a219/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="btn-ghost-wipe bg-transparent">
                  <Link href="mailto:nanhtu297@gmail.com">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            onClick={() => scrollTo("experience")}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-20 bg-secondary scroll-mt-14">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
              <Briefcase className="mr-3 h-8 w-8 text-primary" /> Professional Experience
            </h2>
            <div className="relative max-w-3xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
              {/* Timeline line - centered */}
              <div className="absolute left-1/2 w-0.5 inset-y-0 bg-border -translate-x-1/2"></div>
              {experience.map((job, index) => (
                <motion.div
                    key={`${job.role}-${job.company}`}
                  className="relative"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={timelineItemVariants}
                >
                  {/* connector lines */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-1/2 w-0.5 bg-border -translate-x-1/2",
                      index === 0 ? "top-4" : "top-0",
                      "bottom-1/2",
                    )}
                  />
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-1/2 w-0.5 bg-border -translate-x-1/2",
                      index === experience.length - 1 ? "bottom-4" : "bottom-0",
                      "top-1/2",
                    )}
                  />
                  <div className="flex items-center mb-1">
                    {/* Timeline icon */}
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground absolute left-1/2 -translate-x-1/2 top-6">
                      <Briefcase className="h-4 w-4" />
                    </div>
                  </div>
                  <Card
                    className={`
                      w-full md:w-[calc(50%_-_2rem)]
                      ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                      transition-shadow hover:shadow-xl
                    `}
                  >
                    <CardHeader>
                      <CardTitle className="text-base font-semibold">
                        {job.role}
                      </CardTitle>
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
                <motion.div
                  key={project.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className={`rounded-lg overflow-hidden shadow-lg ${index % 2 === 0 ? "md:order-first" : "md:order-last"}`}
                  >
                    <Image
                      src={project.coverImg || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={420}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.dates}</p>
                    <h4 className="font-semibold mt-2 mb-1 text-primary">The Problem</h4>
                    <p className="text-muted-foreground text-sm mb-4">{project.problem}</p>
                    <h4 className="font-semibold mt-2 mb-1 text-primary">The Solution</h4>
                    <p className="text-muted-foreground text-sm mb-4">{project.solution}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" asChild className="btn-ghost-wipe bg-transparent">
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Github
                        </Link>
                      </Button>
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
                        <CardTitle className="text-base font-semibold">
                          {institution}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{degree}</p>
                        <p className="text-sm text-muted-foreground">{dates}</p>
                      </CardHeader>
                    </Card>
                  )}
                  iconFn={(idx) => {
                    const colors = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"]
                    const color = colors[idx % colors.length]
                    return (
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-full"
                        style={{ backgroundColor: `hsl(var(--${color}))` }}
                      >
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
                          <div
                            className="flex items-center justify-center w-8 h-8 rounded-full"
                            style={{ backgroundColor: brandColor }}
                          >
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
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-full"
                        style={{ backgroundColor: `hsl(var(--${color}))` }}
                      >
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
          <motion.div
            key={year}
            className="relative flex flex-col items-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
          >
            <div className="flex flex-col space-y-4 mb-3">
              {group.map((item, idx) => (
                <div key={idx}>{renderCard(item)}</div>
              ))}
            </div>

            <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              {year}
            </div>

            {(icon || iconFn) && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                {iconFn ? iconFn(groupIdx, group) : icon}
              </div>
            )}
          </motion.div>
        ))}
    </div>
  )
}
