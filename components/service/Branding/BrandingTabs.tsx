import React from "react";
import "../../../style/branding/brandinglist.css";
import { PersonalBranding } from "./PersonalBranding";
import { brandingData } from "@/data/brandingData";

export const BrandingTabs = ({ activeTabKey, setActiveTabKey }: { activeTabKey: any, setActiveTabKey: any }) => {
  const tabsData = [
    { name: "Personal Branding", key: "personalBranding" },
    { name: "Company Branding", key: "companyBranding" },
    { name: "Brand Strategy", key: "brandStrategy" },
    { name: "Video Creation and Editing", key: "videoCreation" },
    { name: "Brand Consulting", key: "brandConsulting" },
  ];

  return (
    <section className="bl-main-section">
      <div className="bl-background-watermark">Branding</div>
      <div className="bl-container">
        <div className="bl-tab-wrapper">
          {tabsData.map((tab, index) => (
            <button
              key={index}
              className={`bl-tab ${activeTabKey === tab.key ? "active" : ""}`}
              onClick={() => setActiveTabKey(tab.key as any)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bl-tab-content">
          <PersonalBranding data={brandingData[activeTabKey as keyof typeof brandingData].hero} />
        </div>
      </div>
    </section>
  );
};

