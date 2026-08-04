import Various from "@/components/home/Various";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { DigitalMarketingabout } from "@/components/service/DigitalMarketing/DigitalMarketingabout";
import { DigitalMarketingService } from "@/components/service/DigitalMarketing/DigitalMarketingbanner";
import { DigitalMarketingFramework } from "@/components/service/DigitalMarketing/DigitalMarketingFramework";
import { DigitalMarketingPackages } from '@/components/service/DigitalMarketing/DigitalMarketingPackages';
import { DigitalMarketingCaseStudies } from '@/components/service/DigitalMarketing/DigitalMarketingCaseStudies';
import { WhyChooseDigitalMarketing } from "@/components/service/DigitalMarketing/WhyChooseDigitalMarketing";
import { DigitalMarketingProvider } from "@/components/service/DigitalMarketing/DigitalMarketingContext";
import { DigitalMarketingFaq } from "@/components/service/DigitalMarketing/DigitalMarketingFaq";

export default function ServiceDigitalMarketing() {
    return (
        <>
            <Header />
            <DigitalMarketingProvider>
                <main>
                    <DigitalMarketingService />
                    <DigitalMarketingabout />
                    <DigitalMarketingFramework />
                    <DigitalMarketingPackages />
                    <DigitalMarketingCaseStudies />
                    <WhyChooseDigitalMarketing />
                    <Various />  
                    <DigitalMarketingFaq />
                </main>
            </DigitalMarketingProvider>
            <Footer />
        </>
    )
}

