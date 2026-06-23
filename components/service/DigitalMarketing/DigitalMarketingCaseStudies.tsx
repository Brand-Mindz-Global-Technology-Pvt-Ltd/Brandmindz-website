"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/BrandingCaseStudies.css";
import { useDigitalMarketingContext } from './DigitalMarketingContext';
import { useRouter } from 'next/navigation';

const seoCaseStudiesData = {
  title: "SEO Case Studies",
  subtitle: "Real ranking improvements from businesses that increased organic traffic, leads, and revenue through structured SEO execution.",
  studies: [
    {
      badge: "Traffic Growth",
      title: "Organic Ranking Breakthrough",
      intro: "We helped a competitive local business move from page 3 to top 5 positions for high-intent keywords.",
      results: [
        "3.2X increase in organic traffic in 6 months",
        "58% growth in qualified search leads",
        "40+ priority keywords ranked on page 1"
      ],
      image: "/case-studies/visibility.jpg"
    },
    {
      badge: "Lead Generation",
      title: "Search Conversion Improvement",
      intro: "We optimized service pages and technical SEO for a growing company in a competitive niche.",
      results: [
        "2.8X increase in inbound enquiries",
        "65% improvement in click-through rate (CTR)",
        "45% reduction in cost per acquisition compared to paid ads"
      ],
      image: "/case-studies/influence.png"
    },
    {
      badge: "Authority & Visibility",
      title: "Competitive Keyword Domination",
      intro: "We built content clusters and high-quality backlinks for a national brand.",
      results: [
        "120+ keywords ranking in top 10 positions",
        "4X growth in organic impressions",
        "70% increase in non-branded search visibility"
      ],
      image: "/case-studies/authority.jpg"
    }
  ],
  button1: "See Our SEO Case Studies",
  button2: "Book a Strategy Call"
};

const metaAdsCaseStudiesData = {
  title: "Meta Ads Case Studies",
  subtitle: "Real campaign improvements from brands that increased qualified leads, revenue, and return on ad spend through structured Meta advertising.",
  studies: [
    {
      badge: "Lead Volume Growth",
      title: "High-Intent Audience Breakthrough",
      intro: "We helped a local service business restructure its funnel and targeting strategy.",
      results: [
        "3X increase in qualified leads within 4 months",
        "42% reduction in cost per lead",
        "5.6X return on ad spend"
      ],
      image: "/case-studies/visibility.jpg"
    },
    {
      badge: "Revenue Scaling",
      title: "Performance Funnel Optimization",
      intro: "We optimized creatives, retargeting layers, and conversion tracking for an e-commerce brand.",
      results: [
        "2.5X increase in monthly revenue",
        "38% lower cost per purchase",
        "4X growth in conversion rate"
      ],
      image: "/case-studies/influence.png"
    },
    {
      badge: "Conversion Efficiency",
      title: "Audience & Creative Testing Strategy",
      intro: "We implemented structured A/B testing and funnel segmentation for a competitive niche.",
      results: [
        "60% improvement in CTR",
        "35% lower CPM",
        "3X increase in booked consultations"
      ],
      image: "/case-studies/authority.jpg"
    }
  ],
  button1: "See Our Meta Ads Case Studies",
  button2: "Book a Strategy Call"
};

const googleAdsCaseStudiesData = {
  title: "Google Ads Case Studies",
  subtitle: "Real campaign improvements from brands that increased qualified leads, revenue, and return on ad spend through structured Google Search and Display advertising.",
  studies: [
    {
      badge: "Search Visibility",
      title: "High-Intent Lead Generation",
      intro: "We restructured search campaigns and keyword targeting for a B2B service company.",
      results: [
        "2.5X increase in qualified leads",
        "30% reduction in cost per click (CPC)",
        "4X return on ad spend"
      ],
      image: "/case-studies/visibility.jpg"
    },
    {
      badge: "Revenue Scaling",
      title: "Performance Max Optimization",
      intro: "We optimized bidding strategies and product feeds for an e-commerce brand.",
      results: [
        "3X increase in monthly sales",
        "25% lower cost per acquisition (CPA)",
        "3.5X growth in conversion volume"
      ],
      image: "/case-studies/influence.png"
    },
    {
      badge: "Conversion Efficiency",
      title: "Audience & Retargeting Strategy",
      intro: "We implemented structured remarketing and audience signals for a competitive niche.",
      results: [
        "50% improvement in conversion rate",
        "40% lower cost per lead",
        "2.8X increase in booked meetings"
      ],
      image: "/case-studies/authority.jpg"
    }
  ],
  button1: "See Our Google Ads Case Studies",
  button2: "Book a Strategy Call"
};

