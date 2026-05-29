"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/FrameworkSection.css";

export const DesigningFramework = ({ data }: { data: any }) => {
  const steps = data?.steps || [];

  return (
    <section className="bm-framework-section">
      <div className="bm-framework-container">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-framework-header">
            <h2 className="bm-framework-title">
              {data?.title || "Our Proven Design Framework"}
            </h2>
            <p className="bm-framework-subtitle">
              {data?.subtitle || "Discover our structured design system designed to build high-performing digital products."}
            </p>
          </div>
        </FadeIn>

        <div className="bm-framework-grid">
          {steps.map((step: any, index: number) => (
            <FadeIn key={index} direction="up" delay={0.1 + index * 0.1}>
              <div className={`bm-framework-card ${step.highlight ? 'highlight' : ''}`}>
                <h3 className="bm-card-title">
                  {step.title}
                </h3>
                <p className="bm-card-description">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.8}>
          <div className="bm-framework-footer">
            <button className="bm-btn-strategy">
              Get Custom Strategy
            </button>
            <button className="bm-btn-meeting">
              Book a Meeting
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

