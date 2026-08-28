"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentBusinesses = () => {
  const { tirunelveliBusinesses } =
    tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section--dark">
      <div className="bm-tvl-inner">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="bm-tvl-title bm-tvl-title--light">
            {tirunelveliBusinesses.title}
          </h2>

          <p className="bm-tvl-desc bm-tvl-desc--light">
            {tirunelveliBusinesses.description}
          </p>

          <h3 className="bm-tvl-question">
            {tirunelveliBusinesses.question}
          </h3>

          <p className="bm-tvl-desc bm-tvl-desc--light">
            {tirunelveliBusinesses.conclusion}
          </p>

          <p className="bm-tvl-desc bm-tvl-desc--light">
            {tirunelveliBusinesses.intro}
          </p>
        </FadeIn>

        <div className="bm-tvl-services-grid">
          {tirunelveliBusinesses.sectors.map((sector, index) => (
            <FadeIn
              key={sector}
              direction="up"
              delay={0.1 + index * 0.04}
            >
              <div className="bm-tvl-service-card bm-tvl-service-card--dark">
                <h3>{sector}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};