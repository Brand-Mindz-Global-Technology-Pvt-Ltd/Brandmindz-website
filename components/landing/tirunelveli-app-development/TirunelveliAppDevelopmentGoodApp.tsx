"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentGoodApp = () => {
  const { goodMobileApp } =
    tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section">
      <div className="bm-tvl-inner">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="bm-tvl-title">
            {goodMobileApp.title}
          </h2>

          <p className="bm-tvl-desc">
            {goodMobileApp.description}
          </p>
        </FadeIn>

        <div className="bm-tvl-services-grid">
          {goodMobileApp.features.map((feature, index) => (
            <FadeIn
              key={feature.title}
              direction="up"
              delay={0.1 + index * 0.05}
            >
              <div className="bm-tvl-service-card">
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};