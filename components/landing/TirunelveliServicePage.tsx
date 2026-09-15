import Link from "next/link";
import { FaBolt } from "react-icons/fa6";
import { FaBullhorn, FaChartLine, FaLightbulb, FaRocket, FaSearch } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/fade-in";
import { LogoNewsTicker } from "@/components/aboutus/LogoNewsTicker";
import Faq from "@/components/home/Faq";
import "@/style/home/banner.css";
import "@/style/landing/tirunelveli.css";
import "@/style/landing/tirunelveli-service-pages.css";

type ContentBlock = { level: 1 | 2 | 3 | 0; text: string };
type Detail = { title: string; paragraphs: string[] };
type ContentSection = { title: string; paragraphs: string[]; details: Detail[] };

function cleanMarkdown(text: string) {
  return text
    .replace(/\\([+.#\[\]()-])/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\bCTA\b/g, "")
    .replace(/^\d+\.\s+/, "")
    .trim()
    .replace(/^\[([^\]]+)\]$/, "$1")
    .trim();
}

function parseContent(markdown: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let paragraph: string[] = [];
  const flush = () => {
    const text = cleanMarkdown(paragraph.join(" "));
    if (text) blocks.push({ level: 0, text });
    paragraph = [];
  };

  for (const sourceLine of markdown.split("\n")) {
    const line = sourceLine.trim();
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flush();
      blocks.push({ level: heading[1].length as 1 | 2 | 3, text: cleanMarkdown(heading[2]) });
    } else if (!line || line === "---") {
      flush();
    } else {
      paragraph.push(line.replace(/^[-*]\s+/, ""));
    }
  }
  flush();
  return blocks;
}

function isPrimarySection(title: string) {
  return /^(our .*services|why |what |ready |frequently asked|build a brand|social media management vs|who can |how long )/i.test(title);
}

function getSections(blocks: ContentBlock[]): ContentSection[] {
  const sections: ContentSection[] = [];
  let section: ContentSection | undefined;
  let detail: Detail | undefined;

  for (const block of blocks) {
    const isFaqDetail = Boolean(section && /frequently asked/i.test(section.title));
    const startsNewSection = !section || (!isFaqDetail && isPrimarySection(block.text)) || /^build a brand people remember$/i.test(block.text);

    if ((block.level === 1 || block.level === 2) && startsNewSection) {
      section = { title: block.text, paragraphs: [], details: [] };
      sections.push(section);
      detail = undefined;
    } else if ((block.level === 1 || block.level === 2 || block.level === 3) && section) {
      detail = { title: block.text, paragraphs: [] };
      section.details.push(detail);
    } else if (block.level === 0 && section) {
      (detail ?? section).paragraphs.push(block.text);
    }
  }
  return sections;
}

const sectionIcons = [FaBullhorn, FaChartLine, FaSearch, FaLightbulb, FaRocket];

function DetailCards({ details, variant }: { details: Detail[]; variant: "service" | "why" }) {
  const gridClass = variant === "service" ? "bm-tvl-services-grid tn-service-offerings-grid" : "bm-tvl-why-grid tn-service-why-grid";
  return (
    <div className={gridClass}>
      {details.map((detail, index) => {
        const Icon = sectionIcons[index % sectionIcons.length];
        if (variant === "why") {
          return <div className="bm-tvl-why-card" key={detail.title}>
            <div className="bm-tvl-why-card-top"><span className="bm-tvl-why-number">{String(index + 1).padStart(2, "0")}</span><span className="bm-tvl-why-icon"><Icon /></span></div>
            <h3>{detail.title}</h3>{detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>;
        }
        return <div className="bm-tvl-service-step" key={detail.title}>
          <div className="bm-tvl-service-card"><div className="bm-tvl-service-icon"><Icon /></div><h3 className="bm-tvl-service-title">{detail.title}</h3>{detail.paragraphs.map((paragraph) => <p className="bm-tvl-service-desc" key={paragraph}>{paragraph}</p>)}</div>
        </div>;
      })}
    </div>
  );
}

export function TirunelveliServicePage({
  content,
  heroTitle,
  heroSuffix,
}: {
  content: string;
  heroTitle: string;
  heroSuffix: string;
}) {
  const blocks = parseContent(content);
  const heroIndex = blocks.findIndex((block) => block.level === 1);
  const firstSectionIndex = blocks.findIndex((block, index) => index > heroIndex && block.level === 2);
  const nextSectionIndex = blocks.findIndex((block, index) => index > firstSectionIndex && (block.level === 1 || block.level === 2));
  const introEndIndex = nextSectionIndex === -1 ? blocks.length : nextSectionIndex;
  const introBlocks = blocks.slice(heroIndex + 1, introEndIndex);
  const introTitle = introBlocks.find((block) => block.level === 2)?.text ?? `Built for ${heroTitle}`;
  const introParagraphs = introBlocks.filter((block) => block.level === 0).map((block) => block.text);
  const introCta = [...introParagraphs].reverse().find((paragraph) => paragraph.includes("→"));
  const introCopy = introParagraphs.filter((paragraph) => paragraph !== introCta);
  const sections = getSections(blocks.slice(introEndIndex));
  const servicesIndex = sections.findIndex((section) => /our .*services/i.test(section.title));
  const whyIndex = sections.findIndex((section) => /why (choose|businesses)/i.test(section.title));
  const serviceSection = servicesIndex >= 0 ? sections[servicesIndex] : undefined;
  const whySection = whyIndex >= 0 ? sections[whyIndex] : undefined;
  const articleSections = sections.filter((_, index) => index !== servicesIndex && index !== whyIndex);

  return <>
    <Header />
    <main className="tn-service-page">
      <section className="bm-hero-section-contact tn-service-hero">
        <FadeIn delay={0.1}><div className="bm-hero-badge"><span className="bm-hero-badge__icon"><FaBolt size={19} color="black" /></span><p className="bm-hero-badge__text">Brand Mindz — Tirunelveli</p></div></FadeIn>
        <FadeIn delay={0.2}><h1 className="bm-hero-title tn-service-hero-title"><span className="tn-service-hero-title__service text-black">{heroTitle}</span><span className="tn-service-hero-title__location"><span className="text-grey">{heroSuffix}</span><span className="text-yellow">Tirunelveli</span></span></h1></FadeIn>
        <FadeIn delay={0.35}><div className="bm-hero-action bm-tvl-hero-action"><Link href="/contact" className="bm-hero-btn"><span className="bm-hero-btn__icon"><FiChevronRight /></span><span className="bm-hero-btn__text">Talk to a <strong>{heroTitle} Specialist</strong></span></Link></div></FadeIn>
        <div className="bm-tvl-hero-logos"><LogoNewsTicker /></div>
      </section>

      <section className="tn-service-intro">
        <FadeIn direction="up">
          <div className="tn-service-intro__panel">
            <div className="tn-service-intro__headline">
              <span className="tn-service-intro__eyebrow">{heroTitle}</span>
              <h2>{introTitle}</h2>
              <div className="tn-service-intro__signals" aria-hidden="true">
                <span>Strategy-led</span><span>Built for growth</span>
              </div>
            </div>
            <div className="tn-service-intro__content">
              <p className="tn-service-intro__label">Brand Mindz Global · Tirunelveli</p>
              <div className="tn-service-intro__copy">
                {introCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <Link href="/contact" className="tn-service-intro__cta">
                {introCta?.replace(/[\[\]]/g, "").trim() || "Talk to a Growth Specialist"}
                <FiChevronRight />
              </Link>
            </div>
            <span className="tn-service-intro__glow tn-service-intro__glow--one" aria-hidden="true" />
            <span className="tn-service-intro__glow tn-service-intro__glow--two" aria-hidden="true" />
          </div>
        </FadeIn>
      </section>

      {serviceSection && <section className="bm-tvl-section"><FadeIn direction="up"><div className="bm-tvl-section-header"><span className="bm-tvl-badge">What We Offer</span><h2 className="bm-tvl-title">{serviceSection.title}</h2>{serviceSection.paragraphs.map((paragraph) => <p className="bm-tvl-desc" key={paragraph}>{paragraph}</p>)}</div></FadeIn><DetailCards details={serviceSection.details} variant="service" /></section>}

      {whySection && <section className="bm-tvl-section--grey"><div className="bm-tvl-inner"><FadeIn direction="up"><div className="bm-tvl-section-header bm-tvl-section-header--center"><span className="bm-tvl-badge">Our Advantage</span><h2 className="bm-tvl-title">{whySection.title}</h2>{whySection.paragraphs.map((paragraph) => <p className="bm-tvl-desc tn-service-centered-desc" key={paragraph}>{paragraph}</p>)}</div></FadeIn><DetailCards details={whySection.details} variant="why" /></div></section>}

      {articleSections.map((section) => {
        const isFaq = /frequently asked/i.test(section.title);

        if (isFaq) {
          return <Faq
            key={section.title}
            items={section.details.map((detail) => ({
              question: detail.title,
              answer: detail.paragraphs.join("\n\n"),
            }))}
            subtitle="Frequently Asked Questions"
          />;
        }

        return <section className="bm-tvl-section tn-service-editorial" key={section.title}>
          <FadeIn className="tn-service-editorial__heading" direction="up">
            <div className="bm-tvl-section-header">
              <span className="bm-tvl-badge">Brand Mindz Global</span>
              <h2 className="bm-tvl-title">{section.title}</h2>
            </div>
          </FadeIn>
          <div className="tn-service-editorial__body">
            {section.paragraphs.map((paragraph) => <p className="bm-tvl-desc" key={paragraph}>{paragraph}</p>)}
          </div>
          {section.details.length > 0 && <div className="tn-service-detail-grid">{section.details.map((detail) => <article className="tn-service-detail-card" key={detail.title}><h3>{detail.title}</h3>{detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article>)}</div>}
        </section>;
      })}

      <section className="tn-service-final-cta"><div className="tn-service-final-cta__inner"><p>Let&apos;s build what comes next.</p><h2>Ready to grow your business?</h2><Link href="/contact">Talk to a Growth Specialist <FiChevronRight /></Link></div></section>
    </main>
    <Footer />
  </>;
}
