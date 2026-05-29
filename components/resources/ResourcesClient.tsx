"use client";

import React, { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/fade-in";
import { FaBolt } from "react-icons/fa6";
import { FiSearch, FiX } from "react-icons/fi";
import { ResourcesDirectory } from "./ResourcesDirectory";
import { ResourcesTestimonials } from "./ResourcesTestimonials";
import { ResourcesForm } from "./ResourcesForm";
import "../../style/resources/resources.css";

export const ResourcesClient = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState("ALL");

  const alphabet = [
    "ALL", "#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  return (
    <div className="resources-main-container">
      {/* Premium Header */}
      <Header />

      <main>
        {/* Banner Section (1st Section) */}
        <section className="bm-hero-section-resources">
          <FadeIn delay={0.1}>
            <div className="bm-resources-badge">
              <span className="bm-resources-badge__icon">
                <FaBolt size={16} color="black" />
              </span>
              <p className="bm-resources-badge__text">The Best Knowledge Hub</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h1 className="bm-resources-hero-title">
              <span className="text-grey">Understanding </span>
              <span className="text-black">Clearly.</span>
              <br />
              <span className="text-black">Defining </span>
              <span className="text-yellow">Simply</span>
            </h1>
          </FadeIn>

          {/* Interactive Search Bar Inside Banner */}
          <FadeIn delay={0.4} direction="up" distance={20}>
            <div className="glossary-search-wrapper">
              <input
                type="text"
                className="glossary-search-bar"
                placeholder="Search glossary terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery ? (
                <button
                  className="glossary-search-btn"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <FiX size={20} />
                </button>
              ) : (
                <button className="glossary-search-btn" aria-label="Search">
                  <FiSearch size={20} />
                </button>
              )}
            </div>
          </FadeIn>

          {/* Alphabet Scroll Navigator Inside Banner */}
          <FadeIn delay={0.45} direction="up" distance={15}>
            <div className="alphabet-navigation-container">
              <div className="alphabet-navigation">
                {alphabet.map((letter) => {
                  const isLetterActive = activeLetter === letter;
                  return (
                    <React.Fragment key={letter}>
                      {letter === "A" && <span className="alphabet-divider" />}
                      <button
                        onClick={() => setActiveLetter(letter)}
                        className={`alphabet-letter ${isLetterActive ? "active" : ""}`}
                      >
                        {letter}
                      </button>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Glossary Multi-column Directory Grid (2nd Section - Separate) */}
        <ResourcesDirectory searchQuery={searchQuery} activeLetter={activeLetter} />

        {/* Premium Guides Section Removed per Request */}

        {/* Testimonials (3rd Section - Separate, Duplicated from Contact Page) */}
        <ResourcesTestimonials />

        {/* Lead/Contact Form (4th Section - Separate, Duplicated from Contact Page) */}
        <div id="resources-contact-form">
          <ResourcesForm />
        </div>
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
};