const linkedinCaseStudiesData = {
  title: "LinkedIn Marketing Case Studies",
  subtitle: "Real B2B growth improvements from companies that increased qualified leads and revenue through structured LinkedIn marketing execution.",
  studies: [
    {
      badge: "B2B Lead Growth",
      title: "Decision-Maker Engagement Breakthrough",
      intro: "We restructured targeting and messaging for a B2B service brand.",
      results: [
        "2.7X increase in marketing-qualified leads",
        "35% reduction in cost per lead",
        "4.8X improvement in engagement rate"
      ],
      image: "/case-studies/visibility.jpg"
    },
    {
      badge: "Pipeline Acceleration",
      title: "High-Value Prospect Conversion",
      intro: "We optimized lead forms and retargeting campaigns for a SaaS company.",
      results: [
        "2.4X increase in booked demos",
        "41% higher form completion rate",
        "3X increase in conversion rate"
      ],
      image: "/case-studies/influence.png"
    },
    {
      badge: "Authority & Brand Positioning",
      title: "Executive-Level Visibility Growth",
      intro: "We built thought leadership campaigns targeting CXOs and founders.",
      results: [
        "5X increase in profile visits",
        "120% growth in connection requests",
        "3.5X improvement in engagement from senior roles"
      ],
      image: "/case-studies/authority.jpg"
    }
  ],
  button1: "See Our LinkedIn Marketing Case Studies",
  button2: "Book a Strategy Call"
};

const whatsappCaseStudiesData = {
  title: "WhatsApp Marketing Case Studies",
  subtitle: "Real business results from structured WhatsApp campaigns and automated messaging strategies.",
  studies: [
    {
      badge: "Lead Generation Growth",
      title: "Conversational Funnel Breakthrough",
      intro: "We helped a consulting firm target high-intent prospects through structured WhatsApp campaigns and messaging flows.",
      results: [
        "3X increase in qualified enquiries",
        "48% reduction in cost per lead",
        "5.2X return on campaign investment"
      ],
      image: "/case-studies/visibility.jpg"
    },
    {
      badge: "Customer Engagement & Brand Visibility",
      title: "Automated Engagement Growth",
      intro: "We improved positioning for a founder-led brand in a competitive market using consistent WhatsApp communication and engagement strategies.",
      results: [
        "4X increase in message open rates",
        "60% growth in engagement rate",
        "2.7X increase in inbound enquiries"
      ],
      image: "/case-studies/influence.png"
    },
    {
      badge: "Sales Pipeline Expansion",
      title: "Click-to-WhatsApp Ad Scaling",
      intro: "We implemented WhatsApp lead capture systems, automated follow-ups, and retargeting campaigns.",
      results: [
        "2.5X growth in booked discovery calls",
        "37% lower cost per conversion",
        "3X improvement in response rate"
      ],
      image: "/case-studies/authority.jpg"
    }
  ],
  button1: "Explore Our WhatsApp Results",
  button2: "Book a Strategy Session"
};

