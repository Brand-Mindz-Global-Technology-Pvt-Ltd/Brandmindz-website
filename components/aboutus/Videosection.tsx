"use client";

import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "../../style/aboutus/aboutus.css";
import eesahImage from "../../assets/about/eesah2.webp";
import eesah2Image from "../../assets/about/eesah.webp";

export const VideoSection = () => {
  const slides = [
    { src: eesahImage, alt: "Brand Mindz team" },
    { src: eesah2Image, alt: "Brand Mindz team" },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const distance = touchStartX.current - event.changedTouches[0].clientX;
    if (Math.abs(distance) > 45) {
      setActiveSlide((current) =>
        distance > 0
          ? (current + 1) % slides.length
          : (current - 1 + slides.length) % slides.length
      );
    }
    touchStartX.current = null;
  };

  return (
    <section className="bm-video-section">
      <div className="bm-video-container">
        <FadeIn delay={0.1}>
          <div className="bm-video-wrapper">
            <div
              className="bm-video-image-container"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {slides.map((slide, index) => (
                <Image
                  key={slide.src.src}
                  src={slide.src}
                  alt={slide.alt}
                  className={`bm-video-banner-image ${activeSlide === index ? "active" : ""}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 1280px"
                />
              ))}

              <div className="bm-video-slider-dots" aria-label="Choose image">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`bm-video-slider-dot ${activeSlide === index ? "active" : ""}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show image ${index + 1}`}
                    aria-current={activeSlide === index ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
