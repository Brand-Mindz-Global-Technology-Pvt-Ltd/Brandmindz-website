"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";

// Import your black & white logos
import news18BW from '../../assets/about/frame21472262391.webp';
import dinamalar3BW from '../../assets/about/sunnews13.webp';
import platform5BW from '../../assets/about/news18tamil11.webp';
import platform6BW from '../../assets/about/dinamalar13.webp';

// Import your COLOR logos (replace these with your actual color image imports)
import news18Color from '../../assets/about/vikatan1.webp';
import dinamalar3Color from '../../assets/about/sunnews13.webp';
import platform5Color from '../../assets/about/news18tamil11.webp';
import platform6Color from '../../assets/about/dinamalar16.webp';

export const RecognisedSection = () => {
  
  const channelLogos = [
    { 
      id: 1, 
      bw: news18BW, 
      color: news18Color, 
      alt: "News 18 Tamil" 
    },
    { 
      id: 2, 
      bw: dinamalar3BW, 
      color: dinamalar3Color, 
      alt: "Dinamalar" 
    },
    { 
      id: 3, 
      bw: platform5BW, 
      color: platform5Color, 
      alt: "Dinamalar" 
    },
    { 
      id: 4, 
      bw: platform6BW, 
      color: platform6Color, 
      alt: "Dinamalar" 
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="bm-featured-section">
      <div className="bm-featured-container">
        
        {/* Grid Layout - col-4 text, col-8 logos */}
        <div className="bm-recongnined-grid" >
          
          {/* Left Column - Text (col-4) */}
          <div className="bm-featured-text-col">
            <FadeIn delay={0.1}>
              <h2 className="bm-featured-title">
                <span className="bm-text-gray">Recognized &</span>
                <br />
                <span className="bm-text-black">Supported By</span>
              </h2>
            </FadeIn>
          </div>

          {/* Right Column - Logos (col-8) */}
          <div className="bm-featured-logos-col">
            <FadeIn delay={0.2}>
              {/* Channel logos with hover effect */}
              <div className="bm-channel-grid-recognised">
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
                        className="bm-channel-image bm-channel-hover"
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