const youtubeCaseStudiesData = {
  title: "YouTube Marketing Case Studies",
  subtitle: "Real channel growth results from brands that increased subscribers, engagement, and revenue through structured video marketing.",
  studies: [
    {
      badge: "Audience Growth",
      title: "Subscriber Expansion Breakthrough",
      intro: "We helped a niche brand restructure content and improve optimization.",
      results: [
        "3X increase in subscribers within 6 months",
        "55% improvement in average watch time",
        "35+ videos ranked in YouTube search results"
      ],
      image: "/case-studies/visibility.jpg"
    },
    {
      badge: "Lead Generation",
      title: "Video Funnel Conversion Growth",
      intro: "We aligned content with conversion-focused calls to action.",
      results: [
        "2.6X increase in inbound enquiries",
        "60% improvement in click-through rate",
        "40% increase in consultation bookings"
      ],
      image: "/case-studies/influence.png"
    },
    {
      badge: "Visibility & Authority",
      title: "Search & Suggested Feed Domination",
      intro: "We optimized content structure and audience retention signals.",
      results: [
        "100+ videos appearing in suggested results",
        "4X growth in total impressions",
        "68% increase in non-branded video views"
      ],
      image: "/case-studies/authority.jpg"
    }
  ],
  button1: "See Our YouTube Marketing Case Studies",
  button2: "Book a Strategy Call"
};


export const DigitalMarketingCaseStudies = () => {
  const { activeDigitalMarketingTab } = useDigitalMarketingContext();

  const router = useRouter()
  const getActiveData = () => {
    switch (activeDigitalMarketingTab) {
      case 0: return seoCaseStudiesData;
      case 1: return metaAdsCaseStudiesData;
      case 2: return googleAdsCaseStudiesData;
      case 3: return linkedinCaseStudiesData;
      case 4: return whatsappCaseStudiesData;
      case 5: return youtubeCaseStudiesData;
      default: return seoCaseStudiesData;
    }
  };

  const activeData = getActiveData();

  return (
    <section className="bm-cs-section">
      <div className="bm-cs-container-services">
        <FadeIn key={`header-${activeDigitalMarketingTab}`} direction="up" delay={0.1}>
          <div className="bm-cs-header-services">
            <h2 className="bm-cs-title-services">
              {activeData.title}
            </h2>
            <p className="bm-cs-subtitle">
              {activeData.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="bm-cs-grid-services">
          {activeData.studies.map((study, index) => (
            <FadeIn key={`${activeDigitalMarketingTab}-${index}`} direction="up" delay={0.1 + index * 0.1}>
              <div className="bm-cs-card">
                <div className="bm-cs-card-bg">
                  <img
                    src={study.image}
                    alt={study.title}
                  />
                </div>
                <div className="bm-cs-card-overlay"></div>
                <div className="bm-cs-content">
                  <div className="bm-cs-badge">{study.badge}</div>
                  <h3 className="bm-cs-card-title relative inline-block px-[15px] py-[4px] rounded-full text-[18px] font-medium text-white bg-gray/1 backdrop-blur-[1px] border border-white/20 transition-all duration-400 ease-in-out hover:bg-gray/20 hover:border-gray/20 hover:shadow-[0_4_15px_rgba(255,255,255,0.1)] cursor-pointer">
                    {study.title}
                  </h3>
                  <p className="bm-cs-intro">{study.intro}</p>

                  <ul className="bm-cs-results">
                    {study.results.map((result, rIndex) => (
                      <li key={rIndex} className="bm-cs-result-item">
                        <span>•</span> {result}
                      </li>
                    ))}
                  </ul>

                  <div className="bm-cs-card-footer">
                    <button className="bm-cs-view-btn 
    /* Layout & Flexbox */
    relative flex items-center gap-2 px-6 py-2.5 
    rounded-full text-white font-medium
    
    /* Background & 10px Blur Animation */
    bg-white/5 backdrop-blur-[1px] 
    border border-white/20
    transition-all duration-500 ease-in-out
    
    hover:bg-white/10 
    hover:border-white/80 
    hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
    
    active:scale-95" 
      onClick={() => router.push("/case-studies")}
      >
                      View Case study
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn key={`footer-${activeDigitalMarketingTab}`} direction="up" delay={0.5}>
          <div className="bm-cs-actions">
            <button className="bm-cs-main-btn bm-cs-btn-primary">
              {activeData.button1}
            </button>
            <button className="bm-cs-main-btn bm-cs-btn-secondary" onClick={() => router.push("/contact")}>
              {activeData.button2}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
