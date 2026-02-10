"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../style/home/Various.module.css';
import Image from 'next/image'
 import Image1 from '../../assets/HomeSection/various/“.png'
const leadersData = [
  { id: 1, name: "C K Kumaravel", role: "Co-Founder of Naturals", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", quote: "The team delivered a stunning website that exceeded our expectations. Their creativity and attention to detail made the entire process effortless." },
  { id: 2, name: "Sumi Johnson", role: "Founder of Bright Wave", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", quote: "Their attention to detail and creative vision transformed our digital presence completely. Effortless process!" },
  { id: 3, name: "Alex Rivera", role: "CEO of TechFlow", src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400", quote: "Professionalism and speed are their core strengths. Highly recommended for any scaling business." },
  { id: 4, name: "Priya Dharshini", role: "Director at Creative Studio", src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", quote: "Working with them was a breeze. They understood our brand identity perfectly and delivered on time." },
  { id: 5, name: "John Doe", role: "Marketing Lead", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400", quote: "Incredible results and a very professional team to work with." }
];

const Various = () => {
  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % leadersData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const handleImageClick = (clickedId) => {
    setIsAutoPlay(false); // Stop auto-rotation when user interacts
    const newIndex = leadersData.findIndex(item => item.id === clickedId);
    setIndex(newIndex);
  };

  const active = leadersData[index];

  // Helper to render grid items
  const renderItem = (dataIdx, isFaded = true) => {
    const item = leadersData[dataIdx % leadersData.length];
    return (
      <div 
        className={`${styles.gridItem} ${isFaded ? styles.faded : ''}`} 
        onClick={() => handleImageClick(item.id)}
      >
        <img src={item.src} alt="" />
      </div>
    );
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.mainHeading}>
          Trusted by leaders <span>from<br/> various industries</span>
        </h2>
      </div>

      <div className={styles.masonryGrid}>
        {/* Column 1: Two Images */}
        <div className={styles.column} style={{ paddingTop: '40px' }}>
          {renderItem(1)}
          {renderItem(2)}
        </div>

        {/* Column 2: Two Images */}
        <div className={styles.column} style={{ paddingTop: '0px' }}>
          {renderItem(3)}
          {renderItem(4)}
        </div>

        {/* Column 3: Single Image */}
        <div className={styles.column} style={{ paddingTop: '140px' }}>
          {renderItem(0)}
        </div>

        {/* Column 4: CENTER ACTIVE IMAGE */}
        <div className={styles.column} style={{ paddingTop: '190px' }}>
          <div className={`${styles.gridItem} ${styles.large} ${styles.activeCard}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={styles.activeWrapper}
              >
                <img src={active.src} alt={active.name} />
                <div className={styles.leaderLabel}>
                  <h4>{active.name}</h4>
                  <p>{active.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Column 5: Single Image */}
        <div className={styles.column} style={{ paddingTop: '140px' }}>
          {renderItem(1)}
        </div>

        {/* Column 6: Two Images */}
        <div className={styles.column} style={{ paddingTop: '0px' }}>
          {renderItem(2)}
          {renderItem(3)}
        </div>

        {/* Column 7: Two Images */}
        <div className={styles.column} style={{ paddingTop: '40px' }}>
          {renderItem(4)}
          {renderItem(0)}
        </div>
      </div>

     
      <div className={styles.testimonialContainer}>

      <div className={styles.testimonialOverlay}>
        <div className={styles.testimonialCard}>
          <div className={styles.quoteIconContainer}>
            <Image
              src={Image1}
              alt="quote"
              width={40}
              height={40}
              className={styles.quoteIcon}
              priority
            />
          <p className={styles.testimonialLabel}>Testimonials</p>
          </div>
          <p className={styles.testimonialText}>
            {active.quote}
          </p>
          <div className={styles.testimonialAuthor}>
            <p className={styles.authorName}>- {active.name}</p>
            <p className={styles.authorRole}>{active.role}</p>
          </div>
        </div>
      </div>
      </div>


    </section>
  );
};

export default Various;