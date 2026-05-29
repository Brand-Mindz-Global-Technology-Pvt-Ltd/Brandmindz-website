"use client";

import React, { useEffect, useState } from "react";
import "../../../style/home/banner.css";
import "../../../style/aboutus/aboutus.css";
import { FaBolt } from "react-icons/fa6";
import { FadeIn } from "@/components/animations/fade-in";
import { LogoNewsTicker } from "../../aboutus/LogoNewsTicker";
import { DevelopmentTabs } from "./DevelopmentTabs";

export const DevelopmentService = () => {
  return (
    <section className="bm-hero-section-contact ">
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>
          <p className="bm-hero-badge__text">
           India’s Trusted Development Experts
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
       

        <h1 className="bm-hero-title">
          <span className="text-black">Strategic </span>
          <span className="text-grey">Development Solution</span>
          <br />
          <span className="text-black">That Build Scalable Digital</span>
          <span className="text-yellow"> Products</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="bm-hero-description  bm-hero-description-branding">
       Performance-focused development services that create fast, secure, and scalable digital platforms for modern businesses.
        </p>
      </FadeIn>

      <LogoNewsTicker />
      <DevelopmentTabs />

    </section>
  );
};
