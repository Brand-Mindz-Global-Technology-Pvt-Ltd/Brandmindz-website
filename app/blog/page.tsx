import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { blogFallbackImage, blogHref, blogImageUrl, formatBlogDate, getBlogs, type BlogPost } from "@/lib/blogs";
import brandingBlogImage from "@/assets/tirunelveli/branding-concept.webp";
import chatgptBlogImage from "@/assets/case-studies/chatgpt.png";
import appBlogImage from "@/assets/case-studies/app.png";
import "../../style/blog.css";

function getBlogCardImage(post: BlogPost): string | StaticImageData | null {
  const slug = post.slug || "";
  const title = post.title || "";
  const category = post.category || "";

  // 1. Branding Agency in Tirunelveli -> branding-concept.webp
  if (/branding/i.test(slug) || /branding/i.test(title) || /branding/i.test(category)) {
    return brandingBlogImage;
  }

  // 2. ChatGPT Services -> chatgpt.png
  if (/chatgpt/i.test(slug) || /chatgpt/i.test(title) || /chatgpt/i.test(category)) {
    return chatgptBlogImage;
  }

  // 3. App Development -> app.png
  if (
    /(app|application).?dev|mobile.?app/i.test(slug) ||
    /(app|application).?dev|mobile.?app/i.test(title) ||
    /(app|application).?dev|mobile.?app/i.test(category)
  ) {
    return appBlogImage;
  }

  // Preserve existing card image logic for all other posts
  return blogImageUrl(post) ?? blogFallbackImage(post);
}

export const metadata: Metadata = {
  title: "Insights & Blog | Brand Mindz Global",
  description: "Explore the latest insights on branding, marketing, SEO, design and technology from Brand Mindz Global.",
  alternates: { canonical: "https://www.brandmindz.com/blog" },
};

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <>
      <Header />
      <main className="public-blog-page">
        <section className="public-blog-hero">
          <p>Ideas for ambitious brands</p>
          <h1>Insights That Matter</h1>
          <span>Branding, marketing and technology perspectives from our team.</span>
        </section>

        <section className="public-blog-listing" aria-label="Blog posts">
          {posts.length ? (
            <div className="public-blog-grid">
              {posts.map((post) => {
                const image = getBlogCardImage(post);
                return (
                  <article className="public-blog-card" key={post.blog_id}>
                    <Link href={blogHref(post)} className="public-blog-image">
                      {image ? <Image src={image} alt={post.title} fill sizes="(max-width: 760px) 100vw, 33vw" /> : <div className="public-blog-placeholder" />}
                    </Link>
                    <div className="public-blog-card-body">
                      <div className="public-blog-meta">
                        <span>{post.category || "Insights"}</span>
                        {formatBlogDate(post) && <time>{formatBlogDate(post)}</time>}
                      </div>
                      <h2><Link href={blogHref(post)}>{post.title}</Link></h2>
                      {post.short_description && <p>{post.short_description}</p>}
                      <Link href={blogHref(post)} className="public-blog-read">Read article <span aria-hidden="true">→</span></Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="public-blog-empty">
              <h2>New insights are on the way...</h2>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
