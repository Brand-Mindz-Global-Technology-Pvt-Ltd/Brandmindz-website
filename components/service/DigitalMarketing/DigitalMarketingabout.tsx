"use client";

import React, { useState, useRef, useEffect } from "react";
import "../../../style/branding/BrandingAbout.css";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight } from "lucide-react";
import { useDigitalMarketingContext } from "./DigitalMarketingContext";

import founderImg from "../../../assets/branding/Braddingabount.png";

export const DigitalMarketingabout = () => {
  const { activeDigitalMarketingTab } = useDigitalMarketingContext();
  const [activeTab, setActiveTab] = useState(1);

  // Reset activeTab when parent activeDigitalMarketingTab changes
  useEffect(() => {
    setActiveTab(1);
  }, [activeDigitalMarketingTab]);

  const menuItemsSeo = [
    {
      id: 1,
      label: "Google Dominate Ranking",
      subtitle: "Google Dominate Ranking",
      title: "Rank Higher on Google.<br/>Own the First Page Organically.",
      img: founderImg,
      desc: [
        "Over 68% of online experiences begin with a search engine, and 75% of users never scroll past the first page of Google. If your website is not ranking at the top, you are losing high-intent traffic to competitors.",
        "Our Google Dominate Ranking services focus on white-hat SEO, technical optimization, content authority building, and high-quality organic link strategies. We improve keyword positioning, strengthen topical relevance, and optimize for AI Overviews and featured snippets using structured data and EEAT principles. We help businesses achieve sustainable first-page visibility through 100% organic methods, driving consistent traffic, qualified leads, and long-term search growth without paid ads."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Visibility Is Your Asset.",
      quoteLine2: "Rankings <span class='bm-grey-text normal'>drive</span> <span class='bm-grey-text'>Traffic.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 2,
      label: "Local SEO Services",
      subtitle: "Local SEO Services",
      title: "Dominate Local Search.<br/>Win Customers Near You.",
      img: founderImg,
      desc: [
        "Over 46% of all Google searches have local intent, and 76% of people who search for a nearby business visit within 24 hours. If your business is not visible in local results, you are losing ready to buy customers.",
        "Our Local SEO services focus on improving GMB rankings, optimizing location based keywords, managing reviews, and strengthening local citations. We help businesses rank higher in map results and local search listings, driving more calls, store visits, and qualified leads from customers actively searching in your area."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Location Is Your Market.",
      quoteLine2: "Local <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Visits.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 3,
      label: "Ecommerce SEO",
      subtitle: "Ecommerce SEO",
      title: "Increase Product Visibility.<br/>Drive Online Sales.",
      img: founderImg,
      desc: [
        "Around 44% of online shoppers start their buying journey on search engines. Ecommerce SEO focuses on optimizing product pages, category pages, schema markup, and transactional keywords.",
        "We improve product descriptions, technical filters, internal linking, and page speed to increase organic visibility. Optimized ecommerce websites see up to 30% higher organic conversions compared to unstructured stores. Strong keyword targeting combined with structured data improves click through rates and product discoverability, helping ecommerce brands increase consistent revenue from organic traffic."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Products Are Your Revenue.",
      quoteLine2: "Visibility <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Sales.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 4,
      label: "Generative Engine Optimization (GEO)",
      subtitle: "Generative Engine Optimization (GEO)",
      title: "Be Visible in AI Search.<br/>Answer Before Competitors Do.",
      img: founderImg,
      desc: [
        "Over 40% of users now rely on AI platforms like ChatGPT, Gemini, and Perplexity for research and buying decisions. Traditional SEO alone is no longer enough.",
        "Generative Engine Optimization focuses on structuring content so AI systems can understand, extract, and reference your brand accurately. We optimize semantic relevance, entity signals, structured data, FAQs, and authority content to improve AI visibility. This increases the chances of your business being cited, summarized, or recommended in generative search results, driving high intent traffic and stronger brand credibility."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Answers Are Your Value.",
      quoteLine2: "AI <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Authority.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 5,
      label: "AI Powered SEO",
      subtitle: "AI Powered SEO",
      title: "Appear in AI Search Results.<br/>Get Featured Above Traditional Rankings.",
      img: founderImg,
      desc: [
        "Google’s AI Overview now appears in a growing number of search results, summarizing answers directly at the top of the page. Studies show that featured AI summaries can capture significant user attention before organic listings.",
        "To appear in AI Overview, content must be structured, authoritative, and contextually complete. We optimize semantic depth, entity signals, structured data, and FAQ formats to improve eligibility for AI generated summaries. This increases your chances of being cited within Google AI Overview, strengthening visibility, credibility, and high intent traffic from competitive search queries."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Information Is Your Edge.",
      quoteLine2: "Overview <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Clicks.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 6,
      label: "SEO for Startups",
      subtitle: "SEO for Startups",
      title: "Build Search Visibility.<br/>Scale Organic Growth.",
      img: founderImg,
      desc: [
        "68% of online experiences begin with a search engine, and SEO drives over 1,000% more traffic than organic social media. Startups that invest in organic search early reduce long-term customer acquisition costs by up to 60% compared to paid channels.",
        "If your startup is not ranking, your competitors are capturing your future customers. Our Startup SEO services focus on white-hat SEO strategies, technical optimization, search intent mapping, content architecture, and authority building through ethical link acquisition. We prioritize AI-search visibility."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Startup Is Your Future.",
      quoteLine2: "SEO <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Growth.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    }
  ];

  const menuItemsMetaAd = [
    {
      id: 1,
      label: "Meta Ads for Startups",
      subtitle: "Meta Ads for Startups",
      title: "Launch With Precision.<br/>Validate With Data.",
      img: founderImg,
      desc: [
        "Over 60% of startups fail due to poor customer acquisition strategy. Running random boosted posts rarely generates scalable growth. Our Meta Ads agency builds structured funnel campaigns that test audiences, creatives, and offers systematically.",
        "Through advanced audience targeting, lookalike modeling, and retargeting sequences, we reduce cost per acquisition and accelerate traction. Facebook Ads services for startups must focus on rapid validation and controlled scaling. Businesses using data-driven paid social advertising can achieve measurable growth within weeks instead of months. We help startups convert early attention into predictable revenue."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Data Is Your Power.",
      quoteLine2: "Ads <span class='bm-grey-text normal'>drive</span> <span class='bm-grey-text'>Scale.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 2,
      label: "Meta Ads for SaaS Brands",
      subtitle: "Meta Ads for SaaS Brands",
      title: "Shorten Sales Cycles.<br/>Increase Demo Conversions.",
      img: founderImg,
      desc: [
        "SaaS buyers interact with multiple touchpoints before booking a demo. Our Instagram Ads management and Facebook Ads services focus on lead magnet funnels, webinar promotions, and retargeting strategies.",
        "Structured ad sequencing improves conversion rates and reduces drop-offs. Research shows retargeted users are 70% more likely to convert compared to cold traffic. As a results-oriented Meta Ads agency, we optimize cost per demo, improve ad relevance scores, and scale qualified leads consistently. Our performance marketing framework aligns campaigns with subscription revenue growth."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Platform Is Your Value.",
      quoteLine2: "Demos <span class='bm-grey-text normal'>drive</span> <span class='bm-grey-text'>Growth.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 3,
      label: "Meta Ads for E-commerce Brands",
      subtitle: "Meta Ads for E-commerce Brands",
      title: "Drive Sales Consistently.<br/>Scale Profitable Products.",
      img: founderImg,
      desc: [
        "Meta Ads influence nearly 26% of global e-commerce transactions. Yet many brands waste ad spend due to poor product segmentation and weak creative testing. We build dynamic catalog ads, retargeting funnels, and conversion-optimized campaigns that improve purchase rates.",
        "Structured Facebook Ads services combined with audience layering reduce CPA significantly. Brands that test multiple creatives weekly see up to 40% stronger performance. Our Meta Ads management approach focuses on increasing ROAS while maintaining sustainable scaling."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Products Are Your Revenue.",
      quoteLine2: "Ads <span class='bm-grey-text normal'>drive</span> <span class='bm-grey-text'>Sales.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 4,
      label: "Meta Ads for Service Businesses",
      subtitle: "Meta Ads for Service Businesses",
      title: "Generate Qualified Leads.<br/>Lower Acquisition Costs.",
      img: founderImg,
      desc: [
        "Lead generation campaigns require precise targeting and optimized forms. Our paid social advertising strategy integrates instant forms, landing pages, and retargeting flows to maximize lead quality.",
        "Businesses using structured Meta Ads campaigns experience up to 35% lower cost per lead. We continuously optimize copy, creatives, and audience segments to maintain performance stability. As a conversion-focused Meta Ads agency, we prioritize measurable business outcomes over vanity metrics."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Service Is Your Core.",
      quoteLine2: "Leads <span class='bm-grey-text normal'>drive</span> <span class='bm-grey-text'>Business.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 5,
      label: "Meta Ads for Influencers & Personal Brands",
      subtitle: "Meta Ads for Influencers & Personal Brands",
      title: "Expand Reach Strategically.<br/>Monetize Your Audience.",
      img: founderImg,
      desc: [
        "Organic reach continues to decline across platforms. Paid amplification through Instagram Ads management helps influencers increase visibility and collaboration opportunities.",
        "Our campaigns boost high-performing content, grow relevant followers, and drive audience engagement. Structured targeting ensures your ads reach aligned demographics. Brands that combine organic content with paid promotion see significantly higher engagement consistency. We transform attention into measurable monetization opportunities."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Audience Is Your Power.",
      quoteLine2: "Reach <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Impact.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 6,
      label: "Meta Ads for Coaches & Consultants",
      subtitle: "Meta Ads for Coaches & Consultants",
      title: "Attract Serious Buyers.<br/>Increase Consultation Bookings.",
      img: founderImg,
      desc: [
        "Over 80% of consumers research online before booking services. Meta Ads allow precise audience targeting based on interests, behaviors, and demographics. We build lead generation funnels with retargeting layers that nurture prospects effectively.",
        "Structured Facebook Ads services increase booking rates and reduce wasted ad spend. Our Meta Ads management system focuses on conversion tracking, pixel optimization, and audience refinement to deliver predictable client acquisition growth."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Expertise Is Your Product.",
      quoteLine2: "Bookings <span class='bm-grey-text normal'>drive</span> <span class='bm-grey-text'>Success.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    }
  ];

  const menuItemsGoogleAd = [
    {
      id: 1,
      label: "Google Ads for Startups",
      subtitle: "Google Ads for Startups",
      title: "Launch With Precision.<br/>Scale With Measurable ROI.",
      img: founderImg,
      desc: [
        "Startups cannot afford wasted ad spend. Nearly 50% of new advertisers lose budget due to poor keyword targeting and improper tracking. Our Google Ads management services focus on high intent keyword research, negative keyword filtering, and smart bidding strategies.",
        "As a performance driven PPC agency, we structure campaigns around lead generation and early revenue traction. Businesses using conversion optimized landing pages see up to 55% higher conversion rates. We help startups acquire customers efficiently while maintaining scalable acquisition costs."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Budget Is Your Engine.",
      quoteLine2: "Precision <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Growth.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 2,
      label: "Google Ads for SaaS Brands",
      subtitle: "Google Ads for SaaS Brands",
      title: "Capture Intent.<br/>Convert Trial Users.",
      img: founderImg,
      desc: [
        "SaaS buyers actively search for comparisons, pricing, and feature solutions before signing up. If your ads do not align with search intent, click costs increase while conversions drop.",
        "Our Google Ads services focus on search campaigns, remarketing, and competitor targeting to improve demo bookings and trial signups. Accounts optimized with structured bidding strategies improve Quality Score and reduce CPC by up to 20%. We design PPC funnels that nurture prospects and increase subscription conversions."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Trials Are Your Revenue.",
      quoteLine2: "Intent <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Users.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 3,
      label: "Google Ads for Ecommerce Brands",
      subtitle: "Google Ads for Ecommerce Brands",
      title: "Increase Product Visibility.<br/>Drive High Intent Sales.",
      img: founderImg,
      desc: [
        "Shopping campaigns influence over 76% of online purchasing decisions. Poor product feed optimization reduces visibility in Google Shopping results. Our Google Ads agency optimizes product titles, feed attributes, and bidding structures to improve impression share.",
        "Ecommerce brands using performance optimized shopping campaigns see up to 30% higher ROAS. We manage search, display, and remarketing campaigns to recover abandoned carts and increase purchase frequency."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Visibility Is Your Sales.",
      quoteLine2: "Optimization <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>ROAS.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 4,
      label: "Google Ads for Local Businesses",
      subtitle: "Google Ads for Local Businesses",
      title: "Dominate Local Search.<br/>Generate Ready To Buy Leads.",
      img: founderImg,
      desc: [
        "46% of Google searches have local intent. Without location based targeting and call extensions, local businesses miss valuable leads. Our Google Ads management services include geo targeting, call tracking, and optimized location extensions to drive calls and walk ins.",
        "Businesses using structured local PPC campaigns experience up to 40% more inbound enquiries. We focus on visibility, lead quality, and cost efficient acquisition."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Neighborhood Is Your Market.",
      quoteLine2: "Search <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Footfall.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 5,
      label: "Google Ads for Service Providers",
      subtitle: "Google Ads for Service Providers",
      title: "Attract High Value Clients.<br/>Reduce Cost Per Lead.",
      img: founderImg,
      desc: [
        "Service industries face intense keyword competition. If campaigns lack negative keywords and audience segmentation, CPC rises quickly. Our Google Ads experts build conversion focused search campaigns with landing page alignment and continuous A/B testing.",
        "Companies optimizing ad copy and extensions see up to 25% higher click through rates. We refine targeting weekly to improve lead quality and lower cost per acquisition."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Clicks Are Your Leads.",
      quoteLine2: "Targeting <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Clients.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 6,
      label: "Google Ads for Enterprises",
      subtitle: "Google Ads for Enterprises",
      title: "Scale Strategically.<br/>Maximize Paid Performance.",
      img: founderImg,
      desc: [
        "Large ad accounts require structured segmentation and data driven scaling. Google Ads accounts with automated smart bidding strategies improve efficiency by up to 30% when properly managed.",
        "Our PPC specialists analyze search term data, device performance, and audience signals to refine bidding models. We focus on impression share growth, campaign expansion, and consistent ROI tracking. Our approach ensures sustainable paid search growth at scale."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Scale Is Your Advantage.",
      quoteLine2: "Strategy <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>ROI.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    }
  ];

  const menuItemsLinkedin = [
    {
      id: 1,
      label: "LinkedIn Marketing for Startups",
      subtitle: "LinkedIn Marketing for Startups",
      title: "Build Investor Visibility.<br/>Generate Early Traction.",
      img: founderImg,
      desc: [
        "Over 62% of investors review founders on LinkedIn before responding. Startups without optimized profiles and consistent thought leadership lose credibility instantly. We develop LinkedIn marketing strategies focused on founder branding, audience growth, and lead nurturing.",
        "Through structured LinkedIn Ads and organic positioning, we help startups increase profile views and inbound interest. Startups that actively post industry insights experience up to 2x higher engagement rates. Our LinkedIn marketing services turn visibility into partnerships and business growth opportunities."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Network Is Your Net Worth.",
      quoteLine2: "Visibility <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Traction.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 2,
      label: "LinkedIn Marketing for SaaS Brands",
      subtitle: "LinkedIn Marketing for SaaS Brands",
      title: "Explain Value Clearly.<br/>Convert Through Authority.",
      img: founderImg,
      desc: [
        "B2B buyers research multiple vendors before scheduling demos. LinkedIn plays a major role in decision making. We create authority driven content and manage LinkedIn Ads campaigns targeting specific job roles and industries.",
        "SaaS brands using educational content on LinkedIn report 60% higher engagement and stronger demo conversions. Our LinkedIn marketing agency aligns messaging with buyer intent and builds trust through consistent positioning, retargeting campaigns, and data driven optimization."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Content Is Your Funnel.",
      quoteLine2: "Authority <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Demos.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 3,
      label: "LinkedIn Growth for Consultants & Experts",
      subtitle: "LinkedIn Growth for Consultants & Experts",
      title: "Build Industry Authority.<br/>Attract Premium Clients.",
      img: founderImg,
      desc: [
        "Decision makers trust professionals who share insights consistently. Profiles optimized with strategic content see significantly higher connection acceptance rates. We build content frameworks that highlight expertise, case studies, and thought leadership.",
        "Our LinkedIn marketing services increase credibility and generate inbound enquiries from qualified prospects. Consultants who post weekly experience up to 50% higher engagement growth. We convert personal branding into structured business opportunities."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Insights Are Your Hooks.",
      quoteLine2: "Expertise <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Clients.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 4,
      label: "LinkedIn Ads for B2B Lead Generation",
      subtitle: "LinkedIn Ads for B2B Lead Generation",
      title: "Target Precisely.<br/>Drive High Intent Leads.",
      img: founderImg,
      desc: [
        "LinkedIn Ads allow targeting by job title, company size, industry, and seniority level. This makes it one of the most effective B2B advertising platforms. We create conversion optimized LinkedIn Ads campaigns with clear messaging and funnel strategy.",
        "Businesses running structured LinkedIn Ads campaigns see up to 33% higher lead quality compared to generic ads. Our LinkedIn marketing team focuses on CPL optimization, retargeting, and continuous performance tracking."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> B2B Audience Is Waiting.",
      quoteLine2: "Targeting <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Quality.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 5,
      label: "LinkedIn Marketing for Enterprises",
      subtitle: "LinkedIn Marketing for Enterprises",
      title: "Strengthen Brand Authority.<br/>Expand Market Reach.",
      img: founderImg,
      desc: [
        "Enterprise brands require consistent authority and global visibility. LinkedIn marketing enables structured communication with decision makers at scale. We build content calendars, employee advocacy strategies, and LinkedIn Ads campaigns that increase corporate visibility.",
        "Companies investing in LinkedIn branding see improved trust and engagement across stakeholders. Our LinkedIn marketing agency ensures consistent messaging, data driven growth, and scalable B2B lead generation."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Reach Is Your Power.",
      quoteLine2: "Authority <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Trust.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 6,
      label: "LinkedIn Personal Branding for Leaders",
      subtitle: "LinkedIn Personal Branding for Leaders",
      title: "Own Your Narrative.<br/>Lead With Influence.",
      img: founderImg,
      desc: [
        "Executives and founders with strong LinkedIn presence gain higher speaking, partnership, and investor opportunities. Profiles with optimized summaries and consistent posting receive significantly more inbound enquiries.",
        "We refine personal positioning, create authority driven content, and manage engagement strategy. Our LinkedIn marketing services help leaders grow influence, build credibility, and drive long term business impact through structured visibility."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Story Is Your Asset.",
      quoteLine2: "Influence <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Impact.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    }
  ];

  const menuItemsWhatsapp = [
    {
      id: 1,
      label: "WhatsApp Marketing for Startups",
      subtitle: "WhatsApp Marketing for Startups",
      title: "Launch Conversations Fast.<br/>Convert Early Interest.",
      img: founderImg,
      desc: [
        "Startups often lose leads because response time is slow. Studies show businesses responding within 5 minutes are 9X more likely to convert leads. We build click-to-WhatsApp Meta ad funnels, automated greetings, and lead qualification workflows.",
        "Our WhatsApp marketing services focus on fast engagement, structured follow-ups, and conversion tracking. Startups using automated WhatsApp funnels reduce lead drop-off significantly. We help you turn ad clicks into real conversations and paying customers through strategic messaging systems."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Response Is Your Conversion.",
      quoteLine2: "Speed <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Sales.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 2,
      label: "WhatsApp Marketing for E-commerce Brands",
      subtitle: "WhatsApp Marketing for E-commerce Brands",
      title: "Recover Carts Instantly.<br/>Increase Repeat Orders.",
      img: founderImg,
      desc: [
        "Nearly 70% of online carts are abandoned. WhatsApp retargeting messages achieve higher recovery rates compared to traditional email reminders. We build abandoned cart automation, order confirmation flows, delivery updates, and repeat purchase campaigns.",
        "Integrated with Meta Ads, our WhatsApp marketing system improves customer lifetime value. Structured broadcast campaigns help brands increase repeat purchase frequency. We focus on measurable revenue growth through automated engagement and targeted remarketing."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Carts Are Your Opportunity.",
      quoteLine2: "Messages <span class='bm-grey-text normal'>drive</span> <span class='bm-grey-text'>Recovery.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 3,
      label: "WhatsApp Marketing for Service Businesses",
      subtitle: "WhatsApp Marketing for Service Businesses",
      title: "Book More Appointments.<br/>Reduce Missed Leads.",
      img: founderImg,
      desc: [
        "Service businesses depend on fast communication. Delayed responses often result in lost bookings. We create automated reply systems, appointment reminders, and lead nurturing sequences that improve booking rates.",
        "Click-to-WhatsApp ads generate highly qualified inquiries compared to standard landing forms. Our WhatsApp marketing strategy ensures every inquiry receives timely follow-up. This improves trust and increases confirmed appointments consistently."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Communication Is Your Edge.",
      quoteLine2: "Follow-up <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Bookings.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 4,
      label: "WhatsApp Marketing for Real Estate & Education",
      subtitle: "WhatsApp Marketing for Real Estate & Education",
      title: "Capture Intent Immediately.<br/>Nurture Long Sales Cycles.",
      img: founderImg,
      desc: [
        "High-value industries require structured follow-ups. Over 60% of property and course buyers require multiple touchpoints before conversion. We build drip campaigns, FAQ automation, brochure sharing flows, and structured nurturing sequences.",
        "WhatsApp broadcast campaigns keep prospects engaged without overwhelming them. Our data-driven WhatsApp marketing approach improves engagement and shortens decision cycles."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Prospects Need Guidance.",
      quoteLine2: "Nurturing <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Decisions.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 5,
      label: "WhatsApp Retargeting & Meta Ads Integration",
      subtitle: "WhatsApp Retargeting & Meta Ads Integration",
      title: "Bridge Ads To Conversations.<br/>Improve Conversion Rate.",
      img: founderImg,
      desc: [
        "Click-to-WhatsApp ads deliver higher engagement compared to cold landing pages. We integrate Meta Ads with automated WhatsApp funnels to ensure every ad click turns into a guided conversation. Lead segmentation, tagging, and remarketing flows improve conversion tracking.",
        "Businesses combining Meta Ads with WhatsApp automation see stronger lead quality and improved closing ratios. We turn ad traffic into structured conversations that drive revenue."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Ads Need Conversations.",
      quoteLine2: "Integration <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>ROI.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 6,
      label: "WhatsApp Automation for Coaches & Consultants",
      subtitle: "WhatsApp Automation for Coaches & Consultants",
      title: "Build Trust Personally.<br/>Scale Without Manual Effort.",
      img: founderImg,
      desc: [
        "Coaches and consultants rely on personal connection. WhatsApp automation allows you to nurture leads while maintaining authenticity. We build onboarding flows, webinar reminders, follow-up sequences, and testimonial sharing systems.",
        "Automated messaging improves response consistency while reducing manual workload. Structured WhatsApp marketing increases consultation bookings and improves closing rates. We help you scale conversations without losing personal touch."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Time Is Your Value.",
      quoteLine2: "Automation <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Scale.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    }
  ];

  const menuItemsYoutube = [
    {
      id: 1,
      label: "YouTube Growth for Startups & New Ventures",
      subtitle: "YouTube Growth for Startups & New Ventures",
      title: "Build Awareness Early.<br/>Earn Market Trust Faster.",
      img: founderImg,
      desc: [
        "84% of consumers say they have been convinced to buy a product after watching a brand’s video. For startups, visibility equals survival. We create explainer videos, founder stories, and problem-focused content that establishes authority in your niche.",
        "With YouTube being the second-largest search engine, optimized startup videos rank on both YouTube and Google. Our strategy includes keyword mapping, high-retention scripting, and subscriber funnel design. Startups leveraging video marketing experience up to 49% faster revenue growth compared to those relying only on text-based content."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Video Is Your Voice.",
      quoteLine2: "Visibility <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Trust.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 2,
      label: "YouTube Strategy for E-commerce & D2C Brands",
      subtitle: "YouTube Strategy for E-commerce & D2C Brands",
      title: "Demonstrate Products Clearly.<br/>Increase Purchase Intent.",
      img: founderImg,
      desc: [
        "73% of consumers are more likely to purchase after watching a product demonstration video. We produce product walkthroughs, comparison videos, customer testimonials, and buying guides that influence decision-making. Optimized thumbnails can improve click-through rates by 30% or more.",
        "Our YouTube SEO framework ensures product videos rank for high-intent search queries. Integrated remarketing campaigns re-engage viewers and increase repeat purchases. Brands using video content report improved customer confidence and stronger conversion rates across sales funnels."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Visuals Are Your Pitch.",
      quoteLine2: "Demos <span class='bm-grey-text normal'>drive</span> <span class='bm-grey-text'>Sales.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 3,
      label: "YouTube Authority Building for Service Providers",
      subtitle: "YouTube Authority Building for Service Providers",
      title: "Educate Before You Sell.<br/>Attract Qualified Leads.",
      img: founderImg,
      desc: [
        "Service businesses thrive on trust. 70% of buyers watch multiple videos before choosing a service provider. We develop FAQ series, case study breakdowns, and expert-led educational content that builds credibility. Higher watch time signals improve algorithm recommendations and organic reach.",
        "By integrating lead capture systems within video descriptions and pinned comments, we convert engaged viewers into booked consultations. Structured YouTube content strengthens authority positioning and increases inbound inquiries consistently."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Expertise Needs Visibility.",
      quoteLine2: "Education <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Leads.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 4,
      label: "YouTube Content Systems for Real Estate & Education",
      subtitle: "YouTube Content Systems for Real Estate & Education",
      title: "Show Value Visually.<br/>Shorten Decision Timelines.",
      img: founderImg,
      desc: [
        "Complex purchases require clarity. Over 60% of property buyers and course seekers research extensively through video before committing. We create property walkthroughs, campus tours, webinar recordings, and testimonial-driven content.",
        "Structured playlists nurture long decision cycles while improving session duration. SEO-optimized titles and metadata help rank for competitive location-based and academic keywords. Video-based engagement increases buyer confidence and accelerates high-value decision-making."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Quality Speaks Visually.",
      quoteLine2: "Content <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Decisions.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 5,
      label: "YouTube Advertising & Performance Funnels",
      subtitle: "YouTube Advertising & Performance Funnels",
      title: "Convert Views Into Revenue.<br/>Scale With Data.",
      img: founderImg,
      desc: [
        "YouTube ads reach over 90% of global internet users, offering unmatched targeting precision. We manage skippable in-stream ads, video action campaigns, and remarketing sequences aligned with CRM and website traffic. Video ads improve brand recall by up to 80% compared to static formats.",
        "Advanced audience segmentation ensures higher lead quality and improved ROI. Our performance-driven YouTube funnels connect awareness, engagement, and direct response campaigns into one measurable growth system."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Views Can Convert.",
      quoteLine2: "Funnels <span class='bm-grey-text normal'>drive</span> <span class='bm-grey-text'>ROI.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    },
    {
      id: 6,
      label: "YouTube Systems for Coaches, Consultants & Personal Brands",
      subtitle: "YouTube Systems for Coaches, Consultants & Personal Brands",
      title: "Build Influence Consistently.<br/>Monetize Expertise Strategically.",
      img: founderImg,
      desc: [
        "Personal brands grow through consistent visibility. Channels that publish weekly videos grow subscribers 3X faster than irregular publishers. We build structured content calendars, long-form educational videos, short-form repurposing strategies, and authority-driven series.",
        "Optimized scripts and retention hooks improve average watch duration. Automated workflows maintain publishing consistency without overwhelming your schedule. A strong YouTube presence increases consultation bookings, speaking opportunities, and long-term brand authority."
      ],
      quoteLine1: "<span class='bm-grey-text normal'>Your</span> Persona Is Your Brand.",
      quoteLine2: "Consistency <span class='bm-grey-text normal'>drives</span> <span class='bm-grey-text'>Influence.</span>",
      quoteOverlay: "Marketing Focus",
      btn: true
    }
  ];

  const getActiveMenuItems = () => {
    switch (activeDigitalMarketingTab) {
      case 0:
        return menuItemsSeo;
      case 1:
        return menuItemsMetaAd;
      case 2:
        return menuItemsGoogleAd;
      case 3:
        return menuItemsLinkedin;
      case 4:
        return menuItemsWhatsapp;
      case 5:
        return menuItemsYoutube;
      default:
        return menuItemsSeo;
    }
  };

  const menuItems = getActiveMenuItems();
  const current = menuItems.find(item => item.id === activeTab) || menuItems[0];

  const ScrollLine = ({ content }) => {
    const [isPassed, setIsPassed] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

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

  const ScrollParagraph = ({ text }: { text: string }) => {
    const lines = text.split(/(?<=\. )/g);
    return (
      <p className="bm-about-paragraph-branding">
        {lines.map((line, idx) => (
          <ScrollLine key={idx} content={line + (idx < lines.length - 1 ? " " : "")} />
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
            {menuItems.map((item) => (
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
          <FadeIn key={`${activeDigitalMarketingTab}-${activeTab}`} delay={0.2}>
            <div className="bm-standard-layout-branding">
              <div className="bm-about-text-side-branding">
                <p className="bm-about-subtitle-branding">{current.subtitle}</p>
                <h2
                  className="bm-about-main-title-branding"
                  dangerouslySetInnerHTML={{ __html: current.title }}
                ></h2>

                <div className="bm-about-description-branding">
                  {current.desc.map((text, index) => (
                    <ScrollParagraph key={index} text={text} />
                  ))}
                </div>

                {current.btn && (
                  <button className="bm-about-learn-btn-branding">
                    <div className="bm-btn-icon-branding">
                      <ArrowRight size={18} />
                    </div>
                    <div>
                      Start<span> Marketing</span>
                    </div>
                  </button>


                )}
              </div>

              <div className="bm-about-image-side-branding">
                <div className="bm-about-quote-container-branding">
                  {/* Decorative Quote Icon - 78x74px */}
                  <svg className="bm-about-quote-icon-branding" viewBox="0 0 78 74" fill="currentColor">
                    <path d="M19.5 0C8.73 0 0 8.73 0 19.5V74H34V39.5H14.5V19.5C14.5 16.74 16.74 14.5 19.5 14.5H34V0H19.5ZM63.5 0C52.73 0 44 8.73 44 19.5V74H78V39.5H58.5V19.5C58.5 16.74 60.74 14.5 63.5 14.5H78V0H63.5Z" />
                  </svg>
                  {/* <h4 className="bm-about-quote-text-branding" dangerouslySetInnerHTML={{ __html: current.quoteLine1 }}></h4>
                  <h4 className="bm-about-quote-text-branding" dangerouslySetInnerHTML={{ __html: current.quoteLine2 }}></h4> */}
                  <h4 className="bm-about-quote-text-branding"><span className='bm-grey-text '>Your</span> Startup Is Your Product.</h4>
                  <h4 className="bm-about-quote-text-branding">You <span className='bm-grey-text'>are</span> the <span className='bm-grey-text'>Brand.</span></h4>
                </div>

                {/* Image Frame - Exact 379x541px */}
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

