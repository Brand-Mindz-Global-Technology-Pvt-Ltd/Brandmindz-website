export type BlogPost = {
  blog_id: number;
  title: string;
  short_description?: string | null;
  slug?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  content?: string | null;
  category?: string | null;
  tags?: string | null;
  image?: string | null;
  views?: number | null;
  author_id?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
};

const serverApiBase = () =>
  (process.env.BLOG_API_BASE_URL ||
    process.env.NEXT_PUBLIC_BLOG_API_BASE_URL ||
    process.env.NEXT_PUBLIC_ADMIN_API_BASE_URL ||
    "https://api.brandmindz.com")
    .replace(/\/$/, "")
    .replace(/\/blog$/, "");

export const blogImageUrl = (post: BlogPost) => {
  if (!post.image) return null;
  if (/^https?:\/\//i.test(post.image)) return post.image;
  const cleanImage = post.image.replace(/^\/+/, "");
  return cleanImage.startsWith("storage/")
    ? `${serverApiBase()}/${cleanImage}`
    : `${serverApiBase()}/storage/uploads/blog/${cleanImage}`;
};

/** Static fallback images (served from /public/blog-covers/) for posts whose
 *  API `image` field is empty. Keyed by slug substring → public path. */
const SLUG_FALLBACKS: Array<{ test: RegExp; src: string }> = [
  { test: /chatgpt/i,          src: "/blog-covers/chatgpt-ads.webp" },
  { test: /web.?dev|web.?site|web.?development/i, src: "/blog-covers/web-and-app.webp" },
  { test: /app.?dev/i,         src: "/blog-covers/web-and-app.webp" },
];

const CATEGORY_FALLBACKS: Array<{ test: RegExp; src: string }> = [
  { test: /chatgpt/i,           src: "/blog-covers/chatgpt-ads.webp" },
  { test: /web.?dev/i,          src: "/blog-covers/web-and-app.webp" },
  { test: /app.?dev/i,          src: "/blog-covers/web-and-app.webp" },
];

/**
 * Returns a fallback image path for a post when the API has no image.
 * Returns null if no fallback is mapped for the post.
 */
export const blogFallbackImage = (post: BlogPost): string | null => {
  const slug = post.slug?.trim() ?? "";
  const category = post.category ?? "";
  for (const { test, src } of SLUG_FALLBACKS) {
    if (test.test(slug)) return src;
  }
  for (const { test, src } of CATEGORY_FALLBACKS) {
    if (test.test(category)) return src;
  }
  return null;
};

export const blogHref = (post: BlogPost) =>
  `/blog/${encodeURIComponent(post.slug?.trim() || String(post.blog_id))}`;

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${serverApiBase()}/blog/getBlog`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return [];
    const result = await response.json();
    return result.msg === "Success" && Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("Unable to load blogs:", error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogs();
  return posts.find((post) => (post.slug?.trim() || String(post.blog_id)) === slug) || null;
}

export const formatBlogDate = (post: BlogPost) => {
  const value = post.created_at || post.updated_at;
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? ""
    : new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(date);
};
