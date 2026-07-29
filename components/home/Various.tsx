"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../style/home/Various.module.css';
import Image from 'next/image';

import Image1 from '../../assets/HomeSection/various/quote.webp';
import VasuKarthick from '../../assets/HomeSection/various/vasu-karthick.webp';
import PraveenSpaceman from '../../assets/HomeSection/various/praveen-spaceman.webp';
import NoelImg from '../../assets/HomeSection/various/noel.webp';
import MenagaBioneem from '../../assets/HomeSection/various/menaga-bioneem.webp';
import MariaSubiRajan from '../../assets/HomeSection/various/maria-subi-rajan.webp';
import Kannan7Stars from '../../assets/HomeSection/various/kannan-7stars.webp';
import KalpanaShakthivel from '../../assets/HomeSection/various/kalpana-shakthivel.webp';
import CkKumaravel from '../../assets/HomeSection/various/ckkumaravel.webp';
const initialLeaders = [
  { id: 1, name: "Vasu Karthick", role: "Magic 20", src: VasuKarthick, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 2, name: "Praveen", role: "Spaceman carft", src: PraveenSpaceman, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 3, name: "Noel", role: "Truck Taxi", src: NoelImg, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 4, name: "Menaga", role: "Bioneem tech", src: MenagaBioneem, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 5, name: "Maria Subi rajan", role: "She the shakthi", src: MariaSubiRajan, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 6, name: "Kannan", role: "Seven stars", src: Kannan7Stars, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 7, name: "Kalpana Shakthivel", role: "The HR Scope", src: KalpanaShakthivel, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 8, name: "C K Kumaravel", role: "Co-Founder of Naturals", src: CkKumaravel, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." }
];

const Various = () => {
  const [gridData, setGridData] = useState(initialLeaders);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayCounter = useRef(1); // To keep track of the next one to bring to center

  // The center image is always index 0
  const active = gridData[0] ?? initialLeaders[0];

  const getItemForPosition = (positionIndex: number) => {
    if (!gridData.length) return null;
    return gridData[positionIndex % gridData.length] ?? null;
  };

  const performSwap = (indexToSwap: number) => {
    if (!gridData.length) return;

    const safeIndex = indexToSwap % gridData.length;

    setGridData((prev) => {
      if (!prev.length) return prev;

      const newData = [...prev];
      const temp = newData[0]; // Current Center
      newData[0] = newData[safeIndex]; // New Center
      newData[safeIndex] = temp; // Old Center goes to side
      return newData;
    });
  };

  // Auto-switch Logic
  useEffect(() => {
    if (!isAutoPlay || !gridData.length) return undefined;

    const interval = setInterval(() => {
      const nextIndex = autoPlayCounter.current % Math.max(gridData.length - 1, 1);
      performSwap(nextIndex + 1);
      autoPlayCounter.current = (nextIndex + 1) % Math.max(gridData.length - 1, 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, gridData.length]);

  const handleManualClick = (index: number) => {
    setIsAutoPlay(false);
    performSwap(index);

    window.setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const renderSideItem = (index: number) => {
    const item = getItemForPosition(index);

    if (!item) return null;

    return (
      <motion.div
        layout
        key={item.id}
        className={`${styles.gridItem} ${styles.faded}`}
        onClick={() => handleManualClick(index)}
      >
        <Image src={item.src} alt={item.name} width={120} height={120} className={styles.personImg}priority />
      </motion.div>
    );
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.mainHeading}>
          Trusted by leaders <span>from<br /> various industries</span>
        </h2>
      </div>

      <div className={styles.masonryGrid}>
        {/* Left Column 1 */}
        <div className={styles.column} style={{ paddingTop: '100px' }}>
          {renderSideItem(1)} {renderSideItem(2)}
        </div>
        {/* Left Column 2 */}
        <div className={styles.column} style={{ paddingTop: '0px' }}>
          {renderSideItem(3)} {renderSideItem(4)}
        </div>
        {/* Left Column 3 */}
        <div className={styles.column} style={{ paddingTop: '170px' }}>
          {renderSideItem(5)}
        </div>

        {/* CENTER COLUMN (Always gridData[0]) */}
        <div className={styles.column} style={{ paddingTop: '260px' }}>
          <motion.div layout key="center-slot" className={`${styles.gridItem} ${styles.large} ${styles.activeCard}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={styles.activeWrapper}
              >
                <div className={styles.activeImageRing}>
                   <Image src={active.src} alt={active.name} width={220} height={220} className={styles.activeImg} priority />
                </div>
                <div className={styles.leaderLabel}>
                  <h4>{active.name}</h4>
                  <p>{active.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Columns */}
        <div className={styles.column} style={{ paddingTop: '170px' }}>
          {renderSideItem(6)}
        </div>
        <div className={styles.column} style={{ paddingTop: '0px' }}>
          {renderSideItem(7)} {renderSideItem(8)}
        </div>
        <div className={styles.column} style={{ paddingTop: '100px' }}>
          {renderSideItem(9)} {renderSideItem(10)}
        </div>
      </div>

      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialOverlay}>
          <div className={styles.testimonialCard}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className={styles.quoteIconContainer}>
                  <Image src={Image1} alt="quote" width={40} height={40}  className={styles.quoteIcon}/>
                  <p className={styles.testimonialLabel}>Testimonials</p>
                </div>
                <p className={styles.testimonialText}>{active.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <p className={styles.authorName}>- {active.name}</p>
                  <p className={styles.authorRole}>{active.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Various;