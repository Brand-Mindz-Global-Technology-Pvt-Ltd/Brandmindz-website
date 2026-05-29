import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Aboutus } from '@/components/aboutus/AboutUs'
import { AboutContentSection } from '@/components/aboutus/Aboutsection'
import { AboutFounderContentSection } from '@/components/aboutus/Aboutfoundersection'
import { FeaturedSection } from '@/components/aboutus/Featuredsection'
import { GlobalPresenceSection } from '@/components/aboutus/Countrysection'
import { RecognisedSection } from '@/components/aboutus/Recongnised'
import { TestimonialsSection } from '@/components/aboutus/Testimonials'
import { VideoSection } from '@/components/aboutus/Videosection'
import '../../style/aboutus/aboutus.css'

export default function Aboutpage() {
    return (
        <>
            <Header />
            <main className="about-main-container">
                <Aboutus />

                {/* Card 1: About Content */}
                <div className="sticky-wrapper">
                    <AboutContentSection />
                </div>

                {/* Card 2: Founder Section - Slides over Card 1 */}
                {/* <div className="sticky-wrapper about-founder-section">
                    <AboutFounderContentSection />
                </div> */}

                {/* Rest of the Sections - Slides over everything else */}
                <div className="content-overlay-wrapper">
                    <AboutFounderContentSection />

                    <FeaturedSection />
                    <GlobalPresenceSection />
                    <VideoSection />
                    <RecognisedSection />
                    <TestimonialsSection />
                </div>
            </main>
            <Footer />
        </>
    )
}