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

import { Sustainability } from "@/components/sustainability/sustainability";
import Faq from "@/components/home/Faq";



export default function ServiceBranding() {
    return (
        <>
            <Header />
            <main>
                <BrandingService />
                <Bradingabount />
                <FrameworkSection />
                <BrandingPackages />
                <BrandingCaseStudies />
                <WhyChooseBranding />
                {/* <VideoSection /> */}
                <Various />  
                  <Faq />
            </main>
            <Footer />
        </>

    )
}