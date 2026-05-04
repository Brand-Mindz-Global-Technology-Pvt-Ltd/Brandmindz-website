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

export default function ServiceEcommerce() {
    return (
        <>
            <Header />
            <main>
                <EcommerceService />
                <Ecommerceabout />
                <EcommerceFramework />
                <EcommercePackages />
                <EcommerceCaseStudies />
                <WhyChooseEcommerce />
                <Various />  
                <Faq />
            </main>
            <Footer />
        </>
    )
}
