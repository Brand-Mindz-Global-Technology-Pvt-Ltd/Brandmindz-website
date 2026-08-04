"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
import { FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem } from "../animations";
import { HeroBoltIcon } from "@/components/ui/HeroBoltIcon";

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
  metrics: {
    value: string;
    label: string;
  }[];
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
    metrics: [
      { value: "1,000+", label: "Verified Driver Leads Generated" },
      { value: "₹2.60–₹3.62", label: "Cost Per Lead" },
      { value: "13+ Lakh", label: "Total Reach" }
    ]
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
    ]
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
    ]
  }
];

export const CaseStudiesClient: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Branding", "Designing", "Development", "Digital Marketing", "E-Commerce listing"];

  const filteredCaseStudies = activeTab === "All"
    ? caseStudiesData
    : caseStudiesData.filter(cs => cs.category.toLowerCase().includes(activeTab.toLowerCase().split(' ')[0]));

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
                      <article className="bm-cs-case-card">
                        {/* Placeholder graphic container */}
                        <div className="bm-cs-card__image-container">
                          <div className="bm-cs-card__pattern-bg" />
                          <div className="bm-cs-card__gradient-overlay" />
                          <span className="bm-cs-card__category-badge">{study.category}</span>
                          <div className="bm-cs-card__logo-wrapper">
                            <span className="bm-cs-card__logo-icon">{study.icon}</span>
                            <span className="bm-cs-card__logo-text">{study.logoText}</span>
                          </div>
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
          {/* Left Details */}
          <div>
            <div className="bm-cs-featured__badge">Spotlight Success</div>
            <h2 className="bm-cs-featured__title">
              Fast, Scalable &amp; Cost-Efficient <span>Driver Onboarding</span>
            </h2>
            <p className="bm-cs-featured__client">Truck Taxi is an on-demand truck and commercial vehicle booking platform.</p>

            <div className="bm-cs-featured__blocks">
              <div className="bm-cs-featured__block">
                <h4 className="bm-cs-featured__block-title">
                  <FaBolt /> The Challenge
                </h4>
                <p className="bm-cs-featured__block-text">
                  Traditional digital ads were expensive, inefficient, and not scalable.
                </p>
              </div>

              <div className="bm-cs-featured__block bm-cs-featured__block--solution">
                <h4 className="bm-cs-featured__block-title">
                  <FaCheckCircle color="#ffcc00" /> Our Solution
                </h4>
                <p className="bm-cs-featured__block-text">
                  Brand Mindz Global implemented a driver-first acquisition strategy.
                </p>
              </div>
            </div>
          </div>

          {/* Right Statistics Panel */}
          <div className="bm-cs-featured__stat-pane">
            <div className="bm-cs-featured__stat-header">
              <span className="bm-cs-featured__stat-label">Generated Leads</span>
              <div className="bm-cs-featured__stat-value">
                <Counter target={1000} /><span>+ Verified Driver Leads Generated</span>
              </div>
            </div>

            {/* Micro Graph Box */}
            <div className="bm-cs-featured__chart-box">
              <h4 className="bm-cs-featured__chart-title">Visit Statistics Trend</h4>
              <div className="bm-cs-featured__svg-wrapper">
                <svg viewBox="0 0 400 150" style={{ width: "100%", height: "100%" }}>
                  <motion.path
                    d="M10 130 L 80 100 L 150 120 L 220 70 L 300 40"
                    fill="none"
                    stroke="#FFD600"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  {[[10, 130], [80, 100], [150, 120], [220, 70], [300, 40]].map(([x, y], i) => (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="5"
                      fill="#ffffff"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.5 }}
                    />
                  ))}
                </svg>
              </div>
              <div className="bm-cs-featured__timeline">
                <span>2023</span>
                <span>2024</span>
                <span>2025</span>
              </div>
            </div>

            {/* Meta Info */}
            <div className="bm-cs-featured__meta-grid">
              <div className="bm-cs-featured__meta-item">
                <span className="bm-cs-featured__meta-label">Conversion Rate</span>
                <span className="bm-cs-featured__meta-value">13+ Lakh Drivers</span>
              </div>
              <div className="bm-cs-featured__meta-item">
                <span className="bm-cs-featured__meta-label">Cost Per Lead</span>
                <span className="bm-cs-featured__meta-value">₹2.60 – ₹3.62</span>
              </div>
            </div>
          </div>
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
