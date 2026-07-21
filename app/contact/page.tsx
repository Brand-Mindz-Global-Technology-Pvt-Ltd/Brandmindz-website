import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ContactUs } from '@/components/contactus/ContactUs'
import { GetStartedSection } from '@/components/contactus/Contactform'
import { TestimonialsSection } from '@/components/aboutus/Testimonials'
import { MapSection } from '@/components/contactus/Mapsection'



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