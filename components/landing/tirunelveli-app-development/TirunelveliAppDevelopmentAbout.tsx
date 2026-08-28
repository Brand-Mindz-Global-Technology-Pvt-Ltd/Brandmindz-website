"use client";

import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentAbout = () => {
  const { about } = tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section--dark">
      <div className="bm-tvl-inner">
        <div className="bm-tvl-about-grid">
          <FadeIn direction="up" delay={0.1}>
            <div className="bm-tvl-about-left">
              <h2 className="bm-tvl-title bm-tvl-title--light">
                {about.title}
              </h2>

              <p className="bm-tvl-desc bm-tvl-desc--light">
                {about.description}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.25}>
            <div className="bm-tvl-about-right">
              <p className="bm-tvl-about-cta-text">
                {about.ctaText}
              </p>

              <Link
                href="/contact"
                className="bm-hero-btn bm-tvl-about-btn"
              >
                <span>{about.ctaButton}</span>

                <span className="bm-hero-btn__icon">
                  <FiChevronRight size={20} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};