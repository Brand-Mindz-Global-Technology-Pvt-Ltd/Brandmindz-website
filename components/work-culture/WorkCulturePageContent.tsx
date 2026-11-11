import "../../style/aboutus/workculture.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/components/home/Faq";
import {
  ArrowRight,
  Check,
  ChevronRight,
  HeartHandshake,
  Sparkles,
  Users,
  Zap,
  Trophy,
  Scale,
  Handshake,
  TrendingUp,
  MessageSquare,
  Route,
  ShieldCheck,
  Timer,
  MessagesSquare,
  FileText,
} from "lucide-react";
import founderImage from "@/assets/about/frame2147226233.webp";
import heroPattern from "@/assets/HomeSection/banner/group1.webp";
import womenStoryImage from "@/assets/about/women.webp";
import globalExposureImage from "@/assets/branding/authority.webp";
import structuredReportingImage from "@/assets/branding/visibility.webp";
import globalStandardsImage from "@/assets/branding/influence.webp";
import measurablePerformanceImage from "@/assets/branding/gemini_generate.webp";
export const metadata: Metadata = {
  title: "Building the Best Work Culture in Tamil Nadu",
  description:
    "Discover Brand Mindz's performance-driven, inclusive work culture in Tamil Nadu—built around merit, ownership, women's wellness, and global career growth.",
  keywords: [
    "best work culture in Tamil Nadu",
    "careers at Brand Mindz",
    "women friendly workplace Tamil Nadu",
    "first generation graduate jobs",
    "digital marketing careers Tamil Nadu",
  ],
  alternates: { canonical: "https://www.brandmindz.com/work-culture" },
  openGraph: {
    title: "Building the Best Work Culture in Tamil Nadu | Brand Mindz",
    description:
      "A performance-driven and inclusive workplace where talent from Tamil Nadu builds global-standard careers.",
    url: "https://www.brandmindz.com/work-culture",
    type: "website",
  },
};

const wellnessPolicies = [
  {
    title: "Monthly Wellness WFH Day",
    text: "Every female team member is entitled to one “No-Questions-Asked” Wellness WFH day per month. On this day:",
    preQuote: ["No approval process, No tracking, No explanation required. Simply inform the team:"],
    leadIn: "",
    quote: "“Taking my Wellness WFH today. I’m online and reachable.”",
    icon: HeartHandshake,
    points: [
      "Camera-off is completely acceptable",
      "No high-energy sprint tasks",
      "Deep work at personal pace",
      "Comfort-first productivity",
    ],
    closing: ["We trust our team to know when their body needs rest."],
  },
  {
    title: "Brand Mindz Comfort Kit",
    text: "Brand Mindz maintains a permanently stocked Comfort Kit with essential wellness products, ensuring every employee stays healthy and motivated to perform confidently every day.",
    leadIn: "Our Comfort Kit provides everyday wellness essentials to support employee comfort, health, and productivity. ",
    icon: Sparkles,
    points: [
      "Emergency sanitary products",
      "Gel heating pads",
      "Peppermint & ginger herbal teas",
      "Light snacks and dark chocolate",
    ],
    closing: ["Every thoughtful essential reflects our commitment to employee well-being, comfort, and productivity."],
  },
  {
    title: "Power Girls Team (PGT)",
    text: "A dedicated initiative that promotes well-being, professional development, and leadership opportunities for women, creating an inclusive workplace where talent can thrive. ",
    leadIn: "Led by a team member with at least 6 months tenure, the PGT focuses on:",
    icon: Users,
    points: [
      "Personal wellness discussions",
      "Career mentorship",
      "Safe space for workplace suggestions",
      "Workshops & learning sessions",
    ],
    closing: [
      "Brand Mindz allocates a dedicated monthly budget for this initiative.",
      "This policy is built on trust, not tracking.",
      "When women feel supported, the entire organization grows stronger.",
    ],
  },
];

const growthPoints = [
  "Role clarity and defined KPIs",
  "Structured client communication",
  "Performance benchmarks",
  "Skill progression roadmap",
];

const trustPoints = [
  "Predictable execution",
  "Clear accountability",
  "Faster turnaround",
  "Structured communication",
  "Transparent reporting",
];

const globalCompetenceCards = [
  { title: "International exposure", image: globalExposureImage },
  { title: "Structured reporting", image: structuredReportingImage },
  { title: "Global quality standards", image: globalStandardsImage },
  { title: "Measurable performance", image: measurablePerformanceImage },
];

