"use client";

import React from 'react';
import { FadeIn } from "@/components/animations/fade-in";
import { Phone, PhoneCall, PhoneForwarded } from 'lucide-react';
import "../../../style/branding/BrandingPackages.css";
import { useDigitalMarketingContext } from './DigitalMarketingContext';
import { useRouter } from 'next/navigation';

const seoPackagesData = {
  title: "Tailored SEO Packages",
  titleSpan: "Built for Businesses Ready to Rank",
  subtitle: "Strategy and execution delivered by SEO specialists with proven ranking results across competitive industries.",
  bonus: "Exclusive Bonus: Get a Free SEO Audit with Your First Month",
  packages: [
    {
      title: "Foundation",
      subtitle: "For Early-Stage SEO Growth",
      features: [
        "Website SEO Audit & Technical Analysis",
        "Keyword Research & Search Intent Mapping",
        "On-Page Optimization (5–10 Core Pages)",
        "Basic Technical SEO Fixes",
        "Meta Tags & Structured Content Optimization",
        "Google Search Console Setup",
        "Monthly SEO Performance Report",
        "Dedicated SEO Account Manager"
      ],
      highlight: false,
      recommended: false,
    },
    {
      title: "Growth",
      subtitle: "For Competitive Ranking Acceleration",
      features: [
        "Advanced SEO Strategy & Competitor Gap Analysis",
        "Keyword Clustering & Content Architecture Planning",
        "On-Page Optimization (15–25 Pages)",
        "Technical SEO & Core Web Vitals Optimization",
        "Blog Strategy & SEO Content Planning",
        "High-Quality White-Hat Link Building",
        "Schema Markup & AI Search Optimization",
        "Local SEO Optimization (If Applicable)",
        "Monthly Ranking & Traffic Growth Reports",
        "Strategic SEO Consultation Calls"
      ],
      highlight: true,
      recommended: true,
    },
    {
      title: "Scale",
      subtitle: "For Market Leadership & Organic Domination",
      features: [
        "Complete SEO Growth Framework Implementation",
        "Enterprise-Level Technical SEO Optimization",
        "Full Website SEO Optimization (All Pages)",
        "Advanced Content Marketing & Topic Authority Building",
        "Digital PR & Authority Link Acquisition",
        "Multi-Location / International SEO Strategy",
        "Conversion Rate Optimization (SEO-Based)",
        "AI Search Visibility & Featured Snippet Strategy",
        "Weekly Performance Tracking & Scaling Plan",
        "Dedicated SEO Growth Team"
      ],
      highlight: false,
      recommended: false,
    }
  ]
};

const metaPackagesData = {
  title: "Tailored Meta Ads Packages",
  titleSpan: "Built for Brands Ready to Scale",
  subtitle: "Strategy and execution delivered by paid media specialists with proven conversion results across competitive industries.",
  bonus: "Exclusive Bonus: Get a Free Meta Ads Audit with Your First Month",
  packages: [
    {
      title: "Foundation",
      subtitle: "For Lead Generation Setup & Testing",
      features: [
        "Meta Ad Account Setup & Structure Optimization",
        "Audience Research & Targeting Strategy",
        "Campaign Creation (Awareness + Lead Gen)",
        "Basic Creative Development Guidance",
        "Pixel & Conversion Tracking Setup",
        "Initial A/B Testing",
        "Monthly Performance Report",
        "Dedicated Account Manager"
      ],
      highlight: false,
      recommended: false,
    },
    {
      title: "Growth",
      subtitle: "For Performance Scaling & Funnel Optimization",
      features: [
        "Advanced Funnel Strategy & Retargeting Setup",
        "Multi-Audience Segmentation & Lookalike Scaling",
        "Creative Testing Framework",
        "Conversion-Focused Ad Copywriting",
        "Conversion API Integration",
        "Budget Optimization & ROAS Tracking",
        "Detailed Performance Reports",
        "Bi-Weekly Strategy Calls"
      ],
      highlight: true,
      recommended: true,
    },
    {
      title: "Scale",
      subtitle: "For Aggressive Revenue & Market Expansion",
      features: [
        "Complete Performance Funnel Implementation",
        "Multi-Campaign Scaling Strategy",
        "Advanced Retargeting & Customer Journey Mapping",
        "Dynamic Ads & Catalog Sales Integration",
        "Cross-Platform Integration (Landing Pages + CRM)",
        "Creative Production Strategy",
        "Daily Optimization & Budget Control",
        "Weekly Performance Reviews",
        "Dedicated Paid Media Team"
      ],
      highlight: false,
      recommended: false,
    }
  ]
};

