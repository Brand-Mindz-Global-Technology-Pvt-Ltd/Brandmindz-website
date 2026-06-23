"use client";

import React, { useState, useRef, useEffect } from "react";
import "../../../style/branding/BrandingAbout.css";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight } from "lucide-react";

import founderImg from "../../../assets/branding/Braddingabount.png";

export const Designingabout = ({ data }: { data: any }) => {
  const [activeTab, setActiveTab] = useState(data?.menuItems?.[0]?.id || 1);

  useEffect(() => {
    if (data?.menuItems?.length > 0) {
      setActiveTab(data.menuItems[0].id);
    }
  }, [data]);

  const menuItems = data?.menuItems || [];

  const current = menuItems.find((item: any) => item.id === activeTab) || menuItems[0];

  if (!data || !current) return null;

  const ScrollLine = ({ content }) => {
    const [isPassed, setIsPassed] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const triggerPoint = window.innerHeight * 0.5;
          setIsPassed(rect.top < triggerPoint);
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <span
        ref={ref}
        className={`bm-scroll-line-branding ${isPassed ? "active" : ""}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  const ScrollParagraph = ({ text }) => {
    const lines = text.split(/(?<=\. )/g);
    return (
      <p className="bm-about-paragraph-branding">
        {lines.map((line, idx) => (
          <ScrollLine key={idx} content={line} />
        ))}
      </p>
    );
  };

  return (
    <section className="bm-about-section-branding">
      <div className="bm-about-container-branding">
        {/* Sidebar - 20% width via CSS */}
        <div className="bm-about-sidebar-branding">
          <ul className="bm-about-menu-branding">
            {menuItems.map((item: any) => (
              <li
                key={item.id}
                className={`bm-about-menu-item-branding ${activeTab === item.id ? "active" : ""}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="bm-about-id-branding">{item.id.toString().padStart(2, "0")}</span>
                <span className="bm-about-label-branding">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="bm-about-content-wrapper-branding">
          <FadeIn key={activeTab} delay={0.2}>
            <div className="bm-standard-layout-branding">
              <div className="bm-about-text-side-branding">
                <p className="bm-about-subtitle-branding">{current.subtitle}</p>
                <h2
                  className="bm-about-main-title-branding"
                  dangerouslySetInnerHTML={{ __html: current.title }}
                ></h2>
                
                <div className="bm-about-description-branding">
                  {current.desc.map((text: any, index: number) => (
                    <ScrollParagraph key={index} text={text} />
                  ))}
                </div>

                {current.btn && (
                  
                  <button className="bm-about-learn-btn-branding">
                                     <div className="bm-btn-icon-branding">
                                       <ArrowRight size={18} />
                                     </div>
                                     <div>
                                     Learn<span> More</span>
                                     </div>
                                   </button>
                )}
              </div>

              <div className="bm-about-image-side-branding">
                <div className="bm-about-quote-container-branding">
                  <svg className="bm-about-quote-icon-branding" viewBox="0 0 78 74" fill="currentColor">
                    <path d="M19.5 0C8.73 0 0 8.73 0 19.5V74H34V39.5H14.5V19.5C14.5 16.74 16.74 14.5 19.5 14.5H34V0H19.5ZM63.5 0C52.73 0 44 8.73 44 19.5V74H78V39.5H58.5V19.5C58.5 16.74 60.74 14.5 63.5 14.5H78V0H63.5Z" />
                  </svg>
                  {/* <h4 className="bm-about-quote-text-branding" dangerouslySetInnerHTML={{ __html: current.quoteLine1 }}></h4>
                  <h4 className="bm-about-quote-text-branding" dangerouslySetInnerHTML={{ __html: current.quoteLine2 }}></h4>  */}
                  <h4 className="bm-about-quote-text-branding"><span className='bm-grey-text '>Your</span> Startup Is Your Product.</h4>
                  <h4 className="bm-about-quote-text-branding">You <span className='bm-grey-text'>are</span> the <span className='bm-grey-text'>Brand.</span></h4>
                </div>
                
                <div className="bm-about-img-frame-branding">
                  <Image src={current.img} alt={current.label} priority width={379} height={541} />
                  <div className="bm-about-quote-overlay-branding">
                    {/* {current.quoteOverlay} */} Persona crafting
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};


