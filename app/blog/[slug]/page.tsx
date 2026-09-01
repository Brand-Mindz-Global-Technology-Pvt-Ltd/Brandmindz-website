import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { blogImageUrl, formatBlogDate, getBlogBySlug } from "@/lib/blogs";
import "../../../style/blog.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(decodeURIComponent(slug));
  if (!post) return { title: "Blog post not found | Brand Mindz Global" };
  const image = blogImageUrl(post);
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.short_description || undefined,
    alternates: { canonical: `https://www.brandmindz.com/blog/${encodeURIComponent(post.slug?.trim() || String(post.blog_id))}` },
    openGraph: { type: "article", title: post.meta_title || post.title, description: post.meta_description || post.short_description || undefined, images: image ? [image] : undefined },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(decodeURIComponent(slug));
  if (!post) notFound();
  const image = blogImageUrl(post);
  const paragraphs = (post.content || "").split(/\n{2,}/).map((value) => value.trim()).filter(Boolean);

  return (
    <>
      <Header />
      <main className="public-blog-detail">
        <article>
          <Link href="/blog" className="public-blog-back">← All insights</Link>
          <div className="public-blog-detail-meta">
            <span>{post.category || "Insights"}</span>
            {formatBlogDate(post) && <time>{formatBlogDate(post)}</time>}
          </div>
          <h1>{post.title}</h1>
          {post.short_description && <p className="public-blog-lead">{post.short_description}</p>}
          {image && <div className="public-blog-cover"><Image src={image} alt={post.title} fill priority sizes="(max-width: 900px) 100vw, 1000px" /></div>}
          <div className="public-blog-content">
            {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          {post.tags && <div className="public-blog-tags">{post.tags.split(",").map((tag) => <span key={tag.trim()}>{tag.trim()}</span>)}</div>}
        </article>
      </main>
      <Footer />
    </>
  );
}
