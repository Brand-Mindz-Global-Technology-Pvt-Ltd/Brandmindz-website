"use client";

import React, { useState, useCallback, useEffect } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";

// Import your BLACK & WHITE logos
import news18BW from '../../assets/about/news18tamil1.webp';
import dinamalar1BW from '../../assets/about/dinamalar11.webp';
import dinamalar2BW from '../../assets/about/dinamalar12.webp';
import dinamalar3BW from '../../assets/about/dinamalar1.webp';
import vikatanBW from '../../assets/about/vikatan1-bw.webp';
import platform6BW from '../../assets/about/sunnews1.webp';

// Import your COLOR logos (replace with your actual color image paths)
import news18Color from '../../assets/about/news18tamil12.webp';
import dinamalar1Color from '../../assets/about/dinamalar14.webp';
import dinamalar2Color from '../../assets/about/dinamalar15.webp';
import dinamalar3Color from '../../assets/about/dinamalar16.webp';
import vikatanColor from '../../assets/about/vikatan1.webp';
import platform6Color from '../../assets/about/sunnews12.webp';

export const FeaturedSection = () => {
  // Desktop: tracks which logo the mouse is currently hovering over
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Mobile: tracks which logo has been tapped (toggled to colour).
  // Tapping the same logo again resets it to black.
  const [tappedId, setTappedId] = useState<number | null>(null);

  const channelLogos = [
    { id: 1, bw: vikatanBW,    color: vikatanColor,    alt: "Vikatan" },
    { id: 2, bw: platform6BW, color: platform6Color, alt: "Dinamalar" },
    { id: 3, bw: news18BW,    color: news18Color,    alt: "Dinamalar" },
    { id: 4, bw: dinamalar3BW, color: dinamalar3Color, alt: "Dinamalar" },
    { id: 5, bw: dinamalar1BW, color: dinamalar1Color, alt: "Platform 5" },
    { id: 6, bw: dinamalar2BW, color: dinamalar2Color, alt: "Platform 6" },
  ];

  // Touch tap handler: toggle colour on/off for the tapped logo.
  // e.preventDefault() stops the browser firing a synthetic mouseenter
  // after touchend, which would clash with the hover state.
  const handleTap = useCallback((id: number, e: React.TouchEvent) => {
    e.preventDefault();
    setTappedId((prev) => (prev === id ? null : id));
  }, []);

  // Preload colour images into browser cache so hover appears immediately (0 latency)
  useEffect(() => {
    channelLogos.forEach((logo) => {
      if (typeof window !== "undefined") {
        const img = new window.Image();
        img.src = logo.color.src;
      }
    });
  }, []);

  return (
    <section className="bm-featured-section">
      <div className="bm-featured-container">

        {/* Grid Layout - col-4 text, col-8 logos */}
        <div className="bm-featured-grid">

          {/* Left Column - Text (col-4) */}
          <div className="bm-featured-text-col">
            <FadeIn delay={0.1}>
              <h2 className="bm-featured-title">
                <span className="bm-text-gray">Featured Across</span>
                <br />
                <span className="bm-text-black">Leading Platforms</span>
              </h2>
            </FadeIn>
          </div>

          {/* Right Column - Logos (col-8) */}
          <div className="bm-featured-logos-col">
            <FadeIn delay={0.2}>
              {/* 6 channel logos — hover (desktop) & tap-toggle (mobile) */}
              <div className="bm-channel-grid">
                {channelLogos.map((logo) => {
                  const isHovered = hoveredId === logo.id;
                  const isTapped  = tappedId  === logo.id;
                  // Colour image shown when: hovered on desktop OR tapped on mobile
                  const isActive  = isHovered || isTapped;

                  return (
                    <div
                      key={logo.id}
                      className={`bm-channel-item${isTapped ? ' bm-channel-item--active' : ''}${isHovered ? ' bm-channel-item--hovered' : ''}`}
                      onMouseEnter={() => setHoveredId(logo.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onTouchEnd={(e) => handleTap(logo.id, e)}
                    >
                      <div className="bm-channel-wrapper">
                        <Image
                          src={isActive ? logo.color : logo.bw}
                          alt={logo.alt}
                          width={148}
                          height={82}
                          className="bm-channel-image"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};
