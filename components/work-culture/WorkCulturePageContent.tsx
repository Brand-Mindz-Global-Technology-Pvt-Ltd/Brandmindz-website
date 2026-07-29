import "../../style/aboutus/workculture.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  HeartHandshake,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import founderImage from "@/assets/HomeSection/about/210446c72e34182875e9edee3773a3ddc673e220.webp";
import heroPattern from "@/assets/HomeSection/banner/group1.webp";
import womenStoryImage from "@/assets/about/women.webp";
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
    text: "Every female team member is entitled to one “No-Questions-Asked” Wellness WFH day per month.",
    preQuote: ["No approval process.", "No tracking.", "No explanation required."],
    leadIn: "Simply inform the team:",
    quote: "“Taking my Wellness WFH today. I’m online and reachable.”",
    listIntro: "On this day:",
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
    text: "Our office maintains a permanently stocked Comfort Kit including:",
    icon: Sparkles,
    points: [
      "Emergency sanitary products",
      "Gel heating pads",
      "Peppermint & ginger herbal teas",
      "Light snacks and dark chocolate",
    ],
    closing: ["Because physical comfort improves mental clarity."],
  },
  {
    title: "Power Girls Team (PGT)",
    text: "The Power Girls Team is our internal sanctuary for wellness and leadership growth.",
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
        className={`wc-point-item flex min-h-[90px] min-w-0 items-center justify-center gap-4 rounded-2xl px-6 py-5 text-center text-base font-bold leading-6 shadow-sm sm:text-lg ${
          dark
            ? "border border-white/10 bg-white/[.07] text-white"
            : "border border-zinc-200 bg-white text-zinc-950"
        }`}
      >
        <span className="wc-point-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffdb00] text-black">
          <Check size={19} strokeWidth={3} />
        </span>

        <span className="wc-point-label min-w-0 break-words">
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
              <div className="inline-flex flex-wrap items-center justify-center gap-3 text-center text-[clamp(1.35rem,2.5vw,2.5rem)] font-semibold leading-tight"
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
                At Brand Mindz Global Technology Pvt Ltd, we believe businesses are built by people — and people are the greatest asset of any organization.
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

        <section className="wc-section bg-white">
          <div className="wc-container">
            <div className="mx-auto grid items-stretch gap-8 overflow-hidden rounded-[44px] bg-zinc-950 p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,.18)] lg:grid-cols-2 lg:p-7"
            style={{ maxWidth: "1360px" }}>
              <div
  className="wc-founder-copy flex flex-col items-center justify-center rounded-[36px] text-center"
  style={{ minHeight: "540px" }}
>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#fcfcfc]/70">Our hiring philosophy</p>
                <h2 className="wc-founder-title font-extrabold tracking-[-0.045em]">
                  We built the company we wish existed.
                </h2>
                <div className="wc-founder-body  text-zinc-300 !text-lg md:!text-xl">
  <p>
    Brand Mindz was not started in a metro city. It was built in Tirunelveli.
  </p>

  <p>
    Our founder, R. Vasanth Kumar, grew up in a Tier 2 town. He moved to corporate
    environments and experienced what many talented people from smaller cities go
    through — leaving family, adjusting to unfamiliar culture, competing with metro
    exposure, and constantly proving capability.
  </p>

  <p>
    He understood something deeply:
  </p>
</div>
                <blockquote className="wc-founder-quote rounded-[28px] border border-[#808080] bg-[#808080]/10 font-bold text-[#ffffff]">
                  Talent is not limited by geography.
                <br />
                  Opportunity is.
                </blockquote>
                <p className="wc-founder-body text-zinc-300 !text-lg md:!text-xl">
                  So instead of asking talented people to migrate, he decided to build a global-standard company from Tamil Nadu itself.
                  That is how Brand Mindz was born.
                  <span className="mt-2 block">
                    Not just as a digital marketing agency — but as an opportunity platform.
                  </span>

                </p>
               <Link
  href="/contact"
  className="wc-founder-cta gap-3 px-8 py-4 text-lg font-semibold transition hover:scale-[1.03] md:px-10 md:py-5 md:text-xl">
  Meet Brand Mindz <ArrowRight size={24} />
</Link>
              </div>

              <div className="relative min-h-105 overflow-hidden rounded-[36px] lg:min-h-155">
                <Image
                  src={founderImage}
                  alt="Brand Mindz founder R. Vasanth Kumar"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-x-6 bottom-6 flex min-h-25 flex-col items-center justify-center rounded-[26px] bg-white/92 px-8 py-8 text-center text-zinc-950 shadow-2xl backdrop-blur md:inset-x-auto md:left-8 md:right-8">
  <strong className="block text-2xl font-extrabold">
    R. Vasanth Kumar
  </strong>

  <span className="mt-2 block text-base font-medium text-zinc-600">
    Founder, Brand Mindz
  </span>
</div>
              </div>
            </div>
          </div>
        </section>

        <section className="wc-section bg-[#f5f5f3]">
          <div className="wc-container">
            <SectionIntro
              eyebrow="Potential over privilege"
              title="If you're a first-generation graduate, we see you."
              text="Many of our team members are first-generation graduates. We understand the pressure, the responsibility, and the hunger to grow. Joining Brand Mindz is more than filling a role. It is an opportunity to build competence that can compete globally—from Tamil Nadu."
            />
            <div className="text-3xl font-bold">
  We Not Hire
</div>
            <PointGrid items={["Based on accent", "Based on city background", "Based on privilege"]} />
            <br></br>
            <div className="text-3xl font-bold">
  We Hire Only Based on potential & ownership
</div>
          </div>
        </section>

        <section className="wc-section bg-white">
          <div className="wc-container">
            <div className="wc-section-intro">
              <h2 className="wc-section-intro-title text-[clamp(2.35rem,4vw,3.75rem)] font-extrabold leading-[1.12] tracking-[-0.045em]">
                70% of Our Team Are Women — And That Is Not a Coincidence
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-[clamp(1.15rem,1.6vw,1.45rem)] font-semibold leading-relaxed text-zinc-600">
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
                {wellnessPolicies.map(({ title, text, preQuote, leadIn, quote, listIntro, icon: Icon, points, closing }) => (
                  <article key={title} className="wc-wellness-panel">
                    <div className="wc-wellness-feature">
                      <div className="wc-wellness-icon">
                        <Icon size={34} />
                      </div>
                      <div>
                        <h3 className="wc-wellness-title text-[clamp(1.7rem,2.4vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.035em]">
                          {title}
                        </h3>
                        <p className="wc-wellness-description">{text}</p>
                        {preQuote ? (
                          <p className="wc-wellness-pre-quote">
                            {preQuote.map((line) => <span key={line}>{line}</span>)}
                          </p>
                        ) : null}
                        {leadIn ? <p className="wc-wellness-supporting-copy">{leadIn}</p> : null}
                        {quote ? <p className="wc-wellness-quote">{quote}</p> : null}
                        {listIntro ? <p className="wc-wellness-list-intro">{listIntro}</p> : null}
                      </div>
                    </div>

                    <div className="wc-wellness-points">
                      {points.map((point) => (
                        <div key={point} className="wc-wellness-point">
                          <span className="wc-wellness-point-icon" aria-hidden="true">
                            <Check size={20} strokeWidth={3} />
                          </span>
                          <span>{point}</span>
                        </div>
                      ))}
                      <div className="wc-wellness-closing">
                        {closing.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="wc-section wc-performance-section">
          <div className="wc-container">
            <SectionIntro
              eyebrow="We Believe Culture is a performance engine"
              title="High support. High standards."
              text="We are not a relaxed agency where “anything goes”. We are structured. We define KPIs, measure performance, focus on revenue impact, and expect ownership. But we fight with problems—not with people."
            />

          

            <div className="wc-merit-statement">
              <p className="wc-merit-beliefs">
                We do not believe in blame games.<br />
                We do not believe in favoritism.<br />
                We do not believe in seniority politics.<br />
                We do not tolerate bias — of any kind.
              </p>
              <p className="wc-merit-bias">
                Not gender.<br />
                Not caste.<br />
                Not religion.<br />
                Not language.<br />
                Not background.
              </p>
              <p className="wc-merit-outcome">
                Merit decides growth.<br />
                If you perform, you grow.<br />
                Simple.
              </p>
            </div>
          </div>
        </section>

        <section className="wc-section bg-white">
          <div className="wc-container">
            <div className="wc-dual-grid grid gap-8 lg:grid-cols-2">
              <article className="wc-dual-card rounded-[42px] bg-[#888888]">
                <p className="wc-dual-eyebrow text-sm font-bold uppercase tracking-[0.22em] text-[#ffffff]">Structured development</p>
                <h2 className="wc-dual-title font-extrabold tracking-[-0.045em]">
                  Brand Mindz Growth Accelerator Program
                </h2>
                <p className="wc-dual-body text-white">
                  No one is left to “figure it out.” Every team member learns what is expected, how quality is defined, how performance is measured, and how to operate at global standards. We do not believe in chaotic creativity. We believe culture is a performance engine.
                </p>
                <div className="wc-dual-points">
                  <PointGrid items={growthPoints} />
                </div>
              </article>

              <article className="wc-dual-card rounded-[42px] bg-[#000000]">
                <p className="wc-dual-eyebrow text-sm font-bold uppercase tracking-[0.22em] text-white">Respect in practice</p>
                <h2 className="wc-dual-title font-extrabold text-white tracking-[-0.045em]">
                  Every belief, background, and practice matters.
                </h2>
                <p className="wc-dual-body text-white">
                  We respect all religions, beliefs, languages, and cultural practices. Our team includes people from different faiths and backgrounds. We provide a dedicated private prayer space to those who require regular prayer time—quietly, without spotlight.
                </p>
                <blockquote className="wc-dual-quote font-extrabold text-black">
                  Respect does not need publicity. It needs practice.
                </blockquote>
              </article>
            </div>
          </div>
        </section>

        <section className="wc-section bg-[#f5f5f3]">
          <div className="wc-container">
            <SectionIntro
              eyebrow="Build Global Competence From Here"
              title="You don't need to leave Tamil Nadu to build a global career."
              text="We work with structured systems and maintain professional reporting. We operate with international-level quality expectations. That is our philosophy.
Not words.
 Action.
"
            />
            <div className="wc-global-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {['International exposure', 'Structured reporting', 'Global quality standards', 'Measurable performance'].map((item) => (
                <div key={item} className="wc-global-card flex items-center justify-center rounded-[30px] bg-white px-6 py-8 text-xl font-extrabold leading-7 shadow-sm"
                style={{ minHeight: "150px" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wc-section bg-white">
          <div className="wc-container">
            <div className="wc-stay-card rounded-[44px] bg-zinc-950 text-white shadow-[0_30px_80px_rgba(0,0,0,.16)]">
              <p className="wc-stay-eyebrow text-sm font-bold uppercase tracking-[0.22em] text-[#ffdb00]">Why people stay</p>
              <h2 className="wc-stay-title font-extrabold tracking-[-0.05em]">
                Respected. Heard. Growing.
              </h2>
              <p className="wc-stay-body text-zinc-300">
                People stay because they are not reduced to job titles and their background does not define their ceiling. People build businesses. At Brand Mindz, people are the business.
              </p>
              <h3 className="wc-stay-subtitle font-extrabold tracking-[-0.04em]">
                Why our culture builds client trust
              </h3>
              <div className="wc-trust-points">
                <PointGrid items={trustPoints} dark />
              </div>
            </div>
          </div>
        </section>

        <section className="wc-section wc-faq-section border-t border-zinc-200">
          <Image src={heroPattern} alt="" aria-hidden className="wc-faq-pattern" priority />
          <div className="wc-faq-shell">
            <div className="wc-faq-header">
              <p className="wc-faq-kicker">Frequently Asked Questions</p>
              <h2 className="wc-faq-title">Got Questions? We&apos;ve Got Answers</h2>
            </div>

            <div className="wc-faq-grid">
              {[faqs.slice(0, 4), faqs.slice(4)].map((column, columnIndex) => (
                <div key={columnIndex} className="wc-faq-column">
                  {column.map((faq, index) => (
                    <details key={faq.question} className="wc-faq-item" open={columnIndex === 0 && index === 0}>
                      <summary className="wc-faq-summary">
                        <span>{faq.question}</span>
                        <ChevronDown className="wc-faq-icon" size={22} strokeWidth={2.4} />
                      </summary>
                      <p className="wc-faq-answer">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wc-section wc-final-section bg-white">
          <div className="wc-container">
            <div className="wc-final-cta rounded-[44px] bg-[#888888] shadow-[0_26px_70px_rgba(0,0,0,.10)]">
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
