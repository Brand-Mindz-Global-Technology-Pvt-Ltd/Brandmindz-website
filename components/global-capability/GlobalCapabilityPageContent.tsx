import "../../style/aboutus/globalcapability.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Zap,
  Check,
  Target,
  Layers,
  Shield,
  TrendingUp,
} from "lucide-react";
import heroPattern from "@/assets/HomeSection/banner/group1.webp";
import faqBackground from "@/assets/HomeSection/faq/15645760_784511.webp";
import globalCapabilityTeam from "@/assets/about/global-capability-team.webp";
import globalWorldMap from "@/assets/HomeSection/Whychoose/group4.webp";

export const metadata: Metadata = {
  title: "Global Capability | Brand Mindz",
  description:
    "Brand Mindz operates as a global-ready digital partner with international standards in execution, reporting, and accountability.",
  keywords: [
    "global digital agency",
    "international digital marketing",
    "multi-market campaigns",
    "scalable web development",
    "global brand positioning",
  ],
  alternates: { canonical: "https://www.brandmindz.com/global-capability" },
  openGraph: {
    title: "Global Capability | Brand Mindz",
    description:
      "Performance-driven digital partner built to meet international standards in execution and measurable growth.",
    url: "https://www.brandmindz.com/global-capability",
    type: "website",
  },
};

const capabilityAreas = [
  {
    title: "Digital Marketing",
    description: "Focused on ROI, conversion efficiency, and long-term positioning.",
  },
  {
    title: "Web & App Development",
    description: "Built for scalability, performance stability, and future growth.",
  },
  {
    title: "Branding Systems",
    description: "Designed to maintain clarity and consistency across markets.",
  },
];

const reliabilityPrinciples = [
  "Respecting timelines",
  "Protecting brand equity",
  "Addressing risks early",
  "Owning outcomes",
];

const globalStandardsPoints = [
  "Structured SOPs",
  "Defined KPIs",
  "Performance reporting frameworks",
  "Disciplined communication cycles",
];

const scaleCapabilities = [
  {
    title: "Quality Standards Before Execution",
    description: "Clear quality benchmarks are established before work begins, keeping delivery consistent as projects expand.",
  },
  {
    title: "Defined KPIs",
    description: "Every engagement starts with measurable performance indicators connected to business priorities.",
  },
  {
    title: "Structured Reporting",
    description: "Consistent reporting formats provide visibility across campaigns, platforms, teams, and markets.",
  },
  {
    title: "Documented Milestones",
    description: "Timelines, responsibilities, and delivery checkpoints are documented to keep complex work predictable.",
  },
  {
    title: "Shared Accountability",
    description: "Ownership is distributed clearly across teams so decisions move faster and outcomes remain protected.",
  },
  {
    title: "Sustainable Scale",
    description: "Our Growth Accelerator Program builds capability into culture, enabling growth without sacrificing standards.",
  },
];

const borderReadiness = [
  {
    title: "Time-Zone Awareness",
    description: "Structured communication and delivery rhythms keep work moving reliably across regions.",
    icon: Globe,
  },
  {
    title: "Cultural Sensitivity",
    description: "Market context and audience expectations inform how strategy and creative execution are adapted.",
    icon: Target,
  },
  {
    title: "Platform Expertise",
    description: "Our teams work across the platforms and systems required for scalable digital operations.",
    icon: Zap,
  },
  {
    title: "Regulatory Understanding",
    description: "Risks and regional requirements are considered early, with preparation instead of reaction.",
    icon: Shield,
  },
];

