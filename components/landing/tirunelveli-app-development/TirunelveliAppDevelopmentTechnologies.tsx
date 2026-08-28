"use client";

import React from "react";
import {
  FaAndroid,
  FaApple,
  FaCode,
  FaDatabase,
  FaCloud,
  FaCreditCard,
  FaBell,
  FaServer,
} from "react-icons/fa";

import { FadeIn } from "@/components/animations/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations";

import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";

import "../../../style/landing/tirunelveli.css";

const technologyIcons = [
  FaAndroid,
  FaApple,
  FaCode,
  FaCode,
  FaDatabase,
  FaCloud,
  FaCreditCard,
  FaCode,
  FaBell,
  FaServer,
  FaCode,
];

export const TirunelveliAppDevelopmentTechnologies = () => {
  const { technologies } =
    tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section">

      {/* Header */}
      <FadeIn direction="up" delay={0.1}>
        <div className="bm-tvl-technologies-header">

          <span className="bm-tvl-technologies-badge">
            Technologies We Work With
          </span>

          <h2 className="bm-tvl-technologies-title">
            {technologies.title}
          </h2>

          <p className="bm-tvl-technologies-description">
            {technologies.description}
          </p>

        </div>
      </FadeIn>

      {/* Technology Cards */}
      <StaggerChildren
        className="bm-tvl-technologies-grid"
        staggerDelay={0.06}
        initialDelay={0.15}
      >
        {technologies.technologies.map(
          (technology: string, index: number) => {
            const Icon =
              technologyIcons[
                index % technologyIcons.length
              ];

            return (
              <StaggerItem
                key={`${technology}-${index}`}
                className="bm-tvl-technologies-item"
              >
                <div className="bm-tvl-technologies-card">

                  <div className="bm-tvl-technologies-icon">
                    <Icon />
                  </div>

                  <h3>
                    {technology}
                  </h3>

                </div>
              </StaggerItem>
            );
          }
        )}
      </StaggerChildren>

      {/* Conclusion */}
      <FadeIn direction="up" delay={0.25}>
        <div className="bm-tvl-technologies-conclusion">
          <p>
            {technologies.conclusion}
          </p>
        </div>
      </FadeIn>

    </section>
  );
};