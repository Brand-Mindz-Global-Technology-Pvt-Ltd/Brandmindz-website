"use client";

import React from "react";
import { FadeIn } from "@/components/animations/fade-in";
import Various from "@/components/home/Various";
import { tirunelveliLandingData } from "@/lib/tirunelveli-landing-data";
import "../../../style/landing/tirunelveli.css";

export const TirunelveliTrustedClients = () => {
  const { trusted } = tirunelveliLandingData;

  return (
    <section className="bm-tvl-trusted-section">
      <FadeIn direction="up" delay={0.1}>
        <div className="bm-tvl-trusted-header">
          <h3 className="bm-tvl-trusted-title">{trusted.title}</h3>
        </div>
      </FadeIn>
      <Various />
    </section>
  );
};
