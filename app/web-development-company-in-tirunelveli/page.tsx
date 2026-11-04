import type { Metadata } from "next";
import { TirunelveliServicePage } from "@/components/landing/TirunelveliServicePage";
import { getTirunelveliServiceContent, tirunelveliServicePages } from "@/lib/tirunelveli-service-pages";
import { generateBreadcrumbSchema } from "@/lib/seo";

const service = tirunelveliServicePages.webDevelopment;
const canonicalUrl = `https://www.brandmindz.com/${service.slug}`;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
  alternates: { canonical: canonicalUrl },
};

export default async function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.brandmindz.com" },
    { name: service.label, url: canonicalUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <TirunelveliServicePage
        heroTitle={service.heroTitle}
        heroSuffix={service.heroSuffix}
        heroHeading={{ black: "We Build Websites ", grey: "That Turn Visitors ", yellow: "Into Customers." }}
        heroDescription="We create high-performing, visually engaging and conversion-focused websites that make your business stand out and turn digital experiences into real opportunities."
        content={await getTirunelveliServiceContent("webDevelopment")}
      />
    </>
  );
}
