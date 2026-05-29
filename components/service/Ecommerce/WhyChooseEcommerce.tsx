"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/WhyChooseBranding.css";
import Image from 'next/image';

export const WhyChooseEcommerce = ({ data }: { data: any }) => {
  if (!data) return null;

  return (
    <section className="bm-why-branding-section">
      <div className="bm-why-branding-container">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-why-branding-header">
            <h2 className="bm-why-branding-title">
              {data.title}
            </h2>
            <p className="bm-why-branding-subtitle" dangerouslySetInnerHTML={{ __html: data.subtitle }}>
            </p>
          </div>
        </FadeIn>

        <div className="bm-why-branding-grid">
          {data.items.map((reason: any, index: number) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
              <div className="bm-why-branding-card">
                <div className="bm-why-branding-number">{reason.number}</div>
                <div className="bm-why-branding-icon-box">
                  <Image src={reason.icon} alt={reason.title} className="bm-why-branding-icon" />
                </div>
                <div className="bm-why-branding-content">
                  <h3 className="bm-why-branding-card-title">{reason.title}</h3>
                  <p className="bm-why-branding-card-desc">{reason.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
