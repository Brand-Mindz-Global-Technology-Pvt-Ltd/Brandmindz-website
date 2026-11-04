import type { Metadata } from "next";
import { TirunelveliServicePage } from "@/components/landing/TirunelveliServicePage";
import { getTirunelveliServiceContent, tirunelveliServicePages } from "@/lib/tirunelveli-service-pages";
import { generateBreadcrumbSchema } from "@/lib/seo";

const service = tirunelveliServicePages.socialMediaManagement;
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
        heroHeading={{ black: "We Turn Social Media ", grey: "Attention Into ", yellow: "Business Opportunities." }}
        heroDescription="We create engaging content, meaningful conversations and strategic social campaigns that build communities, strengthen brands and attract potential customers."
        content={await getTirunelveliServiceContent("socialMediaManagement")}
      />
    </>
  );
}
