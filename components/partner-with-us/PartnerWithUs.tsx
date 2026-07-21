import "../../style/aboutus/partnerwithus.css";
import type { Metadata } from "next";
import "../../style/home/faq.css";
import PartnershipForm from "./PartnershipForm";
import {
  BarChart3,
  Check,
  ChevronDown,
  ClipboardCheck,
  Code2,
  FileCheck2,
  Globe2,
  Handshake,
  Layers3,
  LockKeyhole,
  Megaphone,
  Palette,
  Scale,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us | Agency Partnership Model | Brand Mindz",
  description:
    "Partner with Brand Mindz for confidential white-label digital marketing, web development, branding, and performance delivery backed by structured governance.",
  keywords: [
    "white label digital marketing India",
    "agency outsourcing partner",
    "B2B delivery framework",
    "white label web development",
    "confidential agency partnership",
    "digital outsourcing India",
  ],
  alternates: { canonical: "https://www.brandmindz.com/partner-with-us" },
  openGraph: {
    title: "Partner With Us | Brand Mindz",
    description: "A confidential, structured white-label execution model for Indian and global agencies.",
    url: "https://www.brandmindz.com/partner-with-us",
    type: "website",
  },
};

const partnerTypes = [
  "Digital marketing agencies",
  "Creative studios",
  "Web development firms",
  "Growth consultants",
  "International agencies expanding into India",
  "Enterprise teams requiring backend execution support",
];

const deliveryServices = [
  { title: "Project documentation", icon: FileCheck2 },
  { title: "Scope alignment and planning", icon: Target },
  { title: "Structured project management", icon: ClipboardCheck },
  { title: "Digital campaign execution", icon: Megaphone },
  { title: "Web and app development delivery", icon: Code2 },
  { title: "Brand system implementation", icon: Palette },
  { title: "Performance tracking and reporting", icon: BarChart3 },
  { title: "Milestone-based quality review", icon: Layers3 },
];

const governedSystems = [
  "Defined SOP frameworks",
  "Dedicated cross-functional teams",
  "KPI-driven performance standards",
  "Milestone tracking systems",
  "Escalation protocols",
  "Confidentiality agreements and NDAs",
];

const confidentialityPoints = [
  "Strict NDA compliance",
  "Non-solicitation of partner clients",
  "Clear communication hierarchy",
  "No direct client contact unless authorized",
  "Structured reporting aligned with partner branding",
];

const globalCapabilities = [
  "Professional marketing maturity",
  "Engineering discipline",
  "Governance systems",
  "Performance accountability",
];

const terms = [
  "Mandatory NDA and non-solicitation agreement",
  "Defined scope documentation before execution",
  "Structured communication hierarchy",
  "Clear billing and milestone-based payment schedules",
  "No direct client engagement unless authorized",
  "Performance reporting aligned with partner branding",
  "Defined revision and escalation frameworks",
];

const reasons = [
  "Structured execution framework",
  "Integrated marketing + engineering capability",
  "Scalable delivery capacity",
  "Transparent reporting",
  "Governed workflow systems",
  "Long-term partnership mindset",
];

