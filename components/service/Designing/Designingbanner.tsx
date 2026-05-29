"use client";

import React, { useEffect, useState } from "react";
import "../../../style/home/banner.css";
import "../../../style/aboutus/aboutus.css";
import { FaBolt } from "react-icons/fa6";
import { FadeIn } from "@/components/animations/fade-in";
import { LogoNewsTicker } from "../../aboutus/LogoNewsTicker";
import { DesigningTabs } from "./DesigningTabs";

export const DesigningService = ({ activeTabKey, setActiveTabKey }: { activeTabKey: any, setActiveTabKey: any }) => {
  const words = ["Understand Your Vision"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="bm-hero-section-contact ">
      <FadeIn delay={0.1}>
        <div className="bm-hero-badge">
          <span className="bm-hero-badge__icon">
            <FaBolt size={19} color="black" />
          </span>
          <p className="bm-hero-badge__text">
            Trusted Creative Design Partner
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="bm-hero-title" style={{maxWidth:"90%"}}>
            
          <span className="text-black">Design Driven Creative </span>
          <span className="text-grey"> Solutions Built  </span>
          {/* <br /> */}
          <span className="text-black">For Your  </span>
          <span className="text-yellow"> Growth</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="bm-hero-description  bm-hero-description-branding">
         Strategic design and execution by expert creatives delivering impactful visuals that enhance brand perception and engagement. </p>
      </FadeIn>

      <LogoNewsTicker />
      <DesigningTabs activeTabKey={activeTabKey} setActiveTabKey={setActiveTabKey} />

    </section>
  );
};
