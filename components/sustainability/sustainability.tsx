"use client";

import React from "react";
import Link from "next/link";
import "../../style/home/banner.css";
import "../../style/aboutus/aboutus.css";
import "../../style/sustainability/sustainability.css";
import { FaBolt } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { FadeIn } from "@/components/animations/fade-in";
import Brandsustainability from "./Brand";

const impactAreas = [
  {
    number: "01",
    title: "Gender equality and women empowerment",
  },
  {
    number: "02",
    title: "Quality education and skill development",
  },
  {
    number: "03",
    title: "Decent work and inclusive economic growth",
  },
  {
    number: "04",
    title: "Reduced inequalities through regional talent inclusion",
  },
];

export const Sustainability = () => {
  return (
    <section className="sustainability-page">
      <div className="bm-hero-section sustainability-hero-frame">
        <FadeIn delay={0.1}>
          <div className="bm-hero-badge">
            <span className="bm-hero-badge__icon">
              <FaBolt size={19} color="black" />
            </span>
            <p className="bm-hero-badge__text">Sustainable Growth</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="bm-hero-title sustainability-title">
            <span className="text-black">Our Commitment to </span>
            <span className="text-grey">Inclusive Growth </span>
            <span className="text-yellow">&amp; Impact</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="sustainability-intro">
            <p>
              At Brand Mindz Global Technology Pvt Ltd, we believe sustainable growth is built by
              empowering people, not just businesses. Our work aligns with select United Nations
              Sustainable Development Goals (SDGs) through inclusive employment, women empowerment,
              and skill-driven digital growth.
            </p>
            <p>
              We prioritise women-led businesses, create employment opportunities for first-generation
              graduates and women professionals, and build high-performing teams from Tier 2 cities,
              enabling them to access global-standard digital opportunities.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="bm-hero-action sustainability-hero-action">
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button className="bm-hero-btn">
                <div className="bm-hero-btn__icon">
                  <FiChevronRight />
                </div>
                <span className="bm-hero-btn__text">
                  Talk to a <strong>Growth Specialist</strong>
                </span>
              </button>
            </Link>
          </div>
        </FadeIn>
      </div>

      <div className="sustainability-impact-section">
        <FadeIn delay={0.1}>
          <p className="sustainability-impact-lead">
            Through responsible technology, ethical marketing, and outcome-driven CSR initiatives,
            we contribute to:
          </p>
        </FadeIn>

        <div className="sustainability-impact-grid">
          {impactAreas.map((area, index) => (
            <FadeIn key={area.number} delay={0.12 + index * 0.06}>
              <article className="sustainability-impact-card">
                <span className="sustainability-impact-number">{area.number}</span>
                <h2>{area.title}</h2>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="sustainability-closing">
            <p>
              Our role is to enable impact through digital innovation, while building a future that
              is equitable, sustainable, and growth-oriented.
            </p>
            <Link href="/csr-policy" className="sustainability-cta">
              Learn more about our CSR &amp; SDG commitments <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.15} className="sustainability-sdg-fullbleed">
        <section className="sustainability-sdg-alignment">
          <span className="sustainability-sdg-eyebrow">United Nations SDGs</span>
          <h2>Alignment with Sustainable Development Goals (SDGs)</h2>
          <div className="sustainability-sdg-copy">
            <p>
              Brand Mindz Global Technology Pvt Ltd aligns its Corporate Social Responsibility
              (CSR) initiatives and people practices with select United Nations Sustainable
              Development Goals (SDGs) through focused, impact-driven, and inclusive actions.
            </p>
            <p>
              The Company&apos;s alignment is based on direct contribution, workforce inclusion,
              and enablement, as defined in its CSR Policy and internal employment practices.
            </p>
          </div>
        </section>
      </FadeIn>

      <Brandsustainability />
    </section>
  );
};
