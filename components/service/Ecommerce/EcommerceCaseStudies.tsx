"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/BrandingCaseStudies.css";

const caseStudies = [
  {
    badge: "Visibility",
    title: "LinkedIn Authority Breakthrough",
    intro: "We positioned a startup founder as a niche thought leader, resulting in:",
    results: [
      "4x profile views in 90 days",
      "3 inbound speaking invitations",
      "40% increase in qualified DM enquiries"
    ],
    image: "/case-studies/visibility.jpg"
  },
  {
    badge: "Influence",
    title: "LinkedIn Authority Breakthrough",
    intro: "We positioned a startup founder as a niche thought leader, resulting in:",
    results: [
      "4x profile views in 90 days",
      "3 inbound speaking invitations",
      "40% increase in qualified DM enquiries"
    ],
    image: "/case-studies/influence.png"
  },
  {
    badge: "Authority",
    title: "LinkedIn Authority Breakthrough",
    intro: "We positioned a startup founder as a niche thought leader, resulting in:",
    results: [
      "4x profile views in 90 days",
      "3 inbound speaking invitations",
      "40% increase in qualified DM enquiries"
    ],
    image: "/case-studies/authority.jpg"
  }
];

export const EcommerceCaseStudies = () => {
  return (
    <section className="bm-cs-section">
      <div className="bm-cs-container">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-cs-header">
            <h2 className="bm-cs-title">
              Personal Branding Case Studies
            </h2>
            <p className="bm-cs-subtitle">
              Real transformations from leaders who built authority, influence, and high-value opportunities through strategic personal branding.
            </p>
          </div>
        </FadeIn>

        <div className="bm-cs-grid">
          {caseStudies.map((study, index) => (
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
    
    active:scale-95">
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
              See our Case studies
            </button>
            <button className="bm-cs-main-btn bm-cs-btn-secondary">
              Book a Meeting
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
