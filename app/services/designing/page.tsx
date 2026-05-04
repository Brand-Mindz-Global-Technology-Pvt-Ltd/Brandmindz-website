import Various from "@/components/home/Various";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Designingabout } from "@/components/service/Designing/Designingabout";
import { DesigningService } from "@/components/service/Designing/Designingbanner";
import { DesigningFramework } from "@/components/service/Designing/DesigningFramework";
import { DesigningPackages } from '@/components/service/Designing/DesigningPackages';
import { DesigningCaseStudies } from '@/components/service/Designing/DesigningCaseStudies';
import { WhyChooseDesigning } from "@/components/service/Designing/WhyChooseDesigning";
import Faq from "@/components/home/Faq";

export default function ServiceDesigning() {
    return (
        <>
            <Header />
            <main>
                <DesigningService />
                <Designingabout />
                <DesigningFramework />
                <DesigningPackages />
                <DesigningCaseStudies />
                <WhyChooseDesigning />
                <Various />  
                <Faq />
            </main>
            <Footer />
        </>
    )
}