const faqs = [
  {
    question: "Why should someone join Brand Mindz in Tamil Nadu?",
    answer:
      "Brand Mindz offers a structured, performance-driven work culture in Tamil Nadu with global-standard exposure. We focus on merit, ownership, and growth—not hierarchy or favoritism.",
  },
  {
    question: "Does Brand Mindz encourage first-generation graduates to apply?",
    answer:
      "Yes. Our founder comes from a Tier 2 city and understands the challenges faced by talented people from non-metro backgrounds. We value potential, hunger to grow, and accountability over privilege.",
  },
  {
    question: "Is Brand Mindz a women-friendly workplace?",
    answer:
      "Yes. More than 70% of our workforce are women professionals. We provide structured wellness policies, a comfortable and respectful workplace, and a women-led support initiative called the Power Girls Team.",
  },
  {
    question: "What is the Brand Mindz Growth Accelerator Program?",
    answer:
      "It is our internal operating framework that prepares team members for global-quality execution through clear KPIs, structured mentorship, performance benchmarks, and a career progression roadmap.",
  },
  {
    question: "Does Brand Mindz provide flexible work policies?",
    answer:
      "Yes. We provide structured flexibility, including a monthly Wellness WFH policy for women team members and performance-based flexibility built on trust and accountability.",
  },
  {
    question: "Is there religious and cultural inclusivity at Brand Mindz?",
    answer:
      "Yes. We respect all beliefs and practices, provide a private prayer space when required, and maintain a merit-based culture without discrimination based on religion, caste, gender, language, or background.",
  },
  {
    question: "How is performance evaluated at Brand Mindz?",
    answer:
      "Performance is evaluated through defined KPIs, contribution to team goals, ownership, and measurable client impact. Recognition is public and coaching is private.",
  },
  {
    question: "Can someone build a global career from Tamil Nadu at Brand Mindz?",
    answer:
      "Yes. Our teams work with structured systems, international reporting standards, and performance-driven frameworks, enabling global-standard competence from Tamil Nadu.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Brand Mindz Global Technology Pvt Ltd",
      url: "https://www.brandmindz.com",
      founder: { "@type": "Person", name: "R. Vasanth Kumar" },
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
  <div className="wc-section-intro">
    <p className={`text-sm font-bold uppercase tracking-[0.22em] ${dark ? "text-[#ffdb00]" : "text-[#000000]"}`}>
      {eyebrow}
    </p>
    <h2 className="wc-section-intro-title text-[clamp(2.35rem,4vw,3.75rem)] font-extrabold leading-[1.12] tracking-[-0.045em]">
      {title}
    </h2>
    {text ? (
      <p className={`wc-section-intro-text text-[clamp(1.12rem,1.45vw,1.5rem)] leading-[1.65] ${dark ? "text-zinc-300" : "text-zinc-600"}`}>
        {text}
      </p>
    ) : null}
  </div>
);

const PointGrid = ({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) => (
  <div className="wc-point-grid grid gap-5 sm:grid-cols-2">
    {items.map((item) => (
      <div
        key={item}
        className={`wc-point-item flex min-h-22.5 min-w-0 items-center justify-center gap-4 rounded-2xl px-6 py-5 text-center text-base font-bold leading-6 shadow-sm sm:text-lg ${dark
            ? "border border-white/10 bg-white/[.07] text-white"
            : "border border-zinc-200 bg-white text-zinc-950"
          }`}
      >
        <span className="wc-point-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffdb00] text-black">
          <Check size={19} strokeWidth={3} />
        </span>

        <span className="wc-point-label min-w-0 wrap-break-word">
          {item}
        </span>
      </div>
    ))}
  </div>
);

export default function WorkCulturePageContent() {
  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="work-culture-page overflow-hidden bg-white text-center text-zinc-950">
        <section className="wc-hero relative isolate flex items-start overflow-hidden bg-white pb-0 sm:pb-0 lg:pb-0">
          <Image src={heroPattern} alt="" aria-hidden className="pointer-events-none absolute inset-x-0 -top-5 -z-20 h-auto w-full object-contain" priority />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-[48%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(245,245,243,.92)_100%)]" />

          <div className="wc-container">
            <div className="flex w-full justify-center px-4 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-3 text-center text-[18px] font-medium leading-normal tracking-normal md:text-[40px] md:leading-7.5"
                style={{ maxWidth: "1100px" }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ffdb00] text-black sm:h-10 sm:w-10">
                  <Zap size={18} fill="currentColor" />
                </span>
                <span className="text-center">People-First Performance Culture</span>
              </div>
            </div>
            <h1 className="wc-hero-title mx-auto mt-8 text-center text-[clamp(4rem,6.35vw,6rem)] font-bold leading-[1.36] tracking-[-0.035em] text-black"
              style={{ maxWidth: "1300px" }}>
              <span>Building the Best</span>{" "}
              <span className="text-zinc-500">Work Culture</span>
              <br />
              <span className="text-zinc-500">in</span>{" "}
              <span className="text-[#ffc400]">Tamil Nadu</span>
            </h1>

            <div className="wc-hero-description text-center">
              <p className="relative left-1/2 mt-6 -translate-x-1/2 text-center text-[clamp(1.25rem,2.0vw,2.13rem)] font-normal leading-[1.4] text-zinc-900"
                style={{ maxWidth: "1200px" }}>
                At Brand Mindz Global Technology Pvt Ltd, we believe businesses are built by people and people are the greatest asset of any organization.
                Our mission is not just to become India’s Largest Digital Distribution Agency.
                Our mission is to build the most performance-driven and inclusive work culture in Tamil Nadu’s digital industry.
                Because culture is not a statement.
                Culture is our operating system.

              </p>
            </div>

            <Link href="/contact" className="wc-hero-cta">
              <span className="wc-hero-cta-icon" aria-hidden="true">
                <ChevronRight size={24} />
              </span>
              <span>Talk to a Growth Specialist</span>
            </Link>


          </div>
        </section>

        <section className="wc-founder-full-section">
          <div className="wc-founder-full-container">
            <div className="wc-founder-main-card">
              {/* Left Column: Dark Content Panel */}
              <div className="wc-founder-content-panel">
                {/* Eyebrow with yellow accent line */}
                <div className="wc-founder-eyebrow-row">
                  <span className="wc-founder-eyebrow-text">OUR HIRING PHILOSOPHY</span>
                  <span className="wc-founder-eyebrow-line" aria-hidden="true" />
                </div>

                {/* Main Heading */}
                <h2 className="wc-founder-heading">
                  We built the company we <br className="hidden sm:inline" />
                  <span className="text-[#ffc400]">wish existed.</span>
                </h2>

                {/* Paragraph 1 */}
                <div className="wc-founder-text-block">
                  <p>
                    Brand Mindz was not started in a metro city. It was built in Tirunelveli.
                    Our founder, R. Vasanth Kumar, grew up in a Tier 2 town. He moved to corporate
                    environments and experienced what many talented people from smaller cities go
                    through — leaving family, adjusting to unfamiliar culture, competing with metro
                    exposure, and constantly proving capability.
                  </p>
                  <p className="mt-3">
                    He understood something deeply:
                  </p>
                </div>

                {/* Highlighted Quote Box with Trophy and Divider */}
                <div className="wc-founder-quote-box">
                  <div className="wc-founder-quote-icon-circle">
                    <Trophy size={22} className="text-white" strokeWidth={2.4} />
                  </div>
                  <div className="wc-founder-quote-divider" aria-hidden="true" />
                  <div className="wc-founder-quote-text">
                    <span className="wc-founder-quote-line-1">
                      Talent is not limited by geography.
                    </span>
                    <span className="wc-founder-quote-line-2">
                      Opportunity is.
                    </span>
                  </div>
                </div>

                {/* Paragraph 2 */}
                <div className="wc-founder-text-block">
                  <p>
                    So instead of asking talented people to migrate, he decided to build a global-standard
                    company from Tamil Nadu itself. That is how Brand Mindz was born.
                  </p>
                  <p className="mt-2">
                    Not just as a digital marketing agency — but as an opportunity platform.
                  </p>
                </div>

                {/* CTA Button Wrapper (Shifted slightly towards right on desktop, centered on mobile) */}
                <div className="wc-founder-cta-wrap">
                  <Link
                    href="/contact"
                    className="wc-founder-cta-btn"
                  >
                    <span>Meet Brand Mindz</span>
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Founder Image Panel */}
              <div className="wc-founder-image-panel">
                <Image
                  src={founderImage}
                  alt="Brand Mindz founder R. Vasanth Kumar"
                  fill
                  className="wc-founder-image-img"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="wc-founder-nameplate">
                  <span className="wc-founder-nameplate-bar" aria-hidden="true" />
                  <div className="wc-founder-nameplate-info">
                    <strong className="wc-founder-nameplate-name">R. Vasanth Kumar</strong>
                    <span className="wc-founder-nameplate-role">Founder of Brand Mindz</span>
                  </div>
                  <div className="wc-founder-nameplate-dots" aria-hidden="true">
                    <span /><span /><span />
                    <span /><span /><span />
                    <span /><span /><span />
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wc-section wc-potential-section">
          <div className="wc-container">
            <div className="wc-section-intro">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ffdb00]">
                Potential over privilege
              </p>

              <h2 className="wc-section-intro-title text-[clamp(2.35rem,4vw,3.75rem)] font-extrabold leading-[1.12] tracking-[-0.045em]">
                <span className="text-white">
                  If you're a first-generation graduate,{" "}
                </span>
                <span className="text-[#ffdb00]">
                  we see you.
                </span>
              </h2>

              <p className="wc-section-intro-text text-[clamp(1.12rem,1.45vw,1.5rem)] leading-[1.65] text-white">
                Many of our team members are first-generation graduates. We understand the
                pressure, the responsibility, and the hunger to grow. Joining Brand Mindz
                is more than filling a role. It is an opportunity to build competence that
                can compete globally—from Tamil Nadu.
              </p>
            </div>
            <div className="text-3xl font-bold text-white">
              We Do Not Hire
            </div>
            <PointGrid items={["Based on accent", "Based on city background", "Based on privilege"]} />
            <br></br>
            <div className="text-3xl font-bold text-white">
              We Hire Based Only on Potential and Ownership
            </div>
          </div>
        </section>

        <section className="wc-section bg-white">
          <div className="wc-container">
            <div className="wc-section-intro">
              <h2 className="wc-section-intro-title text-[clamp(2.35rem,4vw,3.75rem)] font-extrabold leading-[1.12] tracking-[-0.045em]">
                70% of Our Team Are Women And That Is Not a Coincidence
              </h2>
              <p className="wc-women-intro-text mx-auto mt-6 max-w-3xl text-[clamp(1.15rem,1.6vw,1.45rem)] font-semibold leading-relaxed text-zinc-600">
                Today, more than 70% of our workforce are women professionals.
              </p>
            </div>

            <div className="wc-women-story">
              <div className="wc-women-story-image">
                <Image
                  src={womenStoryImage}
                  alt="Woman professional"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>

              <div className="wc-women-story-content">
                <div className="wc-women-story-item">
                  <span className="wc-women-story-icon" aria-hidden="true"><Users size={38} /></span>
                  <p>
                    <strong>Not because it looks good.<br />Not because it is trendy.</strong>
                    Because we believe when women are supported properly, organizations become stronger.
                  </p>
                </div>

                <div className="wc-women-story-item">
                  <span className="wc-women-story-icon" aria-hidden="true"><HeartHandshake size={38} /></span>
                  <p>
                    <strong>We don’t treat empowerment as a marketing campaign.</strong>
                    We built policies that make real life easier.
                  </p>
                </div>

                <div className="wc-women-story-item">
                  <span className="wc-women-story-icon" aria-hidden="true"><Sparkles size={38} /></span>
                  <p>
                    <strong>If someone needs a Wellness WFH day, she doesn’t need to explain.</strong>
                    She simply says:
                    <span className="wc-women-story-quote">“I’m taking my Wellness WFH today. I’m online.”</span>
                    No justification.<br />No guilt.<br />No questions.
                  </p>
                </div>
              </div>
            </div>

            <div className="wc-women-story-footer">
              <p>We maintain a comfort kit in the office because small details matter.</p>
              <p>We created the Power Girls Team not for optics, but to create a safe internal circle for mentorship, support, and growth.</p>
              <p>Trust is not written. It is practiced.</p>
            </div>

            <div className="wc-wellness-tabs">
              {wellnessPolicies.map(({ title }, index) => (
                <input
                  key={title}
                  className="wc-wellness-toggle"
                  type="radio"
                  name="wellness-policy"
                  id={`wc-wellness-${index}`}
                  defaultChecked={index === 0}
                />
              ))}

              <div className="wc-wellness-tablist">
                {wellnessPolicies.map(({ title }, index) => (
                  <label key={title} className="wc-wellness-tab" htmlFor={`wc-wellness-${index}`}>
                    {title}
                  </label>
                ))}
              </div>

              <div className="wc-wellness-panels">
                {wellnessPolicies.map(({ title, text, preQuote, leadIn, quote, icon: Icon, points, closing }) => (
                  <article key={title} className="wc-wellness-panel">
                    <div className="wc-wellness-feature">
                      <div className="wc-wellness-icon">
                        <Icon size={34} />
                      </div>
                      <div>
                        <h3 className="wc-wellness-title text-[clamp(1.7rem,2.4vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.035em]">
                          {title}
                        </h3>
                        {title !== "Monthly Wellness WFH Day" ? (
                          <p className="wc-wellness-description">{text}</p>
                        ) : null}
                        {preQuote ? (
                          <p className="wc-wellness-pre-quote">
                            {preQuote.map((line) => <span key={line}>{line}</span>)}
                          </p>
                        ) : null}
                        {quote ? <p className="wc-wellness-quote">{quote}</p> : null}
                      </div>
                    </div>

                    <div className="wc-wellness-points">
                      {title === "Monthly Wellness WFH Day" || leadIn ? (
                        <div className="wc-wellness-points-intro">
                          {title === "Monthly Wellness WFH Day" ? <p>{text}</p> : null}
                          {leadIn ? <p>{leadIn}</p> : null}
                        </div>
                      ) : null}
                      {points.map((point) => (
                        <div key={point} className="wc-wellness-point">
                          <span className="wc-wellness-point-icon" aria-hidden="true">
                            <Check size={20} strokeWidth={3} />
                          </span>
                          <span>{point}</span>
                        </div>
                      ))}
                      <div className="wc-wellness-closing">
                        <p>{closing.join(" ")}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="wc-performance-section">
          <div className="wc-performance-container">
            <div className="wc-performance-header">
              <div className="wc-performance-eyebrow-row">
                <span className="wc-performance-eyebrow-text">
                  WE BELIEVE CULTURE IS A PERFORMANCE ENGINE
                </span>
                <span className="wc-performance-eyebrow-line" aria-hidden="true" />
              </div>
              <h2 className="wc-performance-title">
                High support. <span className="wc-performance-title-highlight">High standards.</span>
              </h2>
              <p className="wc-performance-desc">
                We are not a relaxed agency where “anything goes”. We are structured. We define KPIs, measure performance, focus on revenue impact, and expect ownership. But we fight with problems—not with people.
              </p>
            </div>

            <div className="wc-performance-grid">
              {/* Left Column: Dark Charcoal Card */}
              <div className="wc-performance-left-card">
                <div className="wc-performance-row">
                  <div className="wc-performance-icon-wrap" aria-hidden="true">
                    <Users size={24} className="text-[#ffc400]" strokeWidth={2.2} />
                  </div>
                  <div className="wc-performance-row-divider" aria-hidden="true" />
                  <p className="wc-performance-row-text">
                    We do not believe in <span className="wc-performance-highlight">blame games.</span>
                  </p>
                </div>

                <div className="wc-performance-row">
                  <div className="wc-performance-icon-wrap" aria-hidden="true">
                    <Scale size={24} className="text-[#ffc400]" strokeWidth={2.2} />
                  </div>
                  <div className="wc-performance-row-divider" aria-hidden="true" />
                  <p className="wc-performance-row-text">
                    We do not believe in <span className="wc-performance-highlight">favoritism.</span>
                  </p>
                </div>

                <div className="wc-performance-row">
                  <div className="wc-performance-icon-wrap" aria-hidden="true">
                    <Trophy size={24} className="text-[#ffc400]" strokeWidth={2.2} />
                  </div>
                  <div className="wc-performance-row-divider" aria-hidden="true" />
                  <p className="wc-performance-row-text">
                    We do not believe in <span className="wc-performance-highlight">seniority politics.</span>
                  </p>
                </div>

                <div className="wc-performance-row">
                  <div className="wc-performance-icon-wrap" aria-hidden="true">
                    <Handshake size={24} className="text-[#ffc400]" strokeWidth={2.2} />
                  </div>
                  <div className="wc-performance-row-divider" aria-hidden="true" />
                  <p className="wc-performance-row-text">
                    We do not tolerate <span className="wc-performance-highlight">bias</span> — of any kind.
                  </p>
                </div>
              </div>

              {/* Right Column: Top White Card + Bottom Dark Card */}
              <div className="wc-performance-right-col">
                {/* Right Top White Card */}
                <div className="wc-performance-white-card">
                  <div className="wc-performance-accent-bar" aria-hidden="true" />
                  <div className="wc-performance-scales-wrap" aria-hidden="true">
                    <svg width="92" height="92" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 55H42M32 14V55" stroke="#181818" strokeWidth="3" strokeLinecap="round" />
                      <path d="M26 55C26 51.5 38 51.5 38 55" fill="#181818" />
                      <circle cx="32" cy="14" r="3.2" fill="#181818" />
                      <path d="M12 21L32 17.5L52 21" stroke="#181818" strokeWidth="3" strokeLinecap="round" />
                      <path d="M12 21L7 35M12 21L17 35" stroke="#181818" strokeWidth="1.5" />
                      <path d="M5 35C5 42 19 42 19 35Z" fill="#ffc400" stroke="#181818" strokeWidth="1.6" />
                      <path d="M52 21L47 35M52 21L57 35" stroke="#181818" strokeWidth="1.5" />
                      <path d="M45 35C45 42 59 42 59 35Z" fill="#ffc400" stroke="#181818" strokeWidth="1.6" />
                    </svg>
                  </div>
                  <div className="wc-performance-not-list">
                    <div className="wc-performance-not-item">
                      <span className="wc-performance-chevron" aria-hidden="true">›</span>
                      <span className="wc-performance-not-text">Not gender.</span>
                    </div>
                    <div className="wc-performance-not-item">
                      <span className="wc-performance-chevron" aria-hidden="true">›</span>
                      <span className="wc-performance-not-text">Not caste.</span>
                    </div>
                    <div className="wc-performance-not-item">
                      <span className="wc-performance-chevron" aria-hidden="true">›</span>
                      <span className="wc-performance-not-text">Not religion.</span>
                    </div>
                    <div className="wc-performance-not-item">
                      <span className="wc-performance-chevron" aria-hidden="true">›</span>
                      <span className="wc-performance-not-text">Not language.</span>
                    </div>
                    <div className="wc-performance-not-item">
                      <span className="wc-performance-chevron" aria-hidden="true">›</span>
                      <span className="wc-performance-not-text">Not background.</span>
                    </div>
                  </div>
                </div>

                {/* Right Bottom Dark Card */}
                <div className="wc-performance-bottom-card">
                  <div className="wc-performance-growth-icon" aria-hidden="true">
                    <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="24" width="4" height="8" rx="1" fill="#ffc400" />
                      <rect x="14" y="18" width="4" height="14" rx="1" fill="#ffc400" />
                      <rect x="22" y="12" width="4" height="20" rx="1" fill="#ffc400" />
                      <path d="M7 18L15 11L21 15L29 7M29 7H23M29 7V13" stroke="#ffc400" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="wc-performance-growth-divider" aria-hidden="true" />
                  <div className="wc-performance-growth-text">
                    <p className="wc-performance-growth-title">Merit decides growth.</p>
                    <p className="wc-performance-growth-sub">If you perform, you grow.</p>
                    <p className="wc-performance-growth-simple">Simple.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wc-new-dual-section">
          <div className="wc-container">
            <div className="wc-new-dual-grid">

              {/* Left Card – White: Structured Development */}
              <article className="wc-new-dual-card wc-new-dual-card-white">
                {/* Eyebrow Row */}
                <div className="wc-new-dual-eyebrow-row">
                  <span className="wc-new-dual-eyebrow-bar" aria-hidden="true" />
                  <span className="wc-new-dual-eyebrow-bar" aria-hidden="true" />
                  <span className="wc-new-dual-eyebrow-text">STRUCTURED DEVELOPMENT</span>
                </div>

                {/* Heading */}
                <h2 className="wc-new-dual-heading wc-new-dual-heading-dark">
                  Brand Mindz Growth<br />Accelerator Program
                </h2>

                {/* Yellow curved underline */}
                <div className="wc-new-dual-heading-underline" aria-hidden="true">
                  <svg viewBox="0 0 180 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M2 9C40 2 80 2 178 9" stroke="#ffc400" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Body */}
                <p className="wc-new-dual-body wc-new-dual-body-dark">
                  No one is left to “figure it out.” Every team member learns what is expected, how quality is defined, how performance is measured, and how to operate at global standards. We do not believe in chaotic creativity. We believe culture is a performance engine.
                </p>

                {/* 2x2 Feature Grid */}
                <div className="wc-new-dual-feature-grid">
                  <div className="wc-new-dual-feature-item">
                    <span className="wc-new-dual-feature-icon"><TrendingUp size={20} strokeWidth={2.4} /></span>
                    <span className="wc-new-dual-feature-divider" aria-hidden="true" />
                    <span className="wc-new-dual-feature-text">Role clarity and defined KPIs</span>
                  </div>
                  <div className="wc-new-dual-feature-item">
                    <span className="wc-new-dual-feature-icon"><MessageSquare size={20} strokeWidth={2.4} /></span>
                    <span className="wc-new-dual-feature-divider" aria-hidden="true" />
                    <span className="wc-new-dual-feature-text">Structured client communication</span>
                  </div>
                  <div className="wc-new-dual-feature-item">
                    <span className="wc-new-dual-feature-icon"><Trophy size={20} strokeWidth={2.4} /></span>
                    <span className="wc-new-dual-feature-divider" aria-hidden="true" />
                    <span className="wc-new-dual-feature-text">Performance benchmarks</span>
                  </div>
                  <div className="wc-new-dual-feature-item">
                    <span className="wc-new-dual-feature-icon"><Route size={20} strokeWidth={2.4} /></span>
                    <span className="wc-new-dual-feature-divider" aria-hidden="true" />
                    <span className="wc-new-dual-feature-text">Skill progression roadmap</span>
                  </div>
                </div>
              </article>

              {/* Right Card – Dark: Respect in Practice */}
              <article className="wc-new-dual-card wc-new-dual-card-dark">
                {/* Yellow diagonal corner accent */}
                <span className="wc-new-dual-corner-accent" aria-hidden="true">
                  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 L120 0 L0 120 Z" fill="#ffc400" />
                  </svg>
                </span>

                {/* Eyebrow Row */}
                <div className="wc-new-dual-eyebrow-row">
                  <span className="wc-new-dual-eyebrow-bar" aria-hidden="true" />
                  <span className="wc-new-dual-eyebrow-bar" aria-hidden="true" />
                  <span className="wc-new-dual-eyebrow-text wc-new-dual-eyebrow-text-light">RESPECT IN PRACTICE</span>
                </div>

                {/* Heading */}
                <h2 className="wc-new-dual-heading wc-new-dual-heading-light">
                  Every belief, background,<br />and practice{" "}
                  <span style={{ color: "#ffc400" }}>matters.</span>
                </h2>

                {/* Short yellow underline */}
                <div className="wc-new-dual-heading-underline wc-new-dual-heading-underline-sm" aria-hidden="true">
                  <svg viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M2 6C20 2 50 2 78 6" stroke="#ffc400" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Body */}
                <p className="wc-new-dual-body wc-new-dual-body-light">
                  We respect all religions, beliefs, languages, and cultural practices. Our team includes people from different faiths and backgrounds. We provide a dedicated private prayer space to those who require regular prayer time—quietly, without spotlight.
                </p>

                {/* Callout Box */}
                <div className="wc-new-dual-callout">
                  <span className="wc-new-dual-callout-icon" aria-hidden="true">
                    <Handshake size={24} strokeWidth={2.2} />
                  </span>
                  <span className="wc-new-dual-callout-divider" aria-hidden="true" />
                  <p className="wc-new-dual-callout-text">
                    Respect does not need publicity. It needs{" "}
                    <span style={{ color: "#ffc400" }}>practice.</span>
                  </p>
                </div>
              </article>

            </div>
          </div>
        </section>

        <section className="wc-section bg-[#f5f5f3]">
          <div className="wc-container">
            <SectionIntro
              eyebrow="Build Global Competence From Here"
              title={"You don't need to leave Tamil\u00A0Nadu to build a global career."}
              text="We work with structured systems and maintain professional reporting. We operate with international-level quality expectations. That is our philosophy.
Not words.
 Action.
"
            />
            <div className="wc-global-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {globalCompetenceCards.map((item) => (
                <div
                  key={item.title}
                  className="wc-global-card relative flex min-h-55 items-center justify-center overflow-hidden rounded-[30px] px-6 py-8 text-center text-xl font-extrabold leading-7 text-white shadow-lg md:min-h-65"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute inset-0 bg-black/55" aria-hidden="true" />
                  <span className="relative z-10">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wc-culture-people-section">
          {/* Top-Left Diagonal Yellow Corner Streaks */}
          <div className="wc-culture-corner-tl" aria-hidden="true">
            <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="-30" y1="120" x2="200" y2="-110" stroke="url(#streakTL1)" strokeWidth="3" />
              <line x1="-15" y1="210" x2="310" y2="-115" stroke="url(#streakTL2)" strokeWidth="6" strokeLinecap="round" />
              <defs>
                <linearGradient id="streakTL1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd400" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#ffd400" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ffd400" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="streakTL2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd400" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#ffd400" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffd400" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bottom-Right Diagonal Yellow Corner Streaks */}
          <div className="wc-culture-corner-br" aria-hidden="true">
            <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="310" y1="160" x2="80" y2="390" stroke="url(#streakBR1)" strokeWidth="3" />
              <line x1="295" y1="70" x2="-30" y2="395" stroke="url(#streakBR2)" strokeWidth="6" strokeLinecap="round" />
              <defs>
                <linearGradient id="streakBR1" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffd400" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#ffd400" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ffd400" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="streakBR2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffd400" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#ffd400" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffd400" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="wc-culture-people-container">
            {/* Pill Badge with Flanking Lines */}
            <div className="wc-culture-badge-row">
              <span className="wc-culture-badge-line wc-culture-badge-line-left" aria-hidden="true" />
              <div className="wc-culture-badge">
                <Users size={15} className="text-[#ffd400] shrink-0" strokeWidth={2.4} />
                <span className="wc-culture-badge-text">Why people stay</span>
              </div>
              <span className="wc-culture-badge-line wc-culture-badge-line-right" aria-hidden="true" />
            </div>

            {/* Main Heading */}
            <h2 className="wc-culture-title">
              Respected. Heard.{" "}
              <span className="wc-culture-title-growing">
                Growing.
                <svg
                  className="wc-culture-title-underline"
                  viewBox="0 0 170 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M3 10C40 3 115 2 167 9" stroke="#ffd400" strokeWidth="3.6" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            {/* Introductory Paragraph */}
            <p className="wc-culture-intro">
              People stay because they are not reduced to job titles and their background does not define their ceiling. People build businesses. At Brand Mindz, people are the business.
            </p>

            {/* Subheading */}
            <div className="wc-culture-subheading-wrap">
              <h3 className="wc-culture-subheading">Why our culture builds client trust</h3>
              <span className="wc-culture-subheading-bar" aria-hidden="true" />
            </div>

            {/* Feature Cards Grid (Desktop 3 + 2 layout) */}
            <div className="wc-culture-cards-container">
              {/* Row 1: 3 Cards */}
              <div className="wc-culture-cards-row wc-culture-cards-row-3">
                {/* Card 1: Predictable execution */}
                <div className="wc-culture-card wc-culture-card-glow-tl">
                  <div className="wc-culture-card-left">
                    <span className="wc-culture-card-icon-circle">
                      <TrendingUp size={22} strokeWidth={2.4} />
                    </span>
                    <span className="wc-culture-card-divider" aria-hidden="true" />
                    <span className="wc-culture-card-title">Predictable execution</span>
                  </div>
                  <span className="wc-culture-card-arrow" aria-hidden="true">
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </span>
                </div>

                {/* Card 2: Clear accountability */}
                <div className="wc-culture-card wc-culture-card-glow-bl">
                  <div className="wc-culture-card-left">
                    <span className="wc-culture-card-icon-circle">
                      <ShieldCheck size={22} strokeWidth={2.4} />
                    </span>
                    <span className="wc-culture-card-divider" aria-hidden="true" />
                    <span className="wc-culture-card-title">Clear accountability</span>
                  </div>
                  <span className="wc-culture-card-arrow" aria-hidden="true">
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </span>
                </div>

                {/* Card 3: Faster turnaround */}
                <div className="wc-culture-card">
                  <div className="wc-culture-card-left">
                    <span className="wc-culture-card-icon-circle">
                      <Timer size={22} strokeWidth={2.4} />
                    </span>
                    <span className="wc-culture-card-divider" aria-hidden="true" />
                    <span className="wc-culture-card-title">Faster turnaround</span>
                  </div>
                  <span className="wc-culture-card-arrow" aria-hidden="true">
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </span>
                </div>
              </div>

              {/* Row 2: 2 Cards Centered */}
              <div className="wc-culture-cards-row wc-culture-cards-row-2">
                {/* Card 4: Structured communication */}
                <div className="wc-culture-card wc-culture-card-glow-tl">
                  <div className="wc-culture-card-left">
                    <span className="wc-culture-card-icon-circle">
                      <MessagesSquare size={22} strokeWidth={2.4} />
                    </span>
                    <span className="wc-culture-card-divider" aria-hidden="true" />
                    <span className="wc-culture-card-title">Structured communication</span>
                  </div>
                  <span className="wc-culture-card-arrow" aria-hidden="true">
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </span>
                </div>

                {/* Card 5: Transparent reporting */}
                <div className="wc-culture-card wc-culture-card-glow-b">
                  <div className="wc-culture-card-left">
                    <span className="wc-culture-card-icon-circle">
                      <FileText size={22} strokeWidth={2.4} />
                    </span>
                    <span className="wc-culture-card-divider" aria-hidden="true" />
                    <span className="wc-culture-card-title">Transparent reporting</span>
                  </div>
                  <span className="wc-culture-card-arrow" aria-hidden="true">
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Faq items={faqs} subtitle="Frequently Asked Questions — Work Culture" />

        <section className="wc-section wc-final-section bg-white">
          <div className="wc-container">
            <div className="wc-final-cta rounded-[44px] shadow-[0_26px_70px_rgba(0,0,0,.10)]">
              <p className="wc-final-cta-kicker font-bold uppercase tracking-[0.18em]">Ready to grow with us?</p>
              <h2 className="wc-final-cta-title font-extrabold tracking-[-0.05em]">
                Build global competence from Tamil Nadu.
              </h2>
              <Link href="/contact" className="wc-final-cta-button transition hover:scale-[1.03]">
                Talk to Brand Mindz <ArrowRight size={21} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
