"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentCustomApp = () => {
  const { customBusinessApp } =
    tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section--dark">
      <div className="bm-tvl-inner">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-tvl-custom-app-content">
            <span className="bm-tvl-eyebrow bm-tvl-eyebrow--light">
              {customBusinessApp.badge}
            </span>

            <h2 className="bm-tvl-title bm-tvl-title--light">
              {customBusinessApp.title}
            </h2>

            <p className="bm-tvl-desc bm-tvl-desc--light">
              {customBusinessApp.description}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};