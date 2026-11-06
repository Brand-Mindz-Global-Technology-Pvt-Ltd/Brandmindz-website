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


import naturals from '../../assets/about/Scroll_logos/normalized/natulalscolorimage.webp';
import seven from '../../assets/about/Scroll_logos/normalized/sevenstarlogo.webp';
import nails from '../../assets/about/Scroll_logos/normalized/nailsandbeyonds2.webp';
import cheranacademy from '../../assets/about/Scroll_logos/normalized/cheranacademy.webp';
import tancoir from '../../assets/about/Scroll_logos/normalized/tancoir.webp';
import tedx from '../../assets/about/Scroll_logos/normalized/tedx_idkxtc8gwo_11.webp';
import Bioneemtec from '../../assets/about/Scroll_logos/normalized/bioneemteclogo1.webp';
import RESONANCE from '../../assets/about/Scroll_logos/normalized/resonance-logo.webp';
import OIP from '../../assets/about/Scroll_logos/normalized/oip.webp';
import Tuka from '../../assets/about/Scroll_logos/normalized/tukababy.webp';
import Tymerz from '../../assets/about/Scroll_logos/normalized/tymerz-2048x933.webp';
import Faggro from '../../assets/about/Scroll_logos/normalized/faggro1.webp';
import Market from '../../assets/about/Scroll_logos/normalized/market-cloud.webp';
import logo01 from '../../assets/about/Scroll_logos/normalized/01-logo.webp';
import aasi from '../../assets/about/Scroll_logos/normalized/aasi_logo.webp';
import Copy from '../../assets/about/Scroll_logos/normalized/copyofannam-dental-logo.webp';
import DIC from '../../assets/about/Scroll_logos/normalized/dictenkasi.webp';
import Ettik from '../../assets/about/Scroll_logos/normalized/ettik.webp';
import HRLogo from '../../assets/about/Scroll_logos/normalized/hr-logo-1.webp';
import jcom from '../../assets/about/Scroll_logos/normalized/jcom-photoroom.webp';
import Magic from '../../assets/about/Scroll_logos/normalized/magic-20-e.webp';
import nellai from '../../assets/about/Scroll_logos/normalized/nellai-tours-logo.webp';
import our from '../../assets/about/Scroll_logos/normalized/ourstudios1.webp';
import proton from '../../assets/about/Scroll_logos/normalized/proton-images.webp';
import sakthi from '../../assets/about/Scroll_logos/normalized/she_the_sakthi_logo-photoroom.webp';
import shortfundly from '../../assets/about/Scroll_logos/normalized/shortfundly1.webp';
import surprisor from '../../assets/about/Scroll_logos/normalized/surprisorstorieslogo.webp';
import swotle from '../../assets/about/Scroll_logos/normalized/swotle1.webp';
import bridal from '../../assets/about/Scroll_logos/normalized/thebridalartisans.webp';
import truck from '../../assets/about/Scroll_logos/normalized/truck-taxi-logo-e17321041147211.webp';
import tuka from '../../assets/about/Scroll_logos/normalized/tukababy.webp';
import tymerz from '../../assets/about/Scroll_logos/normalized/tymerz-2048x933.webp';

// Logos that need individual visual size boosts due to large transparent canvas padding.
// Keys are matched against logo.src at runtime; values are BEM modifier class names.
const BOOSTED_LOGO_CLASSES: Record<string, string> = {
  [bridal.src]:    'brand-logo-ticker__image--boost-xl',   // content ~27% of canvas width
  [sakthi.src]:    'brand-logo-ticker__image--boost-xxl',  // content ~20% of canvas width
  [HRLogo.src]:    'brand-logo-ticker__image--boost-xl',   // content ~22% of canvas width
  [surprisor.src]: 'brand-logo-ticker__image--boost-xl',   // content ~26% of canvas width
  [Ettik.src]:     'brand-logo-ticker__image--boost-md',   // content ~47% of canvas width
  [proton.src]:    'brand-logo-ticker__image--boost-md',   // content ~58% of canvas width
};

function getImageClass(logoSrc: string): string {
  const boost = BOOSTED_LOGO_CLASSES[logoSrc];
  return boost
    ? `brand-logo-ticker__image ${boost}`
    : 'brand-logo-ticker__image';
}

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

  const half = Math.ceil(companyLogos.length / 2);
  const firstRowLogos = companyLogos.slice(0, half);
  const secondRowLogos = companyLogos.slice(half);

  return (
    <div className="brand-logo-ticker">
      {/* First Row */}
      <div className="brand-logo-ticker__row">
        <motion.div
          className="brand-logo-ticker__track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...firstRowLogos, ...firstRowLogos].map((logo, idx) => (
            <div key={`first-${idx}`} className="brand-logo-ticker__item">
              <div className="brand-logo-ticker__image-box">
                <img
                  src={logo.src}
                  alt={`Client Logo ${(idx % firstRowLogos.length) + 1}`}
                  loading="lazy"
                  decoding="async"
                  className={getImageClass(logo.src)}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="brand-logo-ticker__row brand-logo-ticker__row--second">
        <motion.div
          className="brand-logo-ticker__track brand-logo-ticker__track--reverse"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...secondRowLogos, ...secondRowLogos].map((logo, idx) => (
            <div key={`second-${idx}`} className="brand-logo-ticker__item">
              <div className="brand-logo-ticker__image-box">
                <img
                  src={logo.src}
                  alt={`Client Logo ${(idx % secondRowLogos.length) + half + 1}`}
                  loading="lazy"
                  decoding="async"
                  className={getImageClass(logo.src)}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