const googlePackagesData = {
  title: "Custom Google Ads Plans",
  titleSpan: "Designed for Brands Focused on Fast Growth",
  subtitle: "Execution managed by certified paid search professionals delivering measurable campaign performance across industries.",
  bonus: "Exclusive Bonus: Complimentary Google Ads Account Review with Your First Month",
  packages: [
    {
      title: "Foundation",
      subtitle: "Ideal for Testing & Initial Lead Generation",
      features: [
        "Account Setup & Campaign Configuration",
        "Targeted Keyword Research",
        "Search Campaign Launch",
        "Basic Remarketing Setup",
        "Conversion Tracking Installation",
        "Ad Copy & Extensions Creation",
        "Monthly Performance Summary",
        "Dedicated Campaign Manager"
      ],
      highlight: false,
      recommended: false,
    },
    {
      title: "Growth",
      subtitle: "Built for Conversion Improvement & Revenue Growth",
      features: [
        "Advanced Campaign Segmentation",
        "Competitor Ad Strategy Research",
        "Multi-Layer Audience Targeting",
        "Bid Strategy Optimization",
        "Search + Display + Remarketing",
        "Conversion Optimization Guidance",
        "Detailed Performance Reports",
        "Bi-Weekly Review Calls"
      ],
      highlight: true,
      recommended: true,
    },
    {
      title: "Scale",
      subtitle: "Structured for Large-Scale Campaign Expansion",
      features: [
        "Full Funnel Google Ads Deployment",
        "Performance Max & Shopping Campaigns",
        "Advanced Audience Signals",
        "Multi-Location Targeting",
        "Budget Scaling Strategy",
        "Daily Performance Adjustments",
        "Weekly Strategy Reviews",
        "Dedicated PPC Team"
      ],
      highlight: false,
      recommended: false,
    }
  ]
};

const linkedinPackagesData = {
  title: "Tailored LinkedIn Marketing Packages",
  titleSpan: "Built for Brands Targeting Decision-Makers",
  subtitle: "Strategy and execution delivered by LinkedIn marketing specialists with proven B2B campaign results across industries.",
  bonus: "Exclusive Bonus: Get a Free LinkedIn Marketing Audit with Your First Month",
  packages: [
    {
      title: "Foundation",
      subtitle: "For B2B Lead Generation Setup",
      features: [
        "LinkedIn Company Page Optimization",
        "Audience & Job-Role Targeting Setup",
        "Sponsored Content Campaign Launch",
        "Lead Gen Form Setup",
        "Insight Tag Installation",
        "Basic Creative Strategy",
        "Monthly Campaign Report",
        "Dedicated Account Manager"
      ],
      highlight: false,
      recommended: false,
    },
    {
      title: "Growth",
      subtitle: "For Authority Building & Lead Scaling",
      features: [
        "Advanced B2B Funnel Strategy",
        "Account-Based Marketing Setup",
        "Multi-Campaign Structure",
        "Retargeting Campaigns",
        "LinkedIn Lead Gen + Website Conversions",
        "Messaging Ads Strategy",
        "Detailed Performance Reports",
        "Bi-Weekly Strategy Reviews"
      ],
      highlight: true,
      recommended: true,
    },
    {
      title: "Scale",
      subtitle: "For Enterprise-Level LinkedIn Expansion",
      features: [
        "Complete LinkedIn Growth Framework Implementation",
        "Enterprise Audience Segmentation",
        "Executive-Level Targeting Strategy",
        "Thought Leadership Campaigns",
        "Multi-Region B2B Targeting",
        "CRM & Pipeline Integration",
        "Weekly Optimization & Scaling",
        "Dedicated LinkedIn Marketing Team"
      ],
      highlight: false,
      recommended: false,
    }
  ]
};

const whatsappPackagesData = {
  title: "Custom WhatsApp Marketing Plans",
  titleSpan: "Built for Businesses Targeting Customers & High-Intent Leads",
  subtitle: "Strategy and execution managed by WhatsApp marketing specialists with proven lead generation and conversion experience",
  bonus: "Exclusive Bonus: Get a Free WhatsApp Marketing Audit with Your First Month",
  packages: [
    {
      title: "Foundation",
      subtitle: "Get a Free WhatsApp Marketing Audit with Your First Month",
      features: [
        "WhatsApp Business Profile Optimization",
        "Messaging Strategy Planning",
        "8–12 Monthly Broadcast Campaigns", 
        "Content & CTA Optimization",
        "Basic Engagement Strategy",
        "Monthly Performance Summary",
        "Dedicated WhatsApp Marketing Manager"
      ],
      highlight: false,
      recommended: false,
    },
    {
      title: "Growth",
      subtitle: "For Lead Generation & Customer Engagement",
      features: [
        "Advanced Audience Segmentation",
        "Lead Generation Campaign Setup",
        "Click-to-WhatsApp Ads Integration",
        "Promotional & Nurture Messaging",
        "Lead Capture Optimization",
        "Retargeting Campaign Strategy",
        "Detailed Performance Reports",
        "Strategy Review Calls"
      ],
      highlight: true,
      recommended: true,
    },
    {
      title: "Scale",
      subtitle: "For Market Expansion & Sales Growth",
      features: [
        "Full WhatsApp Marketing System Implementation",
        "Multi-Campaign Automation Strategy",
        "Customer Journey & Funnel Setup",
        "Advanced CRM Integration",
        "Brand Positioning via Messaging",
        "High-Volume Broadcast Systems",
        "Weekly Performance Monitoring",
        "Dedicated WhatsApp Growth Team"
      ],
      highlight: false,
      recommended: false,
    }
  ]
};

