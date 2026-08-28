"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentDigitalMarketing = () => {
  const { appAndDigitalMarketing } =
    tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section--dark">
      <div className="bm-tvl-inner">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-tvl-digital-marketing-content">
            <h2 className="bm-tvl-title bm-tvl-title--light">
              {appAndDigitalMarketing.title}
            </h2>

            <p className="bm-tvl-desc bm-tvl-desc--light">
              {appAndDigitalMarketing.description}
            </p>

            <p className="bm-tvl-desc bm-tvl-desc--light">
              {appAndDigitalMarketing.exampleTitle}
            </p>

            <div className="bm-tvl-flow">
              {appAndDigitalMarketing.flow}
            </div>

            <p className="bm-tvl-desc bm-tvl-desc--light">
              {appAndDigitalMarketing.conclusion}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};