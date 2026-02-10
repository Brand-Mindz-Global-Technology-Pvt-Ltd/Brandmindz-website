"use client";

import React, { useEffect, useState } from "react";
import "../../style/home/banner.css";
import { FaBolt } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { Trusted } from "./Trusted";
import { FadeIn } from "@/components/animations/fade-in";
import { motion, AnimatePresence } from "framer-motion";
export const Banner = () => {
  const words = ["Business", "Growth", "Scale"];
  const [index, setIndex] = useState(0);

  // Timer to change the word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <section className="bm-hero-section">
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>
          <p className="bm-hero-badge__text">
            India's Leading Marketing Agency
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} >
        <h1 className="bm-hero-title">
          <span className="text-black">A </span>
          <span className="text-grey">Full-Stack Marketing Agency</span>
          <span className="text-black"> built by practitioners who understand </span>
          <span className="inline-flex align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                className="text-yellow font-[Afacad] font-medium text-[65px] flex "
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ fontWeight: 600 }}
              >
                {words[index].split("").map((letter, i) => (
                  <motion.span
                    key={`${words[index]}-${i}`}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                      exit: { opacity: 0 }
                    }}
                    transition={{
                      duration: 0.01,     
                      delay: i * 0.09,    
                      ease: "linear"
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}

                {/* The Animated Cursor */}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.5,        // Faster blink to match typing speed
                    ease: "linear"
                  }}
                  className="ml-1 inline-block w-[0px] h-[35px] bg-yellow shadow-[0_0_8px_#facc15]"
                />
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="text-black">,</span>
          <span className="text-black"> not just </span>
          <span className="text-grey">Marketing</span>
          <span className="text-black">.</span>
        </h1>
      </FadeIn>

      {/* Description */}
      <FadeIn delay={0.35}>
        <p className="bm-hero-description">
          Strategy and execution delivered by a digital marketing agency that has sold,
          scaled <br />
          and delivered in real markets across industries and geographies.
        </p>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.5} >
        <div className="bm-hero-action">
          <button className="bm-hero-btn">
            <div className="bm-hero-btn__icon">
              <FiChevronRight size={25} />
            </div>
            <span className="bm-hero-btn__text">
              Talk to a <strong>Growth Specialist</strong>
            </span>
          </button>
        </div>
      </FadeIn>

      {/* Trusted */}
      <div className="bm-hero-btn-trusted">

      <FadeIn delay={0.6} >
        <Trusted />
      </FadeIn>
      </div>


    </section>
  );
};
