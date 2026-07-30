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
