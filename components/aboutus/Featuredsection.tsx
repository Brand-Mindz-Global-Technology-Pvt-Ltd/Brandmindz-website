"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";

// Import your BLACK & WHITE logos
import news18BW from '../../assets/about/news18tamil1.webp';
import dinamalar1BW from '../../assets/about/dinamalar11.webp';
import dinamalar2BW from '../../assets/about/dinamalar12.webp';
import dinamalar3BW from '../../assets/about/dinamalar1.webp';
import platform5BW from '../../assets/about/frame2147226239.webp';
import platform6BW from '../../assets/about/sunnews1.webp';

// Import your COLOR logos (replace with your actual color image paths)
import news18Color from '../../assets/about/news18tamil12.webp';
import dinamalar1Color from '../../assets/about/dinamalar14.webp';
import dinamalar2Color from '../../assets/about/dinamalar15.webp';
import dinamalar3Color from '../../assets/about/dinamalar1.webp';
import platform5Color from '../../assets/about/frame2147226239.webp';
import platform6Color from '../../assets/about/sunnews12.webp';

export const FeaturedSection = () => {
  
  const [hoveredId, setHoveredId] = useState(null);

  const channelLogos = [
    { id: 1, bw: platform5BW, color: platform5Color, alt: "News 18 Tamil" },
    { id: 2, bw: platform6BW, color: platform6Color, alt: "Dinamalar" },
    { id: 3, bw: news18BW, color: news18Color, alt: "Dinamalar" },
    { id: 4, bw: dinamalar3BW, color: dinamalar3Color, alt: "Dinamalar" },
    { id: 5, bw: dinamalar1BW, color: dinamalar1Color, alt: "Platform 5" },
    { id: 6, bw: dinamalar2BW, color: dinamalar2Color, alt: "Platform 6" },
  ];

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
              {/* 6 channel logos - with hover color effect */}
              <div className="bm-channel-grid">
                {channelLogos.map((logo) => (
                  <div 
                    key={logo.id} 
                    className="bm-channel-item"
                    onMouseEnter={() => setHoveredId(logo.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="bm-channel-wrapper">
                      <Image 
                        src={hoveredId === logo.id ? logo.color : logo.bw}
                        alt={logo.alt}
                        width={148}
                        height={82}
                        className="bm-channel-image"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};