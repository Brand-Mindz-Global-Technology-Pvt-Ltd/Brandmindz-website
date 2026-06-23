"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/BrandingCaseStudies.css";
import { useRouter } from 'next/navigation';

export const DesigningCaseStudies = ({ data }: { data: any }) => {
  const caseStudies = data?.items || [];

  const router = useRouter()
  return (
    <section className="bm-cs-section">
      <div className="bm-cs-container-services">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-cs-header-services">
            <h2 className="bm-cs-title-services">
              {data?.title || "Design Case Studies"}
            </h2>
            <p className="bm-cs-subtitle">
              {data?.subtitle || "Real transformations from products and brands that achieved business goals through strategic design."}
            </p>
          </div>
        </FadeIn>

        <div className="bm-cs-grid-services">
          {caseStudies.map((study: any, index: number) => (
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
                    {study.results.map((result: string, rIndex: number) => (
                      <li key={rIndex} className="bm-cs-result-item">
                        <span>•</span> {result}
                      </li>
                    ))}
                  </ul>

                  <div className="bm-cs-card-footer">
                    <button 
                      onClick={() => router.push("/case-studies")}
                    className="bm-cs-view-btn 
    relative flex items-center gap-2 px-6 py-2.5 
    rounded-full text-white font-medium
    bg-white/5 backdrop-blur-[1px] 
    border border-white/20
    transition-all duration-500 ease-in-out
    hover:bg-white/10 
    hover:border-white/80 
    hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
    active:scale-95">
                      {study.buttonText || "View Case Study"}
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
              {data?.buttonTitle || "See Our Case Studies"}
            </button>
            <button className="bm-cs-main-btn bm-cs-btn-secondary" onClick={() => router.push("/contact")}>
              {data?.buttonTitle1 || "Book a Meeting"}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

