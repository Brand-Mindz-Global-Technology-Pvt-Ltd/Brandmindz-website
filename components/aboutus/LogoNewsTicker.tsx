"use client";

import React from "react";
import { motion } from "framer-motion";
import "../../style/aboutus/aboutus.css";

// Import your actual logos
import logo1 from '../../assets/about/01-logo.webp';
import logo2 from '../../assets/about/cheranacademy.webp';
import logo3 from '../../assets/about/faggro1.webp';
import logo4 from '../../assets/about/market-cloud.webp';
import logo5 from '../../assets/about/oip.webp';
import logo6 from '../../assets/about/resonance-logo.webp';
import logo7 from '../../assets/about/sevenstarlogo.webp';
import logo8 from '../../assets/about/tedx.webp';
import logo9 from '../../assets/about/tukababy.webp';
import logo10 from '../../assets/about/tymerz-2048x933.webp';
import logo11 from '../../assets/about/nailsandbeyonds.webp';
import logo12 from '../../assets/about/naturals_header_logo.webp';
import logo13 from '../../assets/about/tancoir.webp';
import logo14 from '../../assets/about/tancoirlogo.webp';


import naturals from '../../assets/about/Scroll_logos/natulalscolorimage.webp';
import seven from '../../assets/about/Scroll_logos/sevenstarlogo.webp';
import nails from '../../assets/about/Scroll_logos/nailsandbeyonds2.webp';
import cheranacademy from '../../assets/about/Scroll_logos/cheranacademy.webp';
import tancoir from '../../assets/about/Scroll_logos/tancoir.webp';
import tedx from '../../assets/about/Scroll_logos/tedx_idkxtc8gwo_11.webp';
import Bioneemtec from '../../assets/about/Scroll_logos/bioneemteclogo1.webp';
import RESONANCE from '../../assets/about/Scroll_logos/resonance-logo.webp';
import OIP from '../../assets/about/Scroll_logos/oip.webp';
import Tuka from '../../assets/about/Scroll_logos/tukababy.webp';
import Tymerz from '../../assets/about/Scroll_logos/tymerz-2048x933.webp';
import Faggro from '../../assets/about/Scroll_logos/faggro1.webp';
import Market from '../../assets/about/Scroll_logos/market-cloud.webp'
import logo01 from '../../assets/about/Scroll_logos/01-logo.webp'
import aasi from '../../assets/about/Scroll_logos/aasi_logo.webp'
import Copy from '../../assets/about/Scroll_logos/copyofannam-dental-logo.webp'
import DIC from '../../assets/about/Scroll_logos/dictenkasi.webp'
import Ettik from '../../assets/about/Scroll_logos/ettik.webp'
import HRLogo from '../../assets/about/Scroll_logos/hr-logo-1.webp'
import jcom from '../../assets/about/Scroll_logos/jcom-photoroom.webp'
import Magic from '../../assets/about/Scroll_logos/magic-20-e.webp'
import nellai from '../../assets/about/Scroll_logos/nellai-tours-logo.webp'
import our from '../../assets/about/Scroll_logos/ourstudios1.webp'
import proton from '../../assets/about/Scroll_logos/proton-images.webp'
import sakthi from '../../assets/about/Scroll_logos/she_the_sakthi_logo-photoroom.webp'
import shortfundly from '../../assets/about/Scroll_logos/shortfundly1.webp'
import surprisor from '../../assets/about/Scroll_logos/surprisorstorieslogo.webp'
import swotle from '../../assets/about/Scroll_logos/swotle1.webp'
import bridal from '../../assets/about/Scroll_logos/thebridalartisans.webp'
import truck from '../../assets/about/Scroll_logos/truck-taxi-logo-e17321041147211.webp'
import tuka from '../../assets/about/Scroll_logos/tukababy.webp'
import tymerz from '../../assets/about/Scroll_logos/tymerz-2048x933.webp'

export const LogoNewsTicker = () => {
  // Create array with all your actual logo imports
 const companyLogos = [
  naturals,
  seven,
  nails,
  cheranacademy,
  tancoir,
  tedx,
  Bioneemtec,
  RESONANCE,
  OIP,
  Tuka,
  Tymerz,
  Faggro,
  Market,
  logo01,
  aasi,
  Copy,
  DIC,
  Ettik,
  HRLogo,
  jcom,
  Magic,
  nellai,
  our,
  proton,
  sakthi,
  shortfundly,
  surprisor,
  swotle,
  bridal,
  truck,
  tuka,
  tymerz
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

//  <div className="logo-ticker-container">
//   <div className="ticker-row">
//     <motion.div
//       className="logo-track"
//       animate={{ x: ["0%", "-50%"] }}
//       transition={{
//         repeat: Infinity,
//         duration: 30, 
//         ease: "linear",
//       }}
//     >
//       {[...companyLogos, ...companyLogos].map((logo, idx) => (
//         <div key={`row1-${idx}`} className="logo-item">
//           <div className="logo-image-container">
//             <img 
//               src={logo.src || logo} 
//               alt="Company Logo" 
//             />
//           </div>
//         </div>
//       ))}
//     </motion.div>
//   </div>

//   <div className="ticker-row mt-10">
//     <motion.div
//       className="logo-track"
//       animate={{ x: ["-50%", "0%"] }}
//       transition={{
//         repeat: Infinity,
//         duration: 30,
//         ease: "linear",
//       }}
//     >
//       {[...companyLogos, ...companyLogos].map((logo, idx) => (
//         <div key={`row2-${idx}`} className="logo-item">
//           <div className="logo-image-container">
//             <img 
//               src={logo.src || logo} 
//               alt="Company Logo" 
//             />
//           </div>
//         </div>
//       ))}
//     </motion.div>
//   </div>
// </div>
  );
};