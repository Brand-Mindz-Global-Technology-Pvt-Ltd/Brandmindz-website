"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/WhyChooseBranding.css";
import Image from 'next/image';
import { useDigitalMarketingContext } from './DigitalMarketingContext';

// Import assets from root assets folder
import FrameIcon from "../../../assets/branding/frame.webp";
import GroupIcon from "../../../assets/branding/group.webp";
import Group1Icon from "../../../assets/branding/group1.webp";

const seoData = {
  title: "Why Choose Brand Mindz for SEO?",
  subtitle: "Most agencies promise rankings. \nWe build structured organic growth systems that drive traffic, leads, and measurable revenue.",
  reasons: [
    { number: "1", icon: FrameIcon, title: "Data-Backed SEO Strategy", desc: "We don’t guess keywords. We use real search data, competitor analysis, and user intent mapping." },
    { number: "2", icon: GroupIcon, title: "Technical SEO Expertise", desc: "We optimize Core Web Vitals, site speed, mobile performance, and crawl structure to meet Google’s ranking standards and improve long-term stability." },
    { number: "3", icon: Group1Icon, title: "White-Hat Authority Building", desc: "We build high-quality, ethical backlinks through content outreach and digital PR — no shortcuts, no risky tactics, only sustainable SEO growth." },
    { number: "4", icon: Group1Icon, title: "Content That Ranks & Converts", desc: "We create SEO-optimized service pages, blogs, and landing pages aligned with commercial search intent to turn visitors into enquiries." },
    { number: "5", icon: GroupIcon, title: "Transparent Reporting & Measurable Results", desc: "We provide monthly reports on keyword movement, organic traffic growth, CTR improvement, and lead generation performance using verified analytics tools." },
    { number: "6", icon: FrameIcon, title: "Long-Term Organic Growth Focus", desc: "Businesses investing in SEO generate up to 14X higher ROI compared to traditional outbound marketing. We build growth that lasts." }
  ]
};

const metaData = {
  title: "Why Choose Brand Mindz for Meta Ads?",
  subtitle: "Most agencies run ads. \nWe build structured performance funnels that generate leads, sales, and measurable revenue growth.",
  reasons: [
    { number: "1", icon: FrameIcon, title: "Data-Driven Campaign Strategy", desc: "We don’t rely on guesswork. We use audience insights, behavioral targeting, and performance analytics to maximize results." },
    { number: "2", icon: GroupIcon, title: "Advanced Tracking & Optimization", desc: "We implement Meta Pixel, Conversion API, and event optimization to improve campaign accuracy and reduce wasted spend." },
    { number: "3", icon: Group1Icon, title: "Creative Performance Focus", desc: "Ad creative determines success. We test hooks, visuals, and formats to improve engagement and increase conversions." },
    { number: "4", icon: Group1Icon, title: "Funnel-Based Approach", desc: "We design awareness, consideration, and conversion campaigns aligned with your sales process to increase lead quality." },
    { number: "5", icon: GroupIcon, title: "Transparent Reporting & Measurable Results", desc: "We provide clear reporting on CTR, CPM, CPL, ROAS, and revenue growth using verified performance data." },
    { number: "6", icon: FrameIcon, title: "Scalable Growth Model", desc: "Businesses scaling with structured Meta Ads strategies achieve predictable lead flow and consistent revenue growth. We build campaigns that scale sustainably." }
  ]
};

const googleData = {
  title: "Why Work With Brand Mindz for Google Ads?",
  subtitle: "Many agencies focus on clicks. \nWe focus on profitable customer acquisition and scalable campaign systems.",
  reasons: [
    { number: "1", icon: FrameIcon, title: "Intent-Focused Targeting", desc: "We analyze real search behavior to reach users actively looking for your products or services." },
    { number: "2", icon: GroupIcon, title: "Performance-Driven Structure", desc: "Campaigns are organized for maximum relevance, improving ad strength and lowering acquisition costs." },
    { number: "3", icon: Group1Icon, title: "Ethical & Sustainable Scaling", desc: "No aggressive overspending. Budgets are scaled based on real data and proven performance patterns." },
    { number: "4", icon: Group1Icon, title: "Conversion-Focused Execution", desc: "Ads and landing pages are aligned to drive actions, not just traffic." },
    { number: "5", icon: GroupIcon, title: "Clear Reporting & Accountability", desc: "You receive transparent insights into spend, performance, and revenue impact." },
    { number: "6", icon: FrameIcon, title: "Long-Term Growth Approach", desc: "Paid search, when optimized correctly, delivers predictable lead generation and steady revenue expansion." }
  ]
};

