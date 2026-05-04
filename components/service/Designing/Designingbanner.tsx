"use client";

import React, { useEffect, useState } from "react";
import "../../../style/home/banner.css";
import "../../../style/aboutus/aboutus.css";
import { FaBolt } from "react-icons/fa6";
import { FadeIn } from "@/components/animations/fade-in";
import { LogoNewsTicker } from "../../aboutus/LogoNewsTicker";
import { DesigningTabs } from "./DesigningTabs";

export const DesigningService = () => {
  return (
    <section className="bm-hero-section-contact ">
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>
          <p className="bm-hero-badge__text">
            India’s #1 Designing Agency
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title">
          <span className="text-black">Designing </span>
          <span className="text-grey"> Focused Solutions </span>
          <br />
          <span className="text-black">Designed for Your </span>
          <span className="text-yellow"> Growth</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="bm-hero-description  bm-hero-description-branding">
          Creative execution delivered by a team that has
          designed, scaled, and delivered in real markets.
        </p>
      </FadeIn>

      <LogoNewsTicker />
      <DesigningTabs />

    </section>
  );
};
