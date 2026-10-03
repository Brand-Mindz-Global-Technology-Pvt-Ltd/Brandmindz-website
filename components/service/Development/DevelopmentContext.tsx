"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type DevelopmentContextType = {
  activeDevelopmentTab: number;
  setActiveDevelopmentTab: (index: number) => void;
};

const DevelopmentContext = createContext<DevelopmentContextType | undefined>(undefined);

export const DevelopmentProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeDevelopmentTab, setActiveDevelopmentTab] = useState(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    const requestedService = searchParams.get("service");
    const serviceIndexes: Record<string, number> = {
      staticDevelopment: 0,
      ecomDevelopment: 1,
      mobileAppDevelopment: 2,
      webApplicationsDevelopment: 3,
    };
    setActiveDevelopmentTab(serviceIndexes[requestedService ?? ""] ?? 0);
  }, [searchParams]);

  return (
    <DevelopmentContext.Provider value={{ activeDevelopmentTab, setActiveDevelopmentTab }}>
      {children}
    </DevelopmentContext.Provider>
  );
};

export const useDevelopmentContext = () => {
  const context = useContext(DevelopmentContext);
  if (!context) {
    throw new Error("useDevelopmentContext must be used within a DevelopmentProvider");
  }
  return context;
};
