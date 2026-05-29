
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo"
import Header from "@/components/layout/header"
import { Banner } from "@/components/home/Banner"
import Aboutus from "@/components/home/Aboutus"
import Ouroffering from "@/components/home/Ouroffering"
import WhyChooseUs from "@/components/home/Whychoose"
import OurBlog from "@/components/home/OurBlog"
import Faq from "@/components/home/Faq"
import Various from "@/components/home/Various"
import Footer from "@/components/layout/footer"
import ProvenGrowthPage from "@/components/home/Salesstatistics"

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"  
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />

      <Header />
      <main>
        <Banner />
        <Aboutus />
        <Ouroffering />
        <WhyChooseUs />
        <ProvenGrowthPage/>
        <OurBlog />
        <Various/>
        <Faq />
     
      </main>
      <Footer />
    </>
  )
}
