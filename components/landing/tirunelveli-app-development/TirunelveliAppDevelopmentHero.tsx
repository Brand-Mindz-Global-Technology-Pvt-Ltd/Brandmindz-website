"use client";

import React from "react";
import Link from "next/link";
import { FaBolt } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { FadeIn } from "@/components/animations/fade-in";
import { LogoNewsTicker } from "@/components/aboutus/LogoNewsTicker";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";

import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentHero = () => {
  const { hero } = tirunelveliAppDevelopmentData;

  return (
    <section className="bm-hero-section-contact">
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>

          <p className="bm-hero-badge__text">
            {hero.badge}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title">
          <span className="text-black">
            App Development
          </span>

          <br />

          <span className="text-grey">
            Company in{" "}
          </span>

          <span className="text-yellow">
            Tirunelveli
          </span>
        </h1>
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