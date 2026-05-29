"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  FiCpu, 
  FiShoppingBag, 
  FiHeart, 
  FiBookOpen, 
  FiHome,
  FiAlertCircle,
  FiCheckCircle,
  FiTrendingUp
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Active Tab Data Structures
const industriesData = {
  it: {
    id: "it",
    label: "IT & SaaS",
    icon: <FiCpu />,
    preTitle: "Scale Software & Platform Brands",
    title: "IT & SaaS Solutions",
    description: "SaaS and B2B IT companies operate in highly competitive, credibility-driven environments where CAC (Customer Acquisition Cost) determines survival. Brandmindz accelerates platform growth through high-intent SEO, precision LinkedIn account targeting, custom performance engineering, and conversion rate optimization (CRO) that scales monthly recurring revenue (MRR) and decreases churn.",
    challenges: [
      {
        title: "High CAC & Saturated Ads",
        desc: "Traditional paid search channels are expensive, with saturated keywords driving up acquisition costs."
      },
      {
        title: "Low Trial-to-Paid Conversion",
        desc: "Software brands struggle to activate trial signups, losing users during onboarding."
      }
    ],
    solutions: [
      {
        title: "Intent-Driven SEO Funnels",
        desc: "We map precise buyer intent profiles to build authoritative content hubs that capture prospects ready to buy."
      },
      {
        title: "Product-Led Onboarding & CRO",
        desc: "We design high-conversion landing pages and interactive onboarding flows to reduce user friction."
      }
    ],
    stats: [
      { value: "42%", label: "CAC Reduction", desc: "Achieved via high-intent organic inbound funnels." },
      { value: "3.2x", label: "Demo Bookings Spurt", desc: "Accelerated qualified corporate demos in under six months." }
    ],
    testimonial: {
      quote: "Brandmindz transformed our lead acquisition channel. We went from burning cash on PPC to establishing a dominant organic inbound stream that reduced our cost per trial signup by over 40%.",
      author: "Sarah Jenkins",
      role: "VP of Growth, CloudFlow Technologies"
    }
  },
  ecommerce: {
    id: "ecommerce",
    label: "E-Commerce",
    icon: <FiShoppingBag />,
    preTitle: "Maximize Customer Lifetime Value",
    title: "E-Commerce Brands",
    description: "Succeeding in e-commerce requires far more than basic listing templates. Our full-funnel approach focuses on optimizing average order value (AOV), maximizing customer lifetime value (LTV), and streamlining Amazon, JioMart, and Shopify store platforms. We combine premium design aesthetics, search visibility optimization, and high-ROI multi-channel campaign architectures.",
    challenges: [
      {
        title: "High Cart Abandonment",
        desc: "Unoptimized product description layouts and slow loading pages cause buyers to leave before checkout."
      },
      {
        title: "Rising Ad Spend & Low LTV",
        desc: "Acquiring one-time purchasers through paid ads is unprofitable without a retention engine."
      }
    ],
    solutions: [
      {
        title: "Visual-First Page Optimizations",
        desc: "We construct high-speed, immersive product pages with transparent ingredients, trust badges, and benefits."
      },
      {
        title: "Retention & Email Automations",
        desc: "We deploy conversion-optimized email flows and SMS campaigns to turn first-time buyers into loyal advocates."
      }
    ],
    stats: [
      { value: "28%", label: "AOV Spurt", desc: "Engineered via personalized cross-sell and upsell structures." },
      { value: "4.5x", label: "ROAS Performance", desc: "Achieved with multi-channel target campaigns." }
    ],
    testimonial: {
      quote: "Their e-commerce optimization framework completely revamped our D2C business model. Our average cart value spiked by almost 30%, and we successfully automated our repeat customer flows.",
      author: "Marcus Thornton",
      role: "Co-Founder, Bloom & Co. Wellness"
    }
  },
  healthcare: {
    id: "healthcare",
    label: "Healthcare",
    icon: <FiHeart />,
    preTitle: "Build Sincere Patient & Provider Trust",
    title: "Healthcare & Biotech",
    description: "Healthcare marketing operates under stringent regulatory guidelines where trust, security, and authority are critical. Brandmindz helps hospitals, private clinics, and digital health startups position their brands effectively. We create medical-grade content, authority-driven local SEO frameworks, and HIPAA-compliant engagement pathways that bridge the gap between clinics and patients.",
    challenges: [
      {
        title: "Earning Clinical Credibility",
        desc: "Modern patients research credentials, reviews, and clinical safety profiles exhaustively before booking."
      },
      {
        title: "Low Appointment Booking Rates",
        desc: "Clunky, slow, or multi-step booking forms drive prospect patients straight to competitors."
      }
    ],
    solutions: [
      {
        title: "E-E-A-T Medical Content Hubs",
        desc: "We build premium, informative directories verified by doctors to dominate search rankings."
      },
      {
        title: "Frictionless Booking Interfaces",
        desc: "We engineer highly secure, mobile-friendly patient portals to capture immediate appointment inquiries."
      }
    ],
    stats: [
      { value: "150%", label: "Local SEO Visibility", desc: "Increased regional patient patient inquiries significantly." },
      { value: "62%", label: "Appointment Inflow", desc: "Obtained from custom UX upgrades on profile screens." }
    ],
    testimonial: {
      quote: "Patient trust is our primary currency. Brandmindz aligned their digital strategy with our core values, helping us reach hundreds of families in our region while scaling our booking conversion rate.",
      author: "Dr. Amanda Chen",
      role: "Medical Director, Summit Integrative Health"
    }
  },
  education: {
    id: "education",
    label: "Education",
    icon: <FiBookOpen />,
    preTitle: "Inspire & Engage Global Learners",
    title: "Education & E-Learning",
    description: "The edtech and educational landscape requires high engagement, community trust, and absolute platform accessibility. Brandmindz creates highly impactful branding campaigns and digital growth strategies for schools, colleges, and e-learning platforms. We specialize in student recruitment funnels, video-centric social content, and responsive program landing pages.",
    challenges: [
      {
        title: "Seasonal Enrolment Drops",
        desc: "Educational brands suffer from seasonal sales peaks and highly saturated digital ad costs during intakes."
      },
      {
        title: "High Online Course Abandonment",
        desc: "Friction in online course interfaces causes users to drop out after signing up."
      }
    ],
    solutions: [
      {
        title: "Interactive Enrolment Funnels",
        desc: "We establish webinars and enrollment pre-qualifiers to attract committed student profiles."
      },
      {
        title: "Gamified Portal Interface Design",
        desc: "We design engaging student dashboards that celebrate milestones and improve learning loyalty."
      }
    ],
    stats: [
      { value: "3.0x", label: "Student Enrolments", desc: "Scaled yearly admissions via program-led messaging channels." },
      { value: "84%", label: "Mobile Speed Index", desc: "Highly optimized portal pages loading instantly on mobile grids." }
    ],
    testimonial: {
      quote: "Their interactive student acquisition funnels changed how we connect with prospective learners. Our enrollment rates surged three-fold within a single application cycle.",
      author: "Prof. Robert Gable",
      role: "Dean of Admissions, Horizon Academy Online"
    }
  },
  realestate: {
    id: "realestate",
    label: "Real Estate",
    icon: <FiHome />,
    preTitle: "Convert High-Net-Worth Inquiries",
    title: "Real Estate & Property",
    description: "In real estate, visual storytelling is everything. High-value property assets require highly targeted, hyper-local marketing strategies that appeal directly to qualified, high-net-worth buyers. We build high-impact real estate portals, immersive visual galleries, local SEO authority signals, and targeted programmatic social campaigns that turn listings into premium sales.",
    challenges: [
      {
        title: "Unqualified Inquiry Flood",
        desc: "Generic property listings attract massive visitor traffic but capture very few qualified buyers."
      },
      {
        title: "Static Property Presentation",
        desc: "Text-heavy broker sites fail to convey the emotional premium of luxury living spaces."
      }
    ],
    solutions: [
      {
        title: "High-Net-Worth Prequalifiers",
        desc: "We design interactive landing pages with budget filters to capture high-value prospective buyers."
      },
      {
        title: "Visual-First Architectural Sites",
        desc: "We develop beautiful, ultra-fast websites with virtual tours and high-resolution sliders."
      }
    ],
    stats: [
      { value: "55%", label: "Qualified Lead Uplift", desc: "Achieved via interactive filter funnel screening." },
      { value: "$120M+", label: "Property Assets Marketed", desc: "Sold premium units in primary metros utilizing custom targeting." }
    ],
    testimonial: {
      quote: "Their hyper-focused real estate marketing campaigns helped us liquidate our boutique premium luxury villa projects in record time. The quality of lead pre-qualification was unmatched.",
      author: "Daniel Vance",
      role: "Managing Director, Vance & Somerset Properties"
    }
  }
};

