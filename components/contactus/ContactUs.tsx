


"use client";

import React, { useEffect, useState } from "react";
import "../../style/home/banner.css";
import "../../style/aboutus/aboutus.css";
import { FaBolt } from "react-icons/fa6";
import { FadeIn } from "@/components/animations/fade-in";
import { motion, AnimatePresence } from "framer-motion";
import { ContactCardsSection } from './Contactuscards'
import { LogoNewsTicker } from "../aboutus/LogoNewsTicker"; // Import here

export const ContactUs = () => {
  const words = ["Understand Your Business"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="bm-hero-section-contact ">
      {/* Your existing text content - NO CHANGES */}
      {/* <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>
          <p className="bm-hero-badge__text">
            India's Leading Marketing Agency
          </p>
        </div>
      </FadeIn> */}

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title">


          <span className="text-grey">Talk to Experts </span>
          <br />
          <span className="text-black">Who </span>
          <span className="               text-yellow
"> Understand Your Business</span>

      
        </h1>
      </FadeIn>



      <LogoNewsTicker />
      <ContactCardsSection />

    </section>
  );
};