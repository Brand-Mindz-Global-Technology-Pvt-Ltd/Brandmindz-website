"use client";

import React from "react";
import "../../../style/home/banner.css";
import "../../../style/aboutus/aboutus.css";
import { FaBolt } from "react-icons/fa6";
import { FadeIn } from "@/components/animations/fade-in";
import { LogoNewsTicker } from "../../aboutus/LogoNewsTicker";
import { DigitalMarketingTabs } from "./DigitalMarketingTabs";

export const DigitalMarketingService = () => {
  return (
    <section className="bm-hero-section-contact ">
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>
          <p className="bm-hero-badge__text">
            India’s #1 Digital Marketing Agency
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title">
          <span className="text-black">Digital Marketing </span>
          <span className="text-grey"> Focused Solutions </span>
          <br />
          <span className="text-black">Designed for Your </span>
          <span className="text-yellow"> Growth</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="bm-hero-description  bm-hero-description-branding">
          Marketing execution delivered by a team that has
          scaled, optimized, and delivered in real markets.
        </p>
      </FadeIn>

      <LogoNewsTicker />
      <DigitalMarketingTabs />

    </section>
  );
};
