"use client";

import React from "react";
import { FaBolt } from "react-icons/fa6";
import { FadeIn } from "@/components/animations/fade-in";

export const IndustriesHero = () => {
  return (
    <section className="bm-hero-section-industries">
      <FadeIn delay={0.1}>
        <div className="bm-industries-hero-badge">
          <span className="bm-industries-hero-badge__icon">
            <FaBolt className="w-3.5 h-3.5" color="black" />
          </span>
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
