import "../../style/aboutus/brandmindzpromise.css";
import type { Metadata } from "next";
import Link from "next/link";
import "../../style/home/faq.css";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  Handshake,
  LineChart,
  Scale,
  ShieldCheck,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Brand Mindz Promise | Structured, Measurable Growth",
  description:
    "The Brand Mindz Promise is our commitment to structured execution, measurable performance, ethical conduct, and accountable partnership.",
  keywords: [
    "Brand Mindz Promise",
    "performance driven digital marketing company",
    "accountable digital partner",
    "structured digital execution",
    "long term growth partner",
  ],
  alternates: {
    canonical: "https://www.brandmindz.com/brand-mindz-promise",
  },
  openGraph: {
    title: "The Brand Mindz Promise",
    description:
      "Structured execution, measurable performance, and accountable partnership — every time.",
    url: "https://www.brandmindz.com/brand-mindz-promise",
    type: "website",
  },
};

const promisePillars = [
  "Structured execution",
  "Measurable performance",
  "Accountable partnership",
  "Ethical conduct",
];

const promises = [
  {
    number: "01",
    eyebrow: "Alignment before action",
    title: "We Promise Structured Clarity",
    description:
      "Every engagement begins with alignment. Before execution starts, we define scope, objectives, timelines, and success metrics. There is no ambiguity about what is being built and how success will be measured.",
    statement: "Clarity protects performance. Clarity protects relationships.",
    icon: Target,
  },
  {
    number: "02",
    eyebrow: "Business impact over noise",
    title: "We Promise Measurable Impact",
    description:
      "Brand Mindz operates as a performance-driven digital marketing, web development, and branding partner. We focus on business impact — not vanity metrics.",
    points: [
      "Lead quality over lead volume",
      "Conversion efficiency over impressions",
      "Scalable growth over short-term noise",
    ],
    statement: "If it cannot be measured, it cannot be improved.",
    icon: LineChart,
  },
  {
    number: "03",
    eyebrow: "Visibility at every stage",
    title: "We Promise Accountability",
    description:
      "Execution without ownership creates instability. We operate with defined KPIs, structured reporting systems, and performance visibility at every stage.",
    points: [
      "Where the project stands",
      "What is working",
      "What requires optimization",
    ],
    statement: "We do not disappear after launch. We own outcomes.",
    icon: BarChart3,
  },
  {
    number: "04",
    eyebrow: "Integrity made visible",
    title: "We Promise Ethical Conduct",
    description:
      "Brand Mindz operates with professional governance and transparent systems. We follow clear scope documentation, defined billing practices, structured escalation channels, and zero tolerance for favoritism or bias.",
    statement: "Trust grows when integrity is visible.",
    icon: Scale,
  },
  {
    number: "05",
    eyebrow: "Systems that sustain",
    title: "We Promise Long-Term Thinking",
    description:
      "We do not promise shortcuts. We build systems that sustain. Our strategies are designed for scalability, consistency, and measurable long-term growth.",
    statement: "Reputation is earned slowly and lost quickly. We protect both.",
    icon: Clock3,
  },
  {
    number: "06",
    eyebrow: "Partners, never just vendors",
    title: "We Promise Partnership — Not Vendor Mentality",
    description:
      "Large-scale brands do not look for vendors. They look for reliable performance partners. We work best with organizations that value structure, transparency, and disciplined execution.",
    statement: "If alignment is unclear, we do not proceed. That honesty protects long-term trust.",
    icon: Handshake,
  },
  {
    number: "07",
    eyebrow: "One standard, every market",
    title: "We Promise Consistency Across Markets",
    description:
      "Whether domestic or international, our standards remain unchanged.",
    points: ["Performance", "Structure", "Accountability", "Reliability"],
    statement: "We are global-ready by design. And we operate accordingly.",
    icon: Globe2,
  },
];

