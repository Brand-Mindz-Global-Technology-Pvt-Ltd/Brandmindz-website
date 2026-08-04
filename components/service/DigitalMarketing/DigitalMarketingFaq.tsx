"use client";

import Faq from "@/components/home/Faq";
import { useDigitalMarketingContext } from "./DigitalMarketingContext";

const seoFaq = {
  subtitle: "SEO – Frequently Asked Questions",
  items: [
    {
      question: "What SEO services do you provide?",
      answer: "We provide on-page SEO, technical SEO, content optimization, keyword research, site audits, and performance tracking aligned with search engine best practices."
    },
    {
      question: "How do you select keywords for SEO?",
      answer: "Keyword selection is based on search intent, competition analysis, relevance to business offerings, and long-term growth potential."
    },
    {
      question: "How long does SEO take to show results?",
      answer: "SEO is a long-term process. Measurable improvements typically take a few months of consistent optimization, depending on competition and website health."
    },
    {
      question: "Do you follow search engine guidelines?",
      answer: "Yes. All SEO activities are carried out in compliance with search engine policies and ethical optimization practices."
    },
    {
      question: "Will SEO help improve website traffic?",
      answer: "SEO helps improve organic visibility, relevant traffic, and long-term search presence when executed consistently."
    },
    {
      question: "Is technical SEO included?",
      answer: "Yes. Technical aspects such as site structure, page speed, mobile usability, and indexing are part of the SEO process."
    },
    {
      question: "Do you provide SEO reports?",
      answer: "Yes. Periodic reports are shared to provide visibility into rankings, traffic trends, and optimization efforts."
    },
    {
      question: "Is SEO suitable for all businesses?",
      answer: "SEO can benefit most businesses, though strategies and timelines vary based on industry, competition, and goals."
    }
  ]
};

const metaAdsFaq = {
  subtitle: "Meta Ads – FAQs",
  items: [
    {
      question: "What are Meta Ads?",
      answer: "Meta Ads are paid advertisements that appear across Facebook, Instagram, Messenger, and the Meta Audience Network, allowing businesses to reach highly targeted audiences based on demographics, interests, behaviours, and customer intent."
    },
    {
      question: "Why should my business invest in Meta Ads?",
      answer: "Meta Ads help businesses increase brand awareness, generate qualified leads, drive website traffic, promote products, and improve sales by reaching potential customers at different stages of the buying journey."
    },
    {
      question: "Which businesses benefit most from Meta Ads?",
      answer: "Meta Ads work effectively for e-commerce businesses, real estate companies, educational institutions, healthcare providers, restaurants, construction companies, manufacturers, startups, and service-based businesses."
    },
    {
      question: "What types of Meta Ads campaigns does Brand Mindz manage?",
      answer: "We manage lead generation campaigns, website conversion campaigns, e-commerce sales campaigns, brand awareness campaigns, remarketing campaigns, catalogue ads, engagement campaigns, and app promotion campaigns."
    },
    {
      question: "How do you identify the right audience for Meta Ads?",
      answer: "We use detailed audience research based on demographics, interests, customer behaviour, location, purchase intent, lookalike audiences, and remarketing data to maximise campaign performance."
    },
    {
      question: "Does Brand Mindz create ad creatives and copy?",
      answer: "Yes. Our team develops high-converting ad creatives, persuasive copywriting, compelling visuals, and strategic campaign messaging designed to improve engagement and conversion rates."
    },
    {
      question: "How do you optimise Meta Ads campaigns?",
      answer: "We continuously monitor campaign performance, test multiple creatives, optimise audiences, refine bidding strategies, improve landing page relevance, and scale campaigns based on real-time data."
    },
    {
      question: "How long does it take to see results from Meta Ads?",
      answer: "While campaigns start delivering data immediately after launch, optimisation takes time. Performance improves as campaigns gather data and are continuously refined based on audience behaviour and conversion metrics."
    },
    {
      question: "How do you measure the success of Meta Ads?",
      answer: "We track key performance indicators including Cost Per Lead (CPL), Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Click-Through Rate (CTR), conversion rate, impressions, and engagement."
    },
    {
      question: "Why choose Brand Mindz as your Meta Ads agency?",
      answer: "Brand Mindz focuses on business outcomes rather than vanity metrics. We combine audience research, creative strategy, conversion optimisation, analytics, and continuous improvement to maximise return on advertising investment."
    }
  ]
};

