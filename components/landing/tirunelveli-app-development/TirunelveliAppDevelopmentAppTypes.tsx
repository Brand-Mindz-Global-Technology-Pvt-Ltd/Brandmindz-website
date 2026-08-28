"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentAppTypes = () => {
  const { appTypes } = tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section">
      <div className="bm-tvl-inner">
        <FadeIn direction="up" delay={0.1}>
          <span className="bm-tvl-eyebrow">
            {appTypes.badge}
          </span>

          <h2 className="bm-tvl-title">
            {appTypes.title}
          </h2>
        </FadeIn>

        <div className="bm-tvl-services-grid">
          {appTypes.items.map((item, index) => (
            <FadeIn
              key={item.title}
              direction="up"
              delay={0.1 + index * 0.05}
            >
              <div className="bm-tvl-service-card">
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