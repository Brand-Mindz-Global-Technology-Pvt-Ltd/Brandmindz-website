import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CaseStudiesClient } from "@/components/casestudies/CaseStudiesClient";
import Various from "@/components/home/Various";
import "../../style/casestudies/casestudies.css";

// Page-specific premium SEO metadata
export const metadata: Metadata = {
  title: "Case Studies | BrandMindz",
  description: "Read BrandMindz case studies and client success stories. See how we drive growth, scale digital products, list catalogs, and optimize ROI for our partners.",
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
    title: "Case Studies & Success Stories | BrandMindz",
    description: "Real growth, backed by real results. Explore our portfolio of branding, performance marketing, development, and e-commerce campaigns.",
    type: "website",
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
