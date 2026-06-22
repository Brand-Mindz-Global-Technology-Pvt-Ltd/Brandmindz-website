// "use client";

// import React, { useEffect, useState } from "react";
// import "../../style/home/banner.css";
// import "../../style/aboutus/aboutus.css";

// import { FaBolt } from "react-icons/fa6";
// import { FiChevronRight } from "react-icons/fi";
// import { Trusted } from "../home/Trusted";
// import { FadeIn } from "@/components/animations/fade-in";
// import { motion, AnimatePresence } from "framer-motion";
// export const Aboutus = () => {
//   const words = ["built from India","built from USA"];
//   const [index, setIndex] = useState(0);

//   // Timer to change the word every 3 seconds
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
//           <p className="bm-hero-badge__text">
//             India's Leading Marketing Agency
//           </p>
//         </div>
//       </FadeIn>

//       <FadeIn delay={0.2} >
//         <h1 className="bm-hero-title">
    
//           <span className="text-black">Global thinking</span>
//           <span className="text-grey">.Domestic execution.</span>
//           <br/>
//           <span className="text-grey">Proudly</span>
//           <span className="inline-flex align-bottom ml-2 animatetext">
//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={words[index]}
//                 className="text-yellow font-[Afacad] font-medium sm:text-5xl md:text-[65px] flex "
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 style={{ fontWeight: 600 }}
//               >
//                 {words[index].split("").map((letter, i) => (
//                   <motion.span
//                     key={`${words[index]}-${i}`}
//                     variants={{
//                       hidden: { opacity: 0 },
//                       visible: { opacity: 1 },
//                       exit: { opacity: 0 }
//                     }}
//                     transition={{
//                       duration: 0.01,     
//                       delay: i * 0.09,    
//                       ease: "linear"
//                     }}
//                   >
//                     {letter === " " ? "\u00A0" : letter}
//                   </motion.span>
//                 ))}

//                 {/* The Animated Cursor */}
//                 <motion.span
//                   animate={{ opacity: [0, 1, 0] }}
//                   transition={{
//                     repeat: Infinity,
//                     duration: 0.5,        // Faster blink to match typing speed
//                     ease: "linear"
//                   }}
//                   className="ml-1 inline-block w-[0px] h-[35px] bg-yellow shadow-[0_0_8px_#facc15]"
//                 />
//               </motion.span>
//             </AnimatePresence>
//           </span>
         
//         </h1>
//       </FadeIn>

//       {/* Description */}
//       <FadeIn delay={0.35}>
//     <p className="about-us-description">
//   <span className="text-grey">We blend</span> 
//   <span className="text-black"> Global Strategy</span>
//   <span className="text-grey"> with deep local market insight</span>
//   <br />
//   <span className="text-grey">to deliver real,</span>
//   <span className="text-black"> Measurable Growth For Brands.</span>
// </p>
    
//       </FadeIn>



//     </section>
//   );
// };


"use client";

import React, { useEffect, useState } from "react";
import "../../style/home/banner.css";
import "../../style/aboutus/aboutus.css";
import { FaBolt } from "react-icons/fa6";
import { FadeIn } from "@/components/animations/fade-in";
import { motion, AnimatePresence } from "framer-motion";
import { LogoNewsTicker } from "./LogoNewsTicker"; // Import here

export const Aboutus = () => {
  const words = ["built from India", "built from USA"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="bm-hero-section-about">
      {/* Your existing text content - NO CHANGES */}
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

      <FadeIn delay={0.2}>
        <h1 className="bm-abount-hero-title">
          <span className="text-black">Global thinking</span>
          <span className="text-grey">. Domestic Execution.</span>
          <br />
          <span className="text-grey">Proudly </span>
          <span className="text-yellow"> built from India </span>

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
                {words[index].split("").map((letter, i) => (
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
        <p className="about-us-description">
          <span className="text-grey">We blend</span>
          <span className="text-black"> Global Strategy</span>
          <span className="text-grey"> with deep local market insight</span>
    <br className="hidden md:block" />
          <span className="text-grey">to deliver real,</span>
          <span className="text-black"> Measurable Growth For Brands.</span>
        </p>
      </FadeIn>

      <LogoNewsTicker />
      
    </section>
  );
};