const faqs = [
  {
    question: "What does Global Capability mean at Brand Mindz?",
    answer:
      "Global Capability at Brand Mindz refers to our ability to deliver structured digital marketing, web development, and branding services that meet international standards in execution, reporting, and measurable performance.",
  },
  {
    question: "Does Brand Mindz work with international clients?",
    answer:
      "Yes. Brand Mindz supports businesses operating across multiple markets by delivering performance-driven digital marketing and scalable web and application development systems.",
  },
  {
    question: "How does Brand Mindz maintain global standards?",
    answer:
      "We follow structured SOPs, defined KPIs, performance reporting frameworks, and disciplined communication cycles to ensure consistency across regions.",
  },
  {
    question: "Is Brand Mindz equipped for multi-market campaigns?",
    answer:
      "Yes. Our systems are designed to manage multi-platform digital campaigns, cross-market creative adaptations, and scalable brand positioning strategies.",
  },
  {
    question: "What industries benefit from your global capability?",
    answer:
      "Businesses in technology, e-commerce, education, healthcare, manufacturing, and growth-stage enterprises benefit from our structured digital execution and measurable growth approach.",
  },
  {
    question: "How does Brand Mindz ensure reliability for global clients?",
    answer:
      "We maintain performance visibility at every stage through structured reporting, defined deliverables, milestone tracking, and proactive optimization strategies.",
  },
  {
    question: "What makes Brand Mindz different from other global agencies?",
    answer:
      "Unlike agencies that focus on creative output alone, Brand Mindz integrates performance marketing, scalable development systems, and structured accountability into every engagement.",
  },
  {
    question: "Can Brand Mindz handle large-scale digital projects?",
    answer:
      "Yes. Our operational framework supports scalable campaign execution, structured website and application deployment, and long-term brand consistency.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Brand Mindz Global Technology Pvt Ltd",
      url: "https://www.brandmindz.com",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const SectionIntro = ({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
}) => (
  <div className="gc-section-intro">
    <p
      className={`text-sm font-bold uppercase tracking-[0.22em] ${
        dark ? "text-[#ffdb00]" : "text-[#000000]"
      }`}
    >
      {eyebrow}
    </p>
    <h2 className="gc-section-intro-title text-[clamp(2.35rem,4vw,3.75rem)] font-extrabold leading-[1.12] tracking-[-0.045em]">
      {title}
    </h2>
    {text ? (
      <p
        className={`gc-section-intro-text text-[clamp(1.12rem,1.45vw,1.5rem)] leading-[1.65] ${
          dark ? "text-zinc-300" : "text-zinc-600"
        }`}
      >
        {text}
      </p>
    ) : null}
  </div>
);

const PointGrid = ({ items, dark = false }: { items: string[]; dark?: boolean }) => (
  <div className="gc-point-grid grid gap-4 sm:grid-cols-2">
    {items.map((item) => (
      <div
        key={item}
        className={`gc-point-item flex min-w-0 items-center justify-center gap-3 rounded-2xl px-5 py-4 text-center text-base font-bold leading-6 shadow-sm sm:text-lg ${
          
          dark
            ? "border border-white/10 bg-white/[.07] text-white"
            : "border border-zinc-200 bg-white text-zinc-950"
        }`}
          style={{ minHeight: "72px" }}

      >
        <span className="gc-point-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ffdb00] text-black">
          <Check size={16} strokeWidth={3} />
        </span>
        <span className="gc-point-label min-w-0 wrap-break-word">{item}</span>
      </div>
    ))}
  </div>
);

export default function GlobalCapabilityPageContent() {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="global-capability-page overflow-hidden bg-white text-center text-zinc-950">
        {/* Hero Section */}
        <section className="gc-hero relative isolate flex items-start overflow-hidden bg-white pb-2 sm:pb-4 lg:pb-2">
          <Image
            src={heroPattern}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-5 -z-20 h-auto w-full object-contain"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-[48%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(245,245,243,.92)_100%)]" />

          <div className="gc-container">
            <div className="flex w-full justify-center px-4 text-center">
              <div
  className="inline-flex flex-wrap items-center justify-center gap-3 text-center text-[clamp(1.35rem,2.5vw,2.5rem)] font-semibold leading-normal"
  style={{ maxWidth: "1100px" }}
>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ffdb00] text-black sm:h-10 sm:w-10">
                  <Globe size={18} />
                </span>
                <span className="text-center">Global Standards. Local Execution.</span>
              </div>
            </div>
            <h1
  className="gc-hero-title mx-auto mt-8 text-center text-[clamp(3rem,6.35vw,6rem)] font-bold leading-[1.12] tracking-[-0.035em] text-black"
  style={{ maxWidth: "1300px" }}
>
              <span>Built for</span>{" "}
              <span className="text-zinc-500">Global Standards.</span>
              <br />
              <span className="text-[#ffcc02]">Beyond Borders.</span>
            </h1>

            <div className="gc-hero-description text-center">
              <p className="gc-hero-copy font-normal text-zinc-900">
                Brand Mindz was never built to operate within comfort zones. From the beginning, our systems were designed to meet international expectations — in communication, execution, reporting, and accountability.
              </p>
            </div>

            <article className="gc-card-rise gc-global-story">
              <h2 className="gc-global-story-title">
                <span>Global capability is not about location.</span>
                <span>It is about standards.</span>
              </h2>
              <div className="gc-global-story-copy">
                <p>
                  We operate as a performance-led digital marketing, web development, and branding partner for businesses that demand structured execution and measurable growth. Our systems are built to support multi-market operations, scalable campaigns, and consistent brand positioning across regions.
                </p>
                <p className="gc-global-story-closing">
                  We are not a local agency attempting expansion. We are a global-ready organization by design.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Capability Travel Section */}
        <section className="gc-travel-section">
          <Image src={heroPattern} alt="" aria-hidden className="gc-travel-pattern" />
          <div className="gc-container gc-travel-layout">
            <div className="gc-travel-image">
              <Image
                src={globalCapabilityTeam}
                alt="Global team collaborating on strategy and measurable execution"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1200px) 90vw, 1180px"
              />
            </div>
            <div className="gc-travel-heading">
              <p className="gc-travel-eyebrow">Capability That Travels</p>
              <h2 className="gc-travel-title">
                Markets differ. Cultures differ.
                <span>Execution principles remain constant.</span>
              </h2>
            </div>
            <p className="gc-travel-copy">Clear objectives, defined timelines, measurable outcomes, and transparent reporting form the foundation of every engagement we undertake. Global brands trust Brand Mindz because our delivery is predictable.</p>
          </div>
        </section>

        {/* Prepared for Scale Section */}
        <section className="gc-section gc-scale-section">
          <div className="gc-container">
            <div className="gc-scale-panel">
              <SectionIntro
                eyebrow="Prepared for Scale"
                title="When capability is embedded into culture, scale becomes sustainable."
                text="Growth introduces complexity. Campaigns expand, platforms multiply, and expectations rise. Our internal Growth Accelerator Program ensures that quality standards are defined before execution begins."
              />
              <div className="gc-scale-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {scaleCapabilities.map(({ title, description }) => (
                  <article key={title} className="gc-scale-card">
                    <h3 className="gc-scale-card-title">{title}</h3>
                    <p className="gc-scale-card-text">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Performance-Driven Section */}
        <section className="gc-section gc-performance-section bg-white">
          <div className="gc-container">
            <SectionIntro
              eyebrow="A Performance-Driven Digital Partner"
              title="We deliver across three integrated capability areas."
            />

            <div className="gc-capability-grid grid gap-8 lg:grid-cols-3">
              {capabilityAreas.map(({ title, description }) => (
                <article
                  key={title}
                  className="gc-capability-card"
                >
                  <div className="gc-capability-icon">
                    <Layers size={32} />
                  </div>
                  <h3 className="gc-capability-title">{title}</h3>
                  <p className="gc-capability-text">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reliability Section */}
        <section className="gc-section gc-reliability-section bg-white">
          <div className="gc-container">
            <SectionIntro
              eyebrow="Reliability as a Core Principle"
              title="Large-scale brands do not look for vendors. They look for reliability."
              text="Reliability means respecting timelines, protecting brand equity, addressing risks early, and owning outcomes. Our processes provide performance visibility at every stage."
            />

            <PointGrid items={reliabilityPrinciples} />
          </div>
        </section>

        {/* Beyond Borders Section */}
        <section className="gc-section gc-readiness-section">
          <div className="gc-container">
            <SectionIntro
              eyebrow="Beyond Borders. Beyond Excuses."
              title="Global operations demand maturity and preparation."
              text="Operating across markets requires time-zone awareness, cultural sensitivity, platform expertise, and regulatory understanding. We approach these variables with preparation, not reaction."
              dark
            />

            <div className="gc-readiness-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {borderReadiness.map(({ title, description, icon: Icon }) => (
                <article key={title} className="gc-readiness-card">
                  <Icon className="gc-readiness-icon" size={30} />
                  <h3 className="gc-readiness-title font-extrabold">{title}</h3>
                  <p className="gc-readiness-text">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Global Standards Section */}
        <section className="gc-section gc-standards-section">
          <div className="gc-container gc-standards-framework">
            <div className="gc-standards-content">
              <div className="gc-standards-box">
                <h2 className="gc-standards-title">
                  How we maintain global standards
                </h2>
                <p className="gc-standards-text">
                  We follow structured SOPs, defined KPIs, performance reporting frameworks, and disciplined communication cycles to ensure consistency across regions. This systematic approach enables us to deliver predictable results while scaling operations across multiple markets.
                </p>
              </div>

              <PointGrid
                items={globalStandardsPoints}
                dark={false}
              />
            </div>

            <div className="gc-standards-map" aria-hidden="true">
              <Image src={globalWorldMap} alt="" />
            </div>
          </div>
        </section>

        {/* Global Benchmark Section */}
        <section className="gc-section gc-benchmark-section">
          <div className="gc-container gc-benchmark-layout">
            <SectionIntro
              eyebrow="The Standard We Compete Against"
              title="We compare our work to global expectations—not regional benchmarks."
              text="Our focus remains constant: performance, structure, accountability, and long-term impact."
            />
            <div className="gc-standard-statement">
              <TrendingUp size={36} className="mx-auto text-black" />
              <strong>Built for disciplined execution wherever business operates.</strong>
              <p>
                Brand Mindz is built for businesses that value clarity in growth strategy, predictable delivery, and measurable outcomes across markets.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="gc-faq-section"
          style={{ backgroundImage: `url("${faqBackground.src}")` }}
        >
          <div className="gc-faq-shell">
            <div className="gc-faq-header">
              <p className="gc-faq-kicker">Frequently Asked Questions</p>
              <h2 className="gc-faq-title">Global Capability Explained</h2>
            </div>

            <div className="gc-faq-grid">
              {[faqs.slice(0, 4), faqs.slice(4)].map((column, columnIndex) => (
                <div key={columnIndex} className="gc-faq-column">
                  {column.map((faq, index) => (
                    <details key={faq.question} className="gc-faq-item" open={columnIndex === 0 && index === 0}>
                      <summary className="gc-faq-summary">
                        {faq.question}
                        <ChevronDown className="gc-faq-icon" size={24} />
                      </summary>
                      <p className="gc-faq-answer">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="gc-section gc-final-cta-section bg-white">
          <div className="gc-final-cta">
            <p className="gc-final-cta-kicker uppercase tracking-[0.22em] font-bold text-black">
              Ready to work globally
            </p>
            <h2 className="gc-final-cta-title">
              Let's build something that scales beyond borders.
            </h2>
            <Link href="/contact" className="gc-final-cta-button transition hover:scale-[1.03]">
              Start a Conversation <ArrowRight size={19} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

function ChevronDown({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}
