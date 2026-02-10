import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "Blog",
  description: "Articles and insights about web development, animations, and SEO best practices.",
  keywords: ["blog", "web development", "animations", "SEO", "tutorials"],
})

const posts = [
  {
    slug: "getting-started-with-animations",
    title: "Getting Started with Web Animations",
    description: "Learn how to create smooth, performant animations using Framer Motion and CSS.",
    date: "2026-02-01",
    category: "Tutorial",
    readTime: "5 min read",
  },
  {
    slug: "seo-best-practices-2026",
    title: "SEO Best Practices for 2026",
    description: "Everything you need to know about optimizing your website for search engines.",
    date: "2026-01-28",
    category: "SEO",
    readTime: "8 min read",
  },
  {
    slug: "nextjs-performance-tips",
    title: "Next.js Performance Optimization Tips",
    description: "Improve your Core Web Vitals with these actionable performance tips.",
    date: "2026-01-20",
    category: "Performance",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Articles and insights about web development, animations, and SEO.
          </p>

          <div className="mt-16 space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group p-6 rounded-xl border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.category}</span>
                  <span>-</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>-</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="mt-3 text-xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-2 text-muted-foreground">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors group/link"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
