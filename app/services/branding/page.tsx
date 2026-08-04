"use client";

import React, { useEffect, useState } from "react";
import { VideoSection } from "@/components/aboutus/Videosection";
import Various from "@/components/home/Various";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Bradingabount } from "@/components/service/Branding/Bradingabount";
import { BrandingService } from "@/components/service/Branding/Brandingbanner";
import { FrameworkSection } from "@/components/service/Branding/FrameworkSection";
import { BrandingPackages } from '@/components/service/Branding/BrandingPackages';
import { BrandingCaseStudies } from '@/components/service/Branding/BrandingCaseStudies';
import { WhyChooseBranding } from "@/components/service/Branding/WhyChoose";
import { brandingData } from "@/data/brandingData";

import { Sustainability } from "@/components/sustainability/sustainability";
import Faq from "@/components/home/Faq";

export default function ServiceBranding() {
    const [activeTabKey, setActiveTabKey] = useState<keyof typeof brandingData>("personalBranding");

    useEffect(() => {
        const requestedService = new URLSearchParams(window.location.search).get("service");
        if (requestedService && requestedService in brandingData) {
            setActiveTabKey(requestedService as keyof typeof brandingData);
        }
    }, []);

    const data = brandingData[activeTabKey];
    const faq = "faq" in data ? data.faq : undefined;

    return (
        <>
            <Header />
            <main>
                <BrandingService activeTabKey={activeTabKey} setActiveTabKey={setActiveTabKey} />
                <Bradingabount data={data.about} />
                <FrameworkSection data={data.framework} />
                <BrandingPackages data={data.packages} />
                <BrandingCaseStudies data={data.caseStudies} />
                <WhyChooseBranding data={data.whyChoose} />
                {/* <VideoSection /> */}
                <Various />
                <Faq items={faq?.items} subtitle={faq?.subtitle} />
            </main>
            <Footer />
        </>
    )
}
