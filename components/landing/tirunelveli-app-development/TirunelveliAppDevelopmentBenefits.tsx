"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentBenefits = () => {
  const { benefits } =
    tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section--dark">
      <div className="bm-tvl-inner">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="bm-tvl-title bm-tvl-title--light">
            {benefits.title}
          </h2>

          <p className="bm-tvl-desc bm-tvl-desc--light">
            {benefits.description}
          </p>
        </FadeIn>

        <div className="bm-tvl-services-grid">
          {benefits.items.map((item, index) => (
            <FadeIn
              key={item.title}
              direction="up"
              delay={0.1 + index * 0.05}
            >
              <div className="bm-tvl-service-card bm-tvl-service-card--dark">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};