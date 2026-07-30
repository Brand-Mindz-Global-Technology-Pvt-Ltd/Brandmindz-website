import React from "react";
import type { Metadata } from "next";
import "../../style/resources/resources.css";

// Page-specific premium SEO metadata
export const metadata: Metadata = {
  title: {
    absolute: "Resources & Insights | Branding, SEO & Marketing | Brand Mindz Global",
  },
  description: "Explore expert blogs, branding tips, SEO guides, digital marketing insights, and web development resources to help your business grow faster.",
  keywords: ["marketing glossary", "branding terms", "web development definitions", "SEO dictionary", "free business guides", "BrandMindz resources"],
  openGraph: {
    title: "Resources & Knowledge Hub | BrandMindz",
    description: "Understand clearly, define simply. Access our interactive marketing and development glossary and downloadable business guides.",
    type: "website",
  }
};

import { ResourcesClient } from "@/components/resources/ResourcesClient";

export default function ResourcesPage() {
  return <ResourcesClient />;
}
