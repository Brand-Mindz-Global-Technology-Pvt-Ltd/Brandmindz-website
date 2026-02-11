import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import "../../style/aboutus/aboutus.css";
import aboutpic from '../../assets/about/Frame 2147226233 (1).png'

export const AboutFounderContentSection = () => {
  return (
    <section className="bm-about-content-section ">
      <div className="bm-about-container">
        <div className="bm-section-bg">
          <div className="bm-about-grid-founder">
                <div>
                      <FadeIn delay={0.1}>
                {/* AboutUs badge with unique class */}
                <div className="bm-about-badge">
                  <span>About Founder</span>
                </div>
              </FadeIn>
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
            {/* Left Column - Text Content */}
            <div>
            

              <FadeIn delay={0.2}>
                {/* Main heading with unique class */}
                <h2 className="bm-about-heading">
         
                  <span className="bm-text-black">Built By A Founder Who Respects</span>
              
                  <br />
                  <span className="bm-text-gray"> every business as someone’s dream.</span>
                </h2>
              </FadeIn>

              {/* Paragraphs */}
              <div>
                <FadeIn delay={0.3}>
                  <p className="bm-about-paragraph bm-text-black">
                   R. Vasanth Kumar, Founder & CEO of Brand Mindz Global Technology Pvt Ltd, brings over 10 years of experience leading marketing teams in large corporates and mentoring over 20,000 entrepreneurs across India.
Vasanth founded Brand Mindz with a singular mission: to help businesses grow digitally through strategic, outcome-driven approaches. His commitment to accountability and ethical business practices is guided by a personal principle: “Promise what you deliver, and deliver what you promised.”
                  </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <p className="bm-about-paragraph">
                 
                    <span className="bm-text-gray"> Inspired by his own family’s entrepreneurial journey and the challenges faced by startups, Vasanth is passionate about supporting the entrepreneur community. He serves as an official mentor for Mentor TN, a government initiative aimed at nurturing startups and guiding them toward sustainable growth.
Under his leadership, Brand Mindz has become a trusted partner for ethical, value-driven businesses, combining corporate-grade expertise with a mission-driven approach to empower entrepreneurs and create measurable digital impact</span>
                  </p>
                </FadeIn>

             
              </div>
            </div>

            {/* Right Column - Image */}
        

          </div>
        </div>
      </div>
    </section>
  );
};