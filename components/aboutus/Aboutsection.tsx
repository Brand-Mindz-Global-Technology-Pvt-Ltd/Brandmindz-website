import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";
import aboutpic from '../../assets/about/Frame 2147226233.png'

export const AboutContentSection = () => {
  return (
    <section className="bm-about-content-section">
      <div className="bm-about-container">
        <div className="bm-section-bg">
          <div className="bm-about-grid">
            
            {/* Left Column - Text Content */}
            <div>
              <FadeIn delay={0.1}>
                {/* AboutUs badge with unique class */}
                <div className="bm-about-badge">
                  <span>About Us</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                {/* Main heading with unique class */}
                <h2 className="bm-about-heading">
                  <span className="bm-text-black">We Work As A Results Partner,</span>
                  <span className="bm-text-gray"> not a service vendor,</span>
                  <br />
                  <span className="bm-text-gray">focusing only on </span>
                  <span className="bm-text-black">What Moves Your Revenue Forward.</span>
                </h2>
              </FadeIn>

              {/* Paragraphs */}
              <div>
                <FadeIn delay={0.3}>
                  <p className="bm-about-paragraph bm-text-black">
                    Brand Mindz Global Technology Pvt Ltd is a full-stack marketing agency built to help businesses grow with clarity, structure, and accountability. We work at the intersection of design, marketing, and technology, enabling brands to build strong digital foundations and scale with confidence.
                  </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <p className="bm-about-paragraph">
                    <span className="bm-text-black">Our approach is strategy-led and execution-focused. Every engagement is driven by clear objectives, disciplined processes, and measurable outcomes.</span>
                    <span className="bm-text-gray"> We partner with startups, growing businesses, and enterprises that value long-term thinking, ethical practices, and consistency in delivery.</span>
                  </p>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <p className="bm-about-paragraph">
                    <span className="bm-text-gray">Brand Mindz is a Government of India–registered company, a DPIIT-recognized startup, and is incubated at StartupTN, operating with complete statutory and legal compliance. As a trademarked brand, we follow structured governance and professional delivery standards across all engagements.</span>
                    <br /><br />
                    <span className="bm-text-gray">We believe in quality over volume and work only with businesses that demonstrate commitment and integrity.</span>
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <FadeIn delay={0.6}>
                <div className="bm-about-image-container">
                  {/* Next.js Image component with correct props */}
                  <Image 
                    src={aboutpic} 
                    alt="About Brand Mindz"
                    className="w-full h-full object-cover"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};