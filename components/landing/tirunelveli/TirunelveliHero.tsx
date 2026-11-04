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

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title">
          <span className="text-black">A </span>
          <span className="text-grey">Digital Marketing Agency</span>
          <span className="text-black"> That Turns </span>
          <span className="text-yellow">Attention</span>
          <span className="text-black"> Into </span>
          <span className="text-grey">Growth.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="bm-hero-description">
          We combine strategy, creativity and technology to help businesses attract customers,
          generate leads and grow faster in the digital world.
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
