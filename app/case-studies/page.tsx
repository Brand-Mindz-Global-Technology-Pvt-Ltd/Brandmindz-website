import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CaseStudiesClient } from "@/components/casestudies/CaseStudiesClient";
import Various from "@/components/home/Various";
import "../../style/casestudies/casestudies.css";

// Page-specific premium SEO metadata
export const metadata: Metadata = {
  title: {
    absolute: "Real Results from Branding & Digital Marketing | Brand Mindz Global",
  },
  description: "Read client case studies from Brand Mindz Global and discover how our branding, technology, and marketing expertise delivers measurable results.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.brandmindz.com/case-studies",
  },
  keywords: [
    "case studies", 
    "marketing success stories", 
    "client growth metrics", 
    "branding transformation", 
    "SaaS design case study", 
    "e-commerce optimization", 
    "BrandMindz success"
  ],
  openGraph: {
    type: "website",
    url: "https://brandmindz.com/case-studies",
    title: "Case Studies | 130% Growth, 500+ Leads Generated — Brand Mindz Global",
    description: "See how Brand Mindz Global helped Truck Taxi solve driver acquisition at scale — 500+ qualified leads and 130% growth through hyper-targeted Meta Ads and CPL optimization.",
    images: [
      {
        url: "/logo.png",
        alt: "Brand Mindz Global case study — Truck Taxi driver acquisition results",
      },
    ],
  }
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="casestudies-main-container">
        <CaseStudiesClient />
        <Various />
      </main>
      <Footer />
    </>
  );
}
