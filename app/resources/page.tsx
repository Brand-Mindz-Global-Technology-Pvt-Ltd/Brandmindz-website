import React from "react";
import type { Metadata } from "next";
import "../../style/resources/resources.css";

// Page-specific premium SEO metadata
export const metadata: Metadata = {
  title: {
    absolute: "Resources & Insights | Branding, SEO & Marketing | Brand Mindz Global",
  },
  description: "Explore expert blogs, branding tips, SEO guides, digital marketing insights, and web development resources to help your business grow faster.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.brandmindz.com/resources",
  },
  keywords: ["marketing glossary", "branding terms", "web development definitions", "SEO dictionary", "free business guides", "BrandMindz resources"],
  openGraph: {
    type: "website",
    url: "https://brandmindz.com/resources",
    title: "Marketing Resources & Glossary | Brand Mindz Global",
    description: "Explore marketing, branding and growth definitions, guides and insights from the team at Brand Mindz Global — built to help you make informed decisions.",
    images: [
      {
        url: "/logo.png",
        alt: "Brand Mindz Global resources and marketing glossary",
      },
    ],
  }
};

import { ResourcesClient } from "@/components/resources/ResourcesClient";

export default function ResourcesPage() {
  return <ResourcesClient />;
}
