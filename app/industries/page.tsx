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
  title: {
    absolute: "Industry-Focused Branding & Digital Solutions | Brand Mindz Global",
  },
  description: "Partner with Brand Mindz Global for industry-focused branding, digital marketing, and technology services that drive measurable business growth.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.brandmindz.com/industries",
  },
  keywords: [
    "IT & SaaS Marketing",
    "E-Commerce optimization",
    "Healthcare Local SEO",
    "Edtech student recruitment",
    "Real estate lead prequalification",
    "Brandmindz custom industry solutions"
  ],
  openGraph: {
    type: "website",
    url: "https://brandmindz.com/industries",
    title: "Industries We Serve | IT, E-commerce, Healthcare, Education, Real Estate — Brand Mindz Global",
    description: "From IT & SaaS to healthcare, education and real estate — see how Brand Mindz Global adapts its 360° Growth Framework to your industry's buyer journey.",
    images: [
      {
        url: "/logo.png",
        alt: "Industries served by Brand Mindz Global — IT, e-commerce, healthcare, education, real estate",
      },
    ],
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
      <main className="industries-main-container industries-page">
        <IndustriesHero />
        <IndustriesContent />
        <IndustriesCTA />
        <Various />
      </main>
      <Footer />
    </>
  );
}
