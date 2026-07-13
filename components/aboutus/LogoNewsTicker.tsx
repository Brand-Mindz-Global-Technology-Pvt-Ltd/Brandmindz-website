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


import naturals from '../../assets/about/Scroll_logos/natulalscolorimage.jpeg';
import seven from '../../assets/about/Scroll_logos/SevenStarLogo.png';
import nails from '../../assets/about/Scroll_logos/nails and beyonds (2).png';
import cheranacademy from '../../assets/about/Scroll_logos/Cheranacademy.png';
import tancoir from '../../assets/about/Scroll_logos/tancoir.png';
import tedx from '../../assets/about/Scroll_logos/TEDx_idkxTc8gwO_1 (1).png';
import Bioneemtec from '../../assets/about/Scroll_logos/Bioneemtec  logo (1).png';
import RESONANCE from '../../assets/about/Scroll_logos/RESONANCE-LOGO.png';
import OIP from '../../assets/about/Scroll_logos/OIP.png';
import Tuka from '../../assets/about/Scroll_logos/Tuka Baby.png';
import Tymerz from '../../assets/about/Scroll_logos/Tymerz-2048x933.png';
import Faggro from '../../assets/about/Scroll_logos/Faggro (1).png';
import Market from '../../assets/about/Scroll_logos/Market-cloud.png'
import logo01 from '../../assets/about/Scroll_logos/01-logo.png'
import aasi from '../../assets/about/Scroll_logos/aasi_logo.png'
import Copy from '../../assets/about/Scroll_logos/Copy of annam-dental-logo.png'
import DIC from '../../assets/about/Scroll_logos/DIC tenkasi.png'
import Ettik from '../../assets/about/Scroll_logos/Ettik.png'
import HRLogo from '../../assets/about/Scroll_logos/HR-Logo-1.png'
import jcom from '../../assets/about/Scroll_logos/jcom-Photoroom.png'
import Magic from '../../assets/about/Scroll_logos/Magic-20-e.png'
import nellai from '../../assets/about/Scroll_logos/nellai-tours-logo.png'
import our from '../../assets/about/Scroll_logos/our studios (1).png'
import proton from '../../assets/about/Scroll_logos/proton-images.png'
import sakthi from '../../assets/about/Scroll_logos/she_the_sakthi_logo-Photoroom.png'
import shortfundly from '../../assets/about/Scroll_logos/Shortfundly (1).png'
import surprisor from '../../assets/about/Scroll_logos/Surprisor stories logo.png'
import swotle from '../../assets/about/Scroll_logos/swotle (1).png'
import bridal from '../../assets/about/Scroll_logos/The Bridal Artisans.png'
import truck from '../../assets/about/Scroll_logos/truck-taxi-logo-e1732104114721 (1).png'
import tuka from '../../assets/about/Scroll_logos/Tuka Baby.png'
import tymerz from '../../assets/about/Scroll_logos/Tymerz-2048x933.png'

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