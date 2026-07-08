"use client";

import Various from "@/components/home/Various";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Ecommerceabout } from "@/components/service/Ecommerce/Ecommerceabout";
import { EcommerceService } from "@/components/service/Ecommerce/Ecommercebanner";
import { EcommerceFramework } from "@/components/service/Ecommerce/EcommerceFramework";
import { EcommercePackages } from '@/components/service/Ecommerce/EcommercePackages';
import { EcommerceCaseStudies } from '@/components/service/Ecommerce/EcommerceCaseStudies';
import { WhyChooseEcommerce } from "@/components/service/Ecommerce/WhyChooseEcommerce";
import Faq from "@/components/home/Faq";
import { ecommerceData } from "@/data/ecommerceData";
import React, { useState } from "react";

export default function ServiceEcommerce() {
    const [activeTabKey, setActiveTabKey] = useState<keyof typeof ecommerceData>("flipkartListing");
    const data = ecommerceData[activeTabKey];

    return (
        <>
            <Header />
            <main>
                <EcommerceService activeTabKey={activeTabKey} setActiveTabKey={setActiveTabKey} />
                <Ecommerceabout data={data.about} />
                <EcommerceFramework data={data.framework} />
                <EcommercePackages data={data.packages} />
                <EcommerceCaseStudies data={data.caseStudies} />
                <WhyChooseEcommerce data={data.whyChoose} />
                <Various />  
                <Faq activeTabKey={activeTabKey} />
            </main>
            <Footer />
        </>
    )
}
