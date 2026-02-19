"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaChartLine, FaRocket, FaBullseye, FaLightbulb } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Animation components import
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "../animations";
import { TextRevealSimple } from '../animations/text-reveal';
import { FaArrowLeft } from "react-icons/fa";
import '../../style/home/whychoose.css';
import worldMap from '../../assets/HomeSection/Whychoose/Group (3).png';
import GlobalworldMap from '../../assets/HomeSection/Whychoose/Group (4).png';

const WhyChooseUs = () => {
  const [showGlobalMap, setShowGlobalMap] = useState(false);

  // Precision coordinates based on your Global Presence map
  const locations = [
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

  const features = [
    {
      icon: <FaChartLine />,
      title: (<><span>Measurable</span> Business Results</>),
      desc: "We focus on leads, conversions, and revenue not vanity metrics. Every action is tied to real business growth."
    },
    {
      icon: <FaRocket />,
      title: (<>Strategy <span className="highlight-red">Before Execution</span></>),
      desc: "We understand your business and goals before execution, ensuring every effort drives meaningful growth."
    },
    {
      icon: <FaBullseye />,
      title: (<>ROI <span className="highlight-red"> Driven Decisions</span></>),
      desc: "All decisions are based on data and clear benchmarks to maximize return on investment."
    },
    {
      icon: <FaLightbulb />,
      title: (<><span className="highlight-red"> Systems</span> for Growth</>),
      desc: "We build scalable systems that generate steady leads and support long-term business growth."
    }
  ];

  return (
    <section className={`bm-why-section ${showGlobalMap ? 'expanded' : ''}`}>

      <div className=" bm-why-container">
        {
          showGlobalMap && (
            <button
              onClick={() => setShowGlobalMap(!showGlobalMap)}
              className="back-btn"
            >
              {showGlobalMap ? (
                <>
                  <FaArrowLeft className="back-icon" /> Back
                </>
              ) : (
                "View"
              )}
            </button>
          )
        }



        {/* LEFT CONTENT: Only shows when map is NOT expanded */}
        <AnimatePresence mode="wait">
          {!showGlobalMap && (
            <motion.div
              key="content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bm-why-left"
            >
              <FadeIn direction="down" delay={0.1}>
                <p className="bm-why-subtitle">Why Choose us ?</p>
              </FadeIn>

              <TextRevealSimple
                as="h2"
                className="bm-why-main-title"
                text={<span>Brand Mindz 360° <span className='bm-why-main-Sub-title'>Proven Growth Framework</span></span>}
                delay={0.2}
              />

              <StaggerChildren className="bm-why-grid " staggerDelay={0.1} initialDelay={0.3}>
                {features.map((f, i) => (
                  <StaggerItem key={i} className="bm-why-card">
                    <div className="bm-why-card-header">
                      <span className="bm-why-icon">{f.icon}</span>
                      <h4 className="bm-why-card-title">{f.title}</h4>
                    </div>
                    <p className="bm-why-card-desc">{f.desc}</p>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </motion.div>
          )}
        </AnimatePresence>

        {/* RIGHT SIDE: Map and Markers */}
        <motion.div
          layout
          className={`bm-why-right ${showGlobalMap ? 'full-width' : ''}`}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          <div className={`bm-map-wrapper-way ${showGlobalMap ? 'full-width' : ''}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={showGlobalMap ? 'global' : 'simple'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  // src={showGlobalMap ? GlobalworldMap : worldMap}
                  src={GlobalworldMap }

                  alt="Global presence"
                  className={`bm-world-map ${showGlobalMap ? 'full-width' : ''}`}
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Location Markers: Only appear when expanded */}
            <AnimatePresence>
              {showGlobalMap && (
                <div className="bm-markers-layer">
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bm-global-title"
                  >
                    Our Global Presence
                  </motion.h2>

                  {locations.map((loc, idx) => (
                    <motion.div
                      key={loc.name}
                      className="bm-marker"
                      style={{ top: loc.top, left: loc.left }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 2 + (idx * 0.05), type: "spring", stiffness: 100 }}
                    >
                      <div className="marker-dot"></div>
                      <span className="marker-text">{loc.name}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
            {
              !showGlobalMap && (
                <button className="bm-view-btn" onClick={() => setShowGlobalMap(!showGlobalMap)}>
                  {showGlobalMap ? "Back" : "View"}
                </button>
              )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;