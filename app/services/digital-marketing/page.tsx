"use client";

import Various from "@/components/home/Various";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { DigitalMarketingabout } from "@/components/service/DigitalMarketing/DigitalMarketingabout";
import { DigitalMarketingService } from "@/components/service/DigitalMarketing/DigitalMarketingbanner";
import { DigitalMarketingFramework } from "@/components/service/DigitalMarketing/DigitalMarketingFramework";
import { DigitalMarketingPackages } from '@/components/service/DigitalMarketing/DigitalMarketingPackages';
import { DigitalMarketingCaseStudies } from '@/components/service/DigitalMarketing/DigitalMarketingCaseStudies';
import { WhyChooseDigitalMarketing } from "@/components/service/DigitalMarketing/WhyChooseDigitalMarketing";
import Faq from "@/components/home/Faq";
import { DigitalMarketingProvider, useDigitalMarketingContext } from "@/components/service/DigitalMarketing/DigitalMarketingContext";

function DigitalMarketingPageContent() {
  const { activeDigitalMarketingTab } = useDigitalMarketingContext();

  const tabKeys = [
    "seo",
    "metaAd",
    "googleAd",
    "linkedinMarketing",
    "whatsappMarketing",
    "youtubeMarketing",
  ];

  const activeTabKey = tabKeys[activeDigitalMarketingTab] || "seo";

  return (
    <main>
      <DigitalMarketingService />
      <DigitalMarketingabout />
      <DigitalMarketingFramework />
      <DigitalMarketingPackages />
      <DigitalMarketingCaseStudies />
      <WhyChooseDigitalMarketing />
      <Various />
      <Faq activeTabKey={activeTabKey} />
    </main>
  );
}

export default function ServiceDigitalMarketing() {
  return (
    <>
      <Header />
      <DigitalMarketingProvider>
        <DigitalMarketingPageContent />
      </DigitalMarketingProvider>
      <Footer />
    </>
  )
}
