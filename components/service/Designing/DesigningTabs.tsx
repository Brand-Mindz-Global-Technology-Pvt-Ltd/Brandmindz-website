import React from "react";
import "../../../style/branding/brandinglist.css";
import { designingData } from "@/data/designingData";
import { DesigningHero } from "./DesigningHero";

export const DesigningTabs = ({ activeTabKey, setActiveTabKey }: { activeTabKey: any, setActiveTabKey: any }) => {
  const tabsData = [
    { name: "UI UX Design", key: "uiuxDesign" },
    { name: "Graphic Design", key: "graphicDesign" },
    { name: "Package Design", key: "packageDesign" },
    { name: "Logo Design", key: "logoDesign" },
  ];

  return (
    <section className="bl-main-section">
      <div className="bl-background-watermark">Designing</div>
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
          <DesigningHero data={designingData[activeTabKey as keyof typeof designingData].hero} />
        </div>
      </div>
    </section>
  );
};


