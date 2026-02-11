import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import  {Aboutus} from '@/components/aboutus/AboutUs'
import {AboutContentSection} from '@/components/aboutus/Aboutsection'
 import {AboutFounderContentSection} from '@/components/aboutus/Aboutfoundersection'
 import {FeaturedSection} from '@/components/aboutus/Featuredsection'
 import {GlobalPresenceSection} from '@/components/aboutus/Countrysection'
 import {RecognisedSection} from '@/components/aboutus/Recongnised'
 import {TestimonialsSection} from '@/components/aboutus/Testimonials'
 import {VideoSection} from '@/components/aboutus/Videosection'

export default function Aboutpage() {
    return (
        <>
            <Header />
            <main>
               <Aboutus/>
               <AboutContentSection/>
               <div className="about-founder-section">
    <AboutFounderContentSection/>
               </div>
                       <div className="">
       <FeaturedSection/>
               </div>
                   <div className="">
    <GlobalPresenceSection/>
               </div>
                   <VideoSection/>
               <RecognisedSection/>
         <TestimonialsSection/>
     
           
            </main>
            <Footer />
        </>

    )
}