const linkedinData = {
  title: "Why Choose Brand Mindz for LinkedIn Marketing?",
  subtitle: "Most agencies focus on impressions. \nWe build structured B2B growth systems that attract qualified professionals and generate measurable business impact.",
  reasons: [
    { number: "1", icon: FrameIcon, title: "Precision B2B Targeting", desc: "We use advanced LinkedIn filters including job title, company size, industry, and seniority to reach real decision-makers." },
    { number: "2", icon: GroupIcon, title: "Professional Ad Strategy", desc: "LinkedIn users expect value-driven messaging. We craft content that aligns with business goals and industry insights." },
    { number: "3", icon: Group1Icon, title: "Data-Driven Campaign Optimization", desc: "We continuously optimize campaigns based on lead quality, engagement metrics, and conversion behavior." },
    { number: "4", icon: Group1Icon, title: "Lead Quality Over Volume", desc: "Our focus is on generating high-intent B2B leads that convert into pipeline opportunities." },
    { number: "5", icon: GroupIcon, title: "Transparent Reporting & Insights", desc: "You receive clear reports on cost per lead, engagement rate, and campaign performance with actionable recommendations." },
    { number: "6", icon: FrameIcon, title: "Long-Term B2B Growth Focus", desc: "LinkedIn marketing builds brand authority and trust among professionals. We create scalable systems that support long-term business expansion." }
  ]
};

const whatsappData = {
  title: "Why Choose Brand Mindz for WhatsApp Marketing?",
  subtitle: "Many agencies send messages. \n We build structured WhatsApp growth systems that generate trust, engagement, and predictable leads.",
  reasons: [
    { number: "1", icon: FrameIcon, title: "Data-Driven Targeting", desc: "We use customer data and behavioral insights to reach the right audience at the right time through WhatsApp campaigns." },
    { number: "2", icon: GroupIcon, title: "Authority-Based Messaging Approach", desc: "We position your brand as a trusted choice through structured and consistent messaging that builds credibility." },
    { number: "3", icon: Group1Icon, title: "Paid & Organic Integration", desc: "We combine Click-to-WhatsApp ads with organic messaging strategies for stronger lead flow and better conversions." },
    { number: "4", icon: Group1Icon, title: "Conversion-Focused Campaign Design", desc: "Every campaign is designed to generate enquiries, conversations, and sales, not just message delivery." },
    { number: "5", icon: GroupIcon, title: "Transparent Reporting & Measurable ROI", desc: "We provide clear reports on message performance, response rates, lead cost, and campaign effectiveness." },
    { number: "6", icon: FrameIcon, title: "Long-Term Business Growth Strategy", desc: "WhatsApp marketing, when executed properly, builds strong customer relationships and consistent business opportunities over time." }
  ]
};

const youtubeData = {
  title: "Why Choose Brand Mindz for YouTube Marketing?",
  subtitle: "Most agencies upload videos. \nWe build structured video growth systems that drive visibility, engagement, and measurable business outcomes.",
  reasons: [
    { number: "1", icon: FrameIcon, title: "Research-Driven Content Strategy", desc: "We base every video on search trends, audience demand, and competitive gaps." },
    { number: "2", icon: GroupIcon, title: "Technical Channel Optimization", desc: "We improve discoverability through metadata refinement, playlist structure, and algorithm alignment." },
    { number: "3", icon: Group1Icon, title: "Ethical & Sustainable Growth", desc: "No artificial subscribers or shortcuts — only genuine audience development strategies." },
    { number: "4", icon: Group1Icon, title: "Content That Engages & Converts", desc: "We create structured scripts and calls to action that turn viewers into leads and customers." },
    { number: "5", icon: GroupIcon, title: "Transparent Reporting & Insights", desc: "We provide monthly reporting on watch time, subscriber growth, CTR, and conversion metrics." },
    { number: "6", icon: FrameIcon, title: "Long-Term Channel Growth Focus", desc: "Consistent video publishing builds compounding visibility and brand authority over time. We focus on sustainable expansion." }
  ]
};


export const WhyChooseDigitalMarketing = () => {
  const { activeDigitalMarketingTab } = useDigitalMarketingContext();

  const getActiveData = () => {
    switch (activeDigitalMarketingTab) {
      case 0: return seoData;
      case 1: return metaData;
      case 2: return googleData;
      case 3: return linkedinData;
      case 4: return whatsappData;
      case 5: return youtubeData;
      default: return seoData;
    }
  };

  const activeData = getActiveData();

  return (
    <section className="bm-why-branding-section">
      <div className="bm-why-branding-container">
        <FadeIn key={`header-${activeDigitalMarketingTab}`} direction="up" delay={0.1}>
          <div className="bm-why-branding-header">
            <h2 className="bm-why-branding-title">
              {activeData.title}
            </h2>
            <p className="bm-why-branding-subtitle" style={{ whiteSpace: "pre-line" }}>
              {activeData.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="bm-why-branding-grid">
          {activeData.reasons.map((reason, index) => (
            <FadeIn key={`${activeDigitalMarketingTab}-${index}`} direction="up" delay={0.2 + index * 0.1}>
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
