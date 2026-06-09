"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliLandingData } from "@/lib/tirunelveli-landing-data";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliIntro = () => {
  const { intro } = tirunelveliLandingData;

  return (
    <section className="bm-tvl-section bm-tvl-intro-section">
      <FadeIn direction="up" delay={0.1}>
        <div className="bm-tvl-intro-card">
          <div className="bm-tvl-intro-accent" />
          <div className="bm-tvl-intro-content">
            <h2 className="bm-tvl-title">{intro.title}</h2>
            <p className="bm-tvl-desc bm-tvl-desc--last">{intro.description}</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
