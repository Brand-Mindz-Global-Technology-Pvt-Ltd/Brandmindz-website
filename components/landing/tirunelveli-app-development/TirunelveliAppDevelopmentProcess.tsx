"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentProcess = () => {
  const { process } = tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section--dark">
  <div className="bm-tvl-process-header">
        <FadeIn direction="up" delay={0.1}>
          <span className="bm-tvl-eyebrow bm-tvl-eyebrow--light">
            {process.badge}
          </span>

          <h2 className="bm-tvl-title bm-tvl-title--light">
            {process.title}
          </h2>
        </FadeIn>

        <div className="bm-tvl-services-grid">
          {process.steps.map((step, index) => (
            <FadeIn
              key={step.title}
              direction="up"
              delay={0.1 + index * 0.05}
            >
              <div className="bm-tvl-service-card bm-tvl-service-card--dark">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};