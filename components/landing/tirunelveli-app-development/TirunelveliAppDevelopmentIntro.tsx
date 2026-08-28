"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";

import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentIntro = () => {
  const { intro } = tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section bm-tvl-intro-section">
      <FadeIn direction="up" delay={0.1}>
        <div className="bm-tvl-intro-card">

          <div className="bm-tvl-intro-accent">
            <span>App Development</span>
          </div>

          <div className="bm-tvl-intro-content">
            <h2 className="bm-tvl-title">
              <span>{intro.title}</span>
            </h2>

            <p className="bm-tvl-desc bm-tvl-desc--last">
              {intro.description}
            </p>
          </div>

        </div>
      </FadeIn>
    </section>
  );
};