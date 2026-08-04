"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { HeroBoltIcon } from "@/components/ui/HeroBoltIcon";

export const IndustriesHero = () => {
  return (
    <section className="bm-hero-section-industries">
      <FadeIn delay={0.1}>
        <div className="bm-industries-hero-badge">
          <HeroBoltIcon />
          <p className="bm-industries-hero-badge__text">Tailored Growth Frameworks</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="bm-industries-hero-title">
          Customized Solutions for <br />
          <span className="highlight">High-Growth Industries</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.35}>
        <p className="bm-industries-hero-description">
          We combine cutting-edge branding, precision digital marketing, and advanced performance engineering to scale businesses across sectors globally.
        </p>
      </FadeIn>
    </section>
  );
};