const youtubePackagesData = {
  title: "Tailored YouTube Marketing Packages",
  titleSpan: "Built for Brands Ready to Scale Through Video",
  subtitle: "Strategy and execution delivered by YouTube marketing specialists with proven growth results across competitive industries.",
  bonus: "Exclusive Bonus: Get a Free YouTube Channel Audit with Your First Month",
  packages: [
    {
      title: "Foundation",
      subtitle: "For Channel Setup & Initial Growth",
      features: [
        "YouTube Channel Audit & Strategy Setup",
        "Audience & Competitor Analysis",
        "SEO-Based Video Topic Research",
        "Optimization of 5–10 Core Videos",
        "Thumbnail & Metadata Strategy",
        "Playlist Structure Setup",
        "Monthly Performance Report",
        "Dedicated Channel Manager"
      ],
      highlight: false,
      recommended: false,
    },
    {
      title: "Growth",
      subtitle: "For Audience Expansion & Consistent Performance",
      features: [
        "Advanced Content Calendar Planning",
        "Optimization of 15–25 Videos",
        "Retention Strategy & Engagement Boosting",
        "YouTube SEO & Search Ranking Optimization",
        "Community Management Strategy",
        "YouTube Ads Integration (If Required)",
        "Monthly Growth Reports",
        "Strategy Consultation Calls"
      ],
      highlight: true,
      recommended: true,
    },
    {
      title: "Scale",
      subtitle: "For Market Authority & Revenue Expansion",
      features: [
        "Complete Channel Growth Framework",
        "High-Volume Content Strategy",
        "Advanced YouTube SEO & Search Domination",
        "Authority Building & Collaboration Strategy",
        "Multi-Language / International Expansion",
        "Conversion Funnel Integration",
        "Featured Placement Strategy",
        "Weekly Performance Monitoring",
        "Dedicated YouTube Growth Team"
      ],
      highlight: false,
      recommended: false,
    }
  ]
};

export const DigitalMarketingPackages = () => {
  const { activeDigitalMarketingTab } = useDigitalMarketingContext();

  const getActiveData = () => {
    switch (activeDigitalMarketingTab) {
      case 0: return seoPackagesData;
      case 1: return metaPackagesData;
      case 2: return googlePackagesData;
      case 3: return linkedinPackagesData;
      case 4: return whatsappPackagesData;
      case 5: return youtubePackagesData;
      default: return seoPackagesData;
    }
  };

  const activeData = getActiveData();
  const router = useRouter();
  return (
    <section className="bm-pkg-section">
      <div className="bm-pkg-container">
        <FadeIn key={`header-${activeDigitalMarketingTab}`} direction="up" delay={0.1}>
          <div className="bm-pkg-header">
            <h2 className="bm-pkg-title">
              {activeData.title} <br />
              <span className='bm-pkg-title-span' >{activeData.titleSpan}</span>
            </h2>
            <p className="bm-pkg-subtitle">
              {activeData.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeIn key={`bonus-${activeDigitalMarketingTab}`} direction="up" delay={0.2}>
          <div className="bm-pkg-bonus-banner">
            <p className="bm-pkg-bonus-text">
              <strong>{activeData.bonus.split(':')[0]}:</strong> {activeData.bonus.split(':')[1] ? activeData.bonus.split(':')[1].replace(' - Button', '') : ''}
            </p>
          </div>
        </FadeIn>

        <div className="bm-pkg-grid">
          {activeData.packages.map((pkg, index) => (
            <FadeIn key={`${activeDigitalMarketingTab}-${index}`} direction="up" delay={0.1 + index * 0.1}>
              <div className={`bm-pkg-card`}>
                {pkg.recommended && (
                  <div className="bm-pkg-tag">Recommended</div>
                )}
                <h3 className="bm-pkg-card-title">{pkg.title}</h3>
                <p className="bm-pkg-card-desc">{pkg.subtitle}</p>
                
                <ul className="bm-pkg-list">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="bm-pkg-list-item">
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="bm-pkg-btn">
                  Get a Proposal
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.5}>
          <div className="bm-pkg-footer">
            <p className="bm-pkg-footer-text">
              Need a customized marketing roadmap?
            </p>
            <div className="bm-pkg-cta" onClick={() => router.push("/contact")}>
              <div className="bm-pkg-cta-icon-wrapper">
                <Phone size={15} color="white" fill="white" />
              </div>
              <span>Schedule a Strategy Call</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
