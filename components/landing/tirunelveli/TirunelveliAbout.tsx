"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaUsers, FaHandshake, FaTrophy, FaArrowRight } from "react-icons/fa";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliLandingData } from "@/lib/tirunelveli-landing-data";
import yellowCardBg from "@/assets/about/yellow card.webp";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliAbout = () => {
  const { about } = tirunelveliLandingData;

  return (
    <section className="bm-about-bm-section">
      {/* Background Graphic Asset with glowing curves, side circles, and dotted decorations */}
      <div className="bm-about-bm-bg">
        <Image
          src={yellowCardBg}
          alt="About Brand Mindz Background"
          fill
          priority
          className="bm-about-bm-bg-img"
        />
      </div>

      {/* Main Two-Column Content Wrapper */}
      <div className="bm-about-bm-wrapper">
        <div className="bm-about-bm-grid">
          {/* Left Column: Badge, Heading, Underline, Description */}
          <div className="bm-about-bm-left">
            <FadeIn direction="up" delay={0.1}>
              {/* About Us Badge with flanking lines */}
              <div className="bm-about-bm-badge-row">
                <span className="bm-about-bm-badge-line-left"></span>
                <div className="bm-about-bm-badge">
                  <span className="bm-about-bm-badge-icon">
                    <FaBolt />
                  </span>
                  <span className="bm-about-bm-badge-text">About Us</span>
                </div>
                <span className="bm-about-bm-badge-line-right"></span>
              </div>

              {/* Prominent Heading */}
              <h2 className="bm-about-bm-title">
                <span>About </span>
                <span className="bm-about-bm-title-gold">Brand Mindz</span>
              </h2>

              {/* Yellow Decorative Underline */}
              <div className="bm-about-bm-dash-line">
                <span className="bm-about-dash-bar"></span>
                <span className="bm-about-dash-mid"></span>
                <span className="bm-about-dash-dot"></span>
              </div>

              {/* Prominent Paragraph Description */}
              <p className="bm-about-bm-desc">{about.description}</p>
            </FadeIn>
          </div>

          {/* Right Column: 3 Statistics Cards + CTA Section */}
          <div className="bm-about-bm-right">
            <FadeIn direction="up" delay={0.25}>
              {/* 3 Statistics Cards horizontally in 1 row */}
              <div className="bm-about-bm-stats">
                {/* Card 1: 10+ Years Experience */}
                <div className="bm-about-bm-stat-card">
                  <div className="bm-about-bm-stat-icon">
                    <FaUsers />
                  </div>
                  <div className="bm-about-bm-stat-val">10+</div>
                  <div className="bm-about-bm-stat-lbl">Years Experience</div>
                  <div className="bm-about-bm-stat-dash">
                    <span className="bm-about-dash-bar-sm"></span>
                    <span className="bm-about-dash-mid-sm"></span>
                    <span className="bm-about-dash-dot-sm"></span>
                  </div>
                </div>

                {/* Card 2: 200+ Happy Clients */}
                <div className="bm-about-bm-stat-card">
                  <div className="bm-about-bm-stat-icon">
                    <FaHandshake />
                  </div>
                  <div className="bm-about-bm-stat-val">200+</div>
                  <div className="bm-about-bm-stat-lbl">Happy Clients</div>
                  <div className="bm-about-bm-stat-dash">
                    <span className="bm-about-dash-bar-sm"></span>
                    <span className="bm-about-dash-mid-sm"></span>
                    <span className="bm-about-dash-dot-sm"></span>
                  </div>
                </div>

                {/* Card 3: 20 Expert Team */}
                <div className="bm-about-bm-stat-card">
                  <div className="bm-about-bm-stat-icon">
                    <FaTrophy />
                  </div>
                  <div className="bm-about-bm-stat-val">20</div>
                  <div className="bm-about-bm-stat-lbl">Expert Team</div>
                  <div className="bm-about-bm-stat-dash">
                    <span className="bm-about-dash-bar-sm"></span>
                    <span className="bm-about-dash-mid-sm"></span>
                    <span className="bm-about-dash-dot-sm"></span>
                  </div>
                </div>
              </div>

              {/* Contact / CTA Block */}
              <div className="bm-about-bm-cta">
                <p className="bm-about-bm-cta-text">{about.ctaText}</p>

                {/* Yellow decorative underline */}
                <div className="bm-about-bm-dash-line bm-about-bm-dash-line--cta">
                  <span className="bm-about-dash-bar"></span>
                  <span className="bm-about-dash-mid"></span>
                  <span className="bm-about-dash-dot"></span>
                </div>

                {/* Glowing Yellow CTA Button */}
                <Link href="/contact" className="bm-about-bm-btn">
                  <span className="bm-about-bm-btn-text">{about.ctaButton}</span>
                  <span className="bm-about-bm-btn-icon">
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
