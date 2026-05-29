"use client";

import React, { createContext, useContext, useState } from "react";

type DevelopmentContextType = {
  activeDevelopmentTab: number;
  setActiveDevelopmentTab: (index: number) => void;
};

const DevelopmentContext = createContext<DevelopmentContextType | undefined>(undefined);

export const DevelopmentProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeDevelopmentTab, setActiveDevelopmentTab] = useState(0);

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
