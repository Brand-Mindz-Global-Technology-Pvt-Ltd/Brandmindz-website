"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";
import "../../../style/home/banner.css";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentSpecialized = () => {
  const { specializedServices } = tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section--dark">
      <div className="bm-tvl-inner">
        <FadeIn direction="up" delay={0.1}>
          <span className="bm-tvl-1 bm-tvl-eyebrow--light">
            {specializedServices.badge}
          </span>

          <h2 className="bm-tvl-title-1 bm-tvl-title--light">
            {specializedServices.title}
          </h2>
          
        </FadeIn>

        <div className="bm-tvl-services-grid">
          {specializedServices.items.map((item, index) => (
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