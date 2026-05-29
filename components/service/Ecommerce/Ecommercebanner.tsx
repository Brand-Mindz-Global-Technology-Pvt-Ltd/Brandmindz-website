"use client";

import React from "react";
import "../../../style/home/banner.css";
import "../../../style/aboutus/aboutus.css";
import { FaBolt } from "react-icons/fa6";
import { FadeIn } from "@/components/animations/fade-in";
import { LogoNewsTicker } from "../../aboutus/LogoNewsTicker";
import { EcommerceTabs } from "./EcommerceTabs";

export const EcommerceService = ({ activeTabKey, setActiveTabKey }: { activeTabKey: any, setActiveTabKey: any }) => {
  return (
    <section className="bm-hero-section-contact ">
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>
          <p className="bm-hero-badge__text">
            India’s Trusted Ecommerce Listing Experts
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title">
          <span className="text-black">Strategic Ecommerce </span>
          <span className="text-grey"> Listing Services </span>
          <br />
          <span className="text-black">That Turn Products Into </span>
          <span className="text-yellow"> Best Sellers</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="bm-hero-description  bm-hero-description-branding">
          SEO optimized product listings that rank higher and convert faster across major marketplaces.
        </p>
      </FadeIn>

      <LogoNewsTicker />
      <EcommerceTabs activeTabKey={activeTabKey} setActiveTabKey={setActiveTabKey} />

    </section>
  );
};
