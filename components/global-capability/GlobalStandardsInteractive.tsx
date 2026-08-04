"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import globalWorldMap from "@/assets/HomeSection/Whychoose/group4.webp";

type GlobalStandardsInteractiveProps = {
  points: string[];
};

const standardsDescription =
  "We follow structured SOPs, defined KPIs, performance reporting frameworks, and disciplined communication cycles to ensure consistency across regions. This systematic approach enables us to deliver predictable results while scaling operations across multiple markets.";

const globalLocations = [
  { name: "United States of America", top: "42%", left: "27%" },
  { name: "United Kingdom", top: "35%", left: "48%" },
  { name: "Germany", top: "41%", left: "53%" },
  { name: "Israel", top: "48%", left: "54%" },
  { name: "Dubai", top: "52%", left: "59%" },
  { name: "India", top: "58%", left: "66%" },
  { name: "Maldives", top: "68%", left: "63%" },
  { name: "Singapore", top: "62%", left: "74%" },
  { name: "Malaysia", top: "68%", left: "76%" },
  { name: "Australia", top: "78%", left: "81%" },
];

export default function GlobalStandardsInteractive({ points }: GlobalStandardsInteractiveProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsExpanded(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isExpanded]);

  return (
    <>
      <section className="gc-section gc-standards-section">
        <div className="gc-container gc-standards-framework">
          <div className="gc-standards-content">
            <div className="gc-standards-box">
              <h2 className="gc-standards-title">How we maintain global standards</h2>
              <p className="gc-standards-text">{standardsDescription}</p>
            </div>

            <div className="gc-point-grid grid gap-4 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point} className="gc-point-item flex min-w-0 items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-center text-base font-bold leading-6 text-zinc-950 shadow-sm sm:text-lg" style={{ minHeight: "72px" }}>
                  <span className="gc-point-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ffdb00] text-black">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span className="gc-point-label min-w-0 wrap-break-word">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="gc-standards-map" aria-hidden="true">
            <Image src={globalWorldMap} alt="" />
          </div>

          <button type="button" className="gc-standards-view-button" onClick={() => setIsExpanded(true)} aria-label="View global presence">
            View
          </button>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div key="global-standards-expanded" className="gc-standards-expanded" role="dialog" aria-modal="true" aria-labelledby="gc-expanded-presence-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
            <motion.button type="button" className="gc-standards-back-button" onClick={() => setIsExpanded(false)} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }}>
              <ArrowLeft size={22} aria-hidden="true" />
              <span>Back</span>
            </motion.button>

            <motion.div className="gc-standards-expanded-heading" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, delay: 0.35 }}>
              <h2 id="gc-expanded-presence-title">Our Global Presence</h2>
            </motion.div>

            <div className="gc-standards-expanded-map">
              <motion.div className="gc-standards-expanded-map-motion" initial={{ opacity: 0, scale: 1.2 }} animate={{ opacity: 1, scale: 0.9 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
                <Image src={globalWorldMap} alt="" priority />
              </motion.div>

              <div className="gc-standards-expanded-markers">
                {globalLocations.map((location, index) => (
                  <motion.div key={location.name} className="gc-standards-marker" style={{ top: location.top, left: location.left }} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ delay: 2 + index * 0.1, type: "spring", stiffness: 100 }}>
                    <span className="gc-location-triangle" aria-hidden="true" />
                    <span>{location.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
