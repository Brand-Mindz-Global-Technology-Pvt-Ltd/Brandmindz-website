"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type DigitalMarketingContextType = {
  activeDigitalMarketingTab: number;
  setActiveDigitalMarketingTab: (index: number) => void;
};

const DigitalMarketingContext = createContext<DigitalMarketingContextType | undefined>(undefined);

export const DigitalMarketingProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeDigitalMarketingTab, setActiveDigitalMarketingTab] = useState(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    const requestedService = searchParams.get("service");
    const serviceIndexes: Record<string, number> = {
      seo: 0,
      metaAds: 1,
      googleAds: 2,
      linkedinMarketing: 3,
      whatsappMarketing: 4,
      youtubeMarketing: 5,
      socialMediaManagement: 6,
    };
    setActiveDigitalMarketingTab(serviceIndexes[requestedService ?? ""] ?? 0);
  }, [searchParams]);

  return (
    <DigitalMarketingContext.Provider value={{ activeDigitalMarketingTab, setActiveDigitalMarketingTab }}>
      {children}
    </DigitalMarketingContext.Provider>
  );
};

export const useDigitalMarketingContext = () => {
  const context = useContext(DigitalMarketingContext);
  if (!context) {
    throw new Error("useDigitalMarketingContext must be used within a DigitalMarketingProvider");
  }
  return context;
};
