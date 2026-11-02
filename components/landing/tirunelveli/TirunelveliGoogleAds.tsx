"use client";

import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGoogle, FaLaptopCode, FaSearch, FaPaintBrush, FaRobot } from "react-icons/fa";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliLandingData } from "@/lib/tirunelveli-landing-data";
import googleAdsImage from "../../../assets/tirunelveli/google-ads.webp";
import developmentImage from "../../../assets/tirunelveli/web-and-app.webp";
import seoImage from "../../../assets/tirunelveli/seo.webp";
import brandingImage from "../../../public/case-studies/founder.png";
import aeoGeoImage from "../../../assets/tirunelveli/aeo_geo_visibility.webp";
import "../../../style/landing/tirunelveli.css";

const sectionIcons = [FaGoogle, FaLaptopCode, FaSearch, FaPaintBrush, FaRobot];
const sectionImages = [
  googleAdsImage,
  developmentImage,
  seoImage,
  brandingImage,
  aeoGeoImage,
];

const shortLabels = [
  "Google Ads",
  "Web & App Dev",
  "SEO Solutions",
  "Branding",
  "AEO / GEO",
];

export const TirunelveliGoogleAds = () => {
  const { expertSections } = tirunelveliLandingData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const allSections = useMemo(() => {
    if (expertSections.length >= 5) return expertSections;
    return [
      ...expertSections,
      {
        title: "AEO / GEO Visibility Service in Tirunelveli",
        description:
          "We help businesses get noticed where people are searching today \u2013 not just on Google, but also across AI-powered platforms. With our AEO and GEO strategies, we make it easier for your brand to appear in relevant answers and AI-generated search results on platforms like ChatGPT and Google AI Overviews. From improving your website content to building your brand's online presence, we focus on helping more people discover your business and trust what you offer.",
      },
    ];
  }, [expertSections]);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const active = allSections[activeIndex];
  const ActiveIcon = sectionIcons[activeIndex] || FaRobot;
  const activeImage = sectionImages[activeIndex] || aeoGeoImage;

  return (
    <section className="bm-tvl-expert-slider-section">
      <div className="bm-tvl-section bm-tvl-expert-slider-inner">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-tvl-expert-slider-header">
            <span className="bm-tvl-badge">Our Process</span>
            <h2 className="bm-tvl-title">
              Specialized Services in{" "}
              <span className="bm-tvl-title-accent">Tirunelveli</span>
            </h2>
          </div>
        </FadeIn>

        <div className="bm-tvl-expert-slider-layout">
          {/* Left — tab navigation */}
          <div className="bm-tvl-expert-tabs">
            {allSections.map((section, index) => {
              const Icon = sectionIcons[index] || FaRobot;
              const isActive = index === activeIndex;
              return (
                <button
                  key={section.title}
                  type="button"
                  className={`bm-tvl-expert-tab ${isActive ? "bm-tvl-expert-tab--active" : ""}`}
                  onClick={() => goTo(index)}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className="bm-tvl-expert-tab-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="bm-tvl-expert-tab-icon">
                    <Icon />
                  </span>
                  <span className="bm-tvl-expert-tab-text">
                    <span className="bm-tvl-expert-tab-label">{shortLabels[index]}</span>
                    <span className="bm-tvl-expert-tab-title">{section.title}</span>
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="expert-tab-indicator"
                      className="bm-tvl-expert-tab-indicator"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Center — selected service content */}
          <div className="bm-tvl-expert-slide-panel">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="bm-tvl-expert-slide-content"
              >
                <div className="bm-tvl-expert-slide-top">
                  <span className="bm-tvl-expert-slide-eyebrow">
                    <ActiveIcon aria-hidden="true" />
                    {shortLabels[activeIndex]}
                  </span>
                  <span className="bm-tvl-expert-slide-count">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(allSections.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="bm-tvl-expert-slide-title">{active.title}</h3>
                <p className="bm-tvl-expert-slide-desc">{active.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — image changes with the selected service */}
          <div className="bm-tvl-expert-image-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bm-tvl-expert-image-frame"
              >
                <Image
                  src={activeImage}
                  alt={`${active.title} at Brand Mindz`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="bm-tvl-expert-image"
                />
                <div className="bm-tvl-expert-image-caption">
                  {active.title}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
