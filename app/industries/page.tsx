import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Various from "@/components/home/Various";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustriesContent } from "@/components/industries/IndustriesContent";
import { IndustriesCTA } from "@/components/industries/IndustriesCTA";
import { generateBreadcrumbSchema } from "@/lib/seo";

// Custom styles
import "@/style/industries/industries.css";

export const metadata: Metadata = {
  title: "Tailored Business Growth Solutions by Industry | Brandmindz",
  description: "Explore tailored digital marketing, SEO, branding, and customer acquisition frameworks for SaaS, E-Commerce, Healthcare, Education, and Real Estate industries.",
  keywords: [
    "IT & SaaS Marketing",
    "E-Commerce optimization",
    "Healthcare Local SEO",
    "Edtech student recruitment",
    "Real estate lead prequalification",
    "Brandmindz custom industry solutions"
  ],
  openGraph: {
    title: "Tailored Business Growth Solutions by Industry | Brandmindz",
    description: "Explore tailored digital marketing, SEO, branding, and customer acquisition frameworks for SaaS, E-Commerce, Healthcare, Education, and Real Estate industries.",
    url: "https://BrandMindz.dev/industries",
    type: "website"
  }
};

export default function IndustriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://BrandMindz.dev" },
    { name: "Industries", url: "https://BrandMindz.dev/industries" }
  ]);

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      <Header />
      <main className="industries-main-container">
        <IndustriesHero />
        <IndustriesContent />
        <IndustriesCTA />
        <Various />
      </main>
      <Footer />
    </>
  );
}
