"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { FadeIn } from "@/components/animations/fade-in";

import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";

import "../../../style/landing/tirunelveli.css";

export const TirunelveliAppDevelopmentCTA = () => {
  const { finalCta } = tirunelveliAppDevelopmentData;

  return (
    <section className="bm-app-cta-section">
      <div className="bm-app-cta-container">

        <FadeIn direction="up" delay={0.1}>
          <div className="bm-app-cta-content">

            <span className="bm-app-cta-eyebrow">
              LET'S BUILD YOUR APP
            </span>

            <h2 className="bm-app-cta-title">
              {finalCta.title}
            </h2>

            <p className="bm-app-cta-description">
              {finalCta.description}
            </p>

            <div className="bm-app-cta-divider" />

            <h3 className="bm-app-cta-question">
              {finalCta.subtitle}
            </h3>

            <Link
              href="/contact"
              className="bm-app-cta-button"
            >
              <span>
                Contact Us Now
              </span>

              <span className="bm-app-cta-button-icon">
                <FiArrowRight size={20} />
              </span>
            </Link>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};