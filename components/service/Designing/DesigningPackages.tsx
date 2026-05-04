"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import { Phone, PhoneCall, PhoneForwarded } from 'lucide-react';
import "../../../style/branding/BrandingPackages.css";

const packages = [
  {
    title: "Foundation",
    subtitle: "For Foundation Building",
    features: [
      "Personal Brand Positioning Strategy",
      "LinkedIn Profile Optimization",
      "Bio & Authority Story Development",
      "Visual Identity Guidelines (Basic)",
      "4 Thought Leadership Posts / Month",
      "Monthly Performance Report",
      "Dedicated Brand Consultant"
    ],
    highlight: false,
    recommended: false,
  },
  {
    title: "Growth",
    subtitle: "For Authority Acceleration",
    features: [
      "Advanced Personal Brand Strategy",
      "Content Pillar Development",
      "LinkedIn + Instagram Optimization",
      "8 Authority Content Pieces / Month",
      "Personal Website Wireframe Plan",
      "Media Pitch Drafting",
      "Brand Messaging Framework",
      "AI-Driven Visibility Tracking"
    ],
    highlight: true,
    recommended: true,
  },
  {
    title: "Scale",
    subtitle: "For Industry Domination",
    features: [
      "Complete Personal Brand Ecosystem",
      "Multi-Platform Authority Building",
      "Personal Website Development",
      "Video Content Strategy & Scripting",
      "PR & Media Outreach Campaign",
      "Speaking & Podcast Positioning",
      "Real-Time Brand Analytics Dash",
      "Strategic Growth Mentorship"
    ],
    highlight: false,
    recommended: false,
  }
];

export const DesigningPackages = () => {
  return (
    <section className="bm-pkg-section">
      <div className="bm-pkg-container">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-pkg-header">
            <h2 className="bm-pkg-title">
              Tailored Personal Branding <br />
              <span className='bm-pkg-title-span' >Packages for Visionary Leaders</span>
            </h2>
            <p className="bm-pkg-subtitle">
              Strategy and execution delivered by a team that has sold, scaled, and delivered in real markets.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="bm-pkg-bonus-banner">
            <p className="bm-pkg-bonus-text">
              <strong>Exclusive Bonus:</strong> Get a Free Personal Brand Audit with Your First Month
            </p>
          </div>
        </FadeIn>

        <div className="bm-pkg-grid">
          {packages.map((pkg, index) => (
            <FadeIn key={index} direction="up" delay={0.1 + index * 0.1}>
              <div className={`bm-pkg-card`}>
                {pkg.recommended && (
                  <div className="bm-pkg-tag">Recommended</div>
                )}
                <h3 className="bm-pkg-card-title">{pkg.title}</h3>
                <p className="bm-pkg-card-desc">{pkg.subtitle}</p>
                
                <ul className="bm-pkg-list">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="bm-pkg-list-item">
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="bm-pkg-btn">
                  Get a Proposal
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.5}>
          <div className="bm-pkg-footer">
            <p className="bm-pkg-footer-text">
              Need a customized branding roadmap?
            </p>
            <div className="bm-pkg-cta">
              <div className="bm-pkg-cta-icon-wrapper">
                <Phone size={15} color="white" fill="white" />
              </div>
              <span>Schedule a Personal Brand Strategy Call</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