const faqs = [
  {
    question: "What is The Brand Mindz Promise?",
    answer:
      "The Brand Mindz Promise is our commitment to delivering structured execution, measurable performance, ethical conduct, and accountable partnership across digital marketing, web development, and branding services.",
  },
  {
    question: "How does Brand Mindz ensure measurable growth?",
    answer:
      "We define clear KPIs, track performance metrics aligned with business outcomes, and continuously optimize campaigns to improve ROI and conversion efficiency.",
  },
  {
    question: "Is Brand Mindz a performance-driven digital marketing company?",
    answer:
      "Yes. Brand Mindz operates as a performance-driven digital marketing partner focused on structured strategy, measurable results, and long-term scalability.",
  },
  {
    question: "How does Brand Mindz reduce client risk?",
    answer:
      "We reduce risk through defined scope documentation, milestone tracking, transparent reporting, and proactive communication.",
  },
  {
    question: "Does Brand Mindz guarantee results?",
    answer:
      "We do not guarantee unrealistic outcomes. Instead, we guarantee structured execution, measurable strategy, and disciplined optimization aligned with business objectives.",
  },
  {
    question: "How does Brand Mindz maintain accountability?",
    answer:
      "Accountability is built into our systems through performance dashboards, defined KPIs, structured reviews, and ownership culture.",
  },
  {
    question: "Why do businesses trust Brand Mindz?",
    answer:
      "Businesses trust Brand Mindz because we combine structured execution, ethical governance, and measurable performance into every engagement.",
  },
  {
    question: "Is Brand Mindz suitable for long-term growth partnerships?",
    answer:
      "Yes. Our systems are designed for scalability and sustainable growth, making us suitable for businesses seeking long-term digital transformation.",
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

export default function BrandMindzPromise() {
  return (
    <main className="industries-main-container brand-promise-industries">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bm-hero-section-industries">
        <div className="bm-industries-hero-badge">
          <span className="bm-industries-hero-badge__icon"><ShieldCheck size={14} color="black" /></span>
          <p className="bm-industries-hero-badge__text">Built on consistency</p>
        </div>
        <h1 className="bm-industries-hero-title">
          The Brand Mindz <br />
          <span className="highlight">Promise</span>
        </h1>
        <p className="bm-industries-hero-description">
          Trust is not built through claims. It is built through consistency. We deliver structured execution, measurable performance, and accountable partnership — every time.
        </p>
      </section>

      <section className="bmp-manifesto-banner" aria-label="The Brand Mindz operating promise">
        <div className="bmp-manifesto-copy">
          <span>Our operating promise</span>
          <h2>We build performance systems.</h2>
          <p>Not campaigns built around short-term noise.</p>
        </div>
        <div className="bmp-manifesto-pillars">
          {promisePillars.map((pillar) => (
            <div className="bmp-manifesto-pillar" key={pillar}>
              <span><Check size={14} strokeWidth={3} /></span>
              {pillar}
            </div>
          ))}
        </div>
      </section>

      <section className="bm-industry-details-section">
        <div className="bm-industry-container">
          <div className="bm-industry-grid-layout">
            <div className="bm-industry-left-pane">
              <div className="bm-industry-header">
                <span className="bm-industry-pretitle">Seven commitments. One operating standard.</span>
                <h2 className="bm-industry-main-title">A Promise Designed for Performance</h2>
              </div>
              <p className="bm-industry-description">
                We do not sell campaigns. We build performance systems. Brand Mindz is built for businesses that take growth seriously. These principles shape how we plan, execute, report, and grow alongside every client.
              </p>
              <div>
                <h3 className="bm-challenges-solutions-title">What Every Partnership Can Expect</h3>
                <div className="bm-challenge-solution-grid bmp-promise-grid">
                  {promises.map((promise) => {
                    const Icon = promise.icon;
                    return (
                      <article className="bm-cs-card solution bmp-promise-card" id={`promise-${promise.number}`} key={promise.number}>
                        <div className="bm-cs-header">
                          <span className="bm-cs-icon-wrapper"><Icon /></span>
                          <div>
                            <span className="bmp-card-eyebrow">{promise.number} · {promise.eyebrow}</span>
                            <h3 className="bm-cs-title">{promise.title}</h3>
                          </div>
                        </div>
                        <p className="bm-cs-body">{promise.description}</p>
                        {promise.points ? (
                          <div className="bmp-card-points">
                            {promise.points.map((point) => (
                              <span className="bmp-card-point" key={point}><Check size={15} strokeWidth={3} />{point}</span>
                            ))}
                          </div>
                        ) : null}
                        <p className="bmp-card-statement">{promise.statement}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="bm-industry-right-pane">
              <div className="bm-stats-header-wrapper">
                <h3 className="bm-stats-title">Our Operating Standard</h3>
                <p className="bm-stats-subtitle">The foundations behind every engagement</p>
              </div>
              <div className="bm-stats-grid">
                {promisePillars.map((pillar, index) => (
                  <div className="bmp-side-promise" key={pillar}>
                    <Check size={22} strokeWidth={3} />
                    <div>
                      <strong>{pillar}</strong>
                      <span>{index === 0 ? "Clear scope, objectives, timelines, and success metrics." : index === 1 ? "KPIs connected to real business outcomes." : index === 2 ? "Visible ownership and disciplined follow-through." : "Transparent systems, governance, and integrity."}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bm-industry-testimonial">
                <p className="bmp-side-quote">Trust is a system, not a slogan.<strong>That is the Brand Mindz Promise.</strong></p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="bmp-home-faq-wrap">
        <section className="bm-faq-section">
          <div className="bm-faq-header">
            <p className="bm-faq-subtitle">Frequently Asked Questions — The Brand Mindz Promise</p>
            <h2 className="bm-faq-title">Got Questions? We&apos;ve Got Answers</h2>
          </div>
          <div className="bm-faq-grid">
            {[faqs.slice(0, 4), faqs.slice(4)].map((column, columnIndex) => (
              <div className="bm-faq-col" key={columnIndex}>
                {column.map((faq, index) => (
                  <details className="bm-faq-item" key={faq.question} open={columnIndex === 0 && index === 0}>
                    <summary className="bm-faq-q-box">
                      <span>{faq.question}</span>
                      <ChevronDown className="bm-faq-chevron" size={22} />
                    </summary>
                    <div className="bm-faq-a-box">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="bm-industries-cta-section">
        <div className="bm-industries-cta-container">
          <h2 className="bm-industries-cta-title">Ready for a Partnership <br /> Built on Clarity?</h2>
          <p className="bm-industries-cta-desc">Let&apos;s build a measurable, scalable performance system around your business goals.</p>
          <div className="bm-hero-action">
            <Link className="bmp-cta-link" href="/contact">
              <button className="bm-hero-btn bmp-cta-button">
                <div className="bm-hero-btn__icon"><ArrowRight /></div>
                <span className="bm-hero-btn__text">Talk to a <strong>Growth Specialist</strong></span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
