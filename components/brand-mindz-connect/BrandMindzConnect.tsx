import "../../style/aboutus/brandmindzconnect.css";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Link2,
  Megaphone,
  Network,
  PackageCheck,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Target,
  UserRoundCheck,
  Users,
  Wrench,
} from "lucide-react";
import founderImage from "@/assets/HomeSection/about/210446c72e34182875e9edee3773a3ddc673e220.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brand Mindz Connect™ | Connecting Businesses, Creating Opportunities",
  description:
    "Brand Mindz Connect is a trusted business community connecting entrepreneurs, founders, agencies, professionals, and growing businesses through meaningful opportunities.",
  keywords: [
    "Brand Mindz Connect",
    "business community India",
    "business referral network",
    "entrepreneur network",
    "business partnership opportunities",
    "trusted vendor connections",
  ],
  alternates: { canonical: "https://www.brandmindz.com/brand-mindz-connect" },
  openGraph: {
    title: "Brand Mindz Connect™",
    description: "Connecting businesses and creating meaningful opportunities through a trusted community.",
    url: "https://www.brandmindz.com/brand-mindz-connect",
    type: "website",
  },
};

const businessExamples = [
  { title: "Manufacturer", need: "Logistics partner", icon: Building2 },
  { title: "Startup", need: "Accountant", icon: Rocket },
  { title: "Construction company", need: "Interior designer", icon: Wrench },
  { title: "Educational institution", need: "Software company", icon: Lightbulb },
];

const processSteps = [
  {
    number: "01",
    title: "Share a Genuine Requirement",
    description: "A member shares a real business requirement directly with the Brand Mindz team.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Requirement Review",
    description: "Our team reviews the need for relevance, clarity, and genuine business value.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Trusted Network Match",
    description: "We identify suitable businesses and professionals within the trusted community.",
    icon: UserRoundCheck,
  },
  {
    number: "04",
    title: "Meaningful Introduction",
    description: "Where appropriate, we facilitate an introduction. Members remain in control of every decision.",
    icon: Handshake,
  },
];

const opportunities = [
  { title: "Business partnerships", icon: Handshake },
  { title: "Vendor recommendations", icon: PackageCheck },
  { title: "Technology implementation", icon: Wrench },
  { title: "Marketing collaborations", icon: Megaphone },
  { title: "Recruitment support", icon: Users },
  { title: "Professional services", icon: BriefcaseBusiness },
  { title: "Manufacturing support", icon: Building2 },
  { title: "Distribution opportunities", icon: Network },
  { title: "Strategic alliances", icon: Target },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brand Mindz Global Technology Pvt Ltd",
  url: "https://www.brandmindz.com",
  founder: { "@type": "Person", name: "R. Vasanth Kumar" },
};

