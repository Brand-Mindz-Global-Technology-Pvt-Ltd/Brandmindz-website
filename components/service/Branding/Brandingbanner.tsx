
"use client";

import React, { useEffect, useState } from "react";
import "../../../style/home/banner.css";
import "../../../style/aboutus/aboutus.css";
import { FaBolt } from "react-icons/fa6";
import { FadeIn } from "@/components/animations/fade-in";
import { motion, AnimatePresence } from "framer-motion";
import { LogoNewsTicker } from "../../aboutus/LogoNewsTicker";
import { BrandingTabs } from "./BrandingTabs";

export const BrandingService = () => {
  const words = ["Understand Your Business"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="bm-hero-section-contact ">
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>
          <p className="bm-hero-badge__text">
            Branding
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title">

          <span className="text-black">Building </span>

          <span className="text-grey"> Focused Solutions </span>
          <br />
          <span className="text-black">Designed for Your </span>
          <span className="               text-yellow
"> Growth</span>


          {/* <span className="inline-flex align-bottom ml-2 animatetext">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                className="text-yellow font-[Afacad] font-medium sm:text-5xl md:text-[65px] flex"
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ fontWeight: 600 }}
              >
                {words[index]?.split("")?.map((letter, i) => (
                  <motion.span
                    key={`${words[index]}-${i}`}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                      exit: { opacity: 0 },
                    }}
                    transition={{
                      duration: 0.01,
                      delay: i * 0.09,
                      ease: "linear",
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}

                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.5,
                    ease: "linear",
                  }}
                  className="ml-1 inline-block w-[0px] h-[35px] bg-yellow shadow-[0_0_8px_#facc15]"
                />
              </motion.span>
            </AnimatePresence>
          </span> */}
        </h1>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="bm-hero-description" style={{ maxWidth: '800px' }}>
          Strategy and execution delivered by a team that has
          sold, scaled, and delivered in real markets.
        </p>
      </FadeIn>


      <LogoNewsTicker />
      <BrandingTabs />

    </section>
  );
};