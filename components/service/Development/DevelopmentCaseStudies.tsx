"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/BrandingCaseStudies.css";
import { useDevelopmentContext } from "./DevelopmentContext";
import { useRouter } from 'next/navigation';
const caseStudiesData = [
  {
    title: "Static Development Case Studies",
    subtitle: "Real performance improvements from businesses that strengthened their online presence and achieved measurable growth through structured digital strategies.",
    primaryBtn: "Explore Our Growth Case Studies",
    secondaryBtn: "Book a Strategy Consultation",
    studies: [
      {
        badge: "Brand Visibility Growth",
        title: "Online Presence Expansion",
        intro: "We helped a growing brand improve its digital visibility in a competitive market by refining its online positioning and optimizing content structure.",
        results: [
          "3.2X growth in website impressions within 4 months",
          "55% increase in organic search traffic",
          "30+ pages ranking for targeted industry keywords"
        ],
        image: "/case-studies/visibility.jpg"
      },
      {
        badge: "Engagement Optimization",
        title: "Content & Audience Interaction Improvement",
        intro: "A mid-sized company enhanced its online engagement by improving content clarity, refining messaging, and optimizing its digital touchpoints.",
        results: [
          "2.4X increase in website engagement time",
          "45% growth in qualified customer inquiries",
          "38% improvement in content interaction rates"
        ],
        image: "/case-studies/influence.png"
      },
      {
        badge: "Market Authority Development",
        title: "Brand Positioning & Industry Visibility",
        intro: "Through a structured digital growth strategy, a national brand strengthened its market presence and built stronger authority within its industry segment.",
        results: [
          "4X growth in brand search visibility",
          "70+ pages ranking across key search categories",
          "58% increase in organic discovery traffic"
        ],
        image: "/case-studies/authority.jpg"
      }
    ]
  },
  {
    title: "E-Commerce Development Case Studies",
    subtitle: "Real performance improvements from businesses that enhanced their online stores, improved customer experience, and increased sales through structured e-commerce development strategies.",
    primaryBtn: "Explore Our E-Commerce Development Case Studies",
    secondaryBtn: "Book a Strategy Consultation",
    studies: [
      {
        badge: "Website Traffic Growth",
        title: "Online Store Visibility Improvement",
        intro: "We helped a growing online brand improve store performance and product discovery by optimizing website structure and navigation.",
        results: [
          "3.2X increase in website visitors within 5 months",
          "48% growth in product page click-through rates",
          "35+ product categories gaining higher search visibility"
        ],
        image: "/case-studies/visibility.jpg"
      },
      {
        badge: "Conversion Performance Boost",
        title: "Product Page Experience Enhancement",
        intro: "By improving product page layout, content clarity, and checkout experience, an online store significantly increased customer engagement.",
        results: [
          "2.7X increase in product page interactions",
          "43% improvement in add-to-cart activity",
          "36% increase in completed purchases"
        ],
        image: "/case-studies/influence.png"
      },
      {
        badge: "Digital Store Authority Growth",
        title: "E-Commerce Platform Expansion",
        intro: "Through improved store structure, faster performance, and better product organization, a national brand strengthened its online presence.",
        results: [
          "100+ products gaining stronger search visibility",
          "3.8X increase in organic website impressions",
          "58% growth in customer discovery traffic"
        ],
        image: "/case-studies/authority.jpg"
      }
    ]
  },
  {
    title: "Mobile App Development Case Studies",
    subtitle: "Real success stories from businesses that improved user engagement, app performance, and digital growth through structured mobile application development.",
    primaryBtn: "Explore Our Mobile App Development Case Studies",
    secondaryBtn: "Book a Development Consultation",
    studies: [
      {
        badge: "App User Growth",
        title: "Mobile Engagement Expansion",
        intro: "We helped a growing startup improve user experience and application performance by redesigning its mobile platform and optimizing navigation flow.",
        results: [
          "3.1X increase in app downloads within 5 months",
          "47% improvement in user session duration",
          "40+ features optimized for better usability"
        ],
        image: "/case-studies/visibility.jpg"
      },
      {
        badge: "Conversion Improvement",
        title: "In-App Interaction Optimization",
        intro: "By refining the app interface and improving feature accessibility, a business significantly increased user interactions across multiple sections of the application.",
        results: [
          "2.8X increase in user engagement within the app",
          "44% growth in in-app purchases and actions",
          "36% improvement in conversion performance"
        ],
        image: "/case-studies/influence.png"
      },
      {
        badge: "Platform Performance Growth",
        title: "Scalable Mobile Infrastructure",
        intro: "Through improved architecture, faster loading speeds, and feature enhancements, a national brand expanded its mobile application reach.",
        results: [
          "100K+ active users supported on the platform",
          "3.7X growth in mobile app usage",
          "60% increase in customer retention rate"
        ],
        image: "/case-studies/authority.jpg"
      }
    ]
  },
  {
    title: "Web App Development Case Studies",
    subtitle: "Real success stories from businesses that improved operational efficiency, user engagement, and digital performance through professionally built web applications.",
    primaryBtn: "Explore Our Web App Development Case Studies",
    secondaryBtn: "Schedule a Development Consultation",
    studies: [
      {
        badge: "Platform Performance Growth",
        title: "Application Speed & Stability Improvement",
        intro: "We helped a growing company upgrade its web application architecture to improve performance and handle higher user activity.",
        results: [
          "3.3X increase in application usage within 6 months",
          "48% improvement in page load performance",
          "40+ application modules optimized for better functionality"
        ],
        image: "/case-studies/visibility.jpg"
      },
      {
        badge: "User Engagement Enhancement",
        title: "Interface & Workflow Optimization",
        intro: "By improving the user interface and simplifying application workflows, a business significantly increased user interaction across its platform.",
        results: [
          "2.7X increase in user session activity",
          "44% improvement in task completion rate",
          "36% growth in overall user engagement"
        ],
        image: "/case-studies/influence.png"
      },
      {
        badge: "Digital Platform Expansion",
        title: "Scalable Web Infrastructure Development",
        intro: "Through improved system architecture and scalable backend systems, a national brand expanded its digital platform capabilities.",
        results: [
          "100K+ active users supported on the platform",
          "3.9X growth in platform traffic",
          "60% increase in long-term user retention"
        ],
        image: "/case-studies/authority.jpg"
      }
    ]
  }
];

export const DevelopmentCaseStudies = () => {
  const { activeDevelopmentTab } = useDevelopmentContext();
  const currentContent = caseStudiesData[activeDevelopmentTab] || caseStudiesData[0];

  const router = useRouter()
  return (
    <section className="bm-cs-section">
      <div className="bm-cs-container-services">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-cs-header-services">
            <h2 className="bm-cs-title-services">
              {currentContent.title}
            </h2>
            <p className="bm-cs-subtitle">
              {currentContent.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="bm-cs-grid-services">
          {currentContent.studies.map((study, index) => (
            <FadeIn key={index} direction="up" delay={0.1 + index * 0.1}>
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

        <FadeIn direction="up" delay={0.5}>
          <div className="bm-cs-actions">
            <button className="bm-cs-main-btn bm-cs-btn-primary">
              {currentContent.primaryBtn}
            </button>
            <button className="bm-cs-main-btn bm-cs-btn-secondary" onClick={() => router.push("/contact")}>
              {currentContent.secondaryBtn}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
