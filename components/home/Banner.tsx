"use client";
import React, { useEffect, useState } from "react";
import "../../style/home/banner.css";
import { FaBolt } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { Trusted } from "./Trusted";
import { FadeIn } from "@/components/animations/fade-in";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";




// const FlipLetter = ({ letter }) => {
//   const isSpace = letter === ' ' || letter === '\u00A0';

//   return (
//     <span style={{ 
//       display: 'inline-block', 
//       overflow: 'hidden', 
//       verticalAlign: 'bottom',
//       position: 'relative',
//       /* The container height must be tight to create the "cropping" effect seen in the video */
//       height: '1.1em', 
//       /* Masking both top and bottom ensures smooth fade-in/out as seen in Recording 2026-02-23 140743.mp4 */
//       WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
//       maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
//     }}>
//       <AnimatePresence mode="popLayout">
//         <motion.span
//           key={letter}
//           // Enters from below the "box"
//           initial={{ y: "100%", opacity: 0 }}
//           // Settles at center
//           animate={{ y: "0%", opacity: 1 }}
//           // Exits by sliding further UP and out
//           exit={{ y: "-100%", opacity: 0 }}
//           transition={{
//             duration: 0.7, // Slightly slower duration to match the smooth video feel
//             ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for that premium motion
//           }}
//           style={{
//             display: 'inline-block',
//             whiteSpace: 'pre',
//           }}
//           className="text-yellow font-[Afacad] font-semibold 
//             text-[25px] 
//             sm:text-[32px] 
//             md:text-[32px] 
//             lg:text-[70px] 
//             xl:text-[75px] 
//             leading-none"
//         >
//           {isSpace ? '\u00A0' : letter}
//         </motion.span>
//       </AnimatePresence>
//     </span>
//   );
// };
const FlipLetter = ({ letter }) => {
  const isSpace = letter === " ";

  return (
    <motion.span
      initial={{ y: 0, opacity: 0 }}   // bottom
      animate={{ y: 0, opacity: 1 }}    // center
      exit={{ y: -40, opacity: 0 }}     // top
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="inline-block 
      font-[Afacad] 
      font-medium 
       text-yellow
        font-[Afacad] 
        font-semibold 
            text-[25px] 
             sm:text-[32px] 
             md:text-[32px] 
             lg:text-[70px] 
             xl:text-[75px] "
    >
      {isSpace ? "\u00A0" : letter}
    </motion.span>
  );
};

export const Banner = () => {
  const words = ["Business", "Growth", "Scale"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const router = useRouter();
  return (
    <section className="bm-hero-section">
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt className="w-3 h-3 md:w-5 md:h-5" color="black" />
          </span>
          <p className="bm-hero-badge__text">India's Leading Marketing Agency</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title">
          <div className="line-1">
            <span className="text-black">A </span>
            <span className="text-grey">Full-Stack Marketing Agency</span>
            <span className="text-black"> built by practitioners who understand 

              <span className="inline-flex items-center" style={{marginLeft:"10px"}}>
                <AnimatePresence mode="wait">
                  <motion.div key={words[index]}>
                    {words[index].split("").map((letter, i) => (
                      <FlipLetter key={`${words[index]}-${i}`} letter={letter} />
                    ))}
                  </motion.div>
                </AnimatePresence>

                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="ml-1 w-[2px] md:w-[4px] h-[30px] md:h-[60px] bg-yellow"
                />
              </span>

              <span>,</span>
            </span>
          </div>

          <div className="line-3">
            <span className="text-black">not just </span>
            <span className="text-grey">Marketing</span>
            <span>.</span>
          </div>
        </h1>
      </FadeIn>

      <FadeIn delay={0.35}>
        <p className="bm-hero-description">
          Strategy and execution delivered by a digital marketing agency that has sold, scaled
          and delivered in real markets across industries and geographies.
        </p>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="bm-hero-action">
          <button className="bm-hero-btn" onClick={() => {
            router.push('/contact');
          }}>
            <div className="bm-hero-btn__icon"><FiChevronRight /></div>
            <span className="bm-hero-btn__text">Talk to a <strong>Growth Specialist</strong></span>
          </button>
        </div>
      </FadeIn>

      <div className="bm-hero-btn-trusted">
        <FadeIn delay={0.6}><Trusted /></FadeIn>
      </div>
    </section>
  );
};