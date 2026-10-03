import { readFile } from "node:fs/promises";
import path from "node:path";

export const tirunelveliServicePages = {
  seo: {
    slug: "seo-company-in-tirunelveli",
    label: "Trusted SEO Company in Tirunelveli",
    title: "Trusted SEO Company in Tirunelveli | Brand Mindz Global",
    description: "Improve local visibility, rankings and qualified enquiries with Brand Mindz Global's SEO services in Tirunelveli.",
    heroTitle: "Trusted SEO",
    heroSuffix: "Company in",
    file: "seo.md",
  },
  webDevelopment: {
    slug: "web-development-company-in-tirunelveli",
    label: "Best Web Development Company in Tirunelveli",
    title: "Best Web Development Company in Tirunelveli | Brand Mindz Global",
    description: "Business websites, e-commerce platforms and custom web development for Tirunelveli businesses.",
    heroTitle: "Web Development",
    heroSuffix: "Company in",
    file: "web-development.md",
  },
  branding: {
    slug: "branding-agency-in-tirunelveli",
    label: "Branding Agency in Tirunelveli",
    title: "Branding Agency in Tirunelveli | Brand Mindz Global",
    description: "Build a recognisable, consistent and strategic brand with Brand Mindz Global in Tirunelveli.",
    heroTitle: "Branding",
    heroSuffix: "Agency in",
    file: "branding.md",
  },
  performanceMarketing: {
    slug: "performance-marketing-company-in-tirunelveli",
    label: "Performance Marketing Company in Tirunelveli",
    title: "Performance Marketing Company in Tirunelveli | Brand Mindz Global",
    description: "Generate measurable leads, sales and campaign results with performance marketing in Tirunelveli.",
    heroTitle: "Performance Marketing",
    heroSuffix: "Company in",
    file: "performance-marketing.md",
  },
  socialMediaManagement: {
    slug: "social-media-management-company-in-tirunelveli",
    label: "Social Media Management Company in Tirunelveli",
    title: "Social Media Management Company in Tirunelveli | Brand Mindz Global",
    description: "Build a consistent social presence with strategic content, community management and reporting.",
    heroTitle: "Social Media Management",
    heroSuffix: "Company in",
    file: "social-media-management.md",
  },
  chatgptAds: {
    slug: "chatgpt-ads-services-in-tirunelveli",
    label: "ChatGPT Ads Services in Tirunelveli",
    title: "ChatGPT Ads Services in Tirunelveli | Brand Mindz Global",
    description: "AI-powered advertising, ChatGPT advertising research and campaign strategy for businesses in Tirunelveli.",
    heroTitle: "ChatGPT Ads",
    heroSuffix: "Services in",
    file: "chatgpt-ads.md",
  },
} as const;

export type TirunelveliServiceKey = keyof typeof tirunelveliServicePages;

export async function getTirunelveliServiceContent(key: TirunelveliServiceKey) {
  return readFile(
    path.join(process.cwd(), "content", "tirunelveli-services", tirunelveliServicePages[key].file),
    "utf8",
  );
}
