"use client";

import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { FadeIn } from "@/components/animations/fade-in";

export const IndustriesCTA = () => {
  return (
    <section className="bm-industries-cta-section">
      <div className="bm-industries-cta-container">
        <FadeIn delay={0.1}>
          <h2 className="bm-industries-cta-title">
            Ready to Build a Dominant <br />
            Market Position?
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="bm-industries-cta-desc">
            Let's design a custom growth, marketing, and technology framework specifically for your industry's requirements and audience.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="bm-hero-action">
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button className="bm-hero-btn">
                <div className="bm-hero-btn__icon">
                  <FiChevronRight />
                </div>
                <span className="bm-hero-btn__text">
                  Talk to a <strong>Growth Specialist</strong>
                </span>
              </button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