const googleAdsFaq = {
  subtitle: "Google Ads – FAQs",
  items: [
    {
      question: "What is Google Ads?",
      answer: "Google Ads is Google's online advertising platform that allows businesses to display ads across Google Search, YouTube, Google Display Network, Gmail, Google Maps, and partner websites."
    },
    {
      question: "Why should my business use Google Ads?",
      answer: "Google Ads helps businesses reach customers who are actively searching for products or services, making it one of the most effective digital marketing channels for generating high-intent leads and sales."
    },
    {
      question: "What types of Google Ads campaigns does Brand Mindz manage?",
      answer: "We manage Search Ads, Display Ads, Shopping Ads, Performance Max campaigns, YouTube Ads, Remarketing campaigns, Local Ads, and Demand Generation campaigns."
    },
    {
      question: "How do you select keywords for Google Ads?",
      answer: "We conduct comprehensive keyword research based on search intent, competition, relevance, location, customer behaviour, and business objectives to maximise campaign performance."
    },
    {
      question: "Can Brand Mindz optimise my existing Google Ads campaigns?",
      answer: "Yes. We perform detailed campaign audits, improve keyword targeting, optimise bidding strategies, refine ad copy, enhance landing page performance, and reduce wasted advertising spend."
    },
    {
      question: "How long does it take for Google Ads to generate results?",
      answer: "Google Ads can begin driving traffic immediately after launch. However, consistent optimisation and performance analysis are essential to maximise lead quality and return on investment over time."
    },
    {
      question: "How do you improve the Quality Score of Google Ads?",
      answer: "We improve Quality Score by creating relevant ad copy, selecting high-intent keywords, improving landing page experience, increasing expected click-through rates, and ensuring strong keyword relevance."
    },
    {
      question: "Which industries benefit from Google Ads?",
      answer: "Google Ads is effective for businesses across industries including healthcare, education, manufacturing, real estate, legal services, construction, e-commerce, hospitality, technology, and professional services."
    },
    {
      question: "How do you measure the success of Google Ads campaigns?",
      answer: "We monitor impressions, Click-Through Rate (CTR), Cost Per Click (CPC), conversion rate, Cost Per Acquisition (CPA), Quality Score, Return on Ad Spend (ROAS), and overall business outcomes."
    },
    {
      question: "Why choose Brand Mindz as your Google Ads agency?",
      answer: "Brand Mindz combines strategic keyword research, compelling ad copy, landing page optimisation, conversion tracking, and continuous campaign optimisation to help businesses generate measurable growth through Google Ads."
    }
  ]
};

const linkedInMarketingFaq = {
  subtitle: "LinkedIn Marketing – FAQs",
  items: [
    {
      question: "What is LinkedIn marketing?",
      answer: "LinkedIn marketing is the process of using LinkedIn to build brand authority, generate B2B leads, strengthen professional networks, recruit talent, and establish thought leadership through organic content and paid advertising."
    },
    {
      question: "Who should use LinkedIn marketing?",
      answer: "LinkedIn marketing is ideal for B2B companies, SaaS businesses, manufacturers, consultants, educational institutions, startups, CEOs, founders, and professional service firms looking to reach business decision-makers."
    },
    {
      question: "How can LinkedIn marketing help my business?",
      answer: "LinkedIn helps businesses connect with professionals, build credibility, generate qualified leads, establish industry authority, and create long-term business relationships with decision-makers."
    },
    {
      question: "What LinkedIn marketing services does Brand Mindz offer?",
      answer: "We provide LinkedIn strategy, company page management, profile optimisation, executive branding, content creation, lead generation campaigns, LinkedIn Ads management, and performance reporting."
    },
    {
      question: "Can LinkedIn generate high-quality B2B leads?",
      answer: "Yes. LinkedIn is one of the most effective platforms for reaching business owners, CXOs, HR leaders, procurement teams, and professionals actively seeking business solutions."
    },
    {
      question: "Do you optimise personal LinkedIn profiles?",
      answer: "Yes. We optimise LinkedIn profiles for founders, executives, consultants, and professionals by improving positioning, profile content, credibility, and visibility."
    },
    {
      question: "How often should businesses post on LinkedIn?",
      answer: "Consistency matters more than frequency. We develop a structured content calendar based on your industry, audience, and business goals to maintain engagement and authority."
    },
    {
      question: "Do you manage LinkedIn Ads?",
      answer: "Yes. We create and manage LinkedIn Ads for lead generation, brand awareness, website traffic, event promotions, recruitment campaigns, and account-based marketing."
    },
    {
      question: "How do you measure LinkedIn marketing success?",
      answer: "We track profile growth, page engagement, lead generation, website traffic, audience growth, content performance, conversion rate, and campaign ROI."
    },
    {
      question: "Why choose Brand Mindz for LinkedIn marketing?",
      answer: "Brand Mindz combines business strategy, personal branding, content marketing, and paid advertising to help businesses build authority and generate meaningful B2B opportunities through LinkedIn."
    }
  ]
};

