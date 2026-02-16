"use client";

import React from "react";
import { motion } from "framer-motion";
import "../../style/aboutus/aboutus.css";

// Import your actual logos
import logo1 from '../../assets/about/01-logo.png';
import logo2 from '../../assets/about/Cheranacademy.png';
import logo3 from '../../assets/about/Faggro (1).png';
import logo4 from '../../assets/about/Market-cloud.png';
import logo5 from '../../assets/about/OIP.png';
import logo6 from '../../assets/about/RESONANCE-LOGO.png';
import logo7 from '../../assets/about/SevenStarLogo.png';
import logo8 from '../../assets/about/TEDx.png';
import logo9 from '../../assets/about/Tuka Baby.png';
import logo10 from '../../assets/about/Tymerz-2048x933.png';
import logo11 from '../../assets/about/nailsandbeyonds.png';
import logo12 from '../../assets/about/naturals_header_logo.png';
import logo13 from '../../assets/about/tancoir.png';
import logo14 from '../../assets/about/tan coir.png';

export const LogoNewsTicker = () => {
  // Create array with all your actual logo imports
  const companyLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7,
    logo8, logo9, logo10, logo11, logo12, logo13, logo14
  ];

  return (
 <div className="logo-ticker-container">
  {/* First Row - First 7 logos */}
  <div className="ticker-row">
    <motion.div
      className="flex logo-gap logo-track"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      }}
    >
      {[...companyLogos.slice(0, 7), ...companyLogos.slice(0, 7)].map(
        (logo, idx) => (
          <div key={`first-${idx}`} className="logo-item">
            <div className="logo-image-container">
              {/* Actual logo image with reduced width */}
              <img 
                src={logo.src || logo} 
                alt={`Company ${idx % 7 + 1}`}
                className="w-3/4 h-full object-contain p-1 mx-auto"
                style={{ maxWidth: '80%',maxHeight:"80%" }}
              />
            </div>
          </div>
        )
      )}
    </motion.div>
  </div>

  {/* Second Row - Last 7 logos */}
  <div className="ticker-row mt-4">
    <motion.div
      className="flex logo-gap logo-track second-row-offset"
      animate={{ x: ["-50%", "0%"] }}
      transition={{
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      }}
    >
      {[...companyLogos.slice(7), ...companyLogos.slice(7)].map(
        (logo, idx) => (
          <div key={`second-${idx}`} className="logo-item">
            <div className="logo-image-container">
              {/* Actual logo image with reduced width */}
              <img 
                src={logo.src || logo} 
                alt={`Company ${idx % 7 + 8}`}
                className="w-3/4 h-full object-contain p-1 mx-auto"
                style={{ maxWidth: '80%',maxHeight:"80%" }}
              />
            </div>
          </div>
        )
      )}
    </motion.div>
  </div>
</div>
  );
};