import type { Metadata } from "next";
import { TirunelveliServicePage } from "@/components/landing/TirunelveliServicePage";
import { getTirunelveliServiceContent, tirunelveliServicePages } from "@/lib/tirunelveli-service-pages";

const service = tirunelveliServicePages.webDevelopment;
export const metadata: Metadata = { title: service.title, description: service.description, alternates: { canonical: `https://www.brandmindz.com/${service.slug}` } };
export default async function Page() { return <TirunelveliServicePage heroTitle={service.heroTitle} heroSuffix={service.heroSuffix} heroTagline={{ beforeHighlight: "That Builds Websites", highlight: "People Remember" }} content={await getTirunelveliServiceContent("webDevelopment")} />; }