const whatsAppMarketingFaq = {
  subtitle: "WhatsApp Marketing – FAQs",
  items: [
    {
      question: "What is WhatsApp marketing?",
      answer: "WhatsApp marketing uses the WhatsApp Business Platform to engage customers through personalised conversations, automated messaging, promotional campaigns, customer support, and lead nurturing."
    },
    {
      question: "Is WhatsApp marketing suitable for every business?",
      answer: "Yes. WhatsApp marketing works well for retailers, healthcare providers, educational institutions, real estate companies, manufacturers, restaurants, service businesses, and e-commerce brands."
    },
    {
      question: "What WhatsApp marketing services does Brand Mindz provide?",
      answer: "We offer WhatsApp Business API integration, chatbot development, click-to-WhatsApp campaigns, automated workflows, broadcast messaging, CRM integration, customer support automation, and campaign analytics."
    },
    {
      question: "How does WhatsApp marketing help businesses?",
      answer: "WhatsApp marketing improves customer engagement, increases response rates, shortens sales cycles, delivers personalised communication, and enhances customer satisfaction."
    },
    {
      question: "Is WhatsApp marketing better than email marketing?",
      answer: "Both channels have unique strengths. WhatsApp typically delivers higher open rates and faster responses, making it highly effective for customer engagement and lead nurturing."
    },
    {
      question: "Can WhatsApp be integrated with Meta Ads?",
      answer: "Yes. Click-to-WhatsApp Ads allow businesses to connect directly with potential customers from Facebook and Instagram, creating faster conversations and improving lead conversion."
    },
    {
      question: "Is WhatsApp marketing compliant with Meta policies?",
      answer: "Yes. We implement WhatsApp marketing using approved practices that follow Meta's guidelines, customer consent requirements, and messaging policies."
    },
    {
      question: "Can WhatsApp marketing be automated?",
      answer: "Yes. We develop automated workflows for lead qualification, appointment reminders, order updates, customer support, FAQs, and follow-up communication."
    },
    {
      question: "How do you measure WhatsApp marketing performance?",
      answer: "We track message delivery, open rates, response rates, customer engagement, lead conversion, campaign effectiveness, and customer satisfaction metrics."
    },
    {
      question: "Why choose Brand Mindz for WhatsApp marketing?",
      answer: "Brand Mindz builds WhatsApp marketing systems that combine automation, customer engagement, CRM integration, and conversion-focused communication to improve business growth."
    }
  ]
};

