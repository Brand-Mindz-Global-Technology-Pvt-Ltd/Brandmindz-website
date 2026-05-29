import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl md:text-8xl font-bold text-foreground">404</h1>
      <p className="mt-4 text-lg text-muted-foreground text-center">
        The page you are looking for does not exist.
      </p>
      <Button asChild className="mt-8 rounded-full px-8">
        <Link href="/">Go Home</Link>
      </Button>
    </main>
  )
}
