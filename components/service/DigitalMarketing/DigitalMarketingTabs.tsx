"use client";

import React from "react";
import "../../../style/branding/brandinglist.css";
import { SeoMarketing } from "../Branding/SeoMarketing";
import { MetaAdMarketing } from "../Branding/MetaAdMarketing";
import { GoogleAdMarketing } from "../Branding/GoogleAdMarketing";
import { LinkedinMarketing } from "../Branding/LinkedinMarketing";
import { WhatsappMarketing } from "../Branding/WhatsappMarketing";
import { YoutubeMarketing } from "../Branding/YoutubeMarketing";
import { useDigitalMarketingContext } from "./DigitalMarketingContext";

export const DigitalMarketingTabs = () => {
  const { activeDigitalMarketingTab: activeTab, setActiveDigitalMarketingTab: setActiveTab } = useDigitalMarketingContext();
  
  const tabsData = [
    { name: "SEO", component: SeoMarketing },
    { name: "Meta Ad", component: MetaAdMarketing },
    { name: "Google Ad", component: GoogleAdMarketing },
    { name: "Linkedin Marketing", component: LinkedinMarketing },
    { name: "Whatsapp Marketing", component: WhatsappMarketing },
    { name: "Youtube Marketing", component: YoutubeMarketing },
  ];
  
  const ActiveComponent = tabsData[activeTab].component;

  return (
    <section className="bl-main-section">
      <div className="bl-background-watermark">Marketing</div>
      <div className="bl-container">
        <div className="bl-tab-wrapper">
          {tabsData.map((tab, index) => (
            <button
              key={index}
              className={`bl-tab ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="bl-content-wrapper">
           <ActiveComponent />
        </div>
      </div>
    </section>
  );
};
