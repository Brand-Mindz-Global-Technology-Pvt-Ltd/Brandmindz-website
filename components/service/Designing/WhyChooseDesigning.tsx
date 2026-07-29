"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/WhyChooseBranding.css";
import Image from 'next/image';

// Import assets from root assets folder
import FrameIcon from "../../../assets/branding/frame.webp";
import GroupIcon from "../../../assets/branding/group.webp";
import Group1Icon from "../../../assets/branding/group1.webp";

export const WhyChooseDesigning = ({ data }: { data: any }) => {
  const reasons = data?.items || [];

  return (
    <section className="bm-why-branding-section">
      <div className="bm-why-branding-container">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-why-branding-header">
            <h2 className="bm-why-branding-title">
              {data?.title || "Why Choose Brand Mindz?"}
            </h2>
            <p className="bm-why-branding-subtitle">
              {data?.subtitle || "We build functional systems that create influence, trust, and opportunity."}
            </p>
          </div>
        </FadeIn>

        <div className="bm-why-branding-grid">
          {reasons.map((reason: any, index: number) => (
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

