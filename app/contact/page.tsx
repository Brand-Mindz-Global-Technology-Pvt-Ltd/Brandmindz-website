import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ContactUs } from '@/components/contactus/ContactUs'
import { GetStartedSection } from '@/components/contactus/Contactform'
import { TestimonialsSection } from '@/components/aboutus/Testimonials'
import { MapSection } from '@/components/contactus/Mapsection'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Contact Brand Mindz Global | Let's Build Your Business Together",
    },
    description: "Have a project in mind? Reach out to Brand Mindz Global for expert branding, web development, digital marketing, and business growth solutions.",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://www.brandmindz.com/contact",
    },
    openGraph: {
        type: "website",
        url: "https://brandmindz.com/contact",
        title: "Contact Brand Mindz Global | Book a Free Growth Call",
        description: "Reach our Chennai or Tirunelveli office, or book a free call with a Growth Specialist. We reply within 24-48 hours to discuss your goals and next steps.",
        images: [
            {
                url: "/logo.png",
                alt: "Contact Brand Mindz Global — Chennai and Tirunelveli offices",
            },
        ],
    },
};


export default function Aboutpage() {
    return (
        <>
            <Header />
            <main>
                <ContactUs />
                <div id="contact-form" style={{ scrollMarginTop: "120px" }}>
                    <GetStartedSection />
                </div>
                <MapSection />
                <TestimonialsSection />
            </main>
            <Footer />
        </>

    )
}
