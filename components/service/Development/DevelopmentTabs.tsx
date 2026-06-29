"use client";

import React, { useState } from "react";
import "../../../style/branding/brandinglist.css";
import { StaticDevelopment } from "../Branding/StaticDevelopment";
import { EcomDevelopment } from "../Branding/EcomDevelopment";
import { MobileAppDevelopment } from "../Branding/MobileAppDevelopment";
import { WebApplicationsDevelopment } from "../Branding/WebApplicationsDevelopment";
import { useDevelopmentContext } from "./DevelopmentContext";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
export const DevelopmentTabs = () => {
  const { activeDevelopmentTab: activeTab, setActiveDevelopmentTab: setActiveTab } = useDevelopmentContext();
  
  const tabsData = [
    { name: " Static Development", component: StaticDevelopment},
    { name: "E.com Development", component: EcomDevelopment },
    { name: "Mobile App Development", component: MobileAppDevelopment },
    { name: "Web Applications Development", component: WebApplicationsDevelopment },
  
  ];
 




  
  const ActiveComponent = tabsData[activeTab].component;


  console.log(tabsData[activeTab].name, 'activeTab')

  return (
    <section className="bl-main-section">
      <div className="bl-background-watermark">Development</div>
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
