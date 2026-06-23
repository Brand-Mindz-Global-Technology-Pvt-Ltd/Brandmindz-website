"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import { Phone } from 'lucide-react';
import "../../../style/branding/BrandingPackages.css";
import { useRouter } from 'next/navigation';

export const EcommercePackages = ({ data }: { data: any }) => {
  if (!data) return null;
  const router = useRouter();
  return (
    <section className="bm-pkg-section">
      <div className="bm-pkg-container">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-pkg-header">
            <h2 className="bm-pkg-title" dangerouslySetInnerHTML={{ __html: data.title }}>
            </h2>
            <p className="bm-pkg-subtitle">
              {data.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="bm-pkg-bonus-banner">
            <p className="bm-pkg-bonus-text" dangerouslySetInnerHTML={{ __html: data.bonusText }}>
            </p>
          </div>
        </FadeIn>

        <div className="bm-pkg-grid">
          {data.items.map((pkg: any, index: number) => (
            <FadeIn key={index} direction="up" delay={0.1 + index * 0.1}>
              <div className={`bm-pkg-card ${pkg.highlight ? 'highlight' : ''}`}>
                {pkg.recommended && (
                  <div className="bm-pkg-tag">Recommended</div>
                )}
                <h3 className="bm-pkg-card-title">{pkg.title}</h3>
                <p className="bm-pkg-card-desc">{pkg.subtitle}</p>
                
                <ul className="bm-pkg-list">
                  {pkg.features.map((feature: string, fIndex: number) => (
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
              Need a customized roadmap?
            </p>
            <div className="bm-pkg-cta" onClick={() => router.push("/contact")}>
              <div className="bm-pkg-cta-icon-wrapper">
                <Phone size={15} color="white" fill="white" />
              </div>
              <span>Schedule a Strategy Call</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