const faqs = [
  {
    question: "What is the Brand Mindz Agency Partnership Model?",
    answer: "The Brand Mindz Agency Partnership Model is a confidential white-label execution framework designed for agencies seeking structured digital marketing, web development, and branding delivery support.",
  },
  {
    question: "Does Brand Mindz provide white-label digital marketing services?",
    answer: "Yes. Brand Mindz provides white-label digital marketing services including paid advertising management, SEO execution, campaign optimization, and performance reporting under partner branding.",
  },
  {
    question: "Can global agencies outsource projects to Brand Mindz in India?",
    answer: "Yes. Brand Mindz works with Indian and global agencies seeking reliable outsourcing to India through a structured, governance-backed delivery model.",
  },
  {
    question: "How does Brand Mindz ensure confidentiality in partnerships?",
    answer: "We operate under strict NDA agreements, non-solicitation clauses, and defined communication hierarchies to protect partner-client relationships.",
  },
  {
    question: "Does Brand Mindz manage complete project delivery?",
    answer: "Yes. We manage documentation, project planning, execution, reporting, milestone reviews, and delivery while partners maintain client-facing communication.",
  },
  {
    question: "Is Brand Mindz a freelance outsourcing network?",
    answer: "No. Brand Mindz operates as a structured digital company with defined teams, SOP frameworks, and KPI-based accountability systems.",
  },
  {
    question: "What industries can benefit from your B2B delivery model?",
    answer: "Agencies serving technology, e-commerce, education, healthcare, real estate, and enterprise clients can leverage our structured execution systems.",
  },
  {
    question: "Why choose Brand Mindz over traditional outsourcing vendors?",
    answer: "Brand Mindz combines professional marketing experience, engineering capability, and structured governance systems—ensuring reliable, measurable delivery rather than unstructured outsourcing.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: "Brand Mindz Global Technology Pvt Ltd", url: "https://www.brandmindz.com" },
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

const CheckList = ({ items, dark = false }: { items: string[]; dark?: boolean }) => (
  <div className="pw-check-list">
    {items.map((item) => (
      <div className={`pw-check-item ${dark ? "dark" : ""}`} key={item}>
        <span><Check size={15} strokeWidth={3} /></span>{item}
      </div>
    ))}
  </div>
);

export default function PartnerWithUs() {
  return (
    <main className="industries-main-container partner-page">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bm-hero-section-industries">
        <div className="bm-industries-hero-badge">
          <span className="bm-industries-hero-badge__icon"><Handshake size={14} color="black" /></span>
          <p className="bm-industries-hero-badge__text">Confidential B2B Delivery Framework</p>
        </div>
        <h1 className="bm-industries-hero-title">Partner <span className="highlight">With Us</span></h1>
        <p className="bm-industries-hero-description">Brand Mindz operates as a confidential white-label execution partner for agencies seeking structured performance delivery.</p>
      </section>

      <section className="pw-manifesto" aria-label="Agency partnership promise">
        <div className="pw-manifesto-copy">
          <span>Agency partnership model</span>
          <h2>You focus on growth.</h2>
          <p>We take care of the heavy work.</p>
        </div>
        <div className="pw-manifesto-points">
          <div className="pw-manifesto-point"><span><LockKeyhole size={18} /></span>Confidential</div>
          <div className="pw-manifesto-point"><span><Scale size={18} /></span>Structured</div>
          <div className="pw-manifesto-point"><span><BarChart3 size={18} /></span>Performance-led</div>
        </div>
      </section>

      <section className="pw-section pw-grey">
        <div className="pw-container pw-partner-grid">
          <div>
            <span className="pw-eyebrow">Built for agency &amp; global partnerships</span>
            <h2 className="pw-heading">Scale execution without compromising client relationships.</h2>
            <p className="pw-intro">Whether you are an Indian agency scaling operations or a global partner outsourcing to India, Brand Mindz provides structured, reliable delivery under strict confidentiality.</p>
            <p className="pw-partner-note">We support multi-market digital execution through defined governance systems.</p>
          </div>
          <div className="pw-partner-cards">
            {partnerTypes.map((partner) => <div className="pw-partner-card" key={partner}><span><Users size={18} /></span>{partner}</div>)}
          </div>
        </div>
      </section>

      <section className="pw-section">
        <div className="pw-container">
          <div className="pw-delivery-header">
            <span className="pw-eyebrow">What we take care of</span>
            <h2 className="pw-heading">Complete backend execution.</h2>
            <p className="pw-intro">Our B2B delivery framework covers every stage from scope alignment to measurable reporting.</p>
          </div>
          <div className="pw-delivery-grid">
            {deliveryServices.map(({ title, icon: Icon }) => <article className="pw-delivery-card" key={title}><span><Icon size={23} /></span><h3>{title}</h3></article>)}
          </div>
          <p className="pw-delivery-summary">Your client sees performance. You maintain the relationship. We manage the execution.</p>
        </div>
      </section>

      <section className="pw-section pw-dark">
        <div className="pw-container pw-structure-grid">
          <div className="pw-structure-copy">
            <span className="pw-eyebrow">Structured, not freelance-based</span>
            <h2 className="pw-heading">Reliability over improvisation.</h2>
            <p>Brand Mindz is not a freelancer network. We operate as a governed digital company with dedicated cross-functional teams and measurable standards.</p>
            <p><strong>Our systems are built for reliability—not improvisation.</strong></p>
          </div>
          <CheckList items={governedSystems} dark />
        </div>
      </section>

      <section className="pw-section pw-grey">
        <div className="pw-container pw-trust-grid">
          <article className="pw-trust-card dark">
            <span className="pw-trust-icon"><ShieldCheck size={27} /></span>
            <h2>Full Confidentiality Commitment</h2>
            <p>White-label partnerships demand trust. Our execution remains invisible while your brand remains front-facing.</p>
            <CheckList items={confidentialityPoints} dark />
            <p className="pw-trust-statement">Your brand remains front-facing. Our execution remains invisible.</p>
          </article>
          <article className="pw-trust-card">
            <span className="pw-trust-icon"><Globe2 size={27} /></span>
            <h2>Global-Ready Delivery from India</h2>
            <p>A structured, accountable alternative to fragmented outsourcing models for global digital marketing, development, and branding execution.</p>
            <CheckList items={globalCapabilities} />
            <p className="pw-trust-statement">Outsourcing should reduce stress—not create uncertainty.</p>
          </article>
        </div>
      </section>

      <section className="pw-section">
        <div className="pw-container pw-terms-grid">
          <article className="pw-terms-card">
            <span className="pw-eyebrow">Partnership terms &amp; operating principles</span>
            <h2>Defined standards protect both parties.</h2>
            <CheckList items={terms} />
            <p className="pw-terms-note">We partner only where execution expectations, timelines, and governance standards are mutually aligned.</p>
          </article>
          <article className="pw-terms-card yellow">
            <span className="pw-eyebrow">Why agencies choose Brand Mindz</span>
            <h2>Partners—not vendors.</h2>
            <CheckList items={reasons} />
            <p className="pw-terms-note">We operate as confidential execution partners with a long-term partnership mindset.</p>
          </article>
        </div>
      </section>

      <section className="pw-application" id="partnership-application">
        <div className="pw-container pw-application-grid">
          <div className="pw-application-copy">
            <span className="pw-eyebrow">Smart partnership application</span>
            <h2 className="pw-heading">Let&apos;s evaluate partnership fit.</h2>
            <p>Tell us about your agency, delivery volume, target markets, and outsourcing needs. This helps us prepare the right operating model before the first conversation.</p>
            <div className="pw-application-copy-note"><LockKeyhole size={20} /> Confidential by design. Structured from the first step.</div>
          </div>
          <PartnershipForm />
        </div>
      </section>

      <div className="pw-faq-wrap">
        <section className="bm-faq-section">
          <div className="bm-faq-header">
            <p className="bm-faq-subtitle">Frequently Asked Questions — Agency Partnership Model</p>
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
    </main>
  );
}
