"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { 
  FaChartLine, 
  FaLaptopCode, 
  FaPaintBrush, 
  FaShoppingCart, 
  FaArrowRight, 
  FaQuoteRight, 
  FaBolt,
  FaCheckCircle 
} from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem } from "../animations";
import { HeroBoltIcon } from "@/components/ui/HeroBoltIcon";
import truckTaxiCaseStudyImage from "@/assets/case-studies/trucktaxi.webp";
import arasanCaseStudyImage from "@/assets/case-studies/arasan.webp";
import spacemanCaseStudyImage from "@/assets/case-studies/spaceman.webp";
import wolfMagicCaseStudyImage from "@/assets/case-studies/wolfmagic.webp";

// Reusable Counter Component with ease-out intersection animation
interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutQuad = (t: number) => t * (2 - t);
            const currentCount = Math.floor(easeOutQuad(progress) * target);
            setCount(currentCount);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated, target, duration]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
};

// Case Study Item Interface
interface CaseStudy {
  id: string;
  contentUrl: string;
  client: string;
  category: string;
  title: string;
  description: string;
  logoText: string;
  icon: React.ReactNode;
  image?: StaticImageData;
  metrics: {
    value: string;
    label: string;
  }[];
  spotlight: {
    titleLead: string;
    titleHighlight: string;
    summary: string;
    challenge: string;
    solution: string;
    statLabel: string;
    statValue: string;
    chartTitle: string;
    timeline: [string, string, string];
    meta: {
      label: string;
      value: string;
    }[];
  };
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "performance-marketing-case-studies",
    contentUrl: "/case-studies/performance-marketing-case-studies",
    client: "Truck Taxi & Arts and Science College",
    category: "Digital Marketing",
    title: "Fast, Scalable & Cost-Efficient Driver Onboarding",
    description: "Truck Taxi is an on-demand truck and commercial vehicle booking platform. Our objective was clear — onboard quality drivers at scale while maintaining an ultra-low cost per lead.",
    logoText: "PERFORMANCE",
    icon: <FaChartLine />,
    image: truckTaxiCaseStudyImage,
    metrics: [
      { value: "1,000+", label: "Verified Driver Leads Generated" },
      { value: "₹2.60–₹3.62", label: "Cost Per Lead" },
      { value: "13+ Lakh", label: "Total Reach" }
    ],
    spotlight: {
      titleLead: "Fast, Scalable & Cost-Efficient",
      titleHighlight: "Driver Onboarding",
      summary: "Truck Taxi is an on-demand truck and commercial vehicle booking platform.",
      challenge: "Traditional digital ads were expensive, inefficient, and not scalable.",
      solution: "Brand Mindz Global implemented a driver-first acquisition strategy.",
      statLabel: "Generated Leads",
      statValue: "1,000+ Verified Driver Leads Generated",
      chartTitle: "Lead generation trend",
      timeline: ["2023", "2024", "2025"],
      meta: [
        { label: "Total reach", value: "13+ Lakh Drivers" },
        { label: "Cost per lead", value: "₹2.60 – ₹3.62" },
      ],
    },
  },
  {
    id: "mathi-packaging-case-study",
    contentUrl: "/case-studies/mathi-packaging-case-study",
    client: "MaTHi–Mahalir Thittam",
    category: "Branding",
    title: "From a Local Cinnamon Product to a Brand Ready for a Bigger Market",
    description: "Packaging redesign for a women-led Self-Help Group under the MaTHi–Mahalir Thittam ecosystem",
    logoText: "MaTHi",
    icon: <FaPaintBrush />,
    metrics: [
      { value: "Clearer", label: "Product Recognition" },
      { value: "Stronger", label: "Retail Presence" },
      { value: "Scalable", label: "Visual Foundation" }
    ],
    spotlight: {
      titleLead: "A Local Product Reimagined for a",
      titleHighlight: "Bigger Market",
      summary: "MaTHi–Mahalir Thittam is a women-led Self-Help Group building a stronger future for its cinnamon products.",
      challenge: "The product needed packaging that could clearly communicate its quality and stand out on retail shelves.",
      solution: "We created a distinctive packaging system that improved recognition and gave the product a scalable visual foundation.",
      statLabel: "Brand outcome",
      statValue: "Retail-ready packaging system",
      chartTitle: "Brand development journey",
      timeline: ["Discovery", "Design", "Launch"],
      meta: [
        { label: "Recognition", value: "Clearer product identity" },
        { label: "Presence", value: "Stronger retail appeal" },
      ],
    },
  },
  {
    id: "arasan-supermarket-app-install-case-study",
    contentUrl: "/case-studies/arasan-supermarket-app-install-case-study",
    client: "Arasan SuperMarket",
    category: "Digital Marketing",
    title: "From 100+ to 1,000+ App Users in 30 Days",
    description: "A focused Meta app-install campaign built to turn Tirunelveli shoppers into measurable Android app adopters.",
    logoText: "ARASAN",
    icon: <FaChartLine />,
    image: arasanCaseStudyImage,
    metrics: [
      { value: "1,000+", label: "Reported App Installs" },
      { value: "₹6.57", label: "Reported Cost Per Install" },
      { value: "86,108", label: "People Reached" },
    ],
    spotlight: {
      titleLead: "Turning Every Rupee Into a",
      titleHighlight: "Customer Action",
      summary: "Arasan SuperMarket used a focused Meta app-install campaign to build a direct digital connection with local customers in Tirunelveli.",
      challenge: "The campaign needed to convince local shoppers to install another app while keeping acquisition costs under control.",
      solution: "We combined local audience planning, mobile-first creative, and CPI-focused optimisation to drive measurable app adoption.",
      statLabel: "Reported cost per install",
      statValue: "₹6.57 CPI",
      chartTitle: "App adoption campaign trend",
      timeline: ["13 Aug", "30 days", "13 Sep"],
      meta: [
        { label: "App adoption", value: "100+ → 1,000+" },
        { label: "Ad spend", value: "₹6,783.17" },
      ],
    },
  },
  {
    id: "spaceman-craft-case-study",
    contentUrl: "/case-studies/spaceman-craft-case-study",
    client: "Spaceman Craft",
    category: "Development",
    title: "Building a Future-Ready Brand From a Tier City",
    description: "Brand identity and a high-impact digital experience created for a technology-driven brand with global ambition.",
    logoText: "SPACEMAN CRAFT",
    icon: <FaLaptopCode />,
    image: spacemanCaseStudyImage,
    metrics: [
      { value: "Brand + Web", label: "Connected Digital Foundation" },
      { value: "Responsive", label: "Cross-Device Experience" },
      { value: "Scalable", label: "Growth-Ready Architecture" },
    ],
    spotlight: {
      titleLead: "A Tier-City Idea Built for a",
      titleHighlight: "Global Mindset",
      summary: "Spaceman Craft was developed as a technology-driven brand platform designed to communicate ambition beyond geography.",
      challenge: "The brand needed to feel credible, modern, and ready for a wider audience—not limited by its Tier-city origin.",
      solution: "We connected brand strategy, futuristic visual direction, UI/UX, responsive development, and SEO foundations into one digital ecosystem.",
      statLabel: "Digital foundation",
      statValue: "Brand + website ecosystem",
      chartTitle: "Brand development journey",
      timeline: ["Strategy", "Build", "Launch"],
      meta: [
        { label: "Experience", value: "Responsive by design" },
        { label: "Architecture", value: "Built to scale" },
      ],
    },
  },
  {
    id: "wolf-magic-academy-seo-case-study",
    contentUrl: "/case-studies/wolf-magic-academy-seo-case-study",
    client: "Wolf Magic Academy",
    category: "Digital Marketing",
    title: "From Low Visibility to Stronger Organic Presence",
    description: "A complete SEO foundation for an online education platform seeking sustainable search visibility and student enquiries.",
    logoText: "WOLF MAGIC",
    icon: <FaChartLine />,
    image: wolfMagicCaseStudyImage,
    metrics: [
      { value: "SEO", label: "Technical Foundation" },
      { value: "Stronger", label: "Search Visibility" },
      { value: "Scalable", label: "Organic Growth Strategy" },
    ],
    spotlight: {
      titleLead: "From Low Visibility to",
      titleHighlight: "Stronger Organic Presence",
      summary: "Wolf Magic Academy is an online education platform helping students across CBSE, ICSE, ISC, IB, IGCSE, and NIOS curricula.",
      challenge: "Important landing pages were not indexed consistently, priority tuition keywords had low visibility, and internal linking was underdeveloped.",
      solution: "We combined technical SEO, keyword research, on-page optimisation, crawlability improvements, content planning, and internal linking.",
      statLabel: "SEO outcome",
      statValue: "Stronger search foundation",
      chartTitle: "Organic visibility journey",
      timeline: ["Audit", "Optimise", "Grow"],
      meta: [
        { label: "Technical health", value: "Improved crawlability" },
        { label: "Content relevance", value: "High-intent targeting" },
      ],
    },
  },
  {
    id: "dic-tenkasi-case-study",
    contentUrl: "/case-studies/dic-tenkasi-case-study",
    client: "District Industries Centre, Tenkasi",
    category: "Development",
    title: "Rebuilding the Digital Experience of DIC Tenkasi",
    description: "A government website designed to make schemes, incentives, industrial information and entrepreneurship support easier to access.",
    logoText: "DIC TENKASI",
    icon: <FaLaptopCode />,
    metrics: [
      { value: "Faster", label: "Page Performance" },
      { value: "Responsive", label: "Mobile Experience" },
      { value: "Scalable", label: "Content Structure" }
    ],
    spotlight: {
      titleLead: "Making Public Services",
      titleHighlight: "Easier to Access",
      summary: "District Industries Centre, Tenkasi supports entrepreneurs with schemes, incentives, and industrial information.",
      challenge: "Important information was difficult to find across the existing digital experience, especially on mobile devices.",
      solution: "We rebuilt the website around clear navigation, responsive access, and a scalable information structure.",
      statLabel: "Digital experience",
      statValue: "Responsive information portal",
      chartTitle: "Experience improvement trend",
      timeline: ["Audit", "Build", "Launch"],
      meta: [
        { label: "Mobile experience", value: "Fully responsive" },
        { label: "Content structure", value: "Built to scale" },
      ],
    },
  }
];

