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
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "About Brand Mindz Global | Creative Branding & Digital Growth Experts",
    },
    description: "Learn about Brand Mindz Global, a trusted branding, digital marketing, and technology agency helping businesses grow with innovative strategies and results.",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://www.brandmindz.com/about",
    },
    openGraph: {
        type: "website",
        url: "https://brandmindz.com/about",
        title: "About Brand Mindz Global | A Results-Driven Digital Agency",
        description: "Meet the practitioners behind Brand Mindz Global — our founder, mission, core values, and the 360° Growth Framework we use to help startups and enterprises scale with clarity and accountability.",
        images: [
            {
                url: "/logo.png",
                alt: "About Brand Mindz Global — founder, mission and growth framework",
            },
        ],
    },
};

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
