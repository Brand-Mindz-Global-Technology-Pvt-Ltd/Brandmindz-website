import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Agency | SEO, PPC & Growth Experts | Brand Mindz Global",
  },
  description: "Accelerate your business with Brand Mindz Global. Expert SEO, Google Ads, Meta Ads, social media, and performance marketing that delivers real growth.",
};

export default function DigitalMarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
