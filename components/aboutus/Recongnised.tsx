"use client";

import React, { useState, useCallback, useEffect } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";

// Import black & white logos
import patentsBW from "../../assets/about/news18tamil11.webp"; // Controller General of Patents
import startupIndiaBW from "../../assets/about/sunnews13.webp"; // DPIIT #startupindia
import msmeBW from "../../assets/about/MSME_Logo.svg"; // MSME Logo
import tnSealBW from "../../assets/about/dinamalar13.webp"; // Government of Tamil Nadu seal
import startupTnBW from "../../assets/about/frame21472262391.webp"; // StartupTN

// Import color logos
import patentsColor from "../../assets/about/news18tamil11.webp";
import startupIndiaColor from "../../assets/about/sunnews13.webp";
import msmeColor from "../../assets/about/MSME_Logo.svg";
import tnSealColor from "../../assets/about/dinamalar16.webp";
// vikatan1.webp is the color version of the StartupTN logo (teal icon + full color text)
import startupTnColor from "../../assets/about/vikatan1.webp";

export const RecognisedSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tappedId, setTappedId] = useState<number | null>(null);

  const channelLogos = [
    {
      id: 1,
      bw: patentsBW,
      color: patentsColor,
      alt: "Controller General of Patents, Designs & Trade Marks",
    },
    {
      id: 2,
      bw: startupIndiaBW,
      color: startupIndiaColor,
      alt: "DPIIT #startupindia",
    },
    {
      id: 3,
      bw: msmeBW,
      color: msmeColor,
      alt: "MSME - Micro, Small & Medium Enterprises",
    },
    {
      id: 4,
      bw: tnSealBW,
      color: tnSealColor,
      alt: "Government of Tamil Nadu",
    },
    {
      id: 5,
      bw: startupTnBW,
      color: startupTnColor,
      alt: "StartupTN",
    },
  ];

  const handleTap = useCallback((id: number, e: React.TouchEvent) => {
    e.preventDefault();
    setTappedId((prev) => (prev === id ? null : id));
  }, []);

  // Preload colour images so hover appears immediately
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
            <h2 className="bm-trust-heading">Recognized & Supported By</h2>
            <span className="bm-trust-divider" aria-hidden="true" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bm-trust-cards-row">
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
                      className={`bm-trust-logo-img${isActive ? " bm-trust-logo-img--active" : ""}`}
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