export const CaseStudiesClient: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeSpotlightIndex, setActiveSpotlightIndex] = useState(0);

  const categories = ["All", "Branding", "Designing", "Development", "Digital Marketing", "E-Commerce listing"];

  const filteredCaseStudies = activeTab === "All"
    ? caseStudiesData
    : caseStudiesData.filter(cs => cs.category.toLowerCase().includes(activeTab.toLowerCase().split(' ')[0]));
  const spotlightStudies = activeTab === "All" ? caseStudiesData : filteredCaseStudies;
  const activeSpotlight = spotlightStudies[activeSpotlightIndex] ?? spotlightStudies[0];

  useEffect(() => {
    setActiveSpotlightIndex(0);
  }, [activeTab]);

  const moveSpotlight = (direction: "previous" | "next") => {
    setActiveSpotlightIndex((currentIndex) => {
      if (spotlightStudies.length < 2) return 0;
      return direction === "next"
        ? (currentIndex + 1) % spotlightStudies.length
        : (currentIndex - 1 + spotlightStudies.length) % spotlightStudies.length;
    });
  };

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="bm-cs-hero">
        <FadeIn delay={0.1}>
          <div className="bm-cs-hero-badge">
            <HeroBoltIcon />
            <p className="bm-cs-hero-badge__text">Our Work & Success Stories</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1 className="bm-cs-title">
            Case Studies that Prove <br />
            <span className="highlight-yellow">Real Growth</span> & <span className="highlight-grey">Measurable Success</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p className="bm-cs-description">
            Explore how we build brands, engineer high-performing platforms, and execute ROI-driven campaigns that scale businesses.
          </p>
        </FadeIn>
      </section>

      {/* SECTION 2: SHOWCASE GRID */}
      <section className="bm-cs-showcase">
        <div className="bm-cs-container">
          {/* Navigation Filter Tabs */}
          <div className="bm-cs-tabs-container">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`bm-cs-tab-button ${activeTab === cat ? "active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredCaseStudies.length > 0 ? (
                <StaggerChildren className="bm-cs-grid" staggerDelay={0.1}>
                  {filteredCaseStudies.map((study) => (
                    <StaggerItem key={study.id}>
                      <article className="bm-cs-card bm-cs-case-card">
                        {/* Case study visual */}
                        <div className="bm-cs-card__image-container">
                          {study.image ? (
                            <Image
                              src={study.image}
                              alt={`${study.client} case study`}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="bm-cs-card__image"
                            />
                          ) : (
                            <>
                              <div className="bm-cs-card__pattern-bg" />
                              <div className="bm-cs-card__gradient-overlay" />
                              <span className="bm-cs-card__category-badge">{study.category}</span>
                              <div className="bm-cs-card__logo-wrapper">
                                <span className="bm-cs-card__logo-icon">{study.icon}</span>
                                <span className="bm-cs-card__logo-text">{study.logoText}</span>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Content details */}
                        <div className="bm-cs-card__content">
                          <span className="bm-cs-card__client">{study.client}</span>
                          <h3 className="bm-cs-card__title">{study.title}</h3>
                          <p className="bm-cs-card__desc">{study.description}</p>

                          {/* Key metrics row */}
                          <div className="bm-cs-card__metrics">
                            {study.metrics.map((metric, idx) => (
                              <div key={idx} className="bm-cs-card__metric-item">
                                <span className="bm-cs-card__metric-value">{metric.value}</span>
                                <span className="bm-cs-card__metric-label">{metric.label}</span>
                              </div>
                            ))}
                          </div>

                          <Link href={study.contentUrl} className="bm-cs-card__link">
                            View Case Study <FaArrowRight size={14} />
                          </Link>
                        </div>
                      </article>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              ) : (
                <div style={{ textAlign: "center", padding: "60px 0", color: "#888", fontSize: "20px" }}>
                  More case studies for "{activeTab}" are currently being compiled. Check back soon!
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 3: FEATURED SPOTLIGHT */}
      <section className="bm-cs-featured">
        <div className="bm-cs-container bm-cs-featured__container">
          {activeSpotlight ? (
            <>
              {spotlightStudies.length > 1 && (
                <div className="bm-cs-featured__navigation" aria-label="Spotlight case study navigation">
                  <button
                    type="button"
                    onClick={() => moveSpotlight("previous")}
                    aria-label="Show previous spotlight case study"
                  >
                    <FiChevronLeft aria-hidden="true" />
                  </button>
                  <span>{activeSpotlight.client}</span>
                  <button
                    type="button"
                    onClick={() => moveSpotlight("next")}
                    aria-label="Show next spotlight case study"
                  >
                    <FiChevronRight aria-hidden="true" />
                  </button>
                </div>
              )}

              <motion.article
                className="bm-cs-featured__content"
                key={activeSpotlight.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div>
                  <div className="bm-cs-featured__badge">Spotlight Success</div>
                  <h2 className="bm-cs-featured__title">
                    {activeSpotlight.spotlight.titleLead} <span>{activeSpotlight.spotlight.titleHighlight}</span>
                  </h2>
                  <p className="bm-cs-featured__client">{activeSpotlight.spotlight.summary}</p>

                  <div className="bm-cs-featured__blocks">
                    <div className="bm-cs-featured__block">
                      <h4 className="bm-cs-featured__block-title">
                        <FaBolt /> The Challenge
                      </h4>
                      <p className="bm-cs-featured__block-text">{activeSpotlight.spotlight.challenge}</p>
                    </div>

                    <div className="bm-cs-featured__block bm-cs-featured__block--solution">
                      <h4 className="bm-cs-featured__block-title">
                        <FaCheckCircle color="#ffcc00" /> Our Solution
                      </h4>
                      <p className="bm-cs-featured__block-text">{activeSpotlight.spotlight.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="bm-cs-featured__stat-pane">
                  <div className="bm-cs-featured__stat-header">
                    <span className="bm-cs-featured__stat-label">{activeSpotlight.spotlight.statLabel}</span>
                    <div className="bm-cs-featured__stat-value">{activeSpotlight.spotlight.statValue}</div>
                  </div>

                  <div className="bm-cs-featured__chart-box">
                    <h4 className="bm-cs-featured__chart-title">{activeSpotlight.spotlight.chartTitle}</h4>
                    <div className="bm-cs-featured__svg-wrapper">
                      <svg viewBox="0 0 400 150" style={{ width: "100%", height: "100%" }}>
                        <motion.path
                          d="M10 130 L 80 100 L 150 120 L 220 70 L 300 40"
                          fill="none"
                          stroke="#FFD600"
                          strokeWidth="4"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.1, ease: "easeInOut" }}
                        />
                        {[[10, 130], [80, 100], [150, 120], [220, 70], [300, 40]].map(([x, y], pointIndex) => (
                          <motion.circle
                            key={pointIndex}
                            cx={x}
                            cy={y}
                            r="5"
                            fill="#ffffff"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: pointIndex * 0.14 + 0.35 }}
                          />
                        ))}
                      </svg>
                    </div>
                    <div className="bm-cs-featured__timeline">
                      {activeSpotlight.spotlight.timeline.map((label) => <span key={label}>{label}</span>)}
                    </div>
                  </div>

                  <div className="bm-cs-featured__meta-grid">
                    {activeSpotlight.spotlight.meta.map((item) => (
                      <div className="bm-cs-featured__meta-item" key={item.label}>
                        <span className="bm-cs-featured__meta-label">{item.label}</span>
                        <span className="bm-cs-featured__meta-value">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            </>
          ) : (
            <div className="bm-cs-featured__empty">
              <div className="bm-cs-featured__badge">Spotlight Success</div>
              <h2 className="bm-cs-featured__title">{activeTab} success story <span>coming soon</span></h2>
              <p className="bm-cs-featured__client">
                We are preparing a featured case study for this service category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: COUNTERS STRIP */}
      <section className="bm-cs-counters">
        <div className="bm-cs-container">
          <div className="bm-cs-counters__grid">
            <div className="bm-cs-counter-item">
              <span className="bm-cs-counter-num">
                <Counter target={1000} suffix="+" />
              </span>
              <span className="bm-cs-counter-label">Verified Driver Leads Generated</span>
            </div>
            <div className="bm-cs-counter-item">
              <span className="bm-cs-counter-num">
                <Counter target={13} suffix="+ Lakh" />
              </span>
              <span className="bm-cs-counter-label">Total Reach</span>
            </div>
            <div className="bm-cs-counter-item">
              <span className="bm-cs-counter-num">
                <Counter target={550} />
              </span>
              <span className="bm-cs-counter-label">Sales Qualified Leads Generated</span>
            </div>
            <div className="bm-cs-counter-item">
              <span className="bm-cs-counter-num">
                <Counter target={110} prefix="~" />
              </span>
              <span className="bm-cs-counter-label">Confirmed Admissions</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CLIENT TESTIMONIAL */}
      <section className="bm-cs-testimonials">
        <div className="bm-cs-container">
          <FadeIn delay={0.2}>
            <div className="bm-cs-testimonial-card">
              <p className="bm-cs-testimonial-text">
                “We didn’t just generate leads — we built a sustainable driver onboarding engine for Truck Taxi.”
              </p>
              <div className="bm-cs-testimonial-avatar">TT</div>
              <h4 className="bm-cs-testimonial-author">Truck Taxi</h4>
              <p className="bm-cs-testimonial-role">Driver Onboarding (Meta Lead Forms)</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="bm-cs-cta">
        <div className="bm-cs-container bm-cs-cta__container">
          <FadeIn delay={0.1}>
            <h2 className="bm-cs-cta__title">
              Ready to write your own success story?
            </h2>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="bm-cs-cta__desc">
              Collaborate with us and turn ambitious ideas into impactful, measurable business growth. Let's start building today.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="bm-hero-action">
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button className="bm-hero-btn">
                  <div className="bm-hero-btn__icon">
                    <FiChevronRight />
                  </div>
                  <span className="bm-hero-btn__text">
                    Talk to a <strong>Growth Specialist</strong>
                  </span>
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};
