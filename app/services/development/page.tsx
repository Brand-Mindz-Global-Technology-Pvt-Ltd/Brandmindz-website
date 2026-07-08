"use client";

import Various from "@/components/home/Various";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Developmentabout } from "@/components/service/Development/Developmentabout";
import { DevelopmentService } from "@/components/service/Development/Developmentbanner";
import { DevelopmentFramework } from "@/components/service/Development/DevelopmentFramework";
import { DevelopmentPackages } from '@/components/service/Development/DevelopmentPackages';
import { DevelopmentCaseStudies } from '@/components/service/Development/DevelopmentCaseStudies';
import { WhyChooseDevelopment } from "@/components/service/Development/WhyChooseDevelopment";
import Faq from "@/components/home/Faq";
import { DevelopmentProvider, useDevelopmentContext } from "@/components/service/Development/DevelopmentContext";

function DevelopmentPageContent() {
    const { activeDevelopmentTab } = useDevelopmentContext();

    const tabKeys = ["staticDevelopment", "ecomDevelopment", "mobileAppDevelopment", "webApplicationsDevelopment"];
    const activeTabKey = tabKeys[activeDevelopmentTab] || "staticDevelopment";
    

    return (
        <main>
            <DevelopmentService activeDevelopmentTab={activeDevelopmentTab} />
            <Developmentabout />
            <DevelopmentFramework />
            <DevelopmentPackages />
            <DevelopmentCaseStudies />
            <WhyChooseDevelopment />
            <Various />  
            <Faq activeTabKey={activeTabKey}  />
        </main>
    );
}

export default function ServiceDevelopment() {
    return (
        <>
            <Header />
            <DevelopmentProvider>
                <DevelopmentPageContent />
            </DevelopmentProvider>
            <Footer />
        </>
    )
}

