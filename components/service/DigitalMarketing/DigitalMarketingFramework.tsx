"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import "../../../style/branding/FrameworkSection.css";
import { useDigitalMarketingContext } from './DigitalMarketingContext';

const seoFramework = {
  title: "Our Proven 6-Step SEO Strategy",
  subtitle: "Discover our structured SEO system designed to improve search rankings, increase organic traffic and generate consistent leads from Google and AI-driven search platforms.",
  steps: [
    {
      title: "SEO Audit & Keyword Intelligence",
      description: "We examine your website structure, competitor rankings, and search performance to uncover missed opportunities. Data-driven keyword research helps target high-intent searches that bring qualified organic traffic.",
    },
    {
      title: "Search Strategy & Content Planning",
      description: "We build a structured content roadmap aligned with user search behavior and buying intent. Strategic topic clustering improves relevance, increases dwell time, and strengthens topical authority.",
    },
    {
      title: "On-Page Optimization & Content Enhancement",
      description: "We refine page structure, headings, metadata, and internal linking to improve ranking signals. Optimized pages rank higher, improve click-through rates, and attract consistent search visibility.",
    },
    {
      title: "Technical SEO & Site Performance",
      description: "We fix indexing issues, improve Core Web Vitals, and enhance mobile usability for better crawlability. Faster websites not only rank better but also increase user engagement and conversions.",
    },
    {
      title: "Authority Building & Ethical Link Growth",
      description: "We strengthen your domain authority through high-quality, white-hat backlink strategies. Strong backlink profiles improve trust signals and boost competitive keyword rankings.",
    },
    {
      title: "Performance Tracking & Continuous Growth",
      description: "We monitor keyword movement, traffic trends, and conversion metrics using verified analytics tools. Ongoing optimization ensures long-term organic growth and measurable return on investment.",
    }
  ]
};

const metaAdFramework = {
  title: "Our 6-Stage Meta Ads Performance Framework",
  subtitle: "Explore our result-driven Meta advertising approach built to attract high-quality leads, reduce cost per conversion, and drive steady revenue growth through Facebook and Instagram campaigns.",
  steps: [
    {
      title: "Ad Account Audit & Audience Research",
      description: "We analyze your existing ad account, targeting structure, funnel performance, and competitor campaigns to identify scaling gaps. Data-driven audience research helps target high-intent users who are most likely to convert.",
    },
    {
      title: "Campaign Strategy & Funnel Planning",
      description: "We build a structured ad funnel aligned with customer awareness stages and buying behavior. Proper funnel mapping improves ad relevance, increases engagement rates, and strengthens overall campaign performance.",
    },
    {
      title: "Creative Optimization & Ad Testing",
      description: "We refine ad creatives, hooks, copy, and formats to improve engagement and click-through rates. Well-structured A/B testing helps identify winning creatives that lower CPC and increase conversion rate.",
    },
    {
      title: "Conversion Tracking & Performance Setup",
      description: "We implement Meta Pixel, Conversion API, and event tracking for accurate data measurement. Proper tracking improves optimization, reduces wasted ad spend, and increases return on ad investment.",
    },
    {
      title: "Scaling & Budget Optimization",
      description: "We scale high-performing campaigns using data-backed budget allocation strategies. Optimized scaling improves ROAS while maintaining stable cost per lead and conversion efficiency.",
    },
    {
      title: "Reporting, Optimization & Continuous Growth",
      description: "We monitor campaign metrics including CTR, CPM, CPL, and ROAS using verified analytics dashboards. Ongoing optimization ensures sustainable performance growth and measurable revenue impact.",
    }
  ]
};

const googleAdFramework = {
  title: "6-Step Google Ads Revenue Framework",
  subtitle: "A performance-driven paid advertising model built to capture high-intent searches, control ad spend, and generate predictable leads through Google Search, Display, Shopping, and Performance Max campaigns.",
  steps: [
    {
      title: "Campaign Audit & Search Demand Analysis",
      description: "We review your existing campaigns, bidding setup, search terms, and competitor ad positioning to identify inefficiencies. Deep keyword and auction analysis helps focus budget on high-converting queries that drive real business outcomes.",
    },
    {
      title: "Funnel Mapping & Campaign Architecture",
      description: "We structure campaigns based on user intent stages — awareness, comparison, and purchase. Well-organized ad groups improve Quality Score, increase relevance, and reduce wasted clicks.",
    },
    {
      title: "Ad Messaging & Performance Testing",
      description: "We develop persuasive headlines, descriptions, and extensions aligned with search behavior. Continuous testing of ads and assets improves CTR, lowers average CPC, and increases conversion probability.",
    },
    {
      title: "Tracking Setup & Landing Page Alignment",
      description: "We configure accurate conversion tracking using Google Tag Manager and analytics integration. Landing page alignment with ad intent improves conversion rate and reduces bounce rate significantly.",
    },
    {
      title: "Smart Bidding & Budget Efficiency",
      description: "We implement intelligent bidding strategies such as Target CPA and Target ROAS based on real performance data. Strategic budget allocation ensures profitable scaling without sudden cost spikes.",
    },
    {
      title: "Optimization & Revenue Scaling",
      description: "We monitor metrics including impression share, CTR, CPA, and return on ad spend. Ongoing refinements help maintain consistent lead flow and long-term advertising profitability.",
    }
  ]
};

