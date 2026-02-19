import { VideoSection } from "@/components/aboutus/Videosection";
import Various from "@/components/home/Various";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Bradingabount } from "@/components/service/Branding/Bradingabount";
import { BrandingService } from "@/components/service/Branding/Brandingbanner";

import { Sustainability } from "@/components/sustainability/sustainability";



export default function ServiceBranding() {
    return (
        <>
            <Header />
            <main>
                <BrandingService />
                <Bradingabount />
                <VideoSection />
                <Various />
            </main>
            <Footer />
        </>

    )
}