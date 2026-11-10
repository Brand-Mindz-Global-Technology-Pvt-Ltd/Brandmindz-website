"use client";

import React, { useState, useCallback, useEffect } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";

// 1. Vikatan logo - uses the authentic Vikatan brand asset (red text + gold icon)
// In normal state: grayscale filter renders it in pure black/gray.
// On hover: grayscale(0%) restores authentic Vikatan red and gold colors without any change in shape or proportions.
import vikatanLogo from "../../assets/about/frame2147226239.webp";

// 2. Sun News
import sunnewsBW from "../../assets/about/sunnews1.webp";
import sunnewsColor from "../../assets/about/sunnews12.webp";

// 3. News 18 Tamil Nadu
import news18BW from "../../assets/about/news18tamil1.webp";
import news18Color from "../../assets/about/news18tamil12.webp";

// 4. Dinamalar - preserves exact original masthead colors in both normal and hover states
// No grayscale, no color filter, no opacity change, no image swap.
import dinamalarLogo from "../../assets/about/dinamalar1.webp";

// 5. Naanayam Vikatan
import naanayamBW from "../../assets/about/dinamalar11.webp";
import naanayamColor from "../../assets/about/dinamalar14.webp";

// 6. Hello 106.4 FM
import helloFmBW from "../../assets/about/dinamalar12.webp";
import helloFmColor from "../../assets/about/dinamalar15.webp";

export const FeaturedSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tappedId, setTappedId] = useState<number | null>(null);

  const channelLogos = [
    {
      id: 1,
      bw: vikatanLogo,
      color: vikatanLogo,
      alt: "Vikatan",
    },
    {
      id: 2,
      bw: sunnewsBW,
      color: sunnewsColor,
      alt: "Sun News",
    },
    {
      id: 3,
      bw: news18BW,
      color: news18Color,
      alt: "News 18 Tamil Nadu",
    },
    {
      id: 4,
      bw: dinamalarLogo,
      color: dinamalarLogo,
      alt: "Dinamalar",
      staticColor: true, // Visually identical in normal and hover states
    },
    {
      id: 5,
      bw: naanayamBW,
      color: naanayamColor,
      alt: "Naanayam Vikatan",
    },
    {
      id: 6,
      bw: helloFmBW,
      color: helloFmColor,
      alt: "Hello 106.4 FM",
    },
  ];

  const handleTap = useCallback((id: number, e: React.TouchEvent) => {
    e.preventDefault();
    setTappedId((prev) => (prev === id ? null : id));
  }, []);

  // Preload colour images so hover appears immediately with 0 latency
  useEffect(() => {
    channelLogos.forEach((logo) => {
      if (typeof window !== "undefined" && logo.color?.src) {
        const img = new window.Image();
        img.src = logo.color.src;
      }
    });
  }, []);

  return (
    <section className="bm-trust-section">
      <div className="bm-trust-container">
        <FadeIn delay={0.1}>
          <div className="bm-trust-header">
            <span className="bm-trust-divider" aria-hidden="true" />
            <h2 className="bm-trust-heading">Featured Across Leading Platforms</h2>
            <span className="bm-trust-divider" aria-hidden="true" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bm-trust-cards-row bm-trust-cards-row--six">
            {channelLogos.map((logo) => {
              const isHovered = hoveredId === logo.id;
              const isTapped = tappedId === logo.id;
              const isActive = isHovered || isTapped;

              return (
                <div
                  key={logo.id}
                  className={`bm-trust-card${isActive ? " bm-trust-card--active" : ""}`}
                  onMouseEnter={() => setHoveredId(logo.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onTouchEnd={(e) => handleTap(logo.id, e)}
                >
                  <div className="bm-trust-logo-box">
                    <Image
                      src={isActive ? logo.color : logo.bw}
                      alt={logo.alt}
                      width={140}
                      height={60}
                      className={`bm-trust-logo-img${
                        logo.staticColor ? " bm-trust-logo-img--static" : ""
                      }${isActive ? " bm-trust-logo-img--active" : ""}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