const linkedinFramework = {
  title: "Our 6-Step LinkedIn Marketing Growth Framework",
  subtitle: "Discover our structured LinkedIn marketing system designed to generate high-quality B2B leads, build authority among decision-makers, and drive consistent revenue through LinkedIn Ads and strategic content positioning.",
  steps: [
    {
      title: "LinkedIn Profile & Account Audit",
      description: "We analyze your LinkedIn page, campaign history, audience targeting, and competitor presence to identify performance gaps.",
    },
    {
      title: "B2B Targeting & Funnel Strategy",
      description: "We build a structured LinkedIn funnel aligned with professional buyer journeys and long sales cycles.",
    },
    {
      title: "Ad Creative & Messaging Optimization",
      description: "We craft compelling LinkedIn ad copy, carousel creatives, and lead form messaging tailored for business audiences.",
    },
    {
      title: "Lead Form & Conversion Tracking Setup",
      description: "We implement LinkedIn Insight Tag and conversion tracking for accurate performance measurement.",
    },
    {
      title: "Campaign Scaling & Budget Efficiency",
      description: "We scale high-performing campaigns using data-driven bid strategies and audience segmentation.",
    },
    {
      title: "Reporting, Optimization & Revenue Growth",
      description: "We track cost per lead, engagement rate, click-through rate, and pipeline performance using verified analytics dashboards.",
    }
  ]
};

const whatsappFramework = {
  title: "Our Strategic 6-Step Whatsapp Marketing Framework",
  subtitle: "A structured WhatsApp marketing system designed to generate leads, build customer trust, and create consistent business growth through automated and targeted WhatsApp campaigns.",
  steps: [
    {
      title: "WhatsApp Business Setup & Audit",
      description: "We analyze your current WhatsApp setup, communication flow, customer interaction patterns, and competitor strategies to identify growth gaps.",
    },
    {
      title: "Audience Segmentation & Targeting Strategy",
      description: "We define your ideal customer segments based on behavior, interests, and buying intent to ensure the right message reaches the right audience.",
    },
    {
      title: "Content & Messaging Strategy",
      description: "We create structured WhatsApp content that engages, informs, and converts your audience effectively.",
    },
    {
      title: "Campaign & Automation Setup",
      description: "We build WhatsApp campaigns and automation systems to generate leads and manage communication efficiently.",
    },
    {
      title: "Engagement & Lead Nurturing",
      description: "We implement structured follow-up systems to convert enquiries into customers.",
    },
    {
      title: "Performance Tracking & Optimization",
      description: "We monitor campaign performance and continuously improve results based on data insights.",
    }
  ]
};

const youtubeFramework = {
  title: "Our Strategic 6-Step YouTube Growth System",
  subtitle: "A structured YouTube marketing framework designed to increase video visibility, grow subscribers, improve watch time, and generate consistent leads through organic and paid video strategies.",
  steps: [
    {
      title: "Channel Audit & Audience Research",
      description: "We evaluate your existing channel performance. Data-driven audience research helps identify high-demand topics and viewer intent that drive engagement and subscriber growth.",
    },
    {
      title: "Content Strategy & Video Planning",
      description: "We develop a structured content roadmap aligned with search trends, viewer interests, and niche positioning.",
    },
    {
      title: "Video Optimization & Discoverability",
      description: "We optimize titles, descriptions, tags, thumbnails, and metadata to improve ranking in YouTube and Google search results.",
    },
    {
      title: "Retention Improvement & Channel Performance",
      description: "We analyze audience retention graphs, drop-off points, and engagement signals to improve watch duration.",
    },
    {
      title: "Authority Building & Community Growth",
      description: "We build subscriber trust through structured publishing schedules, playlist organization, and engagement strategies.",
    },
    {
      title: "Analytics Tracking & Scalable Growth",
      description: "We track views, watch time, CTR, subscriber growth, and conversion behavior using verified YouTube analytics.",
    }
  ]
};

export const DigitalMarketingFramework = () => {
  const { activeDigitalMarketingTab } = useDigitalMarketingContext();

  const getActiveFramework = () => {
    switch (activeDigitalMarketingTab) {
      case 0: return seoFramework;
      case 1: return metaAdFramework;
      case 2: return googleAdFramework;
      case 3: return linkedinFramework;
      case 4: return whatsappFramework;
      case 5: return youtubeFramework;
      default: return seoFramework;
    }
  };

  const activeFramework = getActiveFramework();

  return (
    <section className="bm-framework-section">
      <div className="bm-framework-container">
        <FadeIn key={`title-${activeDigitalMarketingTab}`} direction="up" delay={0.1}>
          <div className="bm-framework-header">
            <h2 className="bm-framework-title">
              {activeFramework.title}
            </h2>
            <p className="bm-framework-subtitle">
              {activeFramework.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="bm-framework-grid">
          {activeFramework.steps.map((step, index) => (
            <FadeIn key={`${activeDigitalMarketingTab}-${index}`} direction="up" delay={0.1 + index * 0.1}>
              <div className="bm-framework-card">
                <h3 className="bm-card-title">
                  {/* <span style={{color: "#ccc", marginRight: "8px"}}>{String(index + 1).padStart(2, '0')}.</span> */}
                  {step.title}
                </h3>
                <p className="bm-card-description">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.8}>
          <div className="bm-framework-footer">
            <button className="bm-btn-strategy">
              Get Custom Strategy
            </button>
            <button className="bm-btn-meeting">
              Book a Meeting
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
