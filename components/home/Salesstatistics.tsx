


"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "../../style/home/ProvenGrowthSection.module.css";
import { TrendingUp, AlertCircle, Layers } from 'lucide-react';
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export default function ProvenGrowthSection() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targetNumber = 587;
  const duration = 2000; // Animation duration in milliseconds (2 seconds)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCountAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.7 } // Triggers when 30% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCountAnimation = () => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Using an easing function (easeOutQuad) for a smoother finish
      const currentCount = Math.floor(progress * targetNumber);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`${styles.headingWrapper} `} >
        <h2 className={styles.heading}>
          Proven Growth Frameworks<br />
          <span>Backed by Real Results</span>
        </h2>
        <p className={styles.headingDesc}>
          Ready for exciting, instantaneous,<br />
           all-accessible insights in real time?
        </p>
      </div>

      <div className={styles.CardOver}>
        <div className={styles.cardsWrapper}>
          <div className={styles.leftCenterContainer}>
            <div className={styles.leftCard}>
              <span className={styles.pillBadge}>Setting up reports</span>
              <h3 className={styles.leftTitle}>
                <span className={styles.italicText}>Supply Chain &</span>
                <br />Delivery Services
              </h3>
              <p className={styles.cardDesc}>
                Brand Mindz Global enables scalable truck taxi driver acquisition in 15 days using data-driven marketing, hyper-local targeting, and performance optimization to deliver qualified driver leads.
              </p>
              <button className={styles.viewButton}>View our case study</button>
            </div>

            <div className={styles.centerCard}>
              <h4 className={styles.mainTitle}>Sales statistic</h4>
              <div className={styles.leadsRow}>
                <div className={styles.iconCircle}><Layers size={25} color="#fff" /></div>
                <div>
                  <p className={styles.statLabel}>Generated Leads</p>
                 <p className={styles.bigNumberGreen}>
  <span className={styles.blackNumber}>{count}</span> + Leads Generated
</p>

                </div>
              </div>

              <div className={styles.chartBox}>
                <div className={styles.chartLeftPane}>
                  <p className={styles.statLabel}>Visit statistics</p>
                  <div className={styles.graphWrapper}>
  <svg viewBox="0 0 120 60" className={styles.graphSvg}>
    <path
      d="M5 50 L35 25 L55 40 L85 15 L115 5"
      fill="none"
      stroke="#F2CF20"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />

    {[ [35, 25], [85, 15], [115, 5] ].map(([x, y], i) => (
      <circle
        key={i}
        cx={x}
        cy={y}
        r="2"
        fill="#1F7A1F"
      />
    ))}
  </svg>
</div>
                  <div className={styles.timeline}>
                    <span>2022</span><span>2023</span><span>2024</span>
                  </div>
                </div>

                <div className={styles.chartRightPane}>
                  <div className={styles.conversionBadge}>
                    <p className={styles.badgeLabel}>Conversion Rate</p>
                    <div className={styles.badgeData}>
                      <span className={styles.badgeValue}>30K</span>
                      <span className={styles.upArrow}>▲</span>
                      <div className={styles.costDetails}>
                        <strong>₹2.72</strong>
                        <small>Cost Per Lead</small>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className={styles.Lead}>
                      <span className={styles.serviceGlobe}>Service:</span> Meta Lead Generation Ads
                    </p>
                     <p className={styles.Lead}>
                      <span className={styles.serviceGlobe}>Campaign Duration:</span> June 2025
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div className={styles.rightCard}>
            <div className={styles.darkBlock}>
              <div className={styles.blockTitle}><span className={styles.arrowIcon} style={{ backgroundColor: '#FFD600' }}>! </span>Problem</div>
              <p className={styles.problemBold}>Driver Acquisition at Scale Is Not Easy</p>
              <p className={styles.redSub}>Truck Taxi faced key challenges:</p>
              <p className={styles.italicQuote}>“We were unable to reach active commercial drivers, costs kept rising due to heavy competition, leads lacked intent, and traditional digital ads proved expensive, inefficient, and unscalable.”</p>
            </div>

            <div className={`${styles.darkBlock} ${styles.solutionBlock}`}>
              <div className={styles.blockTitle}>
                <span className={styles.arrowIcon}><IoIosArrowUp size={20} /></span>
                Solution
              </div>
              <p className={styles.problemBoldsolution}>Brand Mindz Global’s </p>
              <p className={styles.redSubsolution}>Driver First Acquisition strategy</p>
              <ul className={styles.solutionList}>
                <li><FaCheckCircle size={20} color="#22C55E" /> Hyper-targeted Meta Ads focused on driver interests & locations</li>
                <li><FaCheckCircle size={20} color="#22C55E" /> Optimized lead forms for faster submissions</li>
                <li><FaCheckCircle size={20} color="#22C55E" /> Continuous CPL and conversion optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <p className={styles.footerQuote}><span>“We didn't just generate leads. </span> <br />we built a sustainable driver onboarding engine for Truck Taxi.”</p>

        <div className={styles.growthRow}>
          <div className={styles.grewBy}>
            <span className={styles.grewLabel}>Grew by</span>
            {/* The Animated Count */}
            <span className={styles.massiveText}>130%</span>
          </div>
          <p className={styles.footerPara}>
One platform is a comprehensive system of solutions that will be the first step towards digitalization of your business! One platform is a comprehensive system of solutions that will be the first step towards digitalization of your business!          </p>
                    </div>
      </div>
    </section>
  );
}