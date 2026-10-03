import type { StaticImageData } from "next/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import truckTaxiImage from "@/assets/case-studies/trucktaxi.webp";
import arasanImage from "@/assets/case-studies/arasan.webp";
import spacemanImage from "@/assets/case-studies/spaceman.webp";
import wolfMagicImage from "@/assets/case-studies/wolfmagic.webp";
import styles from "./case-study.module.css";

interface CaseStudyPresentation {
  fileName: string; category: string; title: string; summary: string; image?: StaticImageData;
  highlights: { value: string; label: string }[];
}

const caseStudies: Record<string, CaseStudyPresentation> = {
  "performance-marketing-case-studies": { fileName: "performance-marketing-case-studies.txt", category: "Digital Marketing", title: "Fast, Scalable & Cost-Efficient Driver Onboarding", summary: "A performance-led Meta campaign that helped Truck Taxi acquire high-intent driver leads at scale.", image: truckTaxiImage, highlights: [{ value: "1,000+", label: "Verified driver leads" }, { value: "₹2.60–₹3.62", label: "Cost per lead" }, { value: "13+ Lakh", label: "Total reach" }] },
  "mathi-packaging-case-study": { fileName: "mathi-packaging-case-study.txt", category: "Branding", title: "From a Local Cinnamon Product to a Brand Ready for a Bigger Market", summary: "A packaging redesign that gave a women-led enterprise a clearer, more confident retail presence.", highlights: [{ value: "Clearer", label: "Product recognition" }, { value: "Stronger", label: "Retail presence" }, { value: "Scalable", label: "Visual foundation" }] },
  "dic-tenkasi-case-study": { fileName: "dic-tenkasi-case-study.txt", category: "Development", title: "Rebuilding the Digital Experience of DIC Tenkasi", summary: "A modern, accessible digital platform for entrepreneurs, schemes, incentives, and public information.", highlights: [{ value: "Faster", label: "Page performance" }, { value: "Responsive", label: "Mobile experience" }, { value: "Scalable", label: "Content structure" }] },
  "arasan-supermarket-app-install-case-study": { fileName: "arasan-supermarket-app-install-case-study.txt", category: "Digital Marketing", title: "Turning Every Rupee Into a Customer Action", summary: "A focused local Meta campaign that grew Arasan SuperMarket app adoption in Tirunelveli.", image: arasanImage, highlights: [{ value: "1,000+", label: "Reported app installs" }, { value: "₹6.57", label: "Reported cost per install" }, { value: "86,108", label: "People reached" }] },
  "spaceman-craft-case-study": { fileName: "spaceman-craft-case-study.txt", category: "Development", title: "Building a Future-Ready Brand from Tier Cities", summary: "A connected brand and digital experience designed to communicate ambition beyond geography.", image: spacemanImage, highlights: [{ value: "Brand + Web", label: "Connected foundation" }, { value: "Responsive", label: "Cross-device experience" }, { value: "Scalable", label: "Growth-ready architecture" }] },
  "wolf-magic-academy-seo-case-study": { fileName: "wolf-magic-academy-seo-case-study.txt", category: "Digital Marketing", title: "From Low Visibility to Stronger Organic Presence", summary: "A complete SEO foundation for an online education platform seeking sustainable search visibility.", image: wolfMagicImage, highlights: [{ value: "SEO", label: "Technical foundation" }, { value: "Stronger", label: "Search visibility" }, { value: "Scalable", label: "Organic growth strategy" }] },
  "havona-groups-meta-leads-case-study": { fileName: "havona-groups-meta-leads-case-study.txt", category: "Digital Marketing", title: "Turning Meta Ads Into a High-Performing Lead Engine", summary: "A market-specific Meta lead-generation strategy for a construction company serving Tamil Nadu and Tenkasi.", highlights: [{ value: "337", label: "Leads generated" }, { value: "₹120–₹135", label: "Cost per lead" }, { value: "198,000+", label: "People reached" }] },
};

const sectionHeadings = new Set(["Project at a Glance", "Campaign Snapshot", "The Headline Result", "The Challenge", "The Strategy", "The Results", "The Efficiency Story", "Why This Campaign Matters", "What Comes Next", "The Bigger Lesson", "The Client", "Our Approach", "Why It Worked", "The Vision", "Brand Development", "Website Development", "Designing for Tier-2 & Tier-3 Cities", "The Tier-City Opportunity", "Development Approach", "Key Deliverables", "The Result", "The Bigger Story", "Project Overview", "Objectives and Goals", "Approach", "Performance in Context", "Business Impact", "Key Takeaways", "Get Similar Results"]);

function formatContent(content: string, presentation: CaseStudyPresentation) {
  return content.split(/\r?\n/).map((line) => line.trim())
    .filter((line) => line && !line.startsWith("[Button") && !line.startsWith("Section "))
    .filter((line) => line !== presentation.title && line !== presentation.summary)
    .map((line, index) => {
      if (sectionHeadings.has(line)) return <h2 key={`${line}-${index}`}>{line}</h2>;
      const subheading = line.match(/^\d{1,2}\s*[—–-]\s*(.+)$/);
      if (subheading) return <h3 key={`${line}-${index}`}>{subheading[1]}</h3>;
      const fact = line.match(/^([^:]{2,34}):\s*(.+)$/);
      if (fact && fact[1].split(" ").length <= 5) return <p className={styles.fact} key={`${line}-${index}`}><strong>{fact[1]}</strong><span>{fact[2]}</span></p>;
      return <p key={`${line}-${index}`}>{line}</p>;
    });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const presentation = caseStudies[slug];
  if (!presentation) notFound();
  const content = await fs.readFile(path.join(process.cwd(), "public", "case-studies-content", presentation.fileName), "utf8");

  return <><Header /><main className={styles.page}>
    <section className={styles.hero}>
      {presentation.image ? <Image src={presentation.image} alt={`${presentation.title} case study visual`} fill priority sizes="100vw" className={styles.heroImage} /> : <div className={styles.heroPattern} aria-hidden="true" />}
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.heroContent}>
        <Link href="/case-studies" className={styles.backLink}><ArrowLeft size={18} />Back to case studies</Link>
        <p className={styles.category}>{presentation.category}</p><h1>{presentation.title}</h1><p className={styles.heroSummary}>{presentation.summary}</p>
      </div>
    </section>
    <section className={styles.highlights} aria-label="Case study highlights"><div className={styles.container}>{presentation.highlights.map((item) => <div className={styles.highlight} key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></section>
    <article className={styles.article}><div className={styles.articleIntro}><p>Case study</p><h2>The story behind the results</h2></div><div className={styles.prose}>{formatContent(content, presentation)}</div></article>
    <section className={styles.cta}><div><p>Ready to grow?</p><h2>Let’s create your next success story.</h2></div><Link href="/contact" className={styles.ctaLink}>Talk to a growth specialist <ArrowUpRight size={19} /></Link></section>
  </main><Footer /></>;
}
