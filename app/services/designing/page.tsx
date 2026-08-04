"use client";

import React, { useEffect, useState } from "react";
import Various from "@/components/home/Various";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Designingabout } from "@/components/service/Designing/Designingabout";
import { DesigningService } from "@/components/service/Designing/Designingbanner";
import { DesigningFramework } from "@/components/service/Designing/DesigningFramework";
import { DesigningPackages } from '@/components/service/Designing/DesigningPackages';
import { DesigningCaseStudies } from '@/components/service/Designing/DesigningCaseStudies';
import { WhyChooseDesigning } from "@/components/service/Designing/WhyChooseDesigning";
import { designingData } from "@/data/designingData";
import Faq from "@/components/home/Faq";

export default function ServiceDesigning() {
    const [activeTabKey, setActiveTabKey] = useState<keyof typeof designingData>("uiuxDesign");

    useEffect(() => {
        const requestedService = new URLSearchParams(window.location.search).get("service");
        if (requestedService && requestedService in designingData) {
            setActiveTabKey(requestedService as keyof typeof designingData);
        }
    }, []);

    const data = designingData[activeTabKey];
    const faq = "faq" in data ? data.faq : undefined;

    return (
        <>
            <Header />
            <main>
                <DesigningService activeTabKey={activeTabKey} setActiveTabKey={setActiveTabKey} />
                <Designingabout data={data.about} />
                <DesigningFramework data={data.framework} />
                <DesigningPackages data={data.packages} />
                <DesigningCaseStudies data={data.caseStudies} />
                <WhyChooseDesigning data={data.whyChoose} />
                <Various />  
                <Faq items={faq?.items} subtitle={faq?.subtitle} />
            </main>
            <Footer />
        </>
    )
}

