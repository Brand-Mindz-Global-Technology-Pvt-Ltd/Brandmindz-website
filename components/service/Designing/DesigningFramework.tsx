"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/FrameworkSection.css";

const steps = [
  {
    title: "Brand Discovery & Clarity",
    description: "We deep-dive into your story, strengths, market positioning, and long-term vision to define your unique personal brand identity.",
    highlight: false,
  },
  {
    title: "Brand Discovery & Clarity",
    description: "We deep-dive into your story, strengths, market positioning, and long-term vision to define your unique personal brand identity.",
    highlight: true,
  },
  {
    title: "Brand Discovery & Clarity",
    description: "We deep-dive into your story, strengths, market positioning, and long-term vision to define your unique personal brand identity.",
    highlight: false,
  },
  {
    title: "Brand Discovery & Clarity",
    description: "We deep-dive into your story, strengths, market positioning, and long-term vision to define your unique personal brand identity.",
    highlight: false,
  },
  {
    title: "Brand Discovery & Clarity",
    description: "We deep-dive into your story, strengths, market positioning, and long-term vision to define your unique personal brand identity.",
    highlight: false,
  },
  {
    title: "Brand Discovery & Clarity",
    description: "We deep-dive into your story, strengths, market positioning, and long-term vision to define your unique personal brand identity.",
    highlight: false,
  },
];

export const DesigningFramework = () => {
  return (
    <section className="bm-framework-section">
      <div className="bm-framework-container">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-framework-header">
            <h2 className="bm-framework-title">
              Our 6 Step Personal Branding Growth Framework
            </h2>
            <p className="bm-framework-subtitle">
              Discover our structured personal branding system designed to position you as an authority, 
              build trust, and create consistent visibility across digital platforms.
            </p>
          </div>
        </FadeIn>

        <div className="bm-framework-grid">
          {steps.map((step, index) => (
            <FadeIn key={index} direction="up" delay={0.1 + index * 0.1}>
              <div className={`bm-framework-card `}>
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
