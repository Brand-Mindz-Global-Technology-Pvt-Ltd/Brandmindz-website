import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { TirunelveliHero } from "@/components/landing/tirunelveli/TirunelveliHero";
import { TirunelveliIntro } from "@/components/landing/tirunelveli/TirunelveliIntro";
import { TirunelveliAbout } from "@/components/landing/tirunelveli/TirunelveliAbout";
import { TirunelveliServices } from "@/components/landing/tirunelveli/TirunelveliServices";
import { TirunelveliGoogleAds } from "@/components/landing/tirunelveli/TirunelveliGoogleAds";
import { TirunelveliWhyChoose } from "@/components/landing/tirunelveli/TirunelveliWhyChoose";
import { TirunelveliTrustedClients } from "@/components/landing/tirunelveli/TirunelveliTrustedClients";
import { tirunelveliLandingData } from "@/lib/tirunelveli-landing-data";
import { generateBreadcrumbSchema } from "@/lib/seo";

const { meta, contact } = tirunelveliLandingData;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: {
    canonical: meta.url,
  },
  openGraph: {
    title: "Top Digital Marketing Agency in Tirunelveli",
    description: "Partner with Brand Mindz for expert digital marketing, SEO and business growth solutions.",
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
    title: "Top Digital Marketing Agency in Tirunelveli",
    description: "Partner with Brand Mindz for expert digital marketing, SEO and business growth solutions.",
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
    name: "Brand Mindz - Digital Marketing Agency in Tirunelveli",
    description: meta.description,
    url: meta.url,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Startup TN, Tirunelveli Municipal Corporation Incubation Centre, SN Highway",
      addressLocality: "Tirunelveli",
      postalCode: "627002",
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

export default function TirunelveliLandingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://brandmindz.com" },
    {
      name: "Digital Marketing Agency in Tirunelveli",
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
        <TirunelveliHero />
        <TirunelveliIntro />
        <TirunelveliAbout />
        <TirunelveliServices />
        <TirunelveliGoogleAds />
        <TirunelveliWhyChoose />
        <TirunelveliTrustedClients />
      </main>
      <Footer />
    </>
  );
}
