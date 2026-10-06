export type ApiResult<T> = { data?: T; msg?: string; code?: string };

export const ADMIN_API_BASE_URL = (
  process.env.NEXT_PUBLIC_ADMIN_API_BASE_URL ||
  process.env.ADMIN_API_BASE_URL ||
  "https://api.brandmindz.com"
).replace(/\/$/, "");

export type Blog = {
  blog_id: number;
  title: string;
  short_description?: string;
  slug?: string;
  meta_title?: string;
  meta_description?: string;
  content?: string;
  category?: string;
  tags?: string;
  image?: string;
  views?: number;
  author_id?: number;
  created_at?: string;
};

export type Enquiry = {
  enq_id: number;
  name?: string;
  company_name?: string;
  email?: string;
  phone?: string;
  designation?: string;
  location?: string;
  message?: string;
  created_at?: string;
  [key: string]: unknown;
};

export async function adminFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<ApiResult<T>> {
  const response = await fetch(`${ADMIN_API_BASE_URL}${path}`, {
    ...init,
    headers: {
      ...(init?.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...init?.headers,
    },
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(result.msg || `Request failed (${response.status})`) as Error & { status?: number };
    error.status = response.status;
    throw error;
  }
  return result as ApiResult<T>;
}

export const blogApi = {
  list: () => adminFetch<Blog[]>("/blog/getBlog"),
  byId: (blog_id: string) =>
    adminFetch<Blog[]>("/blog/getBlogById", {
      method: "POST",
      body: JSON.stringify({ blog_id }),
    }),
  remove: (blog_id: number) =>
    adminFetch("/blog/deleteBlog", {
      method: "POST",
      body: JSON.stringify({ blog_id }),
    }),
  save: (payload: Record<string, unknown>, edit: boolean) =>
    adminFetch(edit ? "/blog/editBlogs" : "/blog/insertBlog", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  upload: (file: File) => {
    const body = new FormData();
    body.append("image", file);
    return adminFetch<{ fileName: string }>("/blog/uploadBlogImage", {
      method: "POST",
      body,
    });
  },
};

export const enquiryApi = {
  list: () => adminFetch<Enquiry[]>("/contact/getEnq"),
  byId: (enq_id: string) =>
    adminFetch<Enquiry[]>("/contact/getEnqByID", {
      method: "POST",
      body: JSON.stringify({ enq_id }),
    }),
  update: (payload: Enquiry) =>
    adminFetch("/contact/updateEnq", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};

export async function login(user_name: string, pass_word: string) {
  return adminFetch<Record<string, unknown>>("/user/login", {
    method: "POST",
    body: JSON.stringify({ user_name, pass_word }),
  });
}

export const storageUrl = (image: string) =>
  image.startsWith("http")
    ? image
    : `${ADMIN_API_BASE_URL}/storage/uploads/blog/${image}`;
