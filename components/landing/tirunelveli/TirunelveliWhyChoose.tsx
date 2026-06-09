"use client";

import React from "react";
import { FaChartLine, FaShoppingCart, FaGoogle, FaRocket } from "react-icons/fa";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { tirunelveliLandingData } from "@/lib/tirunelveli-landing-data";
import "../../../style/landing/tirunelveli.css";

const reasonIcons = [FaChartLine, FaShoppingCart, FaGoogle, FaRocket];

export const TirunelveliWhyChoose = () => {
  const { whyChoose } = tirunelveliLandingData;

  return (
    <section className="bm-tvl-section--grey">
      <div className="bm-tvl-inner">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-tvl-section-header bm-tvl-section-header--center">
            <span className="bm-tvl-badge">Our Advantage</span>
            <h2 className="bm-tvl-title">{whyChoose.title}</h2>
          </div>
        </FadeIn>

        <StaggerChildren className="bm-tvl-why-grid" staggerDelay={0.1} initialDelay={0.15}>
          {whyChoose.reasons.map((reason, index) => {
            const Icon = reasonIcons[index];
            return (
              <StaggerItem key={reason.title}>
                <div className="bm-tvl-why-card">
                  <div className="bm-tvl-why-card-top">
                    <span className="bm-tvl-why-number">{index + 1}</span>
                    <span className="bm-tvl-why-icon">
                      <Icon />
                    </span>
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
};
