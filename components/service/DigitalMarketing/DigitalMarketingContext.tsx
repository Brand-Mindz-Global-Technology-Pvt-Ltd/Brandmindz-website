"use client";

import React, { createContext, useContext, useState } from "react";

type DigitalMarketingContextType = {
  activeDigitalMarketingTab: number;
  setActiveDigitalMarketingTab: (index: number) => void;
};

const DigitalMarketingContext = createContext<DigitalMarketingContextType | undefined>(undefined);

export const DigitalMarketingProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeDigitalMarketingTab, setActiveDigitalMarketingTab] = useState(0);

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
