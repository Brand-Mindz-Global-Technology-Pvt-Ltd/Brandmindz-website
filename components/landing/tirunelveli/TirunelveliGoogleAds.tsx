"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaGoogle, FaLaptopCode, FaSearch, FaPaintBrush } from "react-icons/fa";
import { FadeIn } from "@/components/animations/fade-in";
import { tirunelveliLandingData } from "@/lib/tirunelveli-landing-data";
import "../../../style/landing/tirunelveli.css";

const sectionIcons = [FaGoogle, FaLaptopCode, FaSearch, FaPaintBrush];

const shortLabels = [
  "Google Ads",
  "Web & App Dev",
  "SEO Solutions",
  "Branding",
];

export const TirunelveliGoogleAds = () => {
  const { expertSections } = tirunelveliLandingData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const handlePrev = () => {
    const next = activeIndex === 0 ? expertSections.length - 1 : activeIndex - 1;
    goTo(next);
  };

  const handleNext = () => {
    const next = activeIndex === expertSections.length - 1 ? 0 : activeIndex + 1;
    goTo(next);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % expertSections.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [expertSections.length]);

  const active = expertSections[activeIndex];
  const ActiveIcon = sectionIcons[activeIndex];

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
            {expertSections.map((section, index) => {
              const Icon = sectionIcons[index];
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

          {/* Right — slide content */}
          <div className="bm-tvl-expert-slide-panel">
            <div className="bm-tvl-expert-slide-controls">
              <button
                type="button"
                className="bm-tvl-expert-control-btn"
                onClick={handlePrev}
                aria-label="Previous slide"
              >
                <FiChevronLeft />
              </button>
              <button
                type="button"
                className="bm-tvl-expert-control-btn"
                onClick={handleNext}
                aria-label="Next slide"
              >
                <FiChevronRight />
              </button>
            </div>

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
                  <span className="bm-tvl-expert-slide-badge">
                    <ActiveIcon />
                  </span>
                  <span className="bm-tvl-expert-slide-count">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(expertSections.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="bm-tvl-expert-slide-title">{active.title}</h3>
                <p className="bm-tvl-expert-slide-desc">{active.description}</p>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="bm-tvl-expert-dots">
              {expertSections.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`bm-tvl-expert-dot ${index === activeIndex ? "bm-tvl-expert-dot--active" : ""}`}
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
