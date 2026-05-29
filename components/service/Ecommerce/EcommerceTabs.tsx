import React from "react";
import "../../../style/branding/brandinglist.css";
import { PersonalBranding } from "../Branding/PersonalBranding";
import { ecommerceData } from "@/data/ecommerceData";

export const EcommerceTabs = ({ activeTabKey, setActiveTabKey }: { activeTabKey: any, setActiveTabKey: any }) => {
  const tabsData = [
    { name: "Flipkart Listing", key: "flipkartListing" },
    { name: "Amazon Listing", key: "amazonListing" },
    { name: "Meesho Listing", key: "meeshoListing" },
    { name: "Myntra Listing", key: "myntraListing" },
    { name: "Jiomart Listing", key: "jiomartListing" },
    { name: "Seller Account Management", key: "sellerAccountManagement" },
  ];

  return (
    <section className="bl-main-section">
      <div className="bl-background-watermark">E-Commerce</div>
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
          <PersonalBranding data={ecommerceData[activeTabKey as keyof typeof ecommerceData].hero} />
        </div>
      </div>
    </section>
  );
};
