"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";

import { FadeIn } from "@/components/animations/fade-in";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations";

import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";

import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentExistingApp = () => {
  const { existingApp } =
    tirunelveliAppDevelopmentData;

  return (
    <section className="bm-tvl-section">

      {/* Header */}
      <FadeIn direction="up" delay={0.1}>
        <div className="bm-tvl-existing-app-header">

          <span className="bm-tvl-existing-app-badge">
            {existingApp.badge}
          </span>

          <h2 className="bm-tvl-existing-app-title">
            {existingApp.title}
          </h2>

          <p className="bm-tvl-existing-app-intro">
            {existingApp.description}
          </p>

        </div>
      </FadeIn>

      {/* Services */}
      <StaggerChildren
        className="bm-tvl-existing-app-grid"
        staggerDelay={0.07}
        initialDelay={0.15}
      >
        {existingApp.services.map(
          (service: string, index: number) => (
            <StaggerItem
              key={`${service}-${index}`}
              className="bm-tvl-existing-app-item"
            >
              <div className="bm-tvl-existing-app-card">

                <div className="bm-tvl-existing-app-icon">
                  <FiCheckCircle />
                </div>

                <h3>
                  {service}
                </h3>

              </div>
            </StaggerItem>
          )
        )}
      </StaggerChildren>

      {/* Conclusion */}
      <FadeIn direction="up" delay={0.25}>
        <div className="bm-tvl-existing-app-conclusion">
          <p>
            {existingApp.conclusion}
          </p>
        </div>
      </FadeIn>

    </section>
  );
};