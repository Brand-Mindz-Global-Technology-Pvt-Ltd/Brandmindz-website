"use client";

import React, { useMemo } from "react";
import { notFound, useParams, useRouter } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { UPDATED_GLOSSARY_TERMS } from "@/components/resources/ResourcesDirectory";
import "../../../../../style/resources/glossary-definition.css";

const decodeRouteValue = (value: string) => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

const renderDefinition = (definition: string) => {
  const lines = definition.split("\n").map((line) => line.trim()).filter(Boolean);
  const sectionLabels = new Set([
    "Why it matters",
    "Example",
    "Steps",
    "Formula",
    "Common mistakes",
    "Related terms",
    "Mini Q&A"
  ]);

  return lines.map((line, index) => {
    if (sectionLabels.has(line)) {
      return <h3 className="glossary-subsection-heading" key={`${line}-${index}`}>{line}</h3>;
    }

    if (line.startsWith("CTA:")) {
      return <p className="glossary-definition-cta" key={index}>{line}</p>;
    }

    return <p key={index}>{line}</p>;
  });
};

export default function GlossaryDefinitionPage() {
  const params = useParams<{ letter: string; term: string }>();
  const router = useRouter();
  const letter = decodeRouteValue(params.letter);
  const selectedTerm = decodeRouteValue(params.term);
  const letterTerms = UPDATED_GLOSSARY_TERMS[letter];

  const activeItem = useMemo(
    () => letterTerms?.find((item) => item.term === selectedTerm),
    [letterTerms, selectedTerm]
  );

  if (!letterTerms || !activeItem) {
    notFound();
  }

  const openTerm = (term: string) => {
    router.push(
      `/resources/glossary/${encodeURIComponent(letter)}/${encodeURIComponent(term)}`
    );
  };

  return (
    <>
      <Header />
      <main className="glossary-definition-main">
        <div className="glossary-definition-header">
          <h1 className="glossary-definition-title">
            <span>{letter}</span>
          </h1>
        </div>

        <div className="glossary-definition-container">
          <aside className="glossary-definition-sidebar">
            <nav className="glossary-definition-nav" aria-label={`${letter} glossary terms`}>
              {letterTerms.map((item) => (
                <a
                  key={item.term}
                  className={`glossary-definition-nav-link ${item.term === activeItem.term ? "active" : ""}`}
                  onClick={() => openTerm(item.term)}
                >
                  {item.term}
                </a>
              ))}
            </nav>
          </aside>

          <div className="glossary-definition-body">
            <section className="glossary-definition-section">
              <h2 className="glossary-definition-heading">{activeItem.term}</h2>
              <div className="glossary-definition-text">
                {activeItem.definition
                  ? renderDefinition(activeItem.definition)
                  : <p>Definition content will be updated soon.</p>}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
