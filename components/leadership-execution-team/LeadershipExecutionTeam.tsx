import "../../style/aboutus/leadershipexecutionteam.css";
import type { Metadata } from "next";
import Link from "next/link";
import "../../style/home/faq.css";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  Gauge,
  Handshake,
  HeartHandshake,
  Layers3,
  Megaphone,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership & Execution Team | Brand Mindz",
  description:
    "Meet the structured Brand Mindz leadership and execution team integrating digital marketing, engineering, branding, and analytics for measurable growth.",
  keywords: [
    "Brand Mindz leadership team",
    "digital marketing execution team",
    "web development team",
    "branding consultants",
    "performance marketing experts",
    "integrated digital growth team",
  ],
  alternates: {
    canonical: "https://www.brandmindz.com/leadership-execution-team",
  },
  openGraph: {
    title: "Leadership & Execution Team | Brand Mindz",
    description:
      "Built by people and structured by leaders—an integrated execution team designed for measurable business growth.",
    url: "https://www.brandmindz.com/leadership-execution-team",
    type: "website",
  },
};

const functionalTeams = [
  {
    title: "Performance Marketing & Growth Systems",
    description:
      "Our Performance Marketing & Growth Systems team drives measurable business outcomes across paid advertising, search visibility, conversion optimization, and marketing automation.",
    detail:
      "They operate with structured KPI frameworks, data-backed decision cycles, and multi-platform campaign management systems.",
    statement: "Marketing at Brand Mindz is not creative noise. It is performance engineering aligned with business objectives.",
    icon: Megaphone,
  },
  {
    title: "Web & Application Engineering",
    description:
      "Our Web & Application Engineering team builds scalable, performance-ready digital infrastructure designed to support high-growth environments and multi-market operations.",
    detail:
      "They focus on secure architecture, mobile-first accessibility, backend scalability, automation integration, and speed optimization.",
    statement: "We do not build websites for launch-day excitement. We build platforms designed for long-term performance.",
    icon: Code2,
  },
  {
    title: "Brand Strategy & Creative Systems",
    description:
      "Our Brand Strategy & Creative Systems team ensures clarity in positioning and consistency in communication across platforms and markets.",
    detail:
      "They develop structured brand positioning frameworks, scalable identity systems, and performance-driven creative testing strategies.",
    statement: "Branding at Brand Mindz is not decoration. It is strategic differentiation.",
    icon: Palette,
  },
  {
    title: "Analytics, Intelligence & Optimization",
    description:
      "Our Analytics & Optimization team strengthens decision-making through structured dashboards, attribution clarity, and continuous performance refinement.",
    detail:
      "They ensure real-time visibility into campaign performance, budget allocation efficiency, and measurable growth trends.",
    statement: "Data is not reviewed occasionally. It guides every strategic move.",
    icon: BrainCircuit,
  },
];

const governancePoints = [
  "Clearly defined role ownership",
  "KPI-based performance evaluation",
  "Weekly solution-focused review meetings",
  "Transparent reporting structures",
  "Defined escalation protocols",
  "Anonymous leadership feedback channels",
];

const inclusionPoints = [
  "Monthly Wellness Work-from-Home flexibility",
  "Dedicated private prayer and reflection space",
  "Internal mentorship initiatives",
  "Structured career progression pathways",
  "Leadership development programs",
];

const executionOutcomes = [
  { title: "Performance-led digital campaigns", icon: Gauge },
  { title: "Scalable web and app platforms", icon: Layers3 },
  { title: "Consistent brand positioning", icon: Sparkles },
  { title: "Measurable growth systems", icon: BarChart3 },
];

