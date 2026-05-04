"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/WhyChooseBranding.css";
import Image from 'next/image';

// Import assets from root assets folder
import FrameIcon from "../../../assets/branding/Frame.png";
import GroupIcon from "../../../assets/branding/Group.png";
import Group1Icon from "../../../assets/branding/Group (1).png";

const reasons = [
  {
    number: "1",
    icon: FrameIcon,
    title: "Strategic Positioning",
    desc: "Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
  },
  {
    number: "2",
    icon: GroupIcon,
    title: "Authority-First Approach",
    desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode."
  },
  {
    number: "3",
    icon: Group1Icon,
    title: "Data-Driven Brand Growth",
    desc: "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    number: "1",
    icon:Group1Icon ,
    title: "Strategic Positioning",
    desc: "Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
  },
  {
    number: "2",
    icon: GroupIcon,
    title: "Authority-First Approach",
    desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode."
  },
  {
    number: "3",
    icon: FrameIcon,
    title: "Data-Driven Brand Growth",
    desc: "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  }
];

export const WhyChooseDigitalMarketing = () => {
  return (
    <section className="bm-why-branding-section">
      <div className="bm-why-branding-container">
        <FadeIn direction="up" delay={0.1}>
          <div className="bm-why-branding-header">
            <h2 className="bm-why-branding-title">
              Why Choose Brand Mindz for Personal Branding?
            </h2>
            <p className="bm-why-branding-subtitle">
              Most people post content. <br /> We build structured authority ecosystems that create influence, trust, and opportunity.
            </p>
          </div>
        </FadeIn>

        <div className="bm-why-branding-grid">
          {reasons.map((reason, index) => (
            <FadeIn key={index} direction="up" delay={0.2 + index * 0.1}>
              <div className="bm-why-branding-card">
                <div className="bm-why-branding-number">{reason.number}</div>
                <div className="bm-why-branding-icon-box">
                  <Image src={reason.icon} alt={reason.title} className="bm-why-branding-icon" />
                </div>
                <div className="bm-why-branding-content">
                  <h3 className="bm-why-branding-card-title">{reason.title}</h3>
                  <p className="bm-why-branding-card-desc">{reason.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
