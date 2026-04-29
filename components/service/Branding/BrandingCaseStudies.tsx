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

export const BrandingCaseStudies = () => {
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
                  <h3 className="bm-cs-card-title">{study.title}</h3>
                  <p className="bm-cs-intro">{study.intro}</p>

                  <ul className="bm-cs-results">
                    {study.results.map((result, rIndex) => (
                      <li key={rIndex} className="bm-cs-result-item">
                        <span>•</span> {result}
                      </li>
                    ))}
                  </ul>

                  <div className="bm-cs-card-footer">
                    <button className="bm-cs-view-btn">
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