export default function BrandMindzConnect() {
  return (
    <main className="industries-main-container connect-page">
      

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bm-hero-section-industries">
        <div className="bm-industries-hero-badge">
          <span className="bm-industries-hero-badge__icon"><Network size={14} color="black" /></span>
          <p className="bm-industries-hero-badge__text">Connecting Businesses. Creating Opportunities.</p>
        </div>
        <h1 className="bm-industries-hero-title">Brand Mindz <span className="highlight">Connect™</span></h1>
        <p className="bm-industries-hero-description">A trusted business community built to create meaningful opportunities between entrepreneurs, professionals, agencies, founders, and growing businesses.</p>
      </section>

      <section className="connect-manifesto" aria-label="Brand Mindz Connect shared growth values">
        <div className="connect-manifesto-copy">
          <span>Growth becomes meaningful</span>
          <h2>When it is shared.</h2>
          <p>Businesses grow stronger when they support one another.</p>
        </div>
        <div className="connect-manifesto-values">
          <div className="connect-manifesto-value"><span><ShieldCheck size={18} /></span>Trusted</div>
          <div className="connect-manifesto-value"><span><Link2 size={18} /></span>Connected</div>
          <div className="connect-manifesto-value"><span><HeartHandshake size={18} /></span>Shared growth</div>
        </div>
      </section>

      <section className="connect-section connect-grey">
        <div className="connect-container connect-purpose-grid">
          <div>
            <span className="connect-eyebrow">We want to build your business</span>
            <h2 className="connect-heading">More than a service relationship.</h2>
            <div className="connect-copy">
              <p>Every client who partners with Brand Mindz becomes part of something much bigger. Our responsibility does not end when we launch your website, optimise your campaigns, or deliver your branding.</p>
              <p>Whenever possible, we look for opportunities to connect businesses within our network that can genuinely help each other grow.</p>
            </div>
            <p className="connect-purpose-note">Instead of letting opportunities disappear, we create meaningful introductions between trusted businesses—because that is how business communities should work.</p>
          </div>
          <div className="connect-examples">
            {businessExamples.map(({ title, need, icon: Icon }) => (
              <article className="connect-example" key={title}>
                <span className="connect-example-icon"><Icon size={21} /></span>
                <span>{title}</span>
                <h3>{need}</h3>
                <div className="connect-example-arrow"><Link2 size={15} />A meaningful connection</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="connect-section">
        <div className="connect-container connect-vision-grid">
          <div className="connect-founder">
            <Image src={founderImage} alt="R. Vasanth Kumar, Founder of Brand Mindz" fill sizes="(max-width: 1100px) 90vw, 35vw" />
            <div className="connect-founder-label"><strong>R. Vasanth Kumar</strong><span>Founder, Brand Mindz</span></div>
          </div>
          <div>
            <span className="connect-eyebrow">The vision behind Brand Mindz Connect™</span>
            <h2 className="connect-heading">Helping hundreds of companies grow together creates lasting impact.</h2>
            <div className="connect-copy">
              <p>Our founder believes business should never be viewed as individual success alone. Brand Mindz was built on the philosophy that people build businesses, and businesses build communities.</p>
              <p>Every successful entrepreneur has benefited from someone who trusted them, recommended them, introduced them, or opened a door at the right time. Brand Mindz Connect™ exists to create more of those moments.</p>
              <p>Our vision is to build one of India&apos;s most trusted business communities where opportunities are shared, partnerships are created, and businesses grow together.</p>
            </div>
            <p className="connect-vision-statement">Growing one company is an achievement. Helping hundreds grow together creates lasting impact.</p>
          </div>
        </div>
      </section>

      <section className="connect-section connect-dark">
        <div className="connect-container connect-trust-grid">
          <div>
            <span className="connect-eyebrow">A community built on trust</span>
            <h2 className="connect-heading">Relevant opportunities. Protected quality.</h2>
            <div className="connect-copy">
              <p>Brand Mindz Connect™ is an exclusive business network available to our clients and trusted partners.</p>
              <p>Every opportunity is reviewed before it reaches members. This maintains relevance, reduces noise, and protects the quality of the network.</p>
              <p><strong>This is not another business group filled with promotions.</strong> It is a professional community where meaningful conversations lead to meaningful opportunities.</p>
            </div>
          </div>
          <aside className="connect-trust-panel">
            <span className="connect-trust-panel-icon"><ShieldCheck size={27} /></span>
            <h3>Trust is the entry standard.</h3>
            <p>The community is designed around professional relevance, responsible introductions, and member control.</p>
            <div className="connect-trust-points">
              {[
                "Exclusive to clients and trusted partners",
                "Every opportunity reviewed before sharing",
                "Relevant introductions without promotional noise",
                "Members control every discussion and decision",
              ].map((item) => <div className="connect-trust-point" key={item}><span><Check size={14} strokeWidth={3} /></span>{item}</div>)}
            </div>
          </aside>
        </div>
      </section>

      <section className="connect-section connect-grey">
        <div className="connect-container">
          <div className="connect-process-header">
            <span className="connect-eyebrow">How it works</span>
            <h2 className="connect-heading">The right people find each other.</h2>
            <div className="connect-copy"><p>Brand Mindz facilitates trusted introductions while members remain in control of every discussion and business decision.</p></div>
          </div>
          <div className="connect-process-grid">
            {processSteps.map(({ number, title, description, icon: Icon }) => (
              <article className="connect-process-step" key={number}>
                <span className="connect-process-number">{number}</span>
                <span className="connect-process-icon"><Icon size={23} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="connect-process-note">Because sometimes the right introduction is all a business needs.</p>
        </div>
      </section>

      <section className="connect-section connect-dark">
        <div className="connect-container">
          <div className="connect-opportunities-header">
            <span className="connect-eyebrow">More than referrals</span>
            <h2 className="connect-heading">Long-term collaboration, not one-time transactions.</h2>
            <div className="connect-copy"><p>Brand Mindz Connect™ helps businesses find the support, expertise, and partnerships they need to create durable value.</p></div>
          </div>
          <div className="connect-opportunity-grid">
            {opportunities.map(({ title, icon: Icon }) => <div className="connect-opportunity" key={title}><span><Icon size={18} /></span>{title}</div>)}
          </div>
          <p className="connect-long-term">Business relationships should create long-term value, not just short-term revenue.</p>
        </div>
      </section>

      <section className="connect-shared">
        <div className="connect-container connect-shared-grid">
          <div>
            <span className="connect-eyebrow">Built on shared growth</span>
            <h2 className="connect-heading">We measure success differently.</h2>
            <div className="connect-question">How many businesses became stronger because they became part of the Brand Mindz ecosystem?</div>
          </div>
          <div className="connect-shared-copy">
            <p>That question drives every decision behind Brand Mindz Connect™.</p>
            <p>Our ambition is not simply to become a successful digital marketing company. It is to build an ecosystem where businesses help businesses succeed.</p>
            <p><strong>When our clients grow, our community grows. When our community grows, we all move forward together.</strong></p>
            <p className="connect-closing">That is the future we are building.<br />That is Brand Mindz Connect™.</p>
          </div>
        </div>
      </section>

      <section className="connect-cta">
        <div className="connect-cta-inner">
          <span className="connect-eyebrow">Grow with the ecosystem</span>
          <h2>Let&apos;s Create Meaningful Opportunities Together.</h2>
          <p>Partner with Brand Mindz and become part of a trusted community where businesses help businesses succeed.</p>
          <Link className="connect-cta-link" href="/contact">Start a Conversation <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
