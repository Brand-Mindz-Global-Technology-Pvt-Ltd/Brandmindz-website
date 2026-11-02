"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import arasanImage from "../../../assets/case-studies/arasan.webp";
import havanaImage from "../../../assets/case-studies/havona-groups-no-top-label.webp";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliCaseStudies = () => {
  return (
    <section className="bm-tvl-case-study-section">
      <div className="bm-tvl-inner">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-tvl-case-study-header">
            <h2 className="bm-tvl-case-study-section-title">
              Case Studies in Digital Marketing
            </h2>
            <p className="bm-tvl-case-study-section-desc">
              Explore how our digital marketing strategies help businesses grow.
            </p>
          </div>

          {/* 2-Card Grid */}
          <div className="bm-tvl-cs-grid">
            {/* Card 1 – Arasan Supermarket */}
            <article className="bm-tvl-cs-card">
              <div className="bm-tvl-cs-image-wrapper">
                <Image
                  src={arasanImage}
                  alt="Arasan Supermarket Case Study"
                  className="bm-tvl-cs-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bm-tvl-cs-content">
                <span className="bm-tvl-cs-category">ARASAN SUPERMARKET</span>
                <h3 className="bm-tvl-cs-title">
                  Turning Every Rupee Into a Customer Action
                </h3>
                <a
                  href="https://www.brandmindz.com/case-studies/arasan-supermarket-app-install-case-study"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bm-tvl-cs-link"
                >
                  View Full Case Study ↗
                </a>
              </div>
            </article>

            {/* Card 2 – Havona Groups */}
            <article className="bm-tvl-cs-card">
              <div className="bm-tvl-cs-image-wrapper">
                <Image
                  src={havanaImage}
                  alt="Havona Groups Meta Leads Generation Case Study"
                  className="bm-tvl-cs-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bm-tvl-cs-content">
                <span className="bm-tvl-cs-category">HAVONA GROUPS</span>
                <h3 className="bm-tvl-cs-title">
                  Turning Meta Ads Into a High-Performing Lead Engine
                </h3>
                <a
                  href="https://www.brandmindz.com/case-studies/havona-groups-meta-leads-case-study"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bm-tvl-cs-link"
                >
                  View Full Case Study ↗
                </a>
              </div>
            </article>
          </div>

          {/* View All Case Studies navigation */}
          <div className="bm-tvl-cs-view-all">
            <Link href="/case-studies" className="bm-tvl-cs-view-all-link">
              <span>View All Case Studies</span>
              <span className="bm-tvl-cs-view-all-arrow">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
