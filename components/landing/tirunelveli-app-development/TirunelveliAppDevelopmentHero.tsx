"use client";

import React from "react";
import Link from "next/link";
import { FaBolt } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { FadeIn } from "@/components/animations/fade-in";
import { LogoNewsTicker } from "@/components/aboutus/LogoNewsTicker";

import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";
import "../../../style/landing/tirunelveli-service-pages.css";

export const TirunelveliAppDevelopmentHero = () => {
  return (
    <section className="bm-hero-section-contact tn-service-hero tn-service-hero--homepage-type">
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>

          <p className="bm-hero-badge__text">
            Brand Mindz — Tirunelveli
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title tn-service-hero-title">
          <span className="text-black">Your Ideas. </span>
          <span className="text-grey">Our Technology. </span>
          <span className="text-yellow">Powerful Apps</span>
          <span className="text-black"> Built for Tomorrow.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="bm-hero-description">
          We transform business ideas into intuitive, scalable and feature-rich mobile applications
          designed to solve problems and create better digital experiences.
        </p>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="bm-hero-action bm-tvl-hero-action">
          <Link href="/contact" className="bm-hero-btn">
            <span className="bm-hero-btn__icon">
              <FiChevronRight />
            </span>

            <span className="bm-hero-btn__text">
              Talk to an <strong>App Development Specialist</strong>
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