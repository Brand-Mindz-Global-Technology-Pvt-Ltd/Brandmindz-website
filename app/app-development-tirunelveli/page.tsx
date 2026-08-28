import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import { TirunelveliAppDevelopmentHero } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentHero";
import { TirunelveliAppDevelopmentIntro } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentIntro";
import { TirunelveliAppDevelopmentAbout } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentAbout";
import { TirunelveliAppDevelopmentServices } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentServices";
import { TirunelveliAppDevelopmentSpecialized } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentSpecialized";
import { TirunelveliAppDevelopmentWhyChoose } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentWhyChoose";
import { TirunelveliAppDevelopmentProcess } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentProcess";
import { TirunelveliAppDevelopmentAppTypes } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentAppTypes";
import { TirunelveliAppDevelopmentDigitalMarketing } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentDigitalMarketing";
import { TirunelveliAppDevelopmentGoodApp } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentGoodApp";
import { TirunelveliAppDevelopmentCustomApp } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentCustomApp";
import { TirunelveliAppDevelopmentExistingApp } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentExistingApp";
import { TirunelveliAppDevelopmentBusinesses } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentBusinesses";
import { TirunelveliAppDevelopmentTechnologies } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentTechnologies";
import { TirunelveliAppDevelopmentBenefits } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentBenefits";
import { TirunelveliAppDevelopmentFAQ } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentFAQ";
import { TirunelveliAppDevelopmentCTA } from "@/components/landing/tirunelveli-app-development/TirunelveliAppDevelopmentCTA";

import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";
import { generateBreadcrumbSchema } from "@/lib/seo";

const { meta } = tirunelveliAppDevelopmentData;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: {
    canonical: meta.url,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: "Brandmindz",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: meta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Brand Mindz - App Development Company in Tirunelveli",
    description: meta.description,
    url: meta.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tirunelveli",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Tirunelveli",
    },
    priceRange: "$$",
    sameAs: ["https://brandmindz.com"],
  };
}

export default function TirunelveliAppDevelopmentPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: "Home",
      url: "https://brandmindz.com",
    },
    {
      name: "App Development Company in Tirunelveli",
      url: meta.url,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Header />

      <main>
        <TirunelveliAppDevelopmentHero />

        <TirunelveliAppDevelopmentIntro />

        <TirunelveliAppDevelopmentAbout />

        <TirunelveliAppDevelopmentServices />

        <TirunelveliAppDevelopmentSpecialized />

        <TirunelveliAppDevelopmentWhyChoose />

        <TirunelveliAppDevelopmentProcess />

        <TirunelveliAppDevelopmentAppTypes />

        <TirunelveliAppDevelopmentDigitalMarketing />

        <TirunelveliAppDevelopmentGoodApp />

        <TirunelveliAppDevelopmentCustomApp />

        <TirunelveliAppDevelopmentExistingApp />

        <TirunelveliAppDevelopmentBusinesses />

        <TirunelveliAppDevelopmentTechnologies />

        <TirunelveliAppDevelopmentBenefits />

        <TirunelveliAppDevelopmentFAQ />

        <TirunelveliAppDevelopmentCTA />
      </main>

      <Footer />
    </>
  );
}