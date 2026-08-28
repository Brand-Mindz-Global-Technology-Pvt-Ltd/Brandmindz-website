"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { FadeIn } from "@/components/animations/fade-in";

import { tirunelveliAppDevelopmentData } from "@/lib/tirunelveli-app-development";

import "../../../style/home/faq.css";

export const TirunelveliAppDevelopmentFAQ = () => {
  const { faq } = tirunelveliAppDevelopmentData;

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // Split FAQ items into two columns
  const leftColumn = faq.items.slice(0, 4);
  const rightColumn = faq.items.slice(4);

  return (
    <section className="bm-faq-section">

      {/* FAQ Header */}
      <FadeIn direction="up" delay={0.1}>
        <div className="bm-faq-header">

          <p className="bm-faq-subtitle">
            Frequently Asked Questions
          </p>

          <h2 className="bm-faq-title">
            {faq.title}
          </h2>

        </div>
      </FadeIn>

      {/* FAQ Grid */}
      <div className="bm-faq-grid">

        {/* Left Column */}
        <div className="bm-faq-col">

          {leftColumn.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <FadeIn
                key={item.question}
                direction="up"
                delay={0.05 + index * 0.03}
              >
                <div
                  className={`bm-faq-item ${
                    isOpen ? "active" : ""
                  }`}
                  onClick={() =>
                    setActiveIndex(
                      isOpen ? null : index
                    )
                  }
                >

                  <div className="bm-faq-q-box">

                    <span>
                      {item.question}
                    </span>

                    {isOpen ? (
                      <FiChevronUp size={22} />
                    ) : (
                      <FiChevronDown size={22} />
                    )}

                  </div>

                  {isOpen && (
                    <div className="bm-faq-a-box">
                      <p>{item.answer}</p>
                    </div>
                  )}

                </div>
              </FadeIn>
            );
          })}

        </div>

        {/* Right Column */}
        <div className="bm-faq-col">

          {rightColumn.map((item, index) => {
            const actualIndex = index + 4;
            const isOpen = activeIndex === actualIndex;

            return (
              <FadeIn
                key={item.question}
                direction="up"
                delay={0.05 + actualIndex * 0.03}
              >
                <div
                  className={`bm-faq-item ${
                    isOpen ? "active" : ""
                  }`}
                  onClick={() =>
                    setActiveIndex(
                      isOpen ? null : actualIndex
                    )
                  }
                >

                  <div className="bm-faq-q-box">

                    <span>
                      {item.question}
                    </span>

                    {isOpen ? (
                      <FiChevronUp size={22} />
                    ) : (
                      <FiChevronDown size={22} />
                    )}

                  </div>

                  {isOpen && (
                    <div className="bm-faq-a-box">
                      <p>{item.answer}</p>
                    </div>
                  )}

                </div>
              </FadeIn>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default TirunelveliAppDevelopmentFAQ;