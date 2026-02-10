import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { generateSEO, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { siteConfig } from "@/config/site"

// Mock blog posts data
const posts: Record<string, {
  title: string
  description: string
  content: string
  date: string
  category: string
  readTime: string
  author: string
}> = {
  "getting-started-with-animations": {
    title: "Getting Started with Web Animations",
    description: "Learn how to create smooth, performant animations using Framer Motion and CSS.",
    content: `
      <p>Web animations have become an essential part of modern user interfaces. They help guide users, provide feedback, and create delightful experiences.</p>
      
      <h2>Why Animations Matter</h2>
      <p>Animations serve multiple purposes in web design:</p>
      <ul>
        <li>They provide visual feedback for user actions</li>
        <li>They guide attention to important elements</li>
        <li>They create a sense of continuity between states</li>
        <li>They make interfaces feel more polished and professional</li>
      </ul>
      
      <h2>Getting Started with Framer Motion</h2>
      <p>Framer Motion is a production-ready motion library for React. It provides a simple API for creating complex animations with minimal code.</p>
      
      <h2>Performance Considerations</h2>
      <p>When implementing animations, always consider performance. Use transforms and opacity for the smoothest animations, and avoid animating layout properties like width and height.</p>
    `,
    date: "2026-02-01",
    category: "Tutorial",
    readTime: "5 min read",
    author: "MotionCraft Team",
  },
  "seo-best-practices-2026": {
    title: "SEO Best Practices for 2026",
    description: "Everything you need to know about optimizing your website for search engines.",
    content: `
      <p>Search engine optimization continues to evolve. Here are the most important SEO practices for 2026.</p>
      
      <h2>Core Web Vitals</h2>
      <p>Google places significant emphasis on page experience metrics. Focus on:</p>
      <ul>
        <li>Largest Contentful Paint (LCP)</li>
        <li>Interaction to Next Paint (INP)</li>
        <li>Cumulative Layout Shift (CLS)</li>
      </ul>
      
      <h2>Structured Data</h2>
      <p>Implement JSON-LD structured data to help search engines understand your content and display rich snippets in search results.</p>
      
      <h2>Mobile-First Indexing</h2>
      <p>Ensure your website is fully responsive and provides an excellent mobile experience.</p>
    `,
    date: "2026-01-28",
    category: "SEO",
    readTime: "8 min read",
    author: "MotionCraft Team",
  },
  "nextjs-performance-tips": {
    title: "Next.js Performance Optimization Tips",
    description: "Improve your Core Web Vitals with these actionable performance tips.",
    content: `
      <p>Next.js provides many built-in optimizations, but there are additional steps you can take to maximize performance.</p>
      
      <h2>Image Optimization</h2>
      <p>Use the Next.js Image component for automatic image optimization, lazy loading, and responsive images.</p>
      
      <h2>Code Splitting</h2>
      <p>Take advantage of dynamic imports to split your code and load only what is necessary for each page.</p>
      
      <h2>Caching Strategies</h2>
      <p>Implement proper caching headers and use ISR (Incremental Static Regeneration) for optimal performance with dynamic content.</p>
    `,
    date: "2026-01-20",
    category: "Performance",
    readTime: "6 min read",
    author: "MotionCraft Team",
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  
  if (!post) {
    return generateSEO({ title: "Post Not Found" })
  }

  return generateSEO({
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
    keywords: [post.category.toLowerCase(), "web development", "tutorial"],
  })
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    image: `${siteConfig.url}/og-image.jpg`,
    url: `${siteConfig.url}/blog/${slug}`,
    publishedTime: post.date,
    authors: [post.author],
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-6">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mt-8">
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
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {post.description}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              By {post.author}
            </p>
          </header>

          {/* Content */}
          <div
            className="mt-12 prose prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  )
}
