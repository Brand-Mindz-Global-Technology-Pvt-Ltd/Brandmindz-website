// "use client";

// import React, { useEffect, useState } from "react";
// import "../../style/home/banner.css";
// import { FaBolt } from "react-icons/fa6";
// import { FiChevronRight } from "react-icons/fi";
// import { Trusted } from "./Trusted";
// import { FadeIn } from "@/components/animations/fade-in";
// import { motion, AnimatePresence } from "framer-motion";

// const FlipLetter = ({ letter, index }) => {
//   // Define different widths for different types of letters
//   const getLetterWidth = (char) => {
//     if (char === ' ' || char === '\u00A0') return 'w-[15px]'; // Space
//     if ('il1|!.'.includes(char)) return 'w-[15px]'; // Narrow letters
//     if ('mwMW'.includes(char)) return 'w-[40px]'; // Wide letters
//     if ('tfkTFF'.includes(char)) return 'w-[20px]'; // Medium-narrow letters
//     return 'w-[30px]'; 
//   };

//   return (
//     <div className={`relative inline-block h-[65px] ${getLetterWidth(letter)} mx-[1px] perspective-[1000px]`}>
//       <AnimatePresence mode="popLayout">
//         <motion.div
//           key={letter}
//           initial={{ rotateX: -90, opacity: 0 }}
//           animate={{ rotateX: 0, opacity: 1 }}
//           exit={{ rotateX: 90, opacity: 0 }}
//           transition={{
//             duration: 0.6,
//             delay: index * 0.08,
//             ease: [0.4, 0, 0.2, 1],
//           }}
//           className="absolute inset-0 flex items-center justify-center"
//           style={{ 
//             transformOrigin: "top", 
//             backfaceVisibility: "hidden",
//             WebkitBackfaceVisibility: "hidden",
//           }}
//         >
//           <div className="absolute top-1/2 left-0 w-full h-[1px] z-10 shadow-[0_1px_0_rgba(255,255,255,0.1)]" />

//           <span className="text-yellow font-[Afacad] font-semibold text-[65px] leading-none tracking-tight">
//             {letter === " " ? "\u00A0" : letter}
//           </span>

//           <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-md" />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };
// export const Banner = () => {
//   const words = ["Business", "Growth", "Scale"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [words.length]);

//   return (
//     <section className="bm-hero-section">
//       <FadeIn delay={0.1}>
//         <div className="bm-hero-badge">
//           <span className="bm-hero-badge__icon">
//             <FaBolt size={19} color="black" />
//           </span>
//           <p className="bm-hero-badge__text">India's Leading Marketing Agency</p>
//         </div>
//       </FadeIn>

//       <FadeIn delay={0.2}>
//         <h1 className="bm-hero-title">
//           <span className="text-black">A </span>
//           <span className="text-grey">Full-Stack Marketing Agency</span>
//           <span className="text-black"> built by practitioners who understand </span>

//           {/* FLIP ANIMATION CONTAINER */}
//           <span className="inline-flex items-center translate-y-3" >
//             <AnimatePresence mode="wait">
//               <motion.div 
//                 key={words[index]} 
//                 className="flex"
//                 initial={{ opacity: 1 }}
//                 exit={{ opacity: 1 }}

//               >
//                 {words[index].split("").map((letter, i) => (
//                   <FlipLetter key={`${words[index]}-${i}`} letter={letter} index={i} />
//                 ))}
//               </motion.div>
//             </AnimatePresence>

//             {/* MECHANICAL CURSOR */}
//             <motion.span
//               animate={{ opacity: [0, 1, 0] }}
//               transition={{ repeat: Infinity, duration: 0.8 }}
//               className="ml-2 w-[4px] h-[50px] bg-yellow shadow-[0_0_10px_#facc15]"
//             />
//           </span>

//           <span className="text-black">,</span>
//           <span className="text-black"> not just </span>
//           <span className="text-grey">Marketing</span>
//           <span className="text-black">.</span>
//         </h1>
//       </FadeIn>

//       <FadeIn delay={0.35}>
//         <p className="bm-hero-description">
//           Strategy and execution delivered by a digital marketing agency that has sold, scaled <br />
//           and delivered in real markets across industries and geographies.
//         </p>
//       </FadeIn>

//       <FadeIn delay={0.5}>
//         <div className="bm-hero-action">
//           <button className="bm-hero-btn">
//             <div className="bm-hero-btn__icon"><FiChevronRight size={25} /></div>
//             <span className="bm-hero-btn__text">Talk to a <strong>Growth Specialist</strong></span>
//           </button>
//         </div>
//       </FadeIn>

//       <div className="bm-hero-btn-trusted">
//         <FadeIn delay={0.6}><Trusted /></FadeIn>
//       </div>
//     </section>
//   );
// };



"use client";
import React, { useEffect, useState } from "react";
import "../../style/home/banner.css";
import { FaBolt } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { Trusted } from "./Trusted";
import { FadeIn } from "@/components/animations/fade-in";
import { motion, AnimatePresence } from "framer-motion";

// const FlipLetter = ({ letter, index }) => {
//   const getLetterWidth = (char) => {
//     if (char === ' ' || char === '\u00A0') return 'w-[10px] md:w-[15px]'; 
//     if ('il1|!.'.includes(char)) return 'w-[10px] md:w-[15px]';
//     if ('mwMW'.includes(char)) return 'w-[25px] md:w-[45px]';
//     return 'w-[20px] md:w-[35px]'; 
//   };

//   return (
//     <div className={`relative inline-block h-[20px] md:h-[55px] ${getLetterWidth(letter)} mx-[1px] perspective-[1000px]`}>
//       <AnimatePresence mode="popLayout">
//         <motion.div
//           key={letter}
//           initial={{ rotateX: -90, opacity: 0 }}
//           animate={{ rotateX: 0, opacity: 1 }}
//           exit={{ rotateX: 90, opacity: 0 }}
//           transition={{
//             duration: 0.6,
//             delay: index * 0.08,
//             ease: [0.4, 0, 0.2, 1],
//           }}
//           className="absolute inset-0 flex items-center justify-center"
//           style={{ transformOrigin: "top", backfaceVisibility: "hidden" }}
//         >
//           {/* Responsive font sizes using clamp or media queries */}
//           <span className="text-yellow font-[Afacad] font-semibold text-[30px] md:text-[75px] leading-none tracking-tight">
//             {letter === " " ? "\u00A0" : letter}
//           </span>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

const FlipLetter = ({ letter }) => {
  const isSpace = letter === ' ' || letter === '\u00A0';

  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={letter}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: 90, opacity: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          display: 'inline-block',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden',
        }}
        className="text-yellow font-[Afacad] font-semibold text-[35px] md:text-[75px] leading-none"
      >
        {isSpace ? '\u00A0' : letter}
      </motion.span>
    </AnimatePresence>
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
          <span className="text-black">A </span>
          <span className="text-grey">Full-Stack Marketing Agency</span>
          <span className="text-black"> built by practitioners who understand </span>

          <span className="inline-flex items-center">
            <AnimatePresence mode="wait">
              <motion.div key={words[index]}>
                {words[index].split("").map((letter, i) => (
                  <FlipLetter key={`${words[index]}-${i}`} letter={letter} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="ml-1 w-[2px] md:w-[4px] h-[30px] md:h-[60px] bg-yellow"
            />
          </span>
          <span className="text-black">, not just </span>
          <span className="text-grey">Marketing</span>
          <span className="text-black">.</span>
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
          <button className="bm-hero-btn">
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