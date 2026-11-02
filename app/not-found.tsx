import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8"
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
        <span className="text-orange-700">404</span> / Page not found
      </p>
      <h1 className="mt-6 max-w-[16ch] font-display text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-stone-900 sm:text-7xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-600">
        The link may be broken, or the page may have moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex w-fit items-center gap-2 rounded-xl bg-orange-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to the homepage
      </Link>
    </main>
  )
}