const youTubeMarketingFaq = {
  subtitle: "YouTube Marketing – FAQs",
  items: [
    {
      question: "What is YouTube marketing?",
      answer: "YouTube marketing is the process of creating, optimising, and promoting video content to increase brand awareness, educate audiences, generate leads, and drive business growth through YouTube."
    },
    {
      question: "Why should businesses invest in YouTube marketing?",
      answer: "YouTube is the world's second-largest search engine. It helps businesses reach customers through educational videos, product demonstrations, customer testimonials, brand stories, and advertising."
    },
    {
      question: "What YouTube marketing services does Brand Mindz provide?",
      answer: "We offer YouTube channel strategy, content planning, video SEO, thumbnail design, YouTube Ads management, audience growth strategies, channel optimisation, and performance reporting."
    },
    {
      question: "Can YouTube generate business leads?",
      answer: "Yes. Informative and engaging videos help build trust, educate potential customers, improve search visibility, and generate qualified leads over the long term."
    },
    {
      question: "Do you optimise existing YouTube channels?",
      answer: "Yes. We improve channel branding, video optimisation, playlists, metadata, thumbnails, keyword strategy, and audience engagement to maximise channel performance."
    },
    {
      question: "What types of videos work best for YouTube marketing?",
      answer: "Educational videos, product demonstrations, customer testimonials, case studies, behind-the-scenes content, tutorials, interviews, and industry insights perform exceptionally well."
    },
    {
      question: "How does YouTube SEO improve video visibility?",
      answer: "YouTube SEO improves discoverability by optimising titles, descriptions, keywords, thumbnails, captions, playlists, audience retention, and engagement signals."
    },
    {
      question: "Do you manage YouTube advertising campaigns?",
      answer: "Yes. We create and optimise YouTube Ads including skippable ads, in-feed ads, bumper ads, remarketing campaigns, and video awareness campaigns."
    },
    {
      question: "How do you measure YouTube marketing success?",
      answer: "We monitor watch time, audience retention, subscriber growth, video engagement, click-through rate, impressions, lead generation, and overall business impact."
    },
    {
      question: "Why choose Brand Mindz for YouTube marketing?",
      answer: "Brand Mindz combines storytelling, video SEO, audience research, advertising, and performance analytics to build YouTube strategies that strengthen brand authority and generate measurable business growth."
    }
  ]
};

const socialMediaManagementFaq = {
  subtitle: "Social Media Management – Frequently Asked Questions",
  items: [
    {
      question: "What social media management services do you offer?",
      answer: "We provide social media account management, content planning, post scheduling, brand communication, and performance monitoring across relevant platforms."
    },
    {
      question: "Which social media platforms do you manage?",
      answer: "Platform selection depends on business objectives and audience presence. Common platforms include Instagram, Facebook, LinkedIn, and others as required."
    },
    {
      question: "Do you create social media content?",
      answer: "Content creation is carried out based on the agreed scope, including creatives, captions, and posting schedules, aligned with brand tone."
    },
    {
      question: "Will the content be customized for our brand?",
      answer: "Yes. All content is customized to reflect the brand’s identity, messaging, and communication style."
    },
    {
      question: "How often will content be posted?",
      answer: "Posting frequency is defined in the engagement scope and aligned with platform best practices and business goals."
    },
    {
      question: "Do you engage with comments and messages?",
      answer: "Comment and message management can be included based on the agreed scope and response guidelines."
    },
    {
      question: "Will we receive performance insights?",
      answer: "Yes. Periodic performance summaries are shared to provide visibility into reach, engagement, and audience growth."
    },
    {
      question: "Can social media management be combined with paid ads?",
      answer: "Yes. Social media management can be complemented with paid advertising for improved reach and performance."
    }
  ]
};

export const DigitalMarketingFaq = () => {
  const { activeDigitalMarketingTab } = useDigitalMarketingContext();
  const faq =
    activeDigitalMarketingTab === 0
      ? seoFaq
      : activeDigitalMarketingTab === 1
      ? metaAdsFaq
      : activeDigitalMarketingTab === 2
        ? googleAdsFaq
        : activeDigitalMarketingTab === 3
          ? linkedInMarketingFaq
          : activeDigitalMarketingTab === 4
            ? whatsAppMarketingFaq
            : activeDigitalMarketingTab === 5
              ? youTubeMarketingFaq
              : activeDigitalMarketingTab === 6
                ? socialMediaManagementFaq
                : undefined;

  return <Faq items={faq?.items} subtitle={faq?.subtitle} />;
};
