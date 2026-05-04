"use client";

import React, { useState } from "react";
import "../../../style/branding/brandinglist.css";
import { PersonalBranding } from "../Branding/PersonalBranding";
import { CompanyBranding } from "../Branding/CompanyBranding";
import { BrandStrategy } from "../Branding/BrandStrategy";
import { BrandConsulting } from "../Branding/BrandConsulting";
import { VideoCreation } from "../Branding/VideoCreation";

export const DesigningTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabsData = [
    { name: "Personal Branding", component: PersonalBranding },
    { name: "Company Branding", component: CompanyBranding },
    { name: "Brand Strategy", component: BrandStrategy },
    { name: "Video Creation", component: VideoCreation },
    { name: "Brand Consulting", component: BrandConsulting },
  ];
  
  const ActiveComponent = tabsData[activeTab].component;

  return (
    <section className="bl-main-section">
      <div className="bl-background-watermark">Designing</div>
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

        {/* Content */}
        <div className="bl-tab-content">
          <ActiveComponent />
        </div>
      </div>
    </section>
  );
};