const IndustriesContentInner = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<keyof typeof industriesData>("it");

  // Sync tab state with URL parameter if present
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && tabParam in industriesData) {
      setActiveTab(tabParam as keyof typeof industriesData);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: keyof typeof industriesData) => {
    setActiveTab(tabId);
    // Smoothly update search parameter without refreshing the page
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabId);
    router.push(`/industries?${params.toString()}`, { scroll: false });
  };

  const currentData = industriesData[activeTab];

  return (
    <div>
      {/* Navigation tabs */}
      <div className="bm-industries-tabs-container">
        {Object.values(industriesData).map((tab) => (
          <button
            key={tab.id}
            className={`bm-industries-tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabChange(tab.id as keyof typeof industriesData)}
          >
            <span className="bm-industries-tab-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Crawlable fallback for search engine bots - Keeps the markup fully loaded for indexability */}
      <div style={{ display: "none" }} aria-hidden="true">
        {Object.values(industriesData).map((tab) => (
          <article key={`seo-${tab.id}`}>
            <h2>{tab.title}</h2>
            <p>{tab.description}</p>
            <h3>Challenges in {tab.label}</h3>
            {tab.challenges.map((c, i) => (
              <div key={i}>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
            <h3>Our Solutions</h3>
            {tab.solutions.map((s, i) => (
              <div key={i}>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
            <h3>Key Results</h3>
            {tab.stats.map((st, i) => (
              <div key={i}>
                <strong>{st.value} {st.label}</strong>
                <p>{st.desc}</p>
              </div>
            ))}
          </article>
        ))}
      </div>

      {/* Main Details Panel */}
      <section className="bm-industry-details-section">
        <div className="bm-industry-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bm-industry-grid-layout"
            >
              {/* Left Column: Description and Challenges/Solutions Grid */}
              <div className="bm-industry-left-pane">
                <div className="bm-industry-header">
                  <span className="bm-industry-pretitle">{currentData.preTitle}</span>
                  <h2 className="bm-industry-main-title">{currentData.title}</h2>
                </div>

                <p className="bm-industry-description">{currentData.description}</p>

                <div>
                  <h3 className="bm-challenges-solutions-title">Challenges vs. Our Strategy</h3>
                  <div className="bm-challenge-solution-grid">
                    {/* Render Challenges */}
                    {currentData.challenges.map((item, index) => (
                      <div key={`challenge-${index}`} className="bm-cs-card">
                        <div className="bm-cs-header">
                          <span className="bm-cs-icon-wrapper">
                            <FiAlertCircle />
                          </span>
                          <h4 className="bm-cs-title">{item.title}</h4>
                        </div>
                        <p className="bm-cs-body">{item.desc}</p>
                      </div>
                    ))}

                    {/* Render Solutions */}
                    {currentData.solutions.map((item, index) => (
                      <div key={`solution-${index}`} className="bm-cs-card solution">
                        <div className="bm-cs-header">
                          <span className="bm-cs-icon-wrapper">
                            <FiCheckCircle />
                          </span>
                          <h4 className="bm-cs-title">{item.title}</h4>
                        </div>
                        <p className="bm-cs-body">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Statistics & Testimonials */}
              <div className="bm-industry-right-pane">
                <div className="bm-stats-header-wrapper">
                  <h3 className="bm-stats-title">Performance Metrics</h3>
                  <p className="bm-stats-subtitle">Real results delivered to our partners</p>
                </div>

                <div className="bm-stats-grid">
                  {currentData.stats.map((st, index) => (
                    <div key={`stat-${index}`} className="bm-stat-box">
                      <span className="bm-stat-value">
                        {st.value}
                      </span>
                      <span className="bm-stat-label">{st.label}</span>
                      <span className="bm-stat-desc">{st.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="bm-industry-testimonial">
                  <p className="bm-testimonial-quote">"{currentData.testimonial.quote}"</p>
                  <h4 className="bm-testimonial-author">{currentData.testimonial.author}</h4>
                  <p className="bm-testimonial-role">{currentData.testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export const IndustriesContent = () => {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading Industries...</div>}>
      <IndustriesContentInner />
    </Suspense>
  );
};
