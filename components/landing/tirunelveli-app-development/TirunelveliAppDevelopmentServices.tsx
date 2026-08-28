"use client";

import React from "react";
import {
  FaAndroid,
  FaApple,
  FaCode,
  FaBriefcase,
  FaShoppingCart,
  FaPaintBrush,
  FaTools,
  FaMobileAlt,
} from "react-icons/fa";

import { FadeIn } from "@/components/animations/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations";

import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";

import "../../../style/landing/tirunelveli.css";

const serviceIcons = [
  FaAndroid,
  FaApple,
  FaCode,
  FaBriefcase,
  FaShoppingCart,
  FaPaintBrush,
  FaTools,
  FaMobileAlt,
];

export const TirunelveliAppDevelopmentServices = () => {
  const { services } = tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section">

      <FadeIn direction="up" delay={0.1}>
        <div className="bm-tvl-section-header">

          <span className="bm-tvl-badge">
            What We Offer
          </span>

          <h2 className="bm-tvl-title">
            {services.title}
          </h2>

        </div>
      </FadeIn>

      <StaggerChildren
        className="bm-tvl-services-grid"
        staggerDelay={0.08}
        initialDelay={0.15}
      >
        {services.items.map((service: any, index: number) => {
          const Icon = serviceIcons[index % serviceIcons.length];

          return (
            <StaggerItem
              key={service.title}
              className="bm-tvl-service-step"
            >
              <div className="bm-tvl-service-card">

                <div className="bm-tvl-service-icon">
                  <Icon />
                </div>

                <h3 className="bm-tvl-service-title">
                  {service.title}
                </h3>

                <p className="bm-tvl-service-desc">
                  {service.description}
                </p>

              </div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>

    </section>
  );
};