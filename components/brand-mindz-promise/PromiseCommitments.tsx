"use client";

import { useState } from "react";
import {
  BarChart3,
  Check,
  Clock3,
  Globe2,
  Handshake,
  LineChart,
  Scale,
  Target,
} from "lucide-react";

const promises = [
  { number: "01", eyebrow: "Alignment before action", title: "We Promise Structured Clarity", description: "Every engagement begins with alignment. Before execution starts, we define scope, objectives, timelines, and success metrics. There is no ambiguity about what is being built and how success will be measured.", statement: "Clarity protects performance. Clarity protects relationships.", icon: Target },
  { number: "02", eyebrow: "Business impact over noise", title: "We Promise Measurable Impact", description: "Brand Mindz operates as a performance-driven digital marketing, web development, and branding partner. We focus on business impact — not vanity metrics.", points: ["Lead quality over lead volume", "Conversion efficiency over impressions", "Scalable growth over short-term noise"], statement: "If it cannot be measured, it cannot be improved.", icon: LineChart },
  { number: "03", eyebrow: "Visibility at every stage", title: "We Promise Accountability", description: "Execution without ownership creates instability. We operate with defined KPIs, structured reporting systems, and performance visibility at every stage.", points: ["Where the project stands", "What is working", "What requires optimization"], statement: "We do not disappear after launch. We own outcomes.", icon: BarChart3 },
  { number: "04", eyebrow: "Integrity made visible", title: "We Promise Ethical Conduct", description: "Brand Mindz operates with professional governance and transparent systems. We follow clear scope documentation, defined billing practices, structured escalation channels, and zero tolerance for favoritism or bias.", statement: "Trust grows when integrity is visible.", icon: Scale },
  { number: "05", eyebrow: "Systems that sustain", title: "We Promise Long-Term Thinking", description: "We do not promise shortcuts. We build systems that sustain. Our strategies are designed for scalability, consistency, and measurable long-term growth.", statement: "Reputation is earned slowly and lost quickly. We protect both.", icon: Clock3 },
  { number: "06", eyebrow: "Partners, never just vendors", title: "We Promise Partnership — Not Vendor Mentality", description: "Large-scale brands do not look for vendors. They look for reliable performance partners. We work best with organizations that value structure, transparency, and disciplined execution.", statement: "If alignment is unclear, we do not proceed. That honesty protects long-term trust.", icon: Handshake },
  { number: "07", eyebrow: "One standard, every market", title: "We Promise Consistency Across Markets", description: "Whether domestic or international, our standards remain unchanged.", points: ["Performance", "Structure", "Accountability", "Reliability"], statement: "We are global-ready by design. And we operate accordingly.", icon: Globe2 },
];

const operatingStandards = [
  ["Structured execution", "Clear scope, objectives, timelines, and success metrics."],
  ["Measurable performance", "KPIs connected to real business outcomes."],
  ["Accountable partnership", "Visible ownership and disciplined follow-through."],
  ["Ethical conduct", "Transparent systems, governance, and integrity."],
];

export function PromiseCommitments() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePromise = promises[activeIndex];
  const Icon = activePromise.icon;

  return (
    <section className="bmp-commitments-section">
      <div className="bmp-commitments-heading">
        <span className="bm-industry-pretitle">Seven commitments. One operating standard.</span>
        <h2 className="bm-industry-main-title">A Promise Designed for Performance</h2>
        <p className="bm-industry-description">We do not sell campaigns. We build performance systems. Brand Mindz is built for businesses that take growth seriously. These principles shape how we plan, execute, report, and grow alongside every client.</p>
        <h3 className="bm-challenges-solutions-title">What Every Partnership Can Expect</h3>
      </div>

      <div className="bmp-commitments-layout">
        <nav className="bmp-commitments-nav" aria-label="Brand Mindz commitments">
          {promises.map((promise, index) => (
            <button key={promise.number} type="button" className={`bmp-commitment-tab ${activeIndex === index ? "is-active" : ""}`} onClick={() => setActiveIndex(index)} aria-pressed={activeIndex === index}>
              <span>{promise.number}</span>
              <strong>{promise.title}</strong>
            </button>
          ))}
        </nav>

        <article className="bmp-commitment-content" key={activePromise.number}>
          <span className="bmp-card-eyebrow">{activePromise.number} · {activePromise.eyebrow}</span>
          <h3>{activePromise.title}</h3>
          <p>{activePromise.description}</p>
          {activePromise.points ? (
            <div className="bmp-commitment-points">
              {activePromise.points.map((point) => <span key={point}><Check size={17} strokeWidth={3} />{point}</span>)}
            </div>
          ) : null}
          <div className="bmp-operating-standard">
            <h4>Our Operating Standard</h4>
            <p>The foundations behind every engagement</p>
            <div>
              {operatingStandards.map(([title, copy]) => (
                <span key={title}><Check size={17} strokeWidth={3} /><span><strong>{title}</strong><small>{copy}</small></span></span>
              ))}
            </div>
          </div>
        </article>

        <aside className="bmp-commitment-visual">
          <div className="bmp-commitment-icon"><Icon aria-hidden="true" /></div>
          <span>{activePromise.eyebrow}</span>
          <strong>{activePromise.statement}</strong>
          <p>Trust is a system, not a slogan.</p>
          <h3>That is the Brand Mindz Promise.</h3>
        </aside>
      </div>
    </section>
  );
}
