// import React from "react";
// import { FadeIn } from "@/components/animations/fade-in";
// import Image from "next/image";
// import "../../style/aboutus/aboutus.css";

// // Import assets
// import worldMap from '../../assets/about/Group (2).png';


// export const GlobalPresenceSection = () => {
  
//   const countries = [
//     { name: "United States of America", top: "40%", left: "30%" },
//     // { name: "Canada", top: "18%", left: "15%" },
//     { name: "United Kingdom", top: "32%", left: "51%" },
//     { name: "Germany", top: "39%", left: "53%" },
//     { name: "Israel", top: "46%", left: "55%" },
//     { name: "Dubai", top: "51%", left: "60%" },
//     { name: "India", top: "56%", left: "67%" },
//     { name: "Singapore", top: "60%", left: "74%" },
//     { name: "Malaysia", top: "66%", left: "78%" },
//     { name: "Australia", top: "78%", left: "77%" },
//     { name: "Maldives", top: "65%", left: "65%" },
//   ];



//   return (
//     <section className="bm-global-presence-wrapper">
//       <div className="bm-global-presence-section">
        
//         {/* Gray Container with Rounded-xl and Margin */}
//         <div className="bm-global-gray-container">
          
//           {/* Left Column - Map Section */}
//           <div className="bm-global-map-column">
            
//             {/* Our Global Presence Heading */}
//             <FadeIn delay={0.1}>
//               <h2 className="bm-global-map-heading">
//                 Our Global Presence
//               </h2>
//             </FadeIn>

//             <div className="bm-global-map-container">
//               <div className="bm-global-map-wrapper">
//                 {/* World Map Image - Transparent BG */}
//                 <Image 
//                   src={worldMap}
//                   alt="World Map"
//                   className="bm-global-map-image"
//                   priority
//                 />
                
//                 <div className="bm-global-markers">
//                   {countries.map((country, index) => (
//                     <div 
//                       key={index}
//                       className="bm-global-marker"
//                       style={{ top: country.top, left: country.left }}
//                     >
//                       <div className="bm-global-badge">
//                         <svg className="bm-global-triangle" viewBox="0 0 24 24">
//                           <path d="M12 2L22 21H2L12 2Z" fill="white" />
//                         </svg>
//                         <span className="bm-global-country">{country.name}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

        

//           </div>

       

//         </div>

//       </div>
//     </section>
//   );
// };


"use client";

import React from "react";
import { motion } from "framer-motion"; // Import motion
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";
import worldMap from '../../assets/about/Group (2).png';

export const GlobalPresenceSection = () => {
  const countries = [
    { name: "United States of America", top: "40%", left: "30%" },
    { name: "United Kingdom", top: "32%", left: "51%" },
    { name: "Germany", top: "39%", left: "53%" },
    { name: "Israel", top: "46%", left: "55%" },
    { name: "Dubai", top: "51%", left: "60%" },
    { name: "India", top: "56%", left: "67%" },
    { name: "Singapore", top: "60%", left: "74%" },
    { name: "Malaysia", top: "66%", left: "78%" },
    { name: "Australia", top: "78%", left: "77%" },
    { name: "Maldives", top: "65%", left: "65%" },
  ];

  return (
    <section className="bm-global-presence-wrapper">
      <div className="bm-global-presence-section">
        <div className="bm-global-gray-container">
          <div className="bm-global-map-column">
            
            <FadeIn delay={0.1}>
              <h2 className="bm-global-map-heading">Our Global Presence</h2>
            </FadeIn>

            <div className="bm-global-map-container">
              {/* Map Zoom Animation */}
              <motion.div 
                className="bm-global-map-wrapper"
                initial={{ scale: 0.8, opacity: 0 }} // Starts small and invisible
                whileInView={{ scale: 1, opacity: 1 }} // Zooms to normal size
                viewport={{ once: true }} // Only animates once
                transition={{ duration: 1, ease: "easeOut" }} // Takes 1 second
              >
                <Image 
                  src={worldMap}
                  alt="World Map"
                  className="bm-global-map-image"
                  priority
                />
                
                <div className="bm-global-markers">
                  {countries.map((country, index) => (
                    <motion.div 
                      key={index}
                      className="bm-global-marker"
                      style={{ top: country.top, left: country.left }}
                      /* Marker Animation */
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      /* Starts after 1s, then each marker pops up slightly after the previous */
                      transition={{ 
                        delay: 1.2 + (index * 0.1), 
                        duration: 0.5 
                      }}
                    >
                      <div className="bm-global-badge">
                        <svg className="bm-global-triangle" viewBox="0 0 24 24">
                          <path d="M12 2L22 21H2L12 2Z" fill="white" />
                        </svg>
                        <span className="bm-global-country">{country.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};