"use client";

import React from "react";
import { FaBolt } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
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
        <a href={`tel:${hero.phone.replace(/\s/g, "")}`} className="bm-tvl-hero-phone">
          <FiPhone size={18} />
          {hero.phone}
        </a>
      </FadeIn>

      <LogoNewsTicker />
    </section>
  );
};
