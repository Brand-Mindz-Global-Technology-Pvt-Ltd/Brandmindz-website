"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../style/home/Various.module.css';
import Image from 'next/image';

import Image1 from '../../assets/HomeSection/various/quote.webp';
import Person1 from '../../assets/HomeSection/various/Person1.webp'
import Person2 from '../../assets/HomeSection/various/Person2.webp'
import Person3 from '../../assets/HomeSection/various/Person3.webp'
import Person4 from '../../assets/HomeSection/various/Person4.webp'
import Person5 from '../../assets/HomeSection/various/Person5.webp'
import Person6 from '../../assets/HomeSection/various/Person6.webp'
import Person7 from '../../assets/HomeSection/various/Person7.webp'
import Person8 from '../../assets/HomeSection/various/Person8.webp'
import Person9 from '../../assets/HomeSection/various/Person9.webp'
import Person10 from '../../assets/HomeSection/various/Person10.webp'
import Person11 from '../../assets/HomeSection/various/Person11.webp'

const initialLeaders = [
  { id: 1, name: "C K Kumaravel", role: "Co-Founder of Naturals", src: Person1, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 2, name: "Sumi Johnson", role: "Founder of Bright Wave", src: Person2, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 3, name: "Alex Rivera", role: "CEO of TechFlow", src: Person3, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 4, name: "Priya Dharshini", role: "Director at Creative Studio", src: Person4, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 5, name: "John Doe", role: "Marketing Lead", src: Person5, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 6, name: "Rahul Sharma", role: "Startup Founder", src: Person6, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 7, name: "Ananya Singh", role: "Brand Strategist", src: Person7, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 8, name: "Vikram Patel", role: "Business Owner", src: Person8, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 9, name: "Meera Nair", role: "Product Manager", src: Person9, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 10, name: "David Lee", role: "Tech Consultant", src: Person10, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 11, name: "Aarthi Kumar", role: "Entrepreneur", src: Person11, quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." }
];

const Various = () => {
  const [gridData, setGridData] = useState(initialLeaders);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayCounter = useRef(1); // To keep track of the next one to bring to center

  // The center image is always index 0
  const active = gridData[0];

  const performSwap = (indexToSwap) => {
    setGridData((prev) => {
      const newData = [...prev];
      const temp = newData[0]; // Current Center
      newData[0] = newData[indexToSwap]; // New Center
      newData[indexToSwap] = temp; // Old Center goes to side
      return newData;
    });
  };

  // Auto-switch Logic
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        // Swap center with the next sequential item
        performSwap(autoPlayCounter.current);
        // Increment counter or reset to 1
        autoPlayCounter.current = autoPlayCounter.current >= gridData.length - 1 ? 1 : autoPlayCounter.current + 1;
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, gridData.length]);

  const handleManualClick = (index) => {
    setIsAutoPlay(false);
    performSwap(index);
    
    // Restart autoplay after 8 seconds
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const renderSideItem = (index) => {
    const item = gridData[index];
    return (
      <motion.div
        layout // This makes the swap look smooth
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