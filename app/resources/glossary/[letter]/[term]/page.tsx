"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { UPDATED_GLOSSARY_TERMS } from "@/components/resources/ResourcesDirectory";
import {
  FiHome,
  FiSearch,
  FiBookOpen,
  FiChevronRight,
  FiCheck,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { FaLightbulb } from "react-icons/fa";
import "../../../../../style/resources/glossary-definition.css";

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const decodeRouteValue = (value: string) => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

interface ParsedDefinition {
  mainDefinition: string;
  whyItMatters: string[];
  exampleText: string;
  steps: string[];
  mistakes: string[];
  formula: string;
  relatedTerms: string[];
  ctaText: string;
  miniQA: { q: string; a: string }[];
}

function parseDefinition(definition: string): ParsedDefinition {
  const lines = definition.split("\n").map((line) => line.trim()).filter(Boolean);

  let mainDefinition = "";
  const whyItMatters: string[] = [];
  let exampleText = "";
  const steps: string[] = [];
  const mistakes: string[] = [];
  let formula = "";
  const relatedTerms: string[] = [];
  let ctaText = "";
  const miniQA: { q: string; a: string }[] = [];

  let currentSection = "main";
  let pendingQ = "";

  for (const line of lines) {
    if (line === "Why it matters") {
      currentSection = "whyItMatters";
      continue;
    }
    if (line === "Example") {
      currentSection = "example";
      continue;
    }
    if (line === "Steps") {
      currentSection = "steps";
      continue;
    }
    if (line === "Formula") {
      currentSection = "formula";
      continue;
    }
    if (line === "Common mistakes") {
      currentSection = "mistakes";
      continue;
    }
    if (line === "Related terms") {
      currentSection = "relatedTerms";
      continue;
    }
    if (line.startsWith("CTA:")) {
      ctaText = line.replace(/^CTA:\s*/, "");
      continue;
    }
    if (line === "Mini Q&A") {
      currentSection = "miniQA";
      continue;
    }

    if (currentSection === "main") {
      mainDefinition += (mainDefinition ? " " : "") + line;
    } else if (currentSection === "whyItMatters") {
      whyItMatters.push(line);
    } else if (currentSection === "example") {
      exampleText += (exampleText ? " " : "") + line;
    } else if (currentSection === "steps") {
      steps.push(line);
    } else if (currentSection === "formula") {
      formula += (formula ? "\n" : "") + line;
    } else if (currentSection === "mistakes") {
      mistakes.push(line);
    } else if (currentSection === "relatedTerms") {
      const splitTerms = line.split(",").map((t) => t.trim()).filter(Boolean);
      relatedTerms.push(...splitTerms);
    } else if (currentSection === "miniQA") {
      if (!pendingQ) {
        pendingQ = line;
      } else {
        miniQA.push({ q: pendingQ, a: line });
        pendingQ = "";
      }
    }
  }

  return {
    mainDefinition: mainDefinition || definition,
    whyItMatters,
    exampleText,
    steps,
    formula,
    mistakes,
    relatedTerms,
    ctaText,
    miniQA,
  };
}

export default function GlossaryDefinitionPage() {
  const params = useParams<{ letter: string; term: string }>();
  const router = useRouter();
  const letter = decodeRouteValue(params.letter).toUpperCase();
  const selectedTerm = decodeRouteValue(params.term);

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const letterTerms = UPDATED_GLOSSARY_TERMS[letter] || [];

  const activeItem = useMemo(
    () => letterTerms.find((item) => item.term.toLowerCase() === selectedTerm.toLowerCase()) || letterTerms[0],
    [letterTerms, selectedTerm]
  );

  const parsed = useMemo(() => {
    return activeItem?.definition
      ? parseDefinition(activeItem.definition)
      : {
          mainDefinition: "Definition content will be updated soon.",
          whyItMatters: [],
          exampleText: "",
          steps: [],
          mistakes: [],
          formula: "",
          relatedTerms: [],
          ctaText: "",
          miniQA: [],
        };
  }, [activeItem]);

  // All terms for global search
  const allTerms = useMemo(() => {
    const list: { letter: string; term: string }[] = [];
    Object.entries(UPDATED_GLOSSARY_TERMS).forEach(([l, terms]) => {
      terms.forEach((t) => list.push({ letter: l, term: t.term }));
    });
    return list;
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allTerms.filter((item) => item.term.toLowerCase().includes(q)).slice(0, 8);
  }, [searchQuery, allTerms]);

  // Click outside search to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!letterTerms || letterTerms.length === 0 || !activeItem) {
    notFound();
  }

  const openTerm = (targetLetter: string, term: string) => {
    router.push(`/resources/glossary/${encodeURIComponent(targetLetter)}/${encodeURIComponent(term)}`);
  };

  const handleLetterClick = (targetLetter: string) => {
    const targetTerms = UPDATED_GLOSSARY_TERMS[targetLetter];
    if (targetTerms && targetTerms.length > 0) {
      openTerm(targetLetter, targetTerms[0].term);
    }
  };

  // Previous and Next term calculation
  const currentIndex = letterTerms.findIndex(
    (item) => item.term.toLowerCase() === activeItem.term.toLowerCase()
  );

  // For A/B Testing specifically, match the screenshot mockup (API as prev, ARR as next)
  // For other terms, navigate linearly through letter terms
  const isAbTesting = activeItem.term.toLowerCase().startsWith("a/b testing");

  const prevTerm = isAbTesting
    ? letterTerms[1] || null
    : currentIndex > 0
    ? letterTerms[currentIndex - 1]
    : letterTerms[letterTerms.length - 1];

  const nextTerm = isAbTesting
    ? letterTerms[2] || null
    : currentIndex < letterTerms.length - 1
    ? letterTerms[currentIndex + 1]
    : letterTerms[0];

  const handleRelatedClick = (relatedName: string) => {
    const clean = relatedName.trim().toLowerCase();
    // 1. Exact match
    let found = allTerms.find((item) => item.term.toLowerCase() === clean);
    // 2. Acronym or prefix match (e.g. "CRO" or "CTR")
    if (!found) {
      found = allTerms.find(
        (item) =>
          item.term.toLowerCase().startsWith(clean + " ") ||
          item.term.toLowerCase().startsWith(clean + "(") ||
          item.term.toLowerCase().includes(`(${clean})`) ||
          item.term.toLowerCase().startsWith(clean)
      );
    }
    // 3. Fallback: match if clean starts with item.term
    if (!found) {
      found = allTerms.find((item) => clean.startsWith(item.term.toLowerCase()));
    }

    if (found) {
      openTerm(found.letter, found.term);
    } else {
      const firstLetter = relatedName.trim().charAt(0).toUpperCase();
      if (UPDATED_GLOSSARY_TERMS[firstLetter]?.length) {
        openTerm(firstLetter, UPDATED_GLOSSARY_TERMS[firstLetter][0].term);
      }
    }
  };

  return (
    <>
      <Header />
      <main className="marketing-glossary-page">
        <div className="marketing-glossary-inner">
          {/* Breadcrumb Navigation */}
          <nav className="marketing-glossary-breadcrumb" aria-label="Breadcrumb">
            <Link href="/" className="marketing-glossary-breadcrumb-home" aria-label="Home">
              <FiHome />
            </Link>
            <span className="marketing-glossary-breadcrumb-sep">&gt;</span>
            <Link href="/resources" className="marketing-glossary-breadcrumb-link">
              Resources
            </Link>
            <span className="marketing-glossary-breadcrumb-slash">/</span>
            <span className="marketing-glossary-breadcrumb-current">Marketing Glossary</span>
          </nav>

          {/* Header and Introduction */}
          <header className="marketing-glossary-header">
            <div className="marketing-glossary-header-bg" aria-hidden="true" />
            <div className="marketing-glossary-header-left">
              <div className="marketing-glossary-header-title-row">
                <div className="marketing-glossary-book-icon" aria-hidden="true">
                  <FiBookOpen />
                </div>
                <h1 className="marketing-glossary-title">Marketing Glossary</h1>
              </div>
              <p className="marketing-glossary-subtitle">
                Explore key marketing terms and concepts to build your digital knowledge and make smarter business decisions.
              </p>
            </div>

            <div className="marketing-glossary-header-right" ref={searchContainerRef}>
              <div className="marketing-glossary-search-box">
                <FiSearch className="marketing-glossary-search-icon" aria-hidden="true" />
                <input
                  type="text"
                  className="marketing-glossary-search-input"
                  placeholder="Search marketing terms..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchResults.length > 0) {
                      openTerm(searchResults[0].letter, searchResults[0].term);
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }
                  }}
                />
              </div>

              {isSearchOpen && searchResults.length > 0 && (
                <div className="marketing-glossary-search-dropdown">
                  {searchResults.map((item) => (
                    <button
                      key={`${item.letter}-${item.term}`}
                      className="marketing-glossary-search-result-item"
                      onClick={() => {
                        openTerm(item.letter, item.term);
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                    >
                      <span className="marketing-glossary-search-result-term">{item.term}</span>
                      <span className="marketing-glossary-search-result-badge">{item.letter}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Alphabet Navigation A–Z */}
          <nav className="marketing-glossary-alphabets" aria-label="Alphabet navigation">
            <div className="marketing-glossary-alphabets-row">
              {ALPHABETS.map((alpha) => {
                const isActive = alpha === letter;
                const hasTerms = Boolean(UPDATED_GLOSSARY_TERMS[alpha]?.length);

                return (
                  <button
                    key={alpha}
                    type="button"
                    className={`marketing-glossary-alpha-btn ${isActive ? "active" : ""} ${hasTerms ? "has-terms" : "disabled"}`}
                    onClick={() => handleLetterClick(alpha)}
                    disabled={!hasTerms}
                    aria-label={`Filter by letter ${alpha}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {alpha}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Main Two-Column Layout */}
          <div className="marketing-glossary-main-grid">
            {/* Left Glossary Sidebar (28%) */}
            <aside className="marketing-glossary-sidebar">
              <div className="marketing-glossary-sidebar-header">
                <h2 className="marketing-glossary-sidebar-title">TERMS IN {letter}</h2>
                <div className="marketing-glossary-sidebar-line" aria-hidden="true" />
              </div>

              <div className="marketing-glossary-sidebar-list" role="navigation" aria-label={`Terms starting with ${letter}`}>
                {letterTerms.map((item) => {
                  const isSelected = item.term.toLowerCase() === activeItem.term.toLowerCase();

                  return (
                    <button
                      key={item.term}
                      type="button"
                      className={`marketing-glossary-sidebar-item ${isSelected ? "selected" : ""}`}
                      onClick={() => openTerm(letter, item.term)}
                      aria-current={isSelected ? "true" : undefined}
                    >
                      <span className="marketing-glossary-sidebar-term-text">{item.term}</span>
                      <FiChevronRight className="marketing-glossary-sidebar-chevron" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Right Glossary Content Card (72%) */}
            <section className="marketing-glossary-content-card">
              {/* Explanation Badge */}
              <div className="marketing-glossary-badge">EXPLANATION</div>

              {/* Main Heading */}
              <h2 className="marketing-glossary-term-heading">{activeItem.term}</h2>

              {/* Definition */}
              <p className="marketing-glossary-definition-text">{parsed.mainDefinition}</p>

              {/* "Why it matters" Panel */}
              {parsed.whyItMatters.length > 0 && (
                <div className="marketing-glossary-panel marketing-glossary-why-matters">
                  <div className="marketing-glossary-panel-header">
                    <div className="marketing-glossary-lightbulb-icon" aria-hidden="true">
                      <FaLightbulb />
                    </div>
                    <h3 className="marketing-glossary-panel-title">Why it matters</h3>
                  </div>

                  <ul className="marketing-glossary-checklist">
                    {parsed.whyItMatters.map((item, idx) => (
                      <li key={idx} className="marketing-glossary-checklist-item">
                        <span className="marketing-glossary-check-circle" aria-hidden="true">
                          <FiCheck />
                        </span>
                        <span className="marketing-glossary-check-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Formula Panel */}
              {parsed.formula && (
                <div className="marketing-glossary-panel marketing-glossary-formula-panel">
                  <h3 className="marketing-glossary-panel-title">Formula</h3>
                  <div className="marketing-glossary-formula-box">
                    <code className="marketing-glossary-formula-code">{parsed.formula}</code>
                  </div>
                </div>
              )}

              {/* Example Panel */}
              {isAbTesting ? (
                <div className="marketing-glossary-panel marketing-glossary-example-panel">
                  <div className="marketing-glossary-example-grid">
                    {/* Column 1: Example label & text */}
                    <div className="marketing-glossary-example-info">
                      <h4 className="marketing-glossary-example-label">EXAMPLE</h4>
                      <p className="marketing-glossary-example-desc">
                        {parsed.exampleText ||
                          "You test two landing page headlines. Version A gets 30 leads, Version B gets 45 leads. You keep Version B."}
                      </p>
                    </div>

                    {/* Column 2: Version A */}
                    <div className="marketing-glossary-version-card">
                      <div className="marketing-glossary-version-header">Version A</div>
                      <div className="marketing-glossary-preview-box">
                        <div className="marketing-glossary-preview-line line-header" />
                        <div className="marketing-glossary-preview-line line-sub" />
                        <div className="marketing-glossary-preview-btn" />
                      </div>
                      <div className="marketing-glossary-conversion-section">
                        <span className="marketing-glossary-conversion-label">Conversion Rate</span>
                        <div className="marketing-glossary-progress-track">
                          <div className="marketing-glossary-progress-fill" style={{ width: "24%" }} />
                        </div>
                        <span className="marketing-glossary-conversion-value">2.4%</span>
                      </div>
                    </div>

                    {/* Column 3: Version B */}
                    <div className="marketing-glossary-version-card">
                      <div className="marketing-glossary-version-header">Version B</div>
                      <div className="marketing-glossary-preview-box preview-version-b">
                        <div className="marketing-glossary-preview-hero-block" />
                        <div className="marketing-glossary-preview-hero-lines">
                          <div className="marketing-glossary-preview-line line-sub" />
                          <div className="marketing-glossary-preview-line line-short" />
                        </div>
                        <div className="marketing-glossary-preview-btn" />
                      </div>
                      <div className="marketing-glossary-conversion-section">
                        <span className="marketing-glossary-conversion-label">Conversion Rate</span>
                        <div className="marketing-glossary-progress-track">
                          <div className="marketing-glossary-progress-fill" style={{ width: "48%" }} />
                        </div>
                        <span className="marketing-glossary-conversion-value">4.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : parsed.exampleText ? (
                <div className="marketing-glossary-panel marketing-glossary-example-panel">
                  <div className="marketing-glossary-example-single">
                    <h4 className="marketing-glossary-example-label">EXAMPLE</h4>
                    <p className="marketing-glossary-example-desc">{parsed.exampleText}</p>
                  </div>
                </div>
              ) : null}

              {/* Steps Panel */}
              {parsed.steps.length > 0 && (
                <div className="marketing-glossary-panel marketing-glossary-steps-panel">
                  <h3 className="marketing-glossary-panel-title">Steps</h3>
                  <ol className="marketing-glossary-steps-list" style={{ marginTop: "14px" }}>
                    {parsed.steps.map((step, idx) => (
                      <li key={idx} className="marketing-glossary-step-item">
                        <span className="marketing-glossary-step-number">{idx + 1}</span>
                        <span className="marketing-glossary-step-text">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Common mistakes Panel */}
              {parsed.mistakes.length > 0 && (
                <div className="marketing-glossary-panel marketing-glossary-mistakes-panel">
                  <h3 className="marketing-glossary-panel-title">Common mistakes</h3>
                  <ul className="marketing-glossary-mistakes-list" style={{ marginTop: "14px" }}>
                    {parsed.mistakes.map((mistake, idx) => (
                      <li key={idx} className="marketing-glossary-mistake-item">
                        <span className="marketing-glossary-mistake-bullet" aria-hidden="true" />
                        <span className="marketing-glossary-mistake-text">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related terms */}
              {parsed.relatedTerms.length > 0 && (
                <div className="marketing-glossary-related-section">
                  <h4 className="marketing-glossary-related-title">Related terms</h4>
                  <div className="marketing-glossary-related-tags">
                    {parsed.relatedTerms.map((rt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="marketing-glossary-related-tag"
                        onClick={() => handleRelatedClick(rt)}
                      >
                        {rt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Box */}
              {parsed.ctaText && (
                <div className="marketing-glossary-cta-box">
                  <div className="marketing-glossary-cta-content">
                    <p className="marketing-glossary-cta-text">{parsed.ctaText}</p>
                    <Link href="/contact" className="marketing-glossary-cta-btn">
                      Get in Touch
                    </Link>
                  </div>
                </div>
              )}

              {/* Mini Q&A Panel */}
              {parsed.miniQA.length > 0 && (
                <div className="marketing-glossary-panel marketing-glossary-qa-panel">
                  <h3 className="marketing-glossary-panel-title">Mini Q&A</h3>
                  <div className="marketing-glossary-qa-list">
                    {parsed.miniQA.map((qa, idx) => (
                      <div key={idx} className="marketing-glossary-qa-item">
                        <div className="marketing-glossary-qa-question">
                          <span className="marketing-glossary-qa-qbadge">Q</span>
                          <span>{qa.q}</span>
                        </div>
                        <p className="marketing-glossary-qa-answer">{qa.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Term Navigation */}
              <nav className="marketing-glossary-bottom-nav" aria-label="Adjacent terms navigation">
                {prevTerm ? (
                  <button
                    type="button"
                    className="marketing-glossary-nav-btn nav-prev"
                    onClick={() => openTerm(letter, prevTerm.term)}
                  >
                    <span className="marketing-glossary-nav-arrow" aria-hidden="true">
                      <FiArrowLeft />
                    </span>
                    <div className="marketing-glossary-nav-meta">
                      <span className="marketing-glossary-nav-label">Previous Term</span>
                      <span className="marketing-glossary-nav-title">{prevTerm.term}</span>
                    </div>
                  </button>
                ) : (
                  <div />
                )}

                {nextTerm ? (
                  <button
                    type="button"
                    className="marketing-glossary-nav-btn nav-next"
                    onClick={() => openTerm(letter, nextTerm.term)}
                  >
                    <div className="marketing-glossary-nav-meta">
                      <span className="marketing-glossary-nav-label">Next Term</span>
                      <span className="marketing-glossary-nav-title">{nextTerm.term}</span>
                    </div>
                    <span className="marketing-glossary-nav-arrow" aria-hidden="true">
                      <FiArrowRight />
                    </span>
                  </button>
                ) : (
                  <div />
                )}
              </nav>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
