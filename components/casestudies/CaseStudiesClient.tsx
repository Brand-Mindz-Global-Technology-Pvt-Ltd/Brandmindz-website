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
    id: "truck-taxi",
    client: "Truck Taxi Logistics",
    category: "Digital Marketing",
    title: "Scaling Driver Acquisition at Speed in 15 Days",
    description: "Brand Mindz Global enabled scalable driver onboarding using hyper-local targeting and performance-optimized Meta Ads to deliver high-intent, qualified leads.",
    logoText: "TRUCK TAXI",
    icon: <FaChartLine />,
    metrics: [
      { value: "587+", label: "Leads" },
      { value: "₹2.72", label: "Cost Per Lead" },
      { value: "130%", label: "Growth Rate" }
    ]
  },
  {
    id: "paywise",
    client: "PayWise Solutions",
    category: "Development",
    title: "Complete Digital Overhaul & Next-Gen FinTech Launch",
    description: "Built a lightning-fast, secure, and modern SaaS banking platform with intuitive UI/UX design, scaling user onboarding and registrations seamlessly.",
    logoText: "PAYWISE",
    icon: <FaLaptopCode />,
    metrics: [
      { value: "10K+", label: "Active Users" },
      { value: "45%", label: "Conv. Rate Up" },
      { value: "<1s", label: "Page Load Time" }
    ]
  },
  {
    id: "luxedecor",
    client: "LuxeDecor Home",
    category: "E-Commerce listing",
    title: "Overhauling Catalog Listings & Marketplace Strategy",
    description: "Optimized e-commerce listing layout structure, SEO-targeted description copywriting, and search visibility across leading global marketplaces.",
    logoText: "LUXE DECOR",
    icon: <FaShoppingCart />,
    metrics: [
      { value: "3.5x", label: "Sales Revenue" },
      { value: "25K+", label: "Monthly Orders" },
      { value: "85%", label: "Rating Boost" }
    ]
  },
  {
    id: "technova",
    client: "TechNova Systems",
    category: "Branding",
    title: "Redefining Brand Identity for Competitive Global Markets",
    description: "Structured a cohesive brand strategy, styling guidelines, and marketing assets to reposition TechNova as an innovative industry leader.",
    logoText: "TECH NOVA",
    icon: <FaPaintBrush />,
    metrics: [
      { value: "100%", label: "Brand Uniformity" },
      { value: "60%", label: "Engagement Up" },
      { value: "5+", label: "Markets Entered" }
    ]
  },
  {
    id: "oakwood",
    client: "Oakwood Residencies",
    category: "Digital Marketing",
    title: "Hyper-Local Search and Social Ads for Premium Villas",
    description: "Crafted targeted high-intent lead generation funnels, connecting ready-to-buy real estate investors with premium residential villa communities.",
    logoText: "OAKWOOD",
    icon: <FaChartLine />,
    metrics: [
      { value: "120+", label: "Qualified Site Visits" },
      { value: "8x", label: "ROI on Ad Spend" },
      { value: "24", label: "Units Sold" }
    ]
  },
  {
    id: "skillpath",
    client: "SkillPath LMS",
    category: "Development",
    title: "Designing & Engineering a Interactive EdTech Platform",
    description: "Developed a modern, interactive e-learning platform with sub-second page transition speeds, analytics dashboards, and offline capabilities.",
    logoText: "SKILL PATH",
    icon: <FaLaptopCode />,
    metrics: [
      { value: "50K+", label: "Active Students" },
      { value: "99.9%", label: "Platform Uptime" },
      { value: "4.8★", label: "App Store Rating" }
    ]
  },
  {
    id: "zenith-ui",
    client: "Zenith Wealth Portal",
    category: "Designing",
    title: "Premium UI/UX Transformation for Investment Platforms",
    description: "Designed a clean, modern wealth dashboard structure and interactive flow designs that decreased user friction and boosted platform onboarding by 70%.",
    logoText: "ZENITH",
    icon: <FaPaintBrush />,
    metrics: [
      { value: "70%", label: "Onboarding Up" },
      { value: "<2m", label: "Onboarding Time" },
      { value: "4.9★", label: "User Rating" }
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
            <span className="bm-cs-hero-badge__icon">
              <FaBolt className="w-3.5 h-3.5" color="black" />
            </span>
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

                          <span className="bm-cs-card__link">
                            View Case Study <FaArrowRight size={14} />
                          </span>
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
              How we built a sustainable <span>driver onboarding engine</span> for Truck Taxi
            </h2>
            <p className="bm-cs-featured__client">Client: Truck Taxi Logistics | Campaign: June 2025</p>

            <div className="bm-cs-featured__blocks">
              <div className="bm-cs-featured__block">
                <h4 className="bm-cs-featured__block-title">
                  <FaBolt /> The Challenge
                </h4>
                <p className="bm-cs-featured__block-text">
                  Truck Taxi faced heavy competition in acquiring active commercial truck drivers. Traditional digital advertising paths proved expensive, inefficient, and struggled with lead intent.
                </p>
              </div>

              <div className="bm-cs-featured__block bm-cs-featured__block--solution">
                <h4 className="bm-cs-featured__block-title">
                  <FaCheckCircle color="#ffcc00" /> Our Solution
                </h4>
                <p className="bm-cs-featured__block-text">
                  We engineered a "Driver-First Acquisition" strategy. Hyper-targeted Meta lead ads based on driver localization interests, coupled with ultra-simple form completions, reduced friction and drove direct conversions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Statistics Panel */}
          <div className="bm-cs-featured__stat-pane">
            <div className="bm-cs-featured__stat-header">
              <span className="bm-cs-featured__stat-label">Generated Leads</span>
              <div className="bm-cs-featured__stat-value">
                <Counter target={587} /><span>+ Leads</span>
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
                <span className="bm-cs-featured__meta-value">30K+ / ▲</span>
              </div>
              <div className="bm-cs-featured__meta-item">
                <span className="bm-cs-featured__meta-label">Cost Per Lead</span>
                <span className="bm-cs-featured__meta-value">₹2.72</span>
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
                <Counter target={50} suffix="+" />
              </span>
              <span className="bm-cs-counter-label">Projects Delivered</span>
            </div>
            <div className="bm-cs-counter-item">
              <span className="bm-cs-counter-num">
                <Counter target={130} suffix="%" />
              </span>
              <span className="bm-cs-counter-label">Avg. Business Growth</span>
            </div>
            <div className="bm-cs-counter-item">
              <span className="bm-cs-counter-num">
                <Counter target={10} suffix="+" />
              </span>
              <span className="bm-cs-counter-label">Countries Served</span>
            </div>
            <div className="bm-cs-counter-item">
              <span className="bm-cs-counter-num">
                <Counter target={2} prefix="₹" suffix=".72" />
              </span>
              <span className="bm-cs-counter-label">Avg. Cost Per Lead</span>
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
                "We didn't just generate leads. Brand Mindz Global built a sustainable, scalable driver onboarding engine for Truck Taxi that surpassed all our expectations."
              </p>
              <div className="bm-cs-testimonial-avatar">TT</div>
              <h4 className="bm-cs-testimonial-author">Logistics Acquisition Team</h4>
              <p className="bm-cs-testimonial-role">Truck Taxi India</p>
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
