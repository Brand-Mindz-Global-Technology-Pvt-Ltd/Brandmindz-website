"use client";

import React from "react";
import Link from "next/link";
import { FaBolt } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { FadeIn } from "@/components/animations/fade-in";
import { LogoNewsTicker } from "@/components/aboutus/LogoNewsTicker";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliHero = () => {
  return (
    <section className="bm-hero-section-contact">
      {/* Eyebrow */}
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>
          <p className="bm-hero-badge__text">Brand Mindz — Tirunelveli</p>
        </div>
      </FadeIn>

      {/* Main Heading — Exactly 3 balanced lines matching the homepage typography */}
      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title bm-tvl-hero-title">
          <span className="bm-hero-title-line">
            <span className="text-black">We combine </span>
            <span className="text-grey">strategy, creativity and technology</span>
          </span>
          <span className="bm-hero-title-line">
            <span className="text-black">to help businesses </span>
            <span className="text-grey">attract customers, generate leads</span>
          </span>
          <span className="bm-hero-title-line">
            <span className="text-black">and grow faster in the </span>
            <span className="text-yellow">digital world.</span>
          </span>
        </h1>
      </FadeIn>

      {/* Description — exact homepage hero description typography */}
      <FadeIn delay={0.3}>
        <p className="bm-hero-description">
          A Digital Marketing Agency in Tirunelveli That Turns Attention Into Growth.
        </p>
      </FadeIn>

      {/* CTA Button */}
      <FadeIn delay={0.38}>
        <div className="bm-hero-action bm-tvl-hero-action">
          <Link href="/contact" className="bm-hero-btn">
            <span className="bm-hero-btn__icon">
              <FiChevronRight />
            </span>
            <span className="bm-hero-btn__text">
              Talk to a <strong>Growth Specialist</strong>
            </span>
          </Link>
        </div>
      </FadeIn>

      {/* Logo ticker */}
      <div className="bm-tvl-hero-logos">
        <LogoNewsTicker />
      </div>
    </section>
  );
};