const faqs = [
  {
    question: "Who leads the Brand Mindz Leadership & Execution Team?",
    answer:
      "Brand Mindz is led by a structured leadership team specializing in digital marketing strategy, web and app development, branding systems, and performance analytics under measurable governance frameworks.",
  },
  {
    question: "What expertise does the Brand Mindz team have?",
    answer:
      "Our team includes digital marketing strategists, web and application engineers, branding consultants, analytics specialists, and growth strategists working within defined execution systems.",
  },
  {
    question: "How is the Brand Mindz team structured?",
    answer:
      "Brand Mindz follows an integrated team model where marketing, technology, branding, and analytics operate under unified KPIs and structured governance processes.",
  },
  {
    question: "Does Brand Mindz have in-house digital marketing experts?",
    answer:
      "Yes. Brand Mindz has a dedicated in-house performance marketing team focused on ROI-driven campaigns, paid advertising management, search optimization, and conversion-focused growth strategies.",
  },
  {
    question: "How does Brand Mindz ensure project accountability?",
    answer:
      "Accountability is maintained through defined role ownership, milestone-based tracking, structured reporting dashboards, and solution-focused review systems.",
  },
  {
    question: "Is Brand Mindz equipped for global digital projects?",
    answer:
      "Yes. Our governance systems, reporting frameworks, and execution standards are designed to support both domestic and international digital marketing and development projects.",
  },
  {
    question: "How does Brand Mindz maintain quality across departments?",
    answer:
      "Quality is ensured through Standard Operating Procedures (SOPs), KPI-based evaluation systems, structured escalation channels, and continuous optimization cycles.",
  },
  {
    question: "What differentiates Brand Mindz from other digital marketing agencies?",
    answer:
      "Brand Mindz differentiates itself through integrated execution—combining marketing strategy, technology engineering, branding systems, and analytics under one structured framework focused on measurable business growth.",
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

export default function LeadershipExecutionTeam() {
  return (
    <main className="industries-main-container leadership-team-page">
     

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bm-hero-section-industries">
        <div className="bm-industries-hero-badge">
          <span className="bm-industries-hero-badge__icon"><Users size={14} color="black" /></span>
          <p className="bm-industries-hero-badge__text">Integrated leadership. Disciplined execution.</p>
        </div>
        <h1 className="bm-industries-hero-title">
          Leadership &amp; <br />
          <span className="highlight">Execution Team</span>
        </h1>
        <p className="bm-industries-hero-description">
          Brand Mindz is powered by digital marketing strategists, web and app engineers, brand consultants, and performance analysts working under defined governance systems and measurable execution frameworks.
        </p>
      </section>

      <section className="lt-experience">
        <div className="lt-container lt-experience-grid">
          <div>
            <span className="lt-eyebrow">Experience beyond screens</span>
            <h2 className="lt-heading">Marketing maturity is built in real business environments.</h2>
            <div className="lt-body">
              <p>Brand Mindz is not built on theoretical business knowledge alone. Our team includes professionals who have worked directly in the field—interacting with customers, handling real sales cycles, understanding buyer psychology, and solving real-world business challenges.</p>
              <p>Marketing is not about running campaigns from a laptop. It is about understanding markets, demand cycles, positioning, pricing, customer behavior, and long-term brand equity.</p>
              <p>In today&apos;s crowded digital marketing space, tools are easy to learn. <strong>But marketing maturity takes years of exposure to real business environments.</strong></p>
            </div>
          </div>
          <aside className="lt-experience-panel">
            <span className="lt-experience-panel-icon"><Handshake size={28} /></span>
            <h3>A professional marketing company, enabled by technology.</h3>
            <p>We use technology to enable business growth—not as a technology-driven agency attempting to imitate marketing strategy.</p>
            <strong>That difference reflects in our discipline, accountability, and results.</strong>
          </aside>
        </div>
      </section>

      <section className="lt-teams">
        <div className="lt-container">
          <div className="lt-section-header">
            <span className="lt-eyebrow">Core functional teams</span>
            <h2 className="lt-heading">Specialized expertise. Unified execution.</h2>
            <p>Our strength does not come from isolated talent. It comes from structured collaboration across every growth discipline.</p>
          </div>
          <div className="lt-team-grid">
            {functionalTeams.map(({ title, description, detail, statement, icon: Icon }) => (
              <article className="lt-team-card" key={title}>
                <div className="lt-team-card-head">
                  <span className="lt-team-card-icon"><Icon size={23} /></span>
                  <h3>{title}</h3>
                </div>
                <p>{description}</p>
                <p>{detail}</p>
                <p className="lt-team-card-statement">{statement}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lt-governance">
        <div className="lt-container lt-governance-grid">
          <div className="lt-governance-copy">
            <span className="lt-eyebrow">Governance &amp; performance model</span>
            <h2 className="lt-heading">Clarity and accountability across departments.</h2>
            <p>Brand Mindz operates under defined governance systems that ensure execution consistency. <strong>We believe culture is a performance engine.</strong></p>
            <p>Structured governance enables creative speed without operational chaos. This is what allows Brand Mindz to operate as a global-ready digital growth partner.</p>
          </div>
          <div className="lt-governance-list">
            {governancePoints.map((point) => (
              <div className="lt-governance-item" key={point}>
                <span><Check size={15} strokeWidth={3} /></span>{point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lt-culture">
        <div className="lt-container lt-culture-grid">
          <div className="lt-stat-card">
            <span className="lt-stat-value">70%+</span>
            <h3>Women professionals</h3>
            <p>Contributing across leadership, engineering, strategy, and creative roles.</p>
          </div>
          <div className="lt-culture-copy">
            <span className="lt-eyebrow">Culture, inclusion &amp; leadership</span>
            <h2 className="lt-heading">People build businesses. Systems protect performance.</h2>
            <p>Brand Mindz operates under a strict merit-based culture with zero tolerance toward favoritism or discrimination based on gender, caste, religion, nationality, or background.</p>
            <div className="lt-inclusion-list">
              {inclusionPoints.map((point) => (
                <div className="lt-inclusion-item" key={point}><HeartHandshake size={18} />{point}</div>
              ))}
            </div>
            <p className="lt-culture-standard">Inclusion at Brand Mindz is practiced consistently—not promoted superficially. Respect and opportunity are daily standards.</p>
          </div>
        </div>
      </section>

      <section className="lt-integrated">
        <div className="lt-container">
          <div className="lt-integrated-header">
            <span className="lt-eyebrow">Integrated execution model</span>
            <h2 className="lt-heading">Four disciplines. One growth system.</h2>
            <p>Brand Mindz integrates digital marketing, web engineering, branding systems, and analytics into a unified execution structure.</p>
          </div>
          <div className="lt-outcome-grid">
            {executionOutcomes.map(({ title, icon: Icon }) => (
              <article className="lt-outcome" key={title}>
                <span><Icon size={23} /></span>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
          <p className="lt-integrated-note">That integration is what differentiates Brand Mindz from fragmented agencies.</p>
        </div>
      </section>

      <div className="lt-faq-wrap">
        <section className="bm-faq-section">
          <div className="bm-faq-header">
            <p className="bm-faq-subtitle">Frequently Asked Questions — Leadership &amp; Execution Team</p>
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
          <h2 className="bm-industries-cta-title">Ready to Work With a <br /> Structured Growth Team?</h2>
          <p className="bm-industries-cta-desc">Bring strategy, engineering, branding, and analytics together around your business goals.</p>
          <div className="bm-hero-action">
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button className="bm-hero-btn" style={{ border: 0, cursor: "pointer" }}>
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
