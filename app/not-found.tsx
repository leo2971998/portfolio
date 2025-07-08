import Link from "next/link"
import { Code } from "lucide-react"

export default function NotFound() {
  return (
    <main className="bg-stone-50 text-stone-800 min-h-screen flex flex-col items-center justify-center font-serif p-4">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center h-16 w-16 bg-stone-200/50 rounded-full">
          {/* Using your existing logo icon for consistency */}
          <Code className="h-8 w-8 text-stone-500" />
        </div>
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-stone-600">
          You probably want to wander over to the{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            main page
          </Link>
          !
        </p>
      </div>
    </main>
  )
}
