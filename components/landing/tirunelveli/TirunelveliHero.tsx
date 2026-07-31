"use client";

import React from "react";
import Link from "next/link";
import { FaBolt } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { FadeIn } from "@/components/animations/fade-in";
import { LogoNewsTicker } from "@/components/aboutus/LogoNewsTicker";
import { tirunelveliLandingData } from "@/lib/tirunelveli-landing-data";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliHero = () => {
  const { hero } = tirunelveliLandingData;

  return (
    <section className="bm-hero-section-contact">
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>
          <p className="bm-hero-badge__text">{hero.badge}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title">
          <span className="text-black">Digital Marketing</span>
          <br />
          <span className="text-grey">Agency in </span>
          <span className="text-yellow">Tirunelveli</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.35}>
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

      <div className="bm-tvl-hero-logos">
        <LogoNewsTicker />
      </div>
    </section>
  );
};
