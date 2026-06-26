"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Crosshair, Home, Radar, ScanLine, Sparkles } from "lucide-react"
import type { CSSProperties } from "react"
import { useMemo, useState } from "react"

import styles from "./page.module.css"

type Slide = {
  title: string
  subtitle: string
  image: string
  signal: string
  tag: string
}

type Concept = {
  id: "mission" | "holo" | "mech"
  eyebrow: string
  title: string
  note: string
  accent: string
  secondary: string
  marker: string
}

const slides: Slide[] = [
  {
    title: "Swipe Coach",
    subtitle: "reward card intelligence",
    image: "/1.png",
    signal: "Capital One challenge",
    tag: "Top 5",
  },
  {
    title: "Volunteer System",
    subtitle: "admin workflows",
    image: "/volunteer-management-dashboard.png",
    signal: "COSC 4353",
    tag: "Capstone",
  },
  {
    title: "MusicBot",
    subtitle: "discord playback controls",
    image: "/discord-music-bot-interface.png",
    signal: "Python runtime",
    tag: "Bot",
  },
  {
    title: "X-ray Detection",
    subtitle: "medical image classifier",
    image: "/covid-xray-detection.png",
    signal: "0.9643 AUC",
    tag: "AI",
  },
  {
    title: "Museum System",
    subtitle: "database-backed collection tools",
    image: "/museum-management-dashboard.png",
    signal: "MySQL + Azure",
    tag: "Data",
  },
]

const concepts: Concept[] = [
  {
    id: "mission",
    eyebrow: "01 / cockpit guide",
    title: "Mission handler",
    note: "A pilot-like guide anchors the work and points at each active project panel.",
    accent: "#2ee6b8",
    secondary: "#f5b84b",
    marker: "MH",
  },
  {
    id: "holo",
    eyebrow: "02 / projection room",
    title: "Hologram pit",
    note: "Projects feel like floating research files in a glassy orbital lab.",
    accent: "#72f06a",
    secondary: "#ff6b5f",
    marker: "HP",
  },
  {
    id: "mech",
    eyebrow: "03 / launch bay",
    title: "Mech bay carousel",
    note: "The page becomes a hangar UI with heavy panels, rails, and an operator character.",
    accent: "#ffcf5a",
    secondary: "#55d6ff",
    marker: "MB",
  },
]

const armAngles = [-14, -4, 7, 17, 27]

export default function DesignPreviewPage() {
  const [conceptIndex, setConceptIndex] = useState(0)
  const [slideIndex, setSlideIndex] = useState(0)

  const concept = concepts[conceptIndex]
  const slide = slides[slideIndex]

  const nextSlide = () => setSlideIndex((current) => (current + 1) % slides.length)
  const previousSlide = () => setSlideIndex((current) => (current - 1 + slides.length) % slides.length)

  const conceptStyle = useMemo(
    () =>
      ({
        "--accent": concept.accent,
        "--secondary": concept.secondary,
        "--aim": `${armAngles[slideIndex]}deg`,
      }) as CSSProperties,
    [concept.accent, concept.secondary, slideIndex],
  )

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.shell}>
        <nav className={styles.topbar} aria-label="Design preview navigation">
          <Link className={styles.homeLink} href="/">
            <Home className={styles.icon} aria-hidden="true" />
            Portfolio
          </Link>
          <div className={styles.statusPill}>
            <span />
            concept lab
          </div>
        </nav>

        <header className={styles.hero}>
          <p className={styles.kicker}>project showcase directions</p>
          <h1>
            Game-like <span className={styles.nowrap}>sci-fi</span> portfolio concepts
          </h1>
          <p>
            Three possible looks for the interactive project area: character, slide deck, HUD motion,
            and a next-state pose change.
          </p>
        </header>

        <div className={styles.conceptPicker} role="tablist" aria-label="Design concepts">
          {concepts.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={concept.id === item.id}
              className={styles.conceptButton}
              onClick={() => {
                setConceptIndex(index)
                setSlideIndex(0)
              }}
              style={{ "--accent": item.accent, "--secondary": item.secondary } as CSSProperties}
            >
              <span className={styles.marker}>{item.marker}</span>
              <span>
                <small>{item.eyebrow}</small>
                {item.title}
              </span>
            </button>
          ))}
        </div>

        <section className={`${styles.canvas} ${styles[concept.id]}`} style={conceptStyle}>
          <div className={styles.scanlines} />
          <div className={styles.cornerTL} />
          <div className={styles.cornerBR} />

          <div className={styles.canvasHeader}>
            <div>
              <p>{concept.eyebrow}</p>
              <h2>{concept.title}</h2>
            </div>
            <div className={styles.readouts}>
              <span>
                <Radar aria-hidden="true" />
                {slide.tag}
              </span>
              <span>
                <ScanLine aria-hidden="true" />
                {String(slideIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className={styles.canvasGrid}>
            <div className={styles.characterBay} aria-hidden="true">
              <Character />
              <div className={styles.characterDeck}>
                <span />
                <span />
                <span />
              </div>
            </div>

            <motion.article
              key={`${concept.id}-${slide.title}`}
              className={styles.slideFrame}
              initial={{ opacity: 0, y: 18, rotateX: -5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.45, ease: [0.2, 0.75, 0.2, 1] }}
            >
              <div className={styles.frameBar}>
                <span>{slide.signal}</span>
                <Crosshair aria-hidden="true" />
              </div>
              <div className={styles.screen}>
                <Image
                  src={slide.image}
                  alt={`${slide.title} project screenshot`}
                  fill
                  priority={slideIndex === 0}
                  sizes="(min-width: 1100px) 54vw, 92vw"
                  className={styles.projectImage}
                />
                <div className={styles.screenSweep} />
              </div>
              <div className={styles.slideMeta}>
                <div>
                  <p>{slide.subtitle}</p>
                  <h3>{slide.title}</h3>
                </div>
                <span>{slide.tag}</span>
              </div>
            </motion.article>

            <aside className={styles.telemetry}>
              <div className={styles.telemetryHeader}>
                <Sparkles aria-hidden="true" />
                <span>{concept.marker} active</span>
              </div>
              <p>{concept.note}</p>
              <div className={styles.bars} aria-hidden="true">
                {slides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Preview ${item.title}`}
                    aria-current={index === slideIndex}
                    className={styles.bar}
                    onClick={() => setSlideIndex(index)}
                  >
                    <span style={{ transform: `scaleX(${index === slideIndex ? 1 : 0.35 + index * 0.1})` }} />
                  </button>
                ))}
              </div>
              <div className={styles.controls}>
                <button type="button" onClick={previousSlide} aria-label="Previous project">
                  <ChevronLeft aria-hidden="true" />
                </button>
                <button type="button" onClick={nextSlide}>
                  Next
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}

function Character() {
  return (
    <div className={styles.character}>
      <div className={styles.pointerBeam} />
      <div className={styles.head}>
        <span className={styles.visor} />
      </div>
      <div className={styles.neck} />
      <div className={styles.torso}>
        <span />
        <span />
      </div>
      <div className={styles.arm} />
      <div className={styles.hand} />
      <div className={styles.legLeft} />
      <div className={styles.legRight} />
    </div>
  )
}
