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
          Conversion Focused Digital Marketing Experts 
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title">
 
          <span className="text-black"> Results Driven </span>
          <span className="text-grey"> Digital Marketing  </span>
          <br />
          <span className="text-black">Services for Your</span>
          <span className="text-yellow"> Growth</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="bm-hero-description  bm-hero-description-branding">
       Performance focused strategy by a team that has generated leads, scaled brands, and driven measurable results in competitive markets.
        </p>
      </FadeIn>

      <LogoNewsTicker />
      <DigitalMarketingTabs />

    </section>
  );
};
