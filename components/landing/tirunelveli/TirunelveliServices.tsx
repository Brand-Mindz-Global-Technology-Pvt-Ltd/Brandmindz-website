"use client";

import React from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaSearch,
  FaHashtag,
  FaMobileAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaAward,
} from "react-icons/fa";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { tirunelveliLandingData } from "@/lib/tirunelveli-landing-data";
import "../../../style/landing/tirunelveli.css";

const serviceIcons = [
  FaBullhorn,
  FaChartLine,
  FaSearch,
  FaHashtag,
  FaMobileAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaAward,
];

export const TirunelveliServices = () => {
  const { services } = tirunelveliLandingData;

  return (
    <section className="bm-tvl-section">
      <FadeIn direction="up" delay={0.1}>
        <div className="bm-tvl-section-header">
          <span className="bm-tvl-badge">What We Offer</span>
          <h2 className="bm-tvl-title">{services.title}</h2>
        </div>
      </FadeIn>

      <StaggerChildren className="bm-tvl-services-grid" staggerDelay={0.08} initialDelay={0.15}>
        {services.items.map((service, index) => {
          const Icon = serviceIcons[index];
          return (
            <StaggerItem key={service.title}>
              <div className="bm-tvl-service-card">
                <div className="bm-tvl-service-icon">
                  <Icon />
                </div>
                <h3 className="bm-tvl-service-title">{service.title}</h3>
                <p className="bm-tvl-service-desc">{service.description}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </section>
  );
};
