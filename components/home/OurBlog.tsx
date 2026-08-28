"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn, TextReveal, StaggerChildren, StaggerItem } from "../animations";
import "../../style/home/ourblog.css";

export type HomeBlogPost = { id: number; title: string; description: string; category: string; date: string; image: string | null; href: string };

const BlogImage = ({ post, sizes }: { post: HomeBlogPost; sizes: string }) => post.image ? (
  <Image src={post.image} alt={post.title} fill sizes={sizes} className="hover-zoom" />
) : <div className="bm-blog-image-placeholder" aria-hidden="true" />;

const OurBlog = ({ posts }: { posts: HomeBlogPost[] }) => {
  const itemsPerView = 2;
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!posts.length) return null;
  const featured = posts[0];
  const sidePosts = posts.slice(1, 4);
  const newBlogs = posts.slice(1);
  const meta = (post: HomeBlogPost) => [post.date, post.category].filter(Boolean).join(" | ");

  return <section className="bm-blog-section">
    <div className="bm-blog-header">
      <div><FadeIn direction="down" delay={0.1}><p className="bm-why-subtitle">Our Blog</p></FadeIn><TextReveal as="h2" className="bm-blog-title" text="Insights That Matter" delay={0.2} /></div>
      <Link href="/blog" className="bm-blog-all-btn">See All Blog Posts</Link>
    </div>
    <div className="bm-blog-container">
      <FadeIn direction="left" delay={0.4} className="bm-blog-featured">
        <Link href={featured.href} className="bm-featured-card">
          <BlogImage post={featured} sizes="(max-width: 1024px) 100vw, 40vw" />
          <div className="bm-featured-overlay absolute bottom-0 left-0 right-0 p-[30px] bg-black/30 backdrop-blur-[12px] border-t border-white/20 text-white text-start">
            <span className="bm-post-meta">{meta(featured)}</span><h3>{featured.title}</h3>{featured.description && <p>{featured.description}</p>}
          </div>
        </Link>
      </FadeIn>
      <div className="bm-blog-right-column">
        <StaggerChildren className="bm-blog-list" staggerDelay={0.1} initialDelay={0.5}>
          {sidePosts.map((post) => <StaggerItem key={post.id} className="bm-blog-list-item">
            <Link href={post.href} className="bm-blog-list-link"><div className="bm-blog-list-image"><BlogImage post={post} sizes="100px" /></div><div className="bm-list-item-content"><span className="bm-post-meta" style={{ color: "black" }}>{meta(post)}</span><h4>{post.title}</h4></div></Link>
          </StaggerItem>)}
        </StaggerChildren>
        {newBlogs.length > 0 && <div className="bm-new-blogs-section">
          <div className="bm-new-blogs-header"><FadeIn direction="none" delay={0.7}><h3>New Blogs</h3></FadeIn><div className="bm-slider-controls">
            <button className="bm-control-btn" onClick={() => setCurrentIndex(Math.max(0, currentIndex - itemsPerView))} disabled={currentIndex === 0} aria-label="Previous blogs"><FiChevronLeft /></button>
            <button className="bm-control-btn" onClick={() => setCurrentIndex(currentIndex + itemsPerView)} disabled={currentIndex + itemsPerView >= newBlogs.length} aria-label="Next blogs"><FiChevronRight /></button>
          </div></div>
          <div className="bm-new-blogs-grid"><AnimatePresence mode="wait">{newBlogs.slice(currentIndex, currentIndex + itemsPerView).map((post) => <motion.div className="bm-mini-card" key={post.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}><Link href={post.href}><BlogImage post={post} sizes="(max-width: 700px) 100vw, 25vw" /><div className="bm-mini-card-overlay backdrop-blur-md border-t border-white/10"><span className="text-sm font-light opacity-80 mb-2 block">{meta(post)}</span><h5 className="text-xl font-semibold leading-snug">{post.title}</h5></div></Link></motion.div>)}</AnimatePresence></div>
        </div>}
      </div>
    </div>
  </section>;
};

export default OurBlog;
