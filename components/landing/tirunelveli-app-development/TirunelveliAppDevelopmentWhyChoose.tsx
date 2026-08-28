"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentWhyChoose = () => {
  const { whyChoose } = tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section">
      <div className="bm-tvl-inner">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-tvl-why-choose-header">
            <h2 className="bm-tvl-title">
              {whyChoose.title}
            </h2>

            <p className="bm-tvl-section-subtitle">
              {whyChoose.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="bm-tvl-services-grid">
          {whyChoose.reasons.map((reason, index) => (
            <FadeIn
              key={reason.title}
              direction="up"
              delay={0.1 + index * 0.05}
            >
              <div className="bm-tvl-service-card">
                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};