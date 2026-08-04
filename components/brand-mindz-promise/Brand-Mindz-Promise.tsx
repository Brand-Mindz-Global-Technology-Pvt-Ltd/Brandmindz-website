import "../../style/aboutus/brandmindzpromise.css";
import type { Metadata } from "next";
import Link from "next/link";
import "../../style/home/faq.css";
import Faq from "@/components/home/Faq";
import {
  ArrowRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import { PromiseCommitments } from "./PromiseCommitments";

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

      <PromiseCommitments />

      <Faq items={faqs} subtitle="Frequently Asked Questions — The Brand Mindz Promise" />

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
