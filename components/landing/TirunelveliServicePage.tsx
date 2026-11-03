import Link from "next/link";
import Image from "next/image";
import seoImage from "@/assets/tirunelveli/seo.webp";
import brandingImage from "@/assets/tirunelveli/branding-concept.webp";
import performanceMarketingImage from "@/assets/tirunelveli/performance-marketing.webp";
import socialMediaImage from "@/assets/tirunelveli/social-media-marketing.webp";
import chatgptAdsImage from "@/assets/tirunelveli/chatgpt_ads_poster.webp";
import { FaBolt } from "react-icons/fa6";
import { FaBullhorn, FaChartLine, FaLightbulb, FaRocket, FaSearch } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/fade-in";
import { LogoNewsTicker } from "@/components/aboutus/LogoNewsTicker";
import Faq from "@/components/home/Faq";
import { SeoDashboardIllustration } from "./SeoDashboardIllustration";
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
  return /^(our .*services|our .*process|why |what |ready |frequently asked|build a brand|social media management vs|who can |how long |is ai advertising|ai advertising for)/i.test(title);
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

function parseCtaSection(paragraphs: string[]) {
  const introParagraphs: string[] = [];
  let ctaText = "";
  let phone = "";
  let email = "";
  let officeText = "";

  for (const raw of paragraphs) {
    const clean = raw.replace(/[\\*]/g, "").trim();
    if (clean.includes("→") || /\[.*\]/.test(clean) || /consultation|book/i.test(clean)) {
      ctaText = clean.replace(/[\[\]]/g, "").trim();
    } else if (/for sales|📞|email|✉️/i.test(clean)) {
      const salesMatch = clean.match(/(?:for sales:?\s*|📞\s*)([+\d\s-]+?)(?=\s*(?:✉️|email|$))/i);
      const emailMatch = clean.match(/(?:email:?\s*|✉️\s*)([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i);
      if (salesMatch) phone = salesMatch[1].trim();
      if (emailMatch) email = emailMatch[1].trim();
    } else if (/offices in|chennai|tirunelveli/i.test(clean) && clean.includes("|")) {
      officeText = clean;
    } else {
      introParagraphs.push(clean);
    }
  }

  return { introParagraphs, ctaText, phone, email, officeText };
}

function renderDetailParagraph(paragraph: string) {
  if (/📞|✉️|📍/.test(paragraph)) {
    const phoneMatch = paragraph.match(/(?:📞\s*)([+\d\s-]+?)(?=\s*(?:✉️|📍|$))/);
    const emailMatch = paragraph.match(/(?:✉️\s*)([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
    const officeMatch = paragraph.match(/(?:📍\s*)(.+)$/);
    const prefix = paragraph.replace(/(?:📞|✉️|📍).+$/, "").trim();

    return (
      <div className="tn-service-detail-contact-wrapper" key={paragraph}>
        {prefix && <p className="tn-service-detail-company">{prefix}</p>}
        {(phoneMatch || emailMatch) && (
          <div className="tn-service-cta-contacts" style={{ marginTop: "0.75rem" }}>
            {phoneMatch && (
              <a href={`tel:${phoneMatch[1].replace(/\s+/g, "")}`} className="tn-service-contact-pill">
                <span className="tn-service-contact-pill__icon">📞</span>
                <span className="tn-service-contact-pill__label">For Sales:</span>
                <span className="tn-service-contact-pill__val">{phoneMatch[1].trim()}</span>
              </a>
            )}
            {emailMatch && (
              <a href={`mailto:${emailMatch[1].trim()}`} className="tn-service-contact-pill">
                <span className="tn-service-contact-pill__icon">✉️</span>
                <span className="tn-service-contact-pill__label">Email:</span>
                <span className="tn-service-contact-pill__val">{emailMatch[1].trim()}</span>
              </a>
            )}
          </div>
        )}
        {officeMatch && (
          <p className="tn-service-cta-offices" style={{ marginTop: "0.75rem" }}>
            📍 {officeMatch[1].trim()}
          </p>
        )}
      </div>
    );
  }
  return <p key={paragraph}>{paragraph}</p>;
}

export function TirunelveliServicePage({
  content,
  heroTitle,
  heroSuffix,
  heroTagline,
}: {
  content: string;
  heroTitle: string;
  heroSuffix: string;
  heroTagline?: { beforeHighlight: string; highlight: string };
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
  const isSeoPage = /seo/i.test(heroTitle);
  const isBrandingPage = /branding/i.test(heroTitle);
  const isPerformancePage = /performance/i.test(heroTitle);
  const isSmmPage = /social media/i.test(heroTitle);
  const isChatgptPage = /chatgpt/i.test(heroTitle);
  const featuredImage = isSeoPage
    ? seoImage
    : isBrandingPage
      ? brandingImage
      : isPerformancePage
        ? performanceMarketingImage
        : isSmmPage
          ? socialMediaImage
          : isChatgptPage
            ? chatgptAdsImage
            : undefined;

  const hasSplitSuffix = Boolean(heroTagline && heroSuffix.includes(" "));
  const mainServiceTitle = hasSplitSuffix
    ? `${heroTitle} ${heroSuffix.split(" ").slice(0, -1).join(" ")}`
    : heroTitle;
  const locationPrefix = hasSplitSuffix
    ? heroSuffix.split(" ").slice(-1)[0]
    : heroSuffix;

  return <>
    <Header />
    <main className="tn-service-page">
      {isChatgptPage ? (
        <section className="bm-hero-section-contact tn-service-hero">
          <FadeIn delay={0.1}><div className="bm-hero-badge"><span className="bm-hero-badge__icon"><FaBolt size={19} color="black" /></span><p className="bm-hero-badge__text">Brand Mindz — Tirunelveli</p></div></FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="bm-hero-title bm-tvl-hero-title">
              <span className="bm-hero-title-line">
                <span className="text-black">The Future of Advertising Is</span>
                <span className="text-grey"> AI-Powered.</span>
              </span>
              <span className="bm-hero-title-line">
                <span className="text-black">Is Your</span>
                <span className="text-yellow">Brand Ready?</span>
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="bm-hero-description">
              We help businesses explore emerging AI advertising opportunities, conversational discovery and strategies for building visibility in the next generation of digital experiences.
            </p>
          </FadeIn>
          <FadeIn delay={0.38}><div className="bm-hero-action bm-tvl-hero-action"><Link href="/contact" className="bm-hero-btn"><span className="bm-hero-btn__icon"><FiChevronRight /></span><span className="bm-hero-btn__text">Talk to a <strong>Growth Specialist</strong></span></Link></div></FadeIn>
          <div className="bm-tvl-hero-logos"><LogoNewsTicker /></div>
        </section>
      ) : (
        <section className="bm-hero-section-contact tn-service-hero">
          <FadeIn delay={0.1}><div className="bm-hero-badge"><span className="bm-hero-badge__icon"><FaBolt size={19} color="black" /></span><p className="bm-hero-badge__text">Brand Mindz — Tirunelveli</p></div></FadeIn>
          <FadeIn delay={0.2}><h1 className={`bm-hero-title tn-service-hero-title${heroTagline ? " tn-service-hero-title--with-tagline" : ""}`}><span className="tn-service-hero-title__service text-black">{mainServiceTitle}</span><span className="tn-service-hero-title__location"><span className="text-grey">{locationPrefix}</span>{" "}<span className="text-yellow">Tirunelveli</span></span></h1></FadeIn>
          {heroTagline && <FadeIn delay={0.28}><p className="tn-service-hero-tagline"><span className="text-grey">{heroTagline.beforeHighlight}</span>{" "}<span className="text-yellow">{heroTagline.highlight}</span></p></FadeIn>}
          <FadeIn delay={0.35}><div className="bm-hero-action bm-tvl-hero-action"><Link href="/contact" className="bm-hero-btn"><span className="bm-hero-btn__icon"><FiChevronRight /></span><span className="bm-hero-btn__text">Talk to a <strong>{heroTitle} Specialist</strong></span></Link></div></FadeIn>
          <div className="bm-tvl-hero-logos"><LogoNewsTicker /></div>
        </section>
      )}

      <section className={`tn-service-intro${isBrandingPage ? " tn-service-intro--branding" : ""}${isSmmPage ? " tn-service-intro--smm" : ""}${isSeoPage ? " tn-service-intro--seo" : ""}${isPerformancePage ? " tn-service-intro--performance" : ""}${isChatgptPage ? " tn-service-intro--chatgpt" : ""}`}>
        <FadeIn direction="up">
          <div className="tn-service-intro__panel">
            <div className="tn-service-intro__headline">
              <span className="tn-service-intro__eyebrow">{heroTitle}</span>
              <h2>{introTitle}</h2>
              {isSeoPage && <SeoDashboardIllustration />}
              <div className="tn-service-intro__signals" aria-hidden="true">
                <span>Strategy-led</span><span>Built for growth</span>
              </div>
              {isSmmPage && (
                <div className="tn-service-intro__media">
                  <Image
                    src={socialMediaImage}
                    alt={`${heroTitle} in Tirunelveli`}
                    className="tn-service-intro__img"
                    sizes="(max-width: 900px) 100vw, 480px"
                    priority={false}
                  />
                </div>
              )}
              {isChatgptPage && introCopy.length > 2 && (
                <div className="tn-service-intro__copy tn-service-intro__headline-copy">
                  {introCopy.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              )}
            </div>
            <div className="tn-service-intro__content">
              <p className="tn-service-intro__label">Brand Mindz Global · Tirunelveli</p>
              <div className="tn-service-intro__copy">
                {(isChatgptPage && introCopy.length > 2 ? introCopy.slice(2) : introCopy).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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

      {serviceSection && <section className="bm-tvl-section tn-service-offerings-section"><FadeIn direction="up"><div className="bm-tvl-section-header"><span className="bm-tvl-badge">What We Offer</span><h2 className="bm-tvl-title">{serviceSection.title}</h2>{serviceSection.paragraphs.map((paragraph) => <p className="bm-tvl-desc" key={paragraph}>{paragraph}</p>)}</div></FadeIn><DetailCards details={serviceSection.details} variant="service" /></section>}

      {whySection && <section className="bm-tvl-section--grey"><div className="bm-tvl-inner"><FadeIn direction="up"><div className="bm-tvl-section-header bm-tvl-section-header--center"><span className="bm-tvl-badge">Our Advantage</span><h2 className="bm-tvl-title">{whySection.title}</h2>{whySection.paragraphs.map((paragraph) => <p className="bm-tvl-desc tn-service-centered-desc" key={paragraph}>{paragraph}</p>)}</div></FadeIn><DetailCards details={whySection.details} variant="why" /></div></section>}

      {articleSections.map((section, index) => {
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

        const isFirstEditorial = index === 0;
        const isRankingsSection = /better google rankings|what can a strong brand|social media management vs|who can benefit|how long does social media|build a brand people/i.test(section.title);
        const isCtaSection = /ready to build|ready to grow|book a free|build a brand for|build a brand your/i.test(section.title) || (/ready to/i.test(section.title) && !/build a brand people/i.test(section.title));

        if (isCtaSection) {
          const { introParagraphs, ctaText, phone, email, officeText } = parseCtaSection(section.paragraphs);

          return (
            <section className="bm-tvl-section tn-service-editorial tn-service-editorial--cta" key={section.title}>
              <div className="tn-service-editorial__upper">
                <FadeIn className="tn-service-editorial__heading" direction="up">
                  <div className="bm-tvl-section-header">
                    <span className="bm-tvl-badge">Brand Mindz Global</span>
                    <h2 className="bm-tvl-title">{section.title}</h2>
                  </div>
                </FadeIn>
                <div className="tn-service-editorial__upper-copy">
                  {introParagraphs.map((paragraph) => (
                    <p className="bm-tvl-desc" key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {(ctaText || phone || email || officeText) && (
                <div className="tn-service-editorial__lower">
                  <div className="tn-service-editorial__lower-main">
                    {ctaText && (
                      <Link href="/contact" className="tn-service-cta-btn">
                        <span>{ctaText}</span>
                        <FiChevronRight className="tn-service-cta-btn__icon" />
                      </Link>
                    )}
                    {(phone || email) && (
                      <div className="tn-service-cta-contacts">
                        {phone && (
                          <a href={`tel:${phone.replace(/\s+/g, "")}`} className="tn-service-contact-pill">
                            <span className="tn-service-contact-pill__icon">📞</span>
                            <span className="tn-service-contact-pill__label">For Sales:</span>
                            <span className="tn-service-contact-pill__val">{phone}</span>
                          </a>
                        )}
                        {email && (
                          <a href={`mailto:${email}`} className="tn-service-contact-pill">
                            <span className="tn-service-contact-pill__icon">✉️</span>
                            <span className="tn-service-contact-pill__label">Email:</span>
                            <span className="tn-service-contact-pill__val">{email}</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  {officeText && (
                    <p className="tn-service-cta-offices">{officeText}</p>
                  )}
                </div>
              )}
            </section>
          );
        }

        const isTwoZoneSection = /what can (performance marketing|social media management) do for your business/i.test(section.title);

        if (isTwoZoneSection) {
          const upperCopy = section.paragraphs.slice(0, 3);
          const lowerCopyCol1 = section.paragraphs.slice(3, 4);
          const lowerCopyCol2 = section.paragraphs.slice(4);

          return (
            <section className="bm-tvl-section tn-service-editorial tn-service-editorial--two-zone" key={section.title}>
              <div className="tn-service-editorial__upper">
                <FadeIn className="tn-service-editorial__heading" direction="up">
                  <div className="bm-tvl-section-header">
                    <span className="bm-tvl-badge">Brand Mindz Global</span>
                    <h2 className="bm-tvl-title">{section.title}</h2>
                  </div>
                </FadeIn>
                <div className="tn-service-editorial__upper-copy">
                  {upperCopy.map((paragraph) => (
                    <p className="bm-tvl-desc" key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="tn-service-editorial__lower">
                <div className="tn-service-editorial__lower-grid">
                  <div className="tn-service-editorial__lower-col">
                    {lowerCopyCol1.map((paragraph) => (
                      <p className="bm-tvl-desc" key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="tn-service-editorial__lower-col">
                    {lowerCopyCol2.map((paragraph) => (
                      <p className="bm-tvl-desc" key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        }

        const isFeaturedEditorial = isFirstEditorial && Boolean(featuredImage);
        const isChatgptFirstEditorial = isChatgptPage && isFirstEditorial;
        const isAiRightSection = /is ai advertising right/i.test(section.title);

        if (isAiRightSection) {
          return (
            <section className="bm-tvl-section tn-service-editorial tn-service-editorial--balanced" key={section.title}>
              <FadeIn className="tn-service-editorial__heading" direction="up">
                <div className="bm-tvl-section-header">
                  <span className="bm-tvl-badge">Brand Mindz Global</span>
                  <h2 className="bm-tvl-title">{section.title}</h2>
                </div>
              </FadeIn>
              <div className="tn-service-balance-grid">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <article className="tn-service-detail-card tn-service-balance-card" key={pIdx}>
                    <p className="bm-tvl-desc">{paragraph}</p>
                  </article>
                ))}
              </div>
            </section>
          );
        }

        return <section className={`bm-tvl-section tn-service-editorial${isRankingsSection ? " tn-service-editorial--rankings" : ""}${isFeaturedEditorial ? " tn-service-editorial--with-image" : ""}${isChatgptFirstEditorial ? " tn-service-editorial--chatgpt" : ""}`} key={section.title}>
          <FadeIn className="tn-service-editorial__heading" direction="up">
            <div className="bm-tvl-section-header">
              <span className="bm-tvl-badge">Brand Mindz Global</span>
              <h2 className="bm-tvl-title">{section.title}</h2>
            </div>
            {isChatgptFirstEditorial && section.paragraphs.length > 0 && (
              <div className="tn-service-editorial__heading-copy">
                {section.paragraphs.map((paragraph) => (
                  <p className="bm-tvl-desc" key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            {isFirstEditorial && featuredImage && (
              <div className={`tn-service-editorial__media${isPerformancePage ? " tn-service-editorial__media--performance" : ""}${isSmmPage ? " tn-service-editorial__media--smm" : ""}${isChatgptPage ? " tn-service-editorial__media--chatgpt" : ""}`}>
                <Image
                  src={featuredImage}
                  alt={`${heroTitle} in Tirunelveli`}
                  className="tn-service-editorial__img"
                  sizes="(max-width: 900px) 100vw, 420px"
                  priority={false}
                />
              </div>
            )}
          </FadeIn>
          <div className="tn-service-editorial__body">
            {!isChatgptFirstEditorial && section.paragraphs.map((paragraph, pIdx) => (
              <p
                className="bm-tvl-desc"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
            {isChatgptFirstEditorial && section.details.length > 0 && (
              <article className="tn-service-detail-card tn-service-detail-card--inline tn-service-detail-card--inline-top">
                <h3>{section.details[0].title}</h3>
                {section.details[0].paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            )}
          </div>
          {!isChatgptFirstEditorial && section.details.length > 0 && (
            <div className={`tn-service-detail-grid${section.details.length === 1 ? " tn-service-detail-grid--single" : ""}`}>
              {section.details.map((detail) => (
                <article className="tn-service-detail-card" key={detail.title}>
                  <h3>{detail.title}</h3>
                  {detail.paragraphs.map((paragraph) => renderDetailParagraph(paragraph))}
                </article>
              ))}
            </div>
          )}
        </section>;
      })}

      <section className="tn-service-final-cta"><div className="tn-service-final-cta__inner"><p>Let&apos;s build what comes next.</p><h2>Ready to grow your business?</h2><Link href="/contact">Talk to a Growth Specialist <FiChevronRight /></Link></div></section>
    </main>
    <Footer />
  </>;